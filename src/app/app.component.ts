import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title="Restaurante PPAI"

  name = 'Angular 6';
  date:Date;
  constructor(){
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  titulo = "Menu Principal";

  ngOnInit(){

  //Funcion ocultar menu lateral
    $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    });
  }  
}