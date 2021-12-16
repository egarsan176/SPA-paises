import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Pais; //indicamos que la propiedad país por defecto es null

//para recibir los valores de los parámetros en el componente al que nos dirige la ruta
//tenemos que inyectar en el constructor el objeto del sistema de routing "ActivatedRoute"
//Para usarlo tenemos que importarlo primero en el componente donde vamos a recibir parámetros
  constructor(private PaisService: PaisService, private rutaActiva: ActivatedRoute) {}

  //Una vez inyectada la ruta activa mediante ActivatedRoute, podemos acceder a los parámetros en el método ngOnInit().
  ngOnInit(): void {
    //this.rutaActiva.snapshot.params --> para acceder a un snapshot de los parámetros en un instante dado
    //El snapshot te da los parámetros del componente en el instante que los consultes.
    //El objeto params contendrá todas las propiedades según los parámetros recibidos.
    this.PaisService.verPais(this.rutaActiva.snapshot.params['id'])
    .subscribe(resp=>{
      console.log(resp)     
//       la resp es un array de un único objeto con la info 
//       Array [ {…} ]
// ​     0: Object { cca2: "ES", ccn3: "724", cca3: "ESP", … }
// ​     length: 1
      this.pais = resp[0];
    })
  }

}
