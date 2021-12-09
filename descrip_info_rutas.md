Rutas

Las rutas nos permiten mostrar diferentes componentes según la ruta introducida en la url. Para poder utilizar las rutas podríamos haber seleccionado la opción de utilizar angular routing al crear el proyecto, pero como queremos aprender como funciona lo vamos a realizar paso a paso.

Para asignar un componente a una ruta necesitamos hacer uso del routing de Angular, necesitamos el archivo con las rutas.

Creamos un archivo al mismo nivel que el app.module.ts y lo llamamos app.routing.ts.

Una vez creado importamos las rutas de Angular:

import { RouterModule, Routes } from '@angular/router';

Ahora, creamos una variable que guardará la lista de todas las rutas de la web:

const appRoutes = [
{ path: '', component: UsersComponent, pathMatch: 'full'}
];

    path: La ruta a que queremos configurar. Aquí podemos utilizar:
        '' : esta es la ruta "raíz" es decir si solo ponemos el dominio.
        'ruta': Donde ruta es el nombre de la ruta, por ejemplo, www.example.com/ruta
        '**': Cuando no coincide con ninguna ruta.
        'ruta/:parametro': Se ve en el apartado rutas con partes dinámicas.
    component: Componente asociado a esa ruta. Para que funcione tienes que importar el componente en la parte de arriba, por ejemplo:

import { UsersComponent } from './users/users.component';

-pathMatch: Esto es opcional, significa que toda la ruta URL tiene que coincidir (no solo cierta parte).

El fichero completo, quedaría de la siguiente manera:

// app.routing.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
{
path: '',
component: PorPaisComponent,
pathMatch: 'full'
},
{
path: 'region',
component: PorRegionComponent
},
{
path: 'capital',
component: PorCapitalComponent
},
{
path: 'pais/:id',
component: VerPaisComponent
},
{
path: '**',
redirectTo: ''
}
];

@NgModule({
imports: [
RouterModule.forRoot( routes )
],
exports: [
RouterModule
]
})
export class AppRoutingModule {}

Ahora, tenemos que importar las rutas en el archivo app.module.ts, para ello importamos la ruta y lo añadimos, esta vez en la parte de imports:

import { routing } from './app.routing';

...

imports: [
BrowserModule,
AppRoutingModule
],

Si tienes la web ejecutándose con ng serve (para el comando y vuelve a arrancarlo para que pille la nueva ruta) y abres la url localhost:4200/region verás que se renderiza el contenido del HTML del componente de Users.
Creando rutas con partes dinámicas

Ahora, imaginemos que queremos crear una página para mostrar en detalle la información de un país. Por ejemplo queremos tener /pais/1, /pais/2, /pais/3, etc. En lugar de crear cada una de esas rutas, puedes configurar que cierta parte de la ruta sea dinámica, es decir, que Angular genere todas las rutas por tí. Para ello tienes que poner dentro del path, a continuación de la barra /, dos puntos y nombre que quieras para esa variable:

const appRoutes = [

{ path: 'pais/:id', component: VerPaisComponent }
];

El nombre id sive para guardar en esa variable la ruta específica en la que estamos, es decir, luego dentro del componente verPais puedes recoger ese valor para saber en qué ruta estás. Para ello dentro del constructor:

// ver-pais.component.ts

import { ActivatedRoute } from '@angular/router';

...

constructor(private route: ActivatedRoute) {
console.log(route.snapshot.params['id'];)
}

Recuerda importar ActivatedRoute e inyectarlo dentro del constructor con el nombre que quieras.

Se imprimirá por consola el valor que aparece en la ruta, es decir, si navegamos a la ruta /pais/2, se imprimirá 2 y si navegamos a /pais/foo se imprimirá foo.
¿Qué es el Router outlet de Angular?

Si pruebas las páginas con estos cambios te darás cuenta de que todavía no se muestran las nuevas rutas, esto pasa el primer componente que se carga siempre es app.component.html y como ese archivo ya tiene un HTML es el que se pintará.

IMPORTANTE: Por el momento (luego se puede cambiar) todas las rutas son hijas de app.component.

Dentro del app.component.html tenemos que incluir una etiqueta especial de Angular:

<!-- app.component.html -->

<router-outlet></router-outlet>

router-outlet es una etiqueta especial en Angular que sirve para mostrar los componentes hijos de un componente. Por defecto todos los componentes son hijos del componente AppComponent, por lo que si incluímos esta etiqueta dentro de la vista de AppComponent, se renderizará cada uno de los componentes del routing dependiendo de la página en la que nos encontremos.

Se imprimirá por consola el valor que aparece en la ruta, es decir, si navegamos a la ruta /items, se sustituirá la etiqieta router-outlet por el componente que esté asignado en ela archivo de rutas para ese componente.

Con esto por ejemplo puedes hacer que el componente app-component.html tenga el navbar para que así se pinte en todas las rutas (siempre que exista el componente de navbar y lo hayas importado en el app.module.ts):

<!-- navbar.component.html -->shared

<app-navbar></app-navbar>
<router-outlet></router-outlet>
