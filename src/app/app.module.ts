import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { FinalizarPedidoComponent } from './components/finalizar-pedido/finalizar-pedido.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    FinalizarPedidoComponent,
    MantenimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
