import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  titulo = "Menu Principal";

  visibleMenuPedido = false;
  verFinPedido = false;

  ngOnInit(){

  //Funcion ocultar menu lateral
    $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    });
  }

  verMenuPedido(){
      this.visibleMenuPedido = this.visibleMenuPedido ? false : true;
  }
}