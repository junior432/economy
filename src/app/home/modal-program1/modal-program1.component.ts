import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal-program1",
  templateUrl: "./modal-program1.component.html",
  styleUrls: ["./modal-program1.component.scss"],
})
export class ModalProgram1Component implements OnInit {
  myForm: FormGroup;
  resultado: any;
  resultInteres: any;
  resulCapital:any;
  resulTiempo:any;
  resulTaza:any;
  options: string;

  // funcionando con ngModel 
  capital: any;
  interes: any;
  tiempo: any;

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder
  ) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      capital: 0,
      tazaInteres: 0,
      tiempo: 0,
      interes: null,
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  calcular() {
    this.resultado = 
      this.myForm.controls["capital"].value *
      this.myForm.controls["tazaInteres"].value *
      this.myForm.controls["tiempo"].value;

      this.resultInteres = this.myForm.controls["capital"].value + this.resultado;
  }

  calcularCapital(){
    this.resulCapital = 
    this.myForm.controls["interes"].value / 
    (this.myForm.controls["tiempo"].value * this.myForm.controls["tazaInteres"].value);
  }

  calcularTazaInteres(){
    this.resulTaza =
    this.myForm.controls["interes"].value / (this.myForm.controls["capital"].value * this.myForm.controls["tiempo"].value);
  }

  calcularTiempo(){
    this.resulTiempo =
    this.myForm.controls["interes"].value / (this.myForm.controls["capital"].value * this.myForm.controls["tazaInteres"].value);
  }

}
