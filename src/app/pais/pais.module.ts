import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { PaisService } from './services/pais.service';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { InputPaisComponent } from './components/input-pais/input-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    InputPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    PaisService //para poder usar el servicio en todos los componentes de este modulo
  ],
  exports: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    InputPaisComponent
  ]
})
export class PaisModule { }
