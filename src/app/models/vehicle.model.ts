/**
 * Modelo de datos para vehículos de la flota
 */
export interface Vehicle {
  id: string;
  patente: string;
  tipo: VehicleType;
  capacidad: number; // en kg
  chofer: string;
  estado: VehicleStatus;
  ubicacion?: string;
  ultimoMantenimiento?: string;
  proximoMantenimiento?: string;
  kilometraje?: number;
  zonaAsignada?: string;
}

export type VehicleType = 'Camioneta' | 'Camión Pequeño' | 'Camión Mediano' | 'Camión Grande';
export type VehicleStatus = 'Disponible' | 'En ruta' | 'En mantenimiento' | 'Fuera de servicio';

