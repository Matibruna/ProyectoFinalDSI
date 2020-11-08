import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Pedido, DetalleDePedido } from '../../models/estructuraClases';
import { Pedidos } from '../../models/pedidos.colection';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  constructor() { }

  titulo = "Finalizar Pedido";

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
