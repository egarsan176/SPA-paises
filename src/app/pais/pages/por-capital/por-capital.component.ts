import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  capital: string = "";
  isError: boolean = false;
  paises: Pais[] = [];

  constructor(private PaisService: PaisService) { }

  ngOnInit(): void {
  }

  buscarCapital(capital: string){
    this.capital = capital;
    this.isError = false;

    this.PaisService.buscarCapital(capital)
    .subscribe({
      next: resp => {
        this.paises = resp;
        console.log(this.paises);
      },
      error: e =>{
        this.isError = true;
        this.paises = [];
      }
    })
    
  }
  
}
