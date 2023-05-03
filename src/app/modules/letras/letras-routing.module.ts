import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetrasComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LetrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetrasRoutingModule { }
