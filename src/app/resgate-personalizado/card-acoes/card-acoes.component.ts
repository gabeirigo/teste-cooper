import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Acoes } from "src/app/shared/models/acoes.model";

@Component({
  selector: 'app-card-acoes',
  templateUrl: './card-acoes.component.html',
  styleUrls: ['./card-acoes.component.scss']
})
export class CardAcoesComponent implements OnInit {

  form = new FormGroup({});
  resgateTotal: any;
  showModal = false;
  modalType: 'success' | 'error';

  @Input() acoes: Acoes[];
  @Input() saldoTotal: number = 0;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.acoes && this.buildForm();
    this.handleFormValueChanges();
  }

  handleFormValueChanges() {
    this.form.valueChanges.subscribe(value => {
      this.resgateTotal = Object.values(this.form.value)
        .reduce((acc: any, curr: any) => acc + curr, 0);
    })
  }

  buildForm() {
    this.form = this.formBuilder.group({});
    this.setFields();
  }

  setFields() {
    this.acoes.forEach(acao => {
      this.form.addControl(acao.id, this.formBuilder.control('', [
        Validators.max((this.saldoTotal / 100) * acao.percentual)
      ]));
    })
  }

  salvar() {
    if (this.form.invalid) {
      this.modalType = 'error';
      this.showModal = true;
    }

    this.modalType = 'success';
    this.showModal = true;
  }

  handleCloseModal() {
    if (this.modalType === 'success') {
      this.router.navigate(['/']);
      this.showModal = false;

      return;
    }

    this.showModal = false;
    return
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }

}
