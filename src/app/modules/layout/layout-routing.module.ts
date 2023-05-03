import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/home').then((m) => m.HomeModule),
      },
      {
        path: 'letras',
        loadChildren: () => import('@modules/letras').then((m) => m.LetrasModule),
      },
      {
        path: 'reactivos',
        loadChildren: () => import('@modules/reactivos').then((m) => m.ReactivosModule),
      },
      {
        path: 'parrafo',
        loadChildren: () => import('@modules/parrafo').then((m) => m.ParrafoModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
