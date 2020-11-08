import { Pedido, DetalleDePedido} from './estructuraClases';

let pedido: Pedido[] = [new Pedido(2, new Date(2020, 0O5, 0O5, 20, 30), 1, 1), new Pedido(4, new Date(2020, 0O5, 0O5, 20, 55), 2, 3)]

pedido[0].agregarDetalle(new DetalleDePedido(2, new Date(2020, 0O5, 0O5, 20, 30), 150.25, 'Milanesa Con Pure Mixto'));
pedido[0].agregarDetalle(new DetalleDePedido(2, new Date(2020, 0O5, 0O5, 20, 30), 175, 'Ñoquis'));
pedido[0].agregarDetalle(new DetalleDePedido(4, new Date(2020, 0O5, 0O5, 20, 30), 55, 'Gaseosa'));

pedido[0].getDetalleNumero(0).preparar(new Date(2020, 0O5, 0O5, 20, 31));
pedido[0].getDetalleNumero(1).preparar(new Date(2020, 0O5, 0O5, 20, 31));
pedido[0].getDetalleNumero(2).preparar(new Date(2020, 0O5, 0O5, 20, 31));
pedido[0].getDetalleNumero(2).finalizar(new Date(2020, 0O5, 0O5, 20, 32));
pedido[0].getDetalleNumero(2).notificar(new Date(2020, 0O5, 0O5, 20, 32));
