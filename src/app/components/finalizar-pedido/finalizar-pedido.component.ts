import { Component, OnInit } from '@angular/core';
import { GestorFinalizarPreparacionPedido } from '../../models/estructuraClases';
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
  gestor = new GestorFinalizarPreparacionPedido(Pedidos);
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
    this.gestor = new GestorFinalizarPreparacionPedido(Pedidos);
    this.mostrarTabla = true;
  }

  tomarConfirmarElaboracion(){
    this.gestor.confirmacionElaboracion();
  }

  onCheckChange(i: number){
    this.gestor.detalleDePedidoSeleccionado(i);
  }
}