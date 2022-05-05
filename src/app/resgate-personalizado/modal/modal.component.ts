import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() type: 'success' | 'error' = 'success';
  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
