import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResgatePersonalizadoRoutingModule } from './resgate-personalizado-routing.module';
import { ResgatePersonalizadoComponent } from './resgate-personalizado.component';
import { HttpClientModule } from "@angular/common/http";
import { ListaInvestimentosService } from "../shared/services/lista-investimentos.service";
import { CardAcoesComponent } from './card-acoes/card-acoes.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CurrencyMaskModule } from "ng2-currency-mask";
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ModalComponent } from './modal/modal.component';


registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    ResgatePersonalizadoComponent,
    CardAcoesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ResgatePersonalizadoRoutingModule,
    CurrencyMaskModule
  ],
  exports: [
    ResgatePersonalizadoComponent
  ],
  providers: [
    ListaInvestimentosService,
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ]
})
export class ResgatePersonalizadoModule { }
