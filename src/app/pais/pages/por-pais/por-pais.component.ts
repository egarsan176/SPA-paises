import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private PaisService: PaisService) { }

  ngOnInit(): void {
  }

  //devuelvo la lista de paises del servicio para poder recorrela en el for del componente y mostrar sus propiedades
  get paises(){
    return this.PaisService.paises;
  }


}
