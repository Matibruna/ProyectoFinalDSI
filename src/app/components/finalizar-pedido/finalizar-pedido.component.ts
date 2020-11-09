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
  gestor = new GestorFinalizarPreparacionPedido();
  mostrarTabla=true;
  mostrarConfirmacion=false;

  ngOnInit(): void {
    
  }

  mostrarDatosDetallePedidoEnPreparacion(){
    return this.gestor.getDetalles();
  }

  detallesAConfirmar(){
    return this.gestor.getDetallesPreConfirmados();
  }

  solicitarConfirmacionElaboracionProducto(){
    if(this.gestor.getDetallesPreConfirmados()==null || this.gestor.getDetallesPreConfirmados().length == 0){alert('Seleccione los pedidos que desea finalizar.')}
    else{ this.mostrarTabla = false; }
  }

  cancelarConfirmacion(){
    this.gestor = new GestorFinalizarPreparacionPedido();
    this.mostrarTabla = true;
  }

  tomarConfirmarElaboracion(){
    this.gestor.confirmacionElaboracion();
  }

  onCheckChange(i: number){
    this.gestor.detalleDePedidoSeleccionado(i);
  }
}



class GestorFinalizarPreparacionPedido{

  private pedidos = Pedidos;
  private detalles=this.buscarDetallesPedidoEnPreparacion();
  seleccionados: number[];

  constructor(){

  }

  getDetalles(){
    return this.detalles.sort(this.Comparator);
  }

  getDetallesPreConfirmados(){
    if(this.seleccionados == null || this.seleccionados.length==0){return []}
    let preSeleccionados: any[];
    for(let n of this.seleccionados){
      if(preSeleccionados == null){preSeleccionados = [this.detalles[n]]}
      else{preSeleccionados.push(this.detalles[n])}
    }
    return preSeleccionados;
    }

  detalleDePedidoSeleccionado(i: number){
    if(this.seleccionados == null){
      this.seleccionados = [i]
    }
    else{
      let x = this.estaSeleccionado(i);
      if(x != -1){ 
        console.log(this.seleccionados)
          this.seleccionados.splice(x, 1); 
        console.log(this.seleccionados)
      }
      else{ 
        this.seleccionados.push(i)
      }
    }
  }

  confirmacionElaboracion(){
    this.actualizarEstadoDetallePedido();
  }

  actualizarEstadoDetallePedido(){
    for(let n of this.seleccionados){
      this.detalles[n].Detalle.finalizar();
      this.detalles[n].Detalle.notificar();
    }
  }

  ordenarSegunMayorTiempoDeEspera(){
    this.detalles.sort(this.Comparator) 
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
    return retornoDetalles;
  }

  Comparator(a, b) {
    if (a.Date > b.Date) return -1;
    if (a.Date < b.Date) return 1;
    return 0;
  }

  estaSeleccionado(n: number){
    for(let i=0; i<this.seleccionados.length; i++){
      if(this.seleccionados[i] == n){return i;}
    }
    return -1;
  }
}




  