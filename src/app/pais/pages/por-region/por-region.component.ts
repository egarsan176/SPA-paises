import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  region: string = "";
  isError: boolean = false;
  regiones: Pais[]= [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarRegion(region: string){
    this.region = region;
    this.isError = false;

    this.paisService.buscarRegion(region)
    .subscribe({
      next: resp => {
        this.regiones = resp;
        console.log(this.regiones);
      },
      error: e =>{
        this.isError = true;
        this.regiones = [];
      }
    })
    
  }

}
