/**
 * Modelo de datos para representar un envío/paquete
 */
export interface Shipment {
  id: string;
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  ciudad: string;
  provincia: string;
  direccion: string;
  estado: ShipmentStatus;
  fechaEstimadaEntrega: string;
  rutaAsignada: string;
  peso?: number;
  dimensiones?: string;
  valorDeclarado?: number;
}

/**
 * Estados posibles de un envío
 */
export type ShipmentStatus = 
  | 'Recepcionado' 
  | 'En depósito' 
  | 'En tránsito' 
  | 'Entregado' 
  | 'En devolución' 
  | 'Con reclamo';

