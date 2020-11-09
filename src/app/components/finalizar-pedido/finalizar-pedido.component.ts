import { Component, OnInit } from '@angular/core';
import { Pedido, DetalleDePedido } from '../../models/estructuraClases';
import { Pedidos } from '../../models/pedidos.colection';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})

export class FinalizarPedidoComponent implements OnInit {

  constructor() {

   }

  titulo = "Finalizar Pedido";
  seleccionados = [];
  pedidos = Pedidos;
  detalles=this.buscarDetallesPedidoEnPreparacion();
  mostrarTabla=true;

  ngOnInit(): void {
    
  }

  estaSeleccionado(n: number){
    for(let i=0; i<this.seleccionados.length; i++){
      if(this.seleccionados[i] == n){return i;}
    }
    return -1;
  }

  onCheckChange(i: number){
    if(this.seleccionados == null){
      this.seleccionados = [i]
    }
    else{
      let x = this.estaSeleccionado(i);
      if(x >= 0){ this.seleccionados = this.seleccionados.filter( item => item!=x ); }
      else { this.seleccionados.push(i)}
    }
  }

  finalizar(){
    for(let n of this.seleccionados){
      this.detalles[n].Detalle.finalizar();
    }
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
              Date: Math.round(((tiempo/1000)/60)),
              Detalle: detalle 
              }]
          }
          else
            {
              retornoDetalles.push({Mesa: mesa, Nom: detalle.getNombreProducto(), Cant: detalle.getCantidad(), Date: Math.round(((tiempo/1000)/60)), Detalle: detalle})
            }
        }
      }
    }
    return retornoDetalles.sort(this.Comparator);
  }
}