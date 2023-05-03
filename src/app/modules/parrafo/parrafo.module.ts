import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParrafoRoutingModule } from './parrafo-routing.module';
import { ParrafoComponent } from './pages/parrafo/parrafo.component';
import { ParrafoDirective, ResaltadoDirective, TextovozDirective } from '@shared/directives';
import { LibroComponent } from './pages/libro/libro.component';
import { TextoComponent } from './pages/texto/texto.component';


@NgModule({
  declarations: [
    ParrafoComponent,
    LibroComponent,
    TextoComponent
  ],
  imports: [
    CommonModule,
    ParrafoRoutingModule,
    ResaltadoDirective,
    ParrafoDirective,
    TextovozDirective
  ]
})
export class ParrafoModule { }
