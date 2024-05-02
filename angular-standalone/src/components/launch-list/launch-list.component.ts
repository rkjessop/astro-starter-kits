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

const ROW_HEIGHT = 40;

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
  
  rowData$ = new BehaviorSubject<any []>([]);

  colDefs: ColDef[] = [
    { 
      headerName: 'Date',
      field: "date",
      minWidth: 120,
      width: 120
    },
    {
      headerName: 'Launch Window',
      field: "age",
      minWidth: 170,
      width: 170,
      wrapHeaderText: true
    },
    { 
      headerName: 'Launch Site',
      field: "athlete",
      minWidth: 190,
      width: 210
    },
    {
      headerName: 'Mission Description',
      field: "sport",
      width: 100,
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
  }

  ngOnInit() {
    this.http
      .get<any[]>("https://www.ag-grid.com/example-assets/olympic-winners.json")
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
