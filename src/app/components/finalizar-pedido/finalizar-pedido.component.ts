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
  pedidos = Pedidos;
  detalles=this.buscarDetallesPedidoEnPreparacion();
  mostrarTabla=true;

  ngOnInit(): void {
  

  }

  Comparator(a, b) {
    if (a.Date > b.Date) return -1;
    if (a.Date < b.Date) return 1;
    return 0;
  }

  buscarDetallesPedidoEnPreparacion(){
    let actualDate = new Date();
    let mesa : string;
    let retornoDetalles: any[];
    let ped: Pedido;

    for(ped of this.pedidos){
      mesa = ped.getMesaToString();
      let detalle: DetalleDePedido;
      for (detalle of ped.getDetalles()){
        if(detalle.estaEnPreparacion()){
          var tiempo = (actualDate.getTime() - detalle.getfechaHora().getTime())
          if(retornoDetalles == null)
          {
            retornoDetalles = [{
              Mesa: mesa,
              Nom: detalle.getNombreProducto(),
              Cant: detalle.getCantidad(),
              Date: Math.round(((tiempo/1000)/60)) 
              }]
          }
          else
            {
              retornoDetalles.push({Mesa: mesa, Nom: detalle.getNombreProducto(), Cant: detalle.getCantidad(), Date: Math.round(((tiempo/1000)/60)) })
            }
        }
      }
    }
    console.log(retornoDetalles)
    console.log(retornoDetalles.sort(this.Comparator))
    return retornoDetalles.sort(this.Comparator);
  }
}