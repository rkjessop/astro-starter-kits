import { AngularLibComponent, AstroComponentsModule, RuxContainer } from '@astrouxds/angular';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-launch-list',
  standalone: true,
  imports: [AstroComponentsModule, HttpClientModule, AgGridAngular],
  templateUrl: './launch-list.component.html',
  styleUrl: './launch-list.component.scss'
})
export class LaunchListComponent {
  severitySelection: any;
  categorySelection: any;
  sortDirection: any;

  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950},//, electric: true },
    // { make: "Ford", model: "F-Series", price: 33850},//, electric: false },
    // { make: "Toyota", model: "Corolla", price: 29600}//, electric: false },
  ];

  defaultColDef: ColDef = {
    editable: false,
    enableRowGroup: false,
    // enablePivot: true,
    // enableValue: true,
    filter: false,
    flex: 1,
    minWidth: 100,
    maxWidth: 150,
  };
  colDefs: ColDef[] = [
    { 
      headerName: 'xxx',
      field: "athlete",
      width: 100
    },
    {
      headerName: 'yyy',
      field: "age",
      width: 100 
    },
    // { 
    //   headerName: 'zzz',
    //   field: "price",
    //   width: 100 
    // },
    // {
    //   field: "electric",
    //   width: 100 
    // }
  ];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<any>) {
    console.log('#####################################');
    this.http
      .get<
        any[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => {
        console.error('############ data = ', data);
        this.rowData = data
      });
  }  
  handleClick(e: any) {
    console.error('##### >handleClick');
  }
}
