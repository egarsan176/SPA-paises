import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import {  Pais } from "../interfaces/pais.interface";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
export class PaisService {

    //Url de restcountries
    private urlBase: string = 'https://restcountries.com/v3.1';

    paises: Pais[] = [];

    constructor(private HttpClient : HttpClient) { }        //inyección de dependencias

    //recibe la palabra escrita en el input
    //realiza la peticion a la url
    buscarPais(query: string): Observable<Pais[]>{

        let url: string = `${this.urlBase}/name/${query}` //devuelve un observable
        return this.HttpClient.get<Pais[]>(url);

        // //indico que el tipo de dato que va a recibir la peticion es del tipo de la interfaz Pais
        // this.HttpClient.get<Pais[]>(`${this.urlBase}/name/${query}`)  //Pais[] porque me devuelve un array
        // .subscribe((resp)=>{
        //     //console.log(resp) //contiene el array con los paises de la busqueda
        //     this.paises = resp;
        // })

    
    }
    
    buscarRegion(query:string): Observable<Pais[]>{
        let url: string = `${this.urlBase}/region/${query}` //devuelve un observable
        return this.HttpClient.get<Pais[]>(url)
    }

    buscarCapital(query: string): Observable<Pais[]>{
        let url: string = `${this.urlBase}/capital/${query}` //devuelve un observable
        return this.HttpClient.get<Pais[]>(url)
    }

    verPais(id: string): Observable<Pais[]>{
        let url: string = `${this.urlBase}/alpha/${id}` 
        return this.HttpClient.get<Pais[]>(url);
    }
}