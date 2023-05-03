import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParrafoComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ParrafoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParrafoRoutingModule { }
