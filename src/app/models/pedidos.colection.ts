import { Pedido, DetalleDePedido} from './estructuraClases';

export let Pedidos: Pedido[] = [new Pedido(2, new Date(2020, 10, 8, 22, 30), 1, [1,2]), new Pedido(4, new Date(2020, 11, 8, 22, 55), 2, [5])];

Pedidos[0].agregarDetalle(new DetalleDePedido(2, new Date(2020, 10, 8, 22, 30), 150.25, 'Milanesa Con Pure Mixto'));
Pedidos[0].agregarDetalle(new DetalleDePedido(2, new Date(2020, 10, 8, 23, 30), 175, 'Ñoquis'));
Pedidos[0].agregarDetalle(new DetalleDePedido(4, new Date(2020, 10, 8, 22, 30), 55, 'Gaseosa'));

Pedidos[0].getDetalleNumero(0).preparar(new Date(2020, 10, 8, 22, 10));
Pedidos[0].getDetalleNumero(1).preparar(new Date(2020, 10, 8, 22, 10));
Pedidos[0].getDetalleNumero(2).preparar(new Date(2020, 10, 8, 20, 31));
Pedidos[0].getDetalleNumero(2).finalizar(new Date(2020, 10, 8, 20, 32));
Pedidos[0].getDetalleNumero(2).notificar(new Date(2020, 10, 8, 20, 32));

Pedidos[1].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 8, 23, 10), 150.25, 'Parrillada P2'));
Pedidos[1].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 8, 22, 10), 175, 'Vino Tinto 750cc'));
Pedidos[1].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 8, 22, 11), 55, 'Agua con Gas'));

Pedidos[1].getDetalleNumero(0).preparar(new Date(2020, 10, 8, 23, 30));
Pedidos[1].getDetalleNumero(1).preparar(new Date(2020, 10, 8, 21, 12));
Pedidos[1].getDetalleNumero(2).preparar(new Date(2020, 10, 8, 21, 12));
Pedidos[1].getDetalleNumero(1).finalizar(new Date(2020, 10, 8, 21, 12));
Pedidos[1].getDetalleNumero(2).finalizar(new Date(2020, 10, 8, 21, 12));
Pedidos[1].getDetalleNumero(1).notificar(new Date(2020, 10, 8, 21, 13));
Pedidos[1].getDetalleNumero(2).notificar(new Date(2020, 10, 8, 21, 13));
