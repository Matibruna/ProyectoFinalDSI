import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    //Funcion ocultar menu lateral
         $("#menu-toggle").click(function(e) {
         e.preventDefault();
         $("#wrapper").toggleClass("toggled");
         });
     }
  }
