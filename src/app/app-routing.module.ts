import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalizarPedidoComponent } from './components/finalizar-pedido/finalizar-pedido.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  {path: 'finalizarPedido', component: FinalizarPedidoComponent},
  {path: 'menuPedidos', component: PedidosComponent},
  {path: 'notAvailable', component: MantenimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
