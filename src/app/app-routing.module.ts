import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./lista-investimentos/lista-investimentos.module').then(m => m.ListaInvestimentosModule)
  },
  {
    path: 'resgate-personalizado',
    loadChildren: () => import('./resgate-personalizado/resgate-personalizado.module').then(m => m.
      ResgatePersonalizadoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
