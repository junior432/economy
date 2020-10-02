import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-int-compuesto',
  templateUrl: './modal-int-compuesto.component.html',
  styleUrls: ['./modal-int-compuesto.component.scss'],
})
export class ModalIntCompuestoComponent implements OnInit {
  myForm: FormGroup;
  options:string;

  cn:number;
  co:number;
  i:number;
  n: number;

  constructor (
    public modalController: ModalController,
    private fb: FormBuilder
  ) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.myForm = this.fb.group ({
      capital: null,
      tazaInteres: null,
      tiempo: null,
      valorFinal: null,
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  calcularValorFinal() {
    const v = this.myForm.value;
    var base = 1 + v.tazaInteres;

    this.cn = v.capital *  Math.pow( base, v.tiempo);
  }

  calcularCapital() {
    const v = this.myForm.value;
    var base = 1 + v.tazaInteres;

    this.co = v.valorFinal / (Math.pow( base, v.tiempo));
  }

  calcularTiempo() {
    const v = this.myForm.value;
    var base = 1 + v.tazaInteres;

    this.n = Math.log(v.valorFinal / v.capital) / Math.log(base);
  }

  calcularTaza(){
    const v = this.myForm.value;

    this.i = Math.pow(v.tiempo, v.valorFinal/v.capital) -1;
  }

}
