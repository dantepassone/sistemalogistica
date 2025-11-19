import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Claim, ClaimType, ClaimStatus } from '../../models/claim.model';

/**
 * Componente para gestión de reclamos y devoluciones
 * Módulo 6: Reclamos y Devoluciones
 */
@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {
  claims: Claim[] = [
    {
      id: 'RCL-001',
      shipmentId: 'ENV-006',
      tipo: 'Devolución',
      motivo: 'Cliente no se encontraba',
      fechaCreacion: '2024-01-14',
      estado: 'En investigación',
      prioridad: 'Media',
      descripcion: 'El paquete no pudo ser entregado porque el destinatario no se encontraba en el domicilio',
      responsable: 'María González'
    },
    {
      id: 'RCL-002',
      shipmentId: 'ENV-008',
      tipo: 'Reclamo',
      motivo: 'Paquete dañado',
      fechaCreacion: '2024-01-13',
      estado: 'Abierto',
      prioridad: 'Alta',
      descripcion: 'El cliente reporta que el paquete llegó con daños visibles',
      responsable: 'Juan Martínez'
    }
  ];

  getStatusClass(status: ClaimStatus): string {
    const classes: Record<ClaimStatus, string> = {
      'Abierto': 'status-open',
      'En investigación': 'status-investigating',
      'Resuelto': 'status-resolved',
      'Cerrado': 'status-closed'
    };
    return classes[status] || '';
  }

  getPriorityClass(prioridad: string): string {
    const classes: Record<string, string> = {
      'Baja': 'priority-low',
      'Media': 'priority-medium',
      'Alta': 'priority-high',
      'Urgente': 'priority-urgent'
    };
    return classes[prioridad] || '';
  }

  getAbiertos(): number {
    return this.claims.filter(c => c.estado === 'Abierto').length;
  }

  getEnInvestigacion(): number {
    return this.claims.filter(c => c.estado === 'En investigación').length;
  }

  getResueltos(): number {
    return this.claims.filter(c => c.estado === 'Resuelto').length;
  }
}

