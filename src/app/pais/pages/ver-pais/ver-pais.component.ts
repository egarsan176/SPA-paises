import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  //guardo la variable del ngModel
  paisABuscar: string = "";


  constructor(private PaisService: PaisService) { 
  }

  ngOnInit(): void {
  }

  //se invoca a este método al hacer enter
  //llama al método del servicio que recibe un string y realiza la peticion
  conseguirPais(){
    this.PaisService.buscarPais(this.paisABuscar);
  }

}
