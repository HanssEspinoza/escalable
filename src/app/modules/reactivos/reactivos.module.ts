import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivosRoutingModule } from './reactivos-routing.module';
import { ReactivosComponent } from './pages/reactivos/reactivos.component';


@NgModule({
  declarations: [
    ReactivosComponent
  ],
  imports: [
    CommonModule,
    ReactivosRoutingModule
  ]
})
export class ReactivosModule { }
