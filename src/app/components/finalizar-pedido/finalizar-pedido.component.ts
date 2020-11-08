import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Pedido, DetalleDePedido } from 'G:/Descargas/FACULTAD_VIRTUAL/DSI/ProyectoUltimaEntrega/ProyectoFinal/src/app/models/estructuraClases';
import { Pedidos } from 'G:/Descargas/FACULTAD_VIRTUAL/DSI/ProyectoUltimaEntrega/ProyectoFinal/src/app/models/pedidos.colection';
//Perdon, no consegui poner rutas relativas, no entiendo por que no me la toma como correcta.

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  constructor() { }

  pedidos: Pedido[];

  ngOnInit(): void {
   //Funcion ocultar menu lateral
   $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    });

    
    this.pedidos = Pedidos;
  }

}
