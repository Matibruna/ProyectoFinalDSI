import { Pedido, DetalleDePedido, EnPreparacion, PendienteDePreparacion, ListoParaServir, Notificado, HistorialEstado } from './estructuraClases';

let pedido: Pedido[] = [new Pedido(2, new Date(2020, 0O5, 0O5, 20, 30), 1, 1), new Pedido(4, new Date(2020, 0O5, 0O5, 20, 55), 2, 3)]

pedido[0].agregarDetalle(new DetalleDePedido(2, new Date(2020, 0O5, 0O5, 20, 30), 150.25, 'Milanesa Con Pure Mixto'));