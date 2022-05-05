import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgatePersonalizadoComponent } from './resgate-personalizado.component';

const routes: Routes = [
  { path: '', component: ResgatePersonalizadoComponent, pathMatch: 'full' },
  { path: ':id', component: ResgatePersonalizadoComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResgatePersonalizadoRoutingModule { }
