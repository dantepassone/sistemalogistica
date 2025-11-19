/**
 * Modelo de datos para reclamos y devoluciones
 */
export interface Claim {
  id: string;
  shipmentId: string;
  tipo: ClaimType;
  motivo: string;
  fechaCreacion: string;
  estado: ClaimStatus;
  prioridad: 'Baja' | 'Media' | 'Alta' | 'Urgente';
  descripcion: string;
  responsable?: string;
  fechaResolucion?: string;
  solucion?: string;
  auditoria?: AuditLog[];
}

export type ClaimType = 'Reclamo' | 'Devolución' | 'Pérdida' | 'Daño';
export type ClaimStatus = 'Abierto' | 'En investigación' | 'Resuelto' | 'Cerrado';

export interface AuditLog {
  fecha: string;
  usuario: string;
  accion: string;
  detalle: string;
}

