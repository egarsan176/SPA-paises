import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//se declara una constante que será un array de rutas
const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
        //a la ruta que está en blanco es a la única a la que hay que poner el pathMatch
        //con full quiere decir que el patrón tiene que coincidir exactamente
    },
    {
        path: 'region', //nombre de la ruta
        component: PorRegionComponent   //componente que se carga en la ruta
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',   //para poder pasarle parámetros
        component: VerPaisComponent     //desde este componente podremos cargar el parámetro
    },
    {
        path: '**',     //si no encuentra ningún patrón irá a la página principal
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
