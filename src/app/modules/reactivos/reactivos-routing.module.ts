import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivosComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ReactivosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactivosRoutingModule { }
