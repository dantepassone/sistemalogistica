import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShipmentsService } from '../../services/shipments.service';
import { Shipment, ShipmentStatus } from '../../models/shipment.model';

/**
 * Componente que muestra el detalle de un envío y permite cambiar su estado
 */
@Component({
  selector: 'app-shipment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-detail.component.html',
  styleUrl: './shipment-detail.component.css'
})
export class ShipmentDetailComponent implements OnInit {
  shipment: Shipment | undefined;
  shipmentId: string = '';

  // Estados disponibles para cambiar
  availableStatuses: ShipmentStatus[] = ['En tránsito', 'Entregado', 'En devolución'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shipmentsService: ShipmentsService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del envío desde la ruta
    this.shipmentId = this.route.snapshot.paramMap.get('id') || '';
    this.loadShipment();
  }

  /**
   * Carga el envío desde el servicio
   */
  loadShipment(): void {
    this.shipment = this.shipmentsService.getShipmentById(this.shipmentId);
    if (!this.shipment) {
      // Si no se encuentra el envío, redirigir al listado
      this.router.navigate(['/envios']);
    }
  }

  /**
   * Cambia el estado del envío
   */
  changeStatus(newStatus: ShipmentStatus): void {
    if (this.shipment && confirm(`¿Desea cambiar el estado a "${newStatus}"?`)) {
      const success = this.shipmentsService.updateShipmentStatus(this.shipmentId, newStatus);
      if (success) {
        // Recargar el envío para ver el cambio
        this.loadShipment();
        alert('Estado actualizado correctamente');
      }
    }
  }

  /**
   * Verifica si el estado está disponible para cambiar
   */
  canChangeToStatus(status: ShipmentStatus): boolean {
    return this.shipment?.estado !== status;
  }

  /**
   * Obtiene la clase CSS según el estado
   */
  getStatusClass(status: ShipmentStatus): string {
    const statusClasses: Record<ShipmentStatus, string> = {
      'Recepcionado': 'status-recepcionado',
      'En depósito': 'status-deposito',
      'Clasificado': 'status-clasificado',
      'En tránsito': 'status-transito',
      'En reparto': 'status-reparto',
      'Entregado': 'status-entregado',
      'En devolución': 'status-devolucion',
      'Con reclamo': 'status-reclamo',
      'Cancelado': 'status-cancelado'
    };
    return statusClasses[status] || '';
  }

  /**
   * Volver al listado de envíos
   */
  goBack(): void {
    this.router.navigate(['/envios']);
  }
}

