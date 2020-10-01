import { ModalIntCompuestoComponent } from './../modal-int-compuesto/modal-int-compuesto.component';
import { Component, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProgram1Component } from './modal-program1/modal-program1.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Output () intSimple: boolean;
  @Output () intCompuesto: boolean;

  constructor(public modalController: ModalController) {}

  // onClick(){
  //   this.intSimple = true;
  // }

  async presentModalProgram1() {
    const modal = await this.modalController.create({
      component: ModalProgram1Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentModalIntCompuesto() {
    const modal = await this.modalController.create({
      component: ModalIntCompuestoComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
