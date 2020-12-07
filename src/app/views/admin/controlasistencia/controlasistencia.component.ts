import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlasistencia',
  templateUrl: './controlasistencia.component.html'
})
export class ControlasistenciaComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      responsive: true,
      info: false,
      searching: false,
      paging: false
    };
  }

}
