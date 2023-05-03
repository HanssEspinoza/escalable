import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParrafoRoutingModule } from './parrafo-routing.module';
import { ParrafoComponent } from './pages/parrafo/parrafo.component';
import { ParrafoDirective, ResaltadoDirective } from '@shared/directives';
import { LibroComponent } from './pages/libro/libro.component';


@NgModule({
  declarations: [
    ParrafoComponent,
    LibroComponent
  ],
  imports: [
    CommonModule,
    ParrafoRoutingModule,
    ResaltadoDirective,
    ParrafoDirective
  ]
})
export class ParrafoModule { }
