import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  //guardo la variable del ngModel
  paisABuscar: string = "";
  paises: Pais[] = [];

  constructor(private PaisService: PaisService) { }

  ngOnInit(): void {
  }

  //propiedad computada
  //devuelvo la lista de paises del servicio para poder recorrela en el for del componente y mostrar sus propiedades
  // get paises(){
  //   return this.PaisService.paises;
  // }

  conseguirPais(paisABuscar: string){
    this.paisABuscar = paisABuscar;

    this.PaisService.buscarPais(this.paisABuscar)
    .subscribe(resp =>{
      this.paises = resp;
      console.log(this.paises);
    })
  }

}


