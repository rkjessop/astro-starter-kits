import { AngularLibComponent, AstroComponentsModule, RuxContainer } from '@astrouxds/angular';
import { Component, OnInit } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions, GridReadyEvent, SuppressKeyboardEventParams } from 'ag-grid-community';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { set } from '../app/counter.actions';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-launch-list',
  standalone: true,
  imports: [AstroComponentsModule, HttpClientModule, AgGridAngular, CommonModule],
  templateUrl: './launch-list.component.html',
  styleUrl: './launch-list.component.scss'
})
export class LaunchListComponent implements OnInit {
  severitySelection: any;
  categorySelection: any;
  sortDirection: any;

  rowData = new BehaviorSubject<any []>([]);
  // rowData$: this.rowData.asObservable();

  defaultColDef: ColDef = {
    // editable: false,
    // enableRowGroup: false,
    // enablePivot: true,
    // enableValue: true,
    // filter: false,
    // flex: 1,
    // minWidth: 100,
    // maxWidth: 250,
    // padding: var(--spacing-0, 0rem) var(--spacing-2, 0.5rem);    
  };

  colDefs: ColDef[] = [
    { 
      headerName: 'Date',
      field: "date",
      width: 100
    },
    {
      headerName: 'Launch Window',
      field: "age",
      width: 170
      , wrapHeaderText: true
    },
    { 
      headerName: 'Launch Site',
      field: "athlete",
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
  ) {
    this.gridOptions = {
      domLayout: 'autoHeight',
      defaultColDef: {
        sortable: false,
        resizable: false,
        editable: false,
        suppressMenu: true,
        suppressKeyboardEvent: (params) => { 
          return this.suppressEnter(params) || this.suppressNavigation(params);
        },
        filter: false,
        floatingFilter: false,
        filterParams: { buttons: ['clear'] }
      },
      rowHeight: 50,
      paginationPageSize: 10,
      headerHeight: 40,
      animateRows: false,
      pagination: false,
      paginationAutoPageSize: false,
    }
  }

  ngOnInit() {
    this.http
      .get<
        any[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => {
        this.rowData.next(data);
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
    params.api.sizeColumnsToFit();
    }  

  handleClick(e: any) {
    console.error('##### >handleClick');
  }
}
