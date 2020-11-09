import { Pedido, DetalleDePedido} from './estructuraClases';

export let Pedidos: Pedido[] = [new Pedido(2, new Date(2020, 10, 10, 7, 30), 1, [2,3]), new Pedido(4, new Date(2020, 10, 10, 8, 0), 2, [5]), new Pedido(3, new Date(2020, 10, 9, 23, 30), 21, [11,12])];

Pedidos[2].agregarDetalle(new DetalleDePedido(2, new Date(2020, 10, 9, 22, 30), 150.25, 'Milanesa Con Pure Mixto'));
Pedidos[2].agregarDetalle(new DetalleDePedido(2, new Date(2020, 10, 9, 23, 30), 175, 'Ñoquis'));
Pedidos[2].agregarDetalle(new DetalleDePedido(4, new Date(2020, 10, 9, 22, 30), 55, 'Gaseosa'));

Pedidos[2].getDetalleNumero(0).preparar(new Date(2020, 10, 9, 23, 32));
//Pedidos[2].getDetalleNumero(0).finalizar(new Date(2020, 10, 9, 23, 33));
//Pedidos[2].getDetalleNumero(0).notificar(new Date(2020, 10, 9, 23, 34));


Pedidos[2].getDetalleNumero(1).preparar(new Date(2020, 10, 9, 23, 32));
//Pedidos[2].getDetalleNumero(1).finalizar(new Date(2020, 10, 9, 23, 33));
//Pedidos[2].getDetalleNumero(1).notificar(new Date(2020, 10, 9, 23, 34));

Pedidos[2].getDetalleNumero(2).preparar(new Date(2020, 10, 9, 23, 33));
Pedidos[2].getDetalleNumero(2).finalizar(new Date(2020, 10, 9, 23, 33));
Pedidos[2].getDetalleNumero(2).notificar(new Date(2020, 10, 9, 23, 34));

Pedidos[1].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 10, 8, 10), 150.25, 'Desalluno Completo P2'));
Pedidos[1].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 10, 8, 10), 175, 'Té de Limon 750cc'));
Pedidos[1].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 10, 8, 11), 55, 'Cafe'));

Pedidos[1].getDetalleNumero(0).preparar(new Date(2020, 10, 10, 23, 30));
Pedidos[1].getDetalleNumero(1).preparar(new Date(2020, 10, 10, 21, 12));
Pedidos[1].getDetalleNumero(2).preparar(new Date(2020, 10, 10, 21, 12));
Pedidos[1].getDetalleNumero(1).finalizar(new Date(2020, 10, 10, 21, 12));
Pedidos[1].getDetalleNumero(2).finalizar(new Date(2020, 10, 10, 21, 12));
Pedidos[1].getDetalleNumero(1).notificar(new Date(2020, 10, 10, 21, 13));
Pedidos[1].getDetalleNumero(2).notificar(new Date(2020, 10, 10, 21, 13));

Pedidos[0].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 10, 7, 50), 200, 'Submarino 300cc'));
Pedidos[0].agregarDetalle(new DetalleDePedido(1, new Date(2020, 10, 10, 7, 51), 50, 'Agua p/ Mate'));
Pedidos[0].agregarDetalle(new DetalleDePedido(6, new Date(2020, 10, 10, 7, 51), 130, 'Criollos'));

Pedidos[0].getDetalleNumero(0).preparar(new Date(2020, 10, 10, 7, 52));

Pedidos[0].getDetalleNumero(1).preparar(new Date(2020, 10, 10, 7, 52));

Pedidos[0].getDetalleNumero(2).preparar(new Date(2020, 10, 10, 7, 53));
Pedidos[0].getDetalleNumero(2).finalizar(new Date(2020, 10, 10, 7, 53));
Pedidos[0].getDetalleNumero(2).notificar(new Date(2020, 10, 10, 7, 54));