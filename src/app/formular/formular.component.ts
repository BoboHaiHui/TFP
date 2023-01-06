import { NgForm } from '@angular/forms';
import { DateFormular } from './../date-formular';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent{
  formularClient:DateFormular= {
    nume_prenume: "",
    email:"",
    telefon:0,
    modul:"",
    detalii:"",
  }
  onSubmit(f: NgForm) {
    this.formularClient.nume_prenume = f.value.nume;
    this.formularClient.email = f.value.email;
    this.formularClient.telefon = f.value.telefon;
    this.formularClient.modul = f.value.modul;
    this.formularClient.detalii = f.value.detalii;
    console.log("S-a apelat functia!", f);
    console.log(this.formularClient);
  }
}




