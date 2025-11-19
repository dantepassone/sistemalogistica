/**
 * Modelo de datos para representar un envío/paquete
 */
export interface Shipment {
  id: string;
  codigoTrazabilidad: string; // Código único de trazabilidad
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  ciudad: string;
  provincia: string;
  direccion: string;
  estado: ShipmentStatus;
  fechaRecepcion?: string;
  fechaEstimadaEntrega: string;
  fechaEntrega?: string;
  rutaAsignada: string;
  vehiculoAsignado?: string;
  choferAsignado?: string;
  peso: number;
  volumen: number; // en m³
  dimensiones: string;
  tipo: PackageType;
  prioridad: 'Normal' | 'Alta' | 'Urgente';
  valorDeclarado: number;
  ubicacionActual?: string; // GPS o ubicación en depósito
  historialTracking?: TrackingEvent[];
  zonaDeposito?: string;
}

export type PackageType = 'Paquete' | 'Sobre' | 'Caja' | 'Pallet' | 'Carga Especial';

export interface TrackingEvent {
  fecha: string;
  hora: string;
  estado: ShipmentStatus;
  ubicacion?: string;
  descripcion: string;
  usuario?: string;
}

/**
 * Estados posibles de un envío
 */
export type ShipmentStatus = 
  | 'Recepcionado' 
  | 'En depósito' 
  | 'Clasificado'
  | 'En tránsito' 
  | 'En reparto'
  | 'Entregado' 
  | 'En devolución' 
  | 'Con reclamo'
  | 'Cancelado';

