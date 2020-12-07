import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Socio } from '../../../models/Socio';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html'
})
export class SociosComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  socios: Socio[] = [
    new Socio('6334889524', 'Dela', 'Load', 'Apellido2', 'F', '28/7/1994', '8586408671', '7695096394', 'dload0@ning.com', 'individual', 'estudiante', '17/3/2018', 'inactivo'),
    new Socio('4805936746', 'Darnall', 'Jenks', 'Apellido2', 'M', '4/4/1978', '9481274946', '7695096394', 'djenks1@google.ca', 'individual', 'quincenal', '17/3/2018', 'activo'),
    new Socio('7429162797', 'Tony', 'Windridge', 'Apellido2', 'M', '29/4/1963', '9726952325', '7695096394', 'twindridge2@hibu.com', 'individual', 'cortesia', '17/3/2018', 'inactivo'),
    new Socio('6922306961	', 'Neala', 'Galley', 'Apellido2', 'F', '8/8/1968', '7695096394', '7695096394', 'ngalley3@dedecms.com', 'individual', 'semanal', '17/3/2018', 'activo'),
    new Socio('6898461729', 'Rosabelle', 'Hanlin', 'Apellido2', 'F', '7/6/1984', '4604481027', '7695096394', 'rhanlin4@latimes.com', 'individual', 'semanal', '17/3/2018', 'inactivo'),
  ];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true
    };

    this.dtTrigger.next();
  }

  eliminarSocio(cedulaSocio): void {

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
