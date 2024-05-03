import { AngularLibComponent, AstroComponentsModule, RuxContainer } from '@astrouxds/angular';
import { Component, OnInit } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions, GridReadyEvent, RowClickedEvent, SuppressKeyboardEventParams } from 'ag-grid-community';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { set } from '../app/counter.actions';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
import { random } from 'lodash';

const ROW_HEIGHT = 40;

interface MyType {
  date: string;
  time: string;
  timeZone: string;
  launchTimeDifference: string;
}

@Component({
  selector: 'app-launch-list',
  standalone: true,
  imports: [
    AstroComponentsModule
    , HttpClientModule
    , AgGridAngular
    , CommonModule
  ],
  templateUrl: './launch-list.component.html',
  styleUrl: './launch-list.component.scss'
})
export class LaunchListComponent implements OnInit {
  severitySelection: any;
  categorySelection: any;
  sortDirection: any;

  themeClass: string ="ag-theme-quartz-dark";
  usePagination = false; // TODO: only partially implemented: need paging buttons
  
  rowData$ = new BehaviorSubject<MyType []>([]);

  colDefs: ColDef[] = [
    { 
      headerName: 'Name',
      field: "name",
      minWidth: 250,
      width: 250
    },
    { 
      headerName: 'Date',
      field: "date",
      minWidth: 120,
      width: 120
    },
    {
      headerName: 'Time',
      field: "time",
      minWidth: 100,
      width: 100,
      wrapHeaderText: true
    },
    {
      headerName: 'Time Zone',
      field: "timeZone",
      minWidth: 100,
      width: 100,
      wrapHeaderText: true
    },
    {
      headerName: 'Launch Time Diff'
      , field: "launchTimeDifference"
      , minWidth: 150
      , width: 150
    }
    , {
      headerName: 'Booster',
      field: "booster",
      minWidth: 150,
      width: 150
    },
    {
      headerName: 'Launch Site',
      field: "site",
      minWidth: 200,
      width: 210
    },
    {
      headerName: 'Mission Description',
      field: "description",
      width: 200,
      // maxWidth: 400,
      flex: 1
    }
  ];

  gridOptions: GridOptions;

  constructor(
    private http: HttpClient
    , private store: Store<{ count: number }>
    , private route: ActivatedRoute
    , private router: Router
  ) {
    this.gridOptions = {
      defaultColDef: {
      },
      rowHeight: ROW_HEIGHT,
      headerHeight: ROW_HEIGHT,
      animateRows: false,
    }

    if (this.usePagination) {
      this.gridOptions.pagination = true;
      this.gridOptions.paginationAutoPageSize = true;
      this.gridOptions.paginationPageSize = 10; // TODO: This should be set to the number of rows that is visible.
    }

    setInterval(() => {
      const now = new Date();
      // console.log('##### time = ', now.toUTCString(), ' ', now.valueOf());

      const rows: Object[] = []
      
      this.rowData$?.getValue().forEach((row: MyType) => {
        console.log('- ##### row = ', row);
        const dateStr = row.date + ' ' + row.time + ' ' + row.timeZone;
        const date: Date = new Date(dateStr);
        console.log('##### dateStr = ', dateStr);
        console.log('##### date    = ', date.toUTCString());
        const diff = date.valueOf() - now.valueOf();

        if (diff < 0) {
          const diffStr = toDHMS(-diff);
          rows.push({...row, launchTimeDifference: 'T + ' + diffStr});
        } else {
          const diffStr = toDHMS(diff);
          console.log('##### diffStr = ', diffStr);
          rows.push({...row, launchTimeDifference: 'T - '+ diffStr});
        }
        // console.log('+ ##### row = ', row);
      });
      // console.log('##### rows = ', rows);

      this.rowData$.next(rows as MyType[]);
    }, 1000);
  }

  ngOnInit() {
    this.http
    // .get<any[]>("https://www.ag-grid.com/example-assets/olympic-winners.json")
    .get<any[]>("http://localhost:3000/ScheduledLaunches")
      .subscribe((data) => {
        this.rowData$.next(data);
        this.store.dispatch(set({count: data.length}));
      });
  }

  suppressEnter(params: SuppressKeyboardEventParams) {
    var KEY_ENTER = "Enter";
  
    var event = params.event;
    var key = event.key;
    var suppress = key === KEY_ENTER;
  
    return suppress;
  }  

  suppressNavigation(params: SuppressKeyboardEventParams<any, any>): boolean {
    return true;
  }
  
  onGridReady(params: GridReadyEvent<any>) {
    // params.api.sizeColumnsToFit();
  }  

  onRowClicked(event: RowClickedEvent) {
    console.error('##### >onRowClicked:event = ', event);
    this.router.navigate(['/' + LaunchDetailsComponent.selectorName], {state: event.data});
  }
}

function convert(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * converts the number of milliseconds to days:hours:minutes:seconds.
 * If the number of days is 0, its value is not included.
 * @param diff UoM: ms
 */
function toDHMS(diff: number): string {
  let remainder: number = diff;
  const days: number = Math.trunc(remainder / 86400000);
  remainder -= days * 86400000;
  const hours: number = Math.trunc(remainder / 3600000);
  remainder -= hours * 3600000;
  const minutes: number = Math.trunc(remainder / 60000);
  remainder -= minutes * 60000;
  const seconds: number = Math.trunc(remainder / 1000);
  remainder -= minutes * 1000;
  return ((days == 0) ? '' : convert(days) + ':') + convert(hours) + ':' + convert(minutes) + ':' + convert(seconds);
}

