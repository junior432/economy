import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-program2',
  templateUrl: './modal-program2.component.html',
  styleUrls: ['./modal-program2.component.scss'],
})
export class ModalProgram2Component implements OnInit {
  myForm: FormGroup;
  puntoEquilibrio: any;

  // ng model 
  cf: any;
  pu: any;
  cu: any;

  constructor( public modalController: ModalController,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      costosFijos: 0,
      precioUnitario: 0,
      costosUnitarios: 0,
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  calcular(){
    const v = this.myForm.value;
    this.puntoEquilibrio = v.costosFijos / (v.precioUnitario - v.costosUnitarios);
  }
}
