import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-int-compuesto',
  templateUrl: './modal-int-compuesto.component.html',
  styleUrls: ['./modal-int-compuesto.component.scss'],
})
export class ModalIntCompuestoComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder
  ) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
