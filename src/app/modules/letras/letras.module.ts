import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetrasRoutingModule } from './letras-routing.module';
import { LetrasComponent } from './pages/letras/letras.component';
import { LetrasPipe } from '@shared/pipes';
import { CardsComponent } from '@shared/components';


@NgModule({
  declarations: [
    LetrasComponent
  ],
  imports: [
    CommonModule,
    LetrasRoutingModule,
    LetrasPipe,
    CardsComponent
  ]
})
export class LetrasModule { }
