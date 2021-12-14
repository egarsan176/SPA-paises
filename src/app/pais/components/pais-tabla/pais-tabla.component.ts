import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  constructor() { }   //al crear el componente se hace todo lo que tenga en el constructor

  ngOnInit(): void {  //cuando ya está creado se inicializa, se ejecuta solo 1 vez al iniciarse
  }

  @Input() countries: Pais[] = [];

}
