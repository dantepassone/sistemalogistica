/**
 * Modelo de datos para depósitos y centros de distribución
 */
export interface Warehouse {
  id: string;
  nombre: string;
  ubicacion: string;
  capacidad: number;
  ocupacion: number;
  zonas: WarehouseZone[];
  estado: 'Operativo' | 'Mantenimiento' | 'Cerrado';
}

export interface WarehouseZone {
  id: string;
  nombre: string;
  capacidad: number;
  ocupacion: number;
  tipo: 'Recepcion' | 'Almacenamiento' | 'Clasificacion' | 'Despacho';
  shipments: string[]; // IDs de envíos
}

