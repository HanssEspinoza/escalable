import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent, ParrafoComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ParrafoComponent
  },
  {
    path: 'libro',
    component: LibroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParrafoRoutingModule { }
