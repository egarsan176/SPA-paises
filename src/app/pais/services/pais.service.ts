import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import {  Pais } from "../interfaces/pais.interface";

@Injectable({
    providedIn: 'root'
  })
  
export class PaisService {

    //Url de restcountries
    private urlBase: string = 'https://restcountries.com/v3.1/name/';

    paises : any = null;    //lo declaro any porque va a recibir objetos que realmente no sé de qué tipo son

    constructor(private HttpClient : HttpClient) { }        //inyección de dependencias

    //recibe la palabra escrita en el input
    //realiza la peticion a la url
    buscarPais(query: string){

        //indico que el tipo de dato que va a recibir la peticion es del tipo de la interfaz Pais
        this.HttpClient.get<Pais>(this.urlBase+query)
        .subscribe((resp)=>{
            //console.log(resp) //contiene el array con los paises de la busqueda
            this.paises = resp;
        })

    }

    buscarRegion(){}

    buscarCapital(){}
}