import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { FinalizarPedidoComponent } from './components/finalizar-pedido/finalizar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    FinalizarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
