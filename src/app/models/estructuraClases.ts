import { stringify } from 'querystring';

//Clase Pedido
export class Pedido{
    private cantComensales: number;
    private fechaHora: Date;
    private nroPedido: number;
    private mesa: number[];
    private detalles: DetalleDePedido[];

    constructor(cantC: number, fechaHoraPedido: Date, nroPedido: number, mesa: number[]){
        this.cantComensales=cantC;
        this.fechaHora=fechaHoraPedido;
        this.nroPedido=nroPedido;
        this.mesa=mesa;
    }

    getCantidadComensales(){
        return this.cantComensales;
    }

    getMesa(){
        return this.mesa;
    }

    getMesaToString(){
        let txt: string;
        let y: string;
        txt;
        y = '';
        for(let num in this.mesa){
            if(txt == null){txt = 'Mesa N° '+num}
            else{txt = txt + ' y '+num}
        }
        return txt;
    }

    getFechaHoraPedido(){
        return this.fechaHora;
    }

    getNroPedido(){
        return this.nroPedido
    }

    getDetalles(){
        return this.detalles;
    }

    getDetalleNumero(x: number){
        return this.detalles[x];
    }


    setCantidadComensales(c: number){
        this.cantComensales = c;
    }

    agregarDetalle(detalle: DetalleDePedido){
        if(this.detalles == null){
            this.detalles =  [detalle]
        }
        else{
        this.detalles.push(detalle);
        }
    }
}

//Clase DetalleDePedido
export class DetalleDePedido{
    private cantidad: number;
    private nombreProducto: string;
    private fechaHora: Date;
    private precio: number;
    private historialEstado: HistorialEstado[];
  
  
    // Constructor de un nuevo objeto, se inicializa con los parametros CANTIDAD, HORA, PRECIO y crea un objeto HistorialEstado con Estado inicial X.
    constructor(cant: number, fechaHora: Date, precio: number, nomP: string){
        this.cantidad = cant;
        this.fechaHora = fechaHora;
        this.precio = precio;
        this.nombreProducto = nomP;
        this.historialEstado = [new HistorialEstado(fechaHora, new PendienteDePreparacion('pendPrep', 'detalle'))];
    }   
  
    compare(a: DetalleDePedido, b: DetalleDePedido){
        if(a.getfechaHora == b.getfechaHora){return 0;}
        return (a.getfechaHora > b.getfechaHora) ? -1 : 1;
    }

    getCantidad(){
        return this.cantidad;
    }
    
    getfechaHora(){
        return this.fechaHora;
    }
  
    getPrecio(){
        return this.precio;
    }

    getNombreProducto(){
        return this.nombreProducto;
    }
  
    getUltimoEstado(){
        return this.historialEstado[this.historialEstado.length-1].getEstado();
    }

    getUltimoHistorial(){
        return this.historialEstado[this.historialEstado.length-1]
    }
  
    setFinUltimoHistorial(fechaHoraFin: Date){
        this.getUltimoHistorial().setHoraFin(fechaHoraFin);
    }
  
    setUltimoHistorial(h: HistorialEstado){
        this.historialEstado.push(h); 
    }
  
    estaEnPreparacion(){
        return this.historialEstado[this.historialEstado.length-1].getEstado().esEnPreparacion();
    }

    finalizar(fechaHora: Date){
        return this.getUltimoEstado().finalizar(this, fechaHora);
    }
  
    notificar(fechaHora: Date){
        return this.getUltimoEstado().notificar(this, fechaHora);
    }

    preparar(fechaHora: Date){
        return this.getUltimoEstado().preparar(this, fechaHora);
    }
  
  }

  // HistorialEstado, Guarda la hora de inicio y fin por el que una clase paso por cierto estado, se INICIALIZA pasandole la fechaHoraInicio y el ESTADO por parametro.
export class HistorialEstado{
    private fechaHoraInicio: Date;
    private fechaHoraFin: Date;
    private estado: Estado;
  
    constructor(horaI: Date, estado: Estado){
        this.fechaHoraInicio = horaI;
        this.estado = estado;        
    }
  
