import { Component, OnInit } from '@angular/core';
import { Investimento } from "../shared/models/investimento.model";
import { ListaInvestimentosService } from "../shared/services/lista-investimentos.service";


@Component({
  selector: 'app-lista-investimentos',
  templateUrl: './lista-investimentos.component.html',
  styleUrls: ['./lista-investimentos.component.scss']
})
export class ListaInvestimentosComponent implements OnInit {

  investimentos: Investimento[] = [];

  constructor(private listaInvestimentosService: ListaInvestimentosService) { }

  ngOnInit(): void {
    this.getListaInvestimentos();
  }

  getListaInvestimentos(): any {
    this.listaInvestimentosService.findAll().subscribe({
      next: (investimentos) => {
        this.investimentos = investimentos;
      },
      error: (erro) => {
        alert(erro.message);
      }
    });
  }
}


