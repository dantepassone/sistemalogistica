import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Claim, ClaimType, ClaimStatus } from '../../models/claim.model';

/**
 * Componente para gestión de reclamos y devoluciones
 * Módulo 6: Reclamos y Devoluciones
 */
@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {
  showNewClaimForm = false;
  newClaim = {
    shipmentId: '',
    tipo: 'Reclamo' as ClaimType,
    motivo: '',
    descripcion: '',
    prioridad: 'Media' as 'Baja' | 'Media' | 'Alta' | 'Urgente'
  };

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

  /**
   * Crea un nuevo reclamo
   */
  crearReclamo(): void {
    if (!this.newClaim.shipmentId || !this.newClaim.motivo || !this.newClaim.descripcion) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }

    const nuevoReclamo: Claim = {
      id: `RCL-${String(this.claims.length + 1).padStart(3, '0')}`,
      shipmentId: this.newClaim.shipmentId,
      tipo: this.newClaim.tipo,
      motivo: this.newClaim.motivo,
      fechaCreacion: new Date().toISOString().split('T')[0],
      estado: 'Abierto',
      prioridad: this.newClaim.prioridad,
      descripcion: this.newClaim.descripcion,
      responsable: 'Sistema'
    };

    this.claims.push(nuevoReclamo);
    this.cancelarNuevoReclamo();
    alert('Reclamo creado exitosamente');
  }

  /**
   * Cancela la creación de un nuevo reclamo
   */
  cancelarNuevoReclamo(): void {
    this.showNewClaimForm = false;
    this.newClaim = {
      shipmentId: '',
      tipo: 'Reclamo',
      motivo: '',
      descripcion: '',
      prioridad: 'Media'
    };
  }

  /**
   * Cambia el estado de un reclamo
   */
  cambiarEstado(claim: Claim, nuevoEstado: ClaimStatus): void {
    if (confirm(`¿Cambiar estado del reclamo ${claim.id} a "${nuevoEstado}"?`)) {
      claim.estado = nuevoEstado;
      if (nuevoEstado === 'Resuelto' || nuevoEstado === 'Cerrado') {
        claim.responsable = 'Sistema';
      }
    }
  }

  /**
   * Obtiene los estados posibles según el estado actual
   */
  getEstadosPosibles(estado: ClaimStatus): ClaimStatus[] {
    const estados: Record<ClaimStatus, ClaimStatus[]> = {
      'Abierto': ['En investigación', 'Resuelto', 'Cerrado'],
      'En investigación': ['Abierto', 'Resuelto', 'Cerrado'],
      'Resuelto': ['Cerrado'],
      'Cerrado': []
    };
    return estados[estado] || [];
  }

  /**
   * Ver detalle del envío relacionado
   */
  verEnvio(shipmentId: string): void {
    // Buscar el envío por ID y navegar
    this.router.navigate(['/envios']);
  }
}

