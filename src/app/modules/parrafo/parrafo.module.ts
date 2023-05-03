import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParrafoRoutingModule } from './parrafo-routing.module';
import { ParrafoComponent } from './pages/parrafo/parrafo.component';


@NgModule({
  declarations: [
    ParrafoComponent
  ],
  imports: [
    CommonModule,
    ParrafoRoutingModule
  ]
})
export class ParrafoModule { }
