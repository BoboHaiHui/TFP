import { Component } from '@angular/core';

@Component({
  selector: 'app-locatii',
  templateUrl: './locatii.component.html',
  styleUrls: ['./locatii.component.css']
})
export class LocatiiComponent {
  listaImagini = ["./assets/images/iasi.jpg", "./assets/images/brasov.jpg", "./assets/images/bucuresti.jpg", "./assets/images/cluj.jpg", "./assets/images/pitesti.jpg", "./assets/images/ploiesti.jpg"];
  index =3;
  prev(){
    let lastItem = this.listaImagini.pop()??"";
    this.listaImagini.unshift(lastItem);
  }
  next(){
    let newItem = this.listaImagini.shift()??"";
    this.listaImagini.push(newItem);
  }
}

