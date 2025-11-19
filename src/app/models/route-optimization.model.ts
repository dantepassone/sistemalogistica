/**
 * Modelo de datos para planificación y optimización de rutas
 */
export interface RoutePlan {
  id: string;
  nombre: string;
  fecha: string;
  vehiculoId: string;
  chofer: string;
  shipments: string[]; // IDs de envíos
  distanciaTotal: number; // en km
  tiempoEstimado: number; // en horas
  costoEstimado: number;
  estado: RouteStatus;
  optimizacion: OptimizationResult;
  zonas: string[];
}

export type RouteStatus = 'Planificada' | 'En curso' | 'Completada' | 'Cancelada';

export interface OptimizationResult {
  algoritmo: 'Mas Corta' | 'Mas Barata' | 'Balanceada';
  distanciaOriginal?: number;
  distanciaOptimizada: number;
  ahorroPorcentual?: number;
  tiempoOriginal?: number;
  tiempoOptimizado: number;
}

