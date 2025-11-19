import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShipmentsService } from '../../services/shipments.service';
import { Shipment, ShipmentStatus } from '../../models/shipment.model';

/**
 * Componente que muestra el listado de envíos con filtros
 */
@Component({
  selector: 'app-shipments-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './shipments-list.component.html',
  styleUrl: './shipments-list.component.css'
})
export class ShipmentsListComponent implements OnInit {
  shipments: Shipment[] = [];
  filteredShipments: Shipment[] = [];
  searchText: string = '';
  selectedStatus: ShipmentStatus | 'Todos' = 'Todos';

  // Estados disponibles para el filtro
  statuses: (ShipmentStatus | 'Todos')[] = [
    'Todos',
    'Recepcionado',
    'En depósito',
    'En tránsito',
    'Entregado',
    'En devolución',
    'Con reclamo'
  ];

  constructor(
    private shipmentsService: ShipmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadShipments();
  }

  /**
   * Carga todos los envíos desde el servicio
   */
  loadShipments(): void {
    this.shipmentsService.getAllShipments().subscribe(shipments => {
      this.shipments = shipments;
      this.applyFilters();
    });
  }

  /**
   * Aplica los filtros de búsqueda y estado
   */
  applyFilters(): void {
    let filtered = [...this.shipments];

    // Filtrar por estado
    if (this.selectedStatus !== 'Todos') {
      filtered = filtered.filter(s => s.estado === this.selectedStatus);
    }

    // Filtrar por texto de búsqueda
    if (this.searchText.trim()) {
      const text = this.searchText.toLowerCase();
      filtered = filtered.filter(s =>
        s.id.toLowerCase().includes(text) ||
        s.codigoTrazabilidad.toLowerCase().includes(text) ||
        s.destinatario.toLowerCase().includes(text) ||
        s.remitente.toLowerCase().includes(text) ||
        s.destino.toLowerCase().includes(text) ||
        s.ciudad.toLowerCase().includes(text)
      );
    }

    this.filteredShipments = filtered;
  }

  /**
   * Maneja el cambio en el filtro de estado
   */
  onStatusChange(): void {
    this.applyFilters();
  }

  /**
   * Maneja el cambio en el campo de búsqueda
   */
  onSearchChange(): void {
    this.applyFilters();
  }

  /**
   * Obtiene la clase CSS según el estado del envío
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
}

