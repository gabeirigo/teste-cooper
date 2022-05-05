import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInvestimentosComponent } from './lista-investimentos.component';

const routes: Routes = [
  {path: '',  component: ListaInvestimentosComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaInvestimentosRoutingModule { }
