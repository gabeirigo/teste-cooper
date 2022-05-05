import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Investimento } from "../shared/models/investimento.model";
import { ListaInvestimentosService } from "../shared/services/lista-investimentos.service";

@Component({
  selector: 'app-resgate-personalizado',
  templateUrl: './resgate-personalizado.component.html',
  styleUrls: ['./resgate-personalizado.component.scss']
})
export class ResgatePersonalizadoComponent implements OnInit {

  investimento: Investimento;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listaInvestimentosService: ListaInvestimentosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id ? this.getInvestimentoById(+id) : this.router.navigate(['']);
  }

  getInvestimentoById(id: number) {
    this.listaInvestimentosService.findById(id).subscribe({
      next: (investimento) => {
        this.investimento = investimento
      },
      error: (erro) => {
        alert(erro.message);
      }
    });
  }

}
