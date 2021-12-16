import { Input } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html',
  styles: [
  ]
})
export class InputPaisComponent implements OnInit {
  paisABuscar: string = "";

  //el @Input placeholder me permite que el placeholder del campo input se modifique según dónde llame al input
  //si lo llamo en por-capital se muestra el placeholder de capital y si lo llamo en por-pais el de por-pais
  @Input() placeholder: string = '';

  //el @OutPut me permite enviar el evento a otro lugar
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  conseguirPais(){
    this.onEnter.emit(this.paisABuscar);
  }

}
