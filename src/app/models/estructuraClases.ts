//Clase Pedido
export class Pedido{
    private cantComensales: number;
    private fechaHoraPedido: string;
    private nroPedido: number;
    private detalles: DetalleDePedido[];

    constructor(cantC: number, fechaHoraPedido: string, nroPedido: number){
        this.cantComensales=cantC;
        this.fechaHoraPedido=fechaHoraPedido;
        this.nroPedido=nroPedido;
        this.detalles = DetalleDePedido[0];
    }

    getCantidadComensales(){
        return this.cantComensales;
    }

    getFechaHoraPedido(){
        return this.fechaHoraPedido;
    }

    getNroPedido(){
        return this.nroPedido
    }

    setCantidadComensales(c: number){
        this.cantComensales = c;
    }

    agregarDetalle(detalle: DetalleDePedido){
        this.detalles.push(detalle);
    }
}

//Clase DetalleDePedido
export class DetalleDePedido{
    private cantidad: number;
    private hora: string
    private precio: number;
    private historialEstado: HistorialEstado;
  
  
    // Constructor de un nuevo objeto, se inicializa con los parametros CANTIDAD, HORA, PRECIO y crea un objeto HistorialEstado con Estado inicial X.
    constructor(cant: number, fechaHora: string, precio: number){
        this.cantidad = cant;
        this.hora = fechaHora;
        this.precio = precio;
        this.historialEstado = new HistorialEstado(fechaHora, new PendienteDePreparacion())
    }   
  
    getCantidad(){
        return this.cantidad;
    }
    
    getHora(){
        return this.hora;
    }
  
    getPrecio(){
        return this.precio;
    }
  
    getEstado(){
        return this.historialEstado.getEstado();
    }
  
    setFinUltimoHistorial(fechaHoraFin: string){
        this.historialEstado.setHoraFin(fechaHoraFin);
    }
  
    setUltimoHistorial(h: HistorialEstado){
        this.historialEstado = h; 
    }
  
    finalizar(fechaHora: string){
        this.getEstado().finalizar(this, fechaHora);
    }
  
    notificar(){
        return ;
    }
  
  }
  
  // HistorialEstado, Guarda la hora de inicio y fin por el que una clase paso por cierto estado, se INICIALIZA pasandole la fechaHoraInicio y el ESTADO por parametro.
export class HistorialEstado{
    private fechaHoraInicio: string;
    private fechaHoraFin: string;
    private estado: Estado;
  
    constructor(horaI: string, estado: Estado){
        this.fechaHoraInicio = horaI;
        this.estado = estado;        
    }
  
    getEstado(){
        return this.estado;
    }
  
    getFechaHoraInicio(){
        return this.fechaHoraInicio;
    }
  
    setHoraFin(horaF: string){
        this.fechaHoraFin = horaF;
    }
  
    esUltimo(){
        return (this.fechaHoraFin == null)
    }
}
  
  

//Interfaz Estado, compone todos los metodos que las clases Estados Concretos deberan implementar.
interface Estado{

    crearEstado();
    preparar(detalle: DetalleDePedido, fechaHoraFin: string);
    finalizar(detalle: DetalleDePedido, fechaHoraFin: string);
    notificar(detalle: DetalleDePedido, fechaHoraFin: string);
  
  }
  
//ESTADOS CONCRETOS, Clases que Implementan la interfaz ESTADO.
export class PendienteDePreparacion implements Estado{
  
    constructor(){
  
    }
  
    crearEstado(){
        return new EnPreparacion();
    }
  
    crearHistorial(fechaHoraInicio: string, estado: Estado){
        return new HistorialEstado(fechaHoraInicio, estado);
    }
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: string){
        var estado: Estado;
        var historial: HistorialEstado;
  
        detalle.setFinUltimoHistorial(fechaHoraFin);
  
        estado = this.crearEstado();
  
        historial = this.crearHistorial(fechaHoraFin, estado);
  
        detalle.setUltimoHistorial(historial);
  
        return true;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
}
  
export class EnPreparacion implements Estado{
  
    constructor(){
  
    }
  
    crearEstado(){
        return new ListoParaServir();
    }
  
    crearHistorial(fechaHoraInicio: string, estado: Estado){
        return new HistorialEstado(fechaHoraInicio, estado);
    }
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: string){
  
        var estado: Estado;
        var historial: HistorialEstado;
  
        detalle.setFinUltimoHistorial(fechaHoraFin);
  
        estado = this.crearEstado();
  
        historial = this.crearHistorial(fechaHoraFin, estado);
  
        detalle.setUltimoHistorial(historial);
  
        return true;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
}
  
export class ListoParaServir implements Estado{
  
    constructor(){
  
    }
  
    crearEstado(){
        return new Notificado();
    }
  
    crearHistorial(fechaHoraInicio: string, estado: Estado){
        return new HistorialEstado(fechaHoraInicio, estado)
    }    
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: string){
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
  
    constructor(){
  
    }
  
    crearEstado(){
        return ;
    }
  
    preparar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
  
    finalizar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
  
    notificar(detalle: DetalleDePedido, fechaHoraFin: string){
        return false;
    }
}
  //FIN ESTADOS CONCRETOS