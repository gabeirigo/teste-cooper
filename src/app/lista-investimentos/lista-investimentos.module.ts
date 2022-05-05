import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ListaInvestimentosService } from "../shared/services/lista-investimentos.service";
import { ListaInvestimentosComponent } from "./lista-investimentos.component";
import { ListaInvestimentosRoutingModule } from './lista-investimentos-routing.module';

@NgModule({
  declarations: [
    ListaInvestimentosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListaInvestimentosRoutingModule
  ],
  exports: [
    ListaInvestimentosComponent
  ],
  providers: [
    ListaInvestimentosService
  ]
})
export class ListaInvestimentosModule { }