    getEstado(){
        return this.estado;
    }
  
    getFechaHoraInicio(){
        return this.fechaHoraInicio;
    }
  
    setHoraFin(horaF: Date){
        this.fechaHoraFin = horaF;
    }
  
    esUltimo(){
        return (this.fechaHoraFin == null)
    }
}

//Interfaz Estado, compone todos los metodos que las clases Estados Concretos deberan implementar.
interface Estado{

    crearEstado();
    preparar(detalle: DetalleDePedido, fechaHoraFin: Date);
    finalizar(detalle: DetalleDePedido, fechaHoraFin: Date);
    notificar(detalle: DetalleDePedido, fechaHoraFin: Date);
    esPendienteDePreparacion();
    esEnPreparacion();  
    esListoParaServir();
    esNotificado();
  }
  
//ESTADOS CONCRETOS, Clases que Implementan la interfaz ESTADO.
export class PendienteDePreparacion implements Estado{
    nombre: string;
    ambito: string;

    constructor(n: string, a: string){
        this.nombre = n;
        this.ambito = a;
    }
  
    esPendienteDePreparacion(){
        return true;
    }
    esEnPreparacion(){return false;}
    esListoParaServir(){return false;}
    esNotificado(){return false;}

    crearEstado(){
        return new EnPreparacion('enPrep', 'detalle');
    }
  
    crearHistorial(fechaHoraInicio: Date, estado: Estado){
        return new HistorialEstado(fechaHoraInicio, estado);
    }
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: Date){
        var estado: Estado;
        var historial: HistorialEstado;
  
        detalle.setFinUltimoHistorial(fechaHoraFin);
  
        estado = this.crearEstado();
  
        historial = this.crearHistorial(fechaHoraFin, estado);
  
        detalle.setUltimoHistorial(historial);
  
        return true;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
}
  
export class EnPreparacion implements Estado{
    nombre: string;
    ambito: string;

    constructor(n: string, a: string){
        this.nombre = n;
        this.ambito = a;
    }

    esPendienteDePreparacion(){return false;}
    esEnPreparacion(){return true;}
    esListoParaServir(){return false;}
    esNotificado(){return false;}
  
    crearEstado(){
        return new ListoParaServir('listoParaServir', 'detalle');
    }
  
    crearHistorial(fechaHoraInicio: Date, estado: Estado){
        return new HistorialEstado(fechaHoraInicio, estado);
    }
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: Date){
  
        var estado: Estado;
        var historial: HistorialEstado;
  
        detalle.setFinUltimoHistorial(fechaHoraFin);
  
        estado = this.crearEstado();
  
        historial = this.crearHistorial(fechaHoraFin, estado);
  
        detalle.setUltimoHistorial(historial);
  
        return true;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
}
  
export class ListoParaServir implements Estado{
    nombre: string;
    ambito: string;

    constructor(n: string, a: string){
        this.nombre = n;
        this.ambito = a;
    }
  
    esPendienteDePreparacion(){return false;}
    esEnPreparacion(){return false;}
    esListoParaServir(){return true;}
    esNotificado(){return false;}

    crearEstado(){
        return new Notificado('not', 'detalle');
    }
  
    crearHistorial(fechaHoraInicio: Date, estado: Estado){
        return new HistorialEstado(fechaHoraInicio, estado)
    }    
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: Date){
        var estado: Estado;
        var historial: HistorialEstado;
  
        detalle.setFinUltimoHistorial(fechaHoraFin);
  
        estado = this.crearEstado();
  
        historial = this.crearHistorial(fechaHoraFin, estado);
  
        detalle.setUltimoHistorial(historial);
  
        return true;
    }
}
  
export class Notificado implements Estado{
    nombre: string;
    ambito: string;

    constructor(n: string, a: string){
        this.nombre = n;
        this.ambito = a;
    }

    esPendienteDePreparacion(){return false;}
    esEnPreparacion(){return false;}
    esListoParaServir(){return false;}
    esNotificado(){return true;}
  
    crearEstado(){
        return ;
    }
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: Date){
        return false;
    }
}
  //FIN ESTADOS CONCRETOS