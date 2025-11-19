import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle, VehicleType, VehicleStatus } from '../../models/vehicle.model';
import { ShipmentsService } from '../../services/shipments.service';

/**
 * Componente para gestión de flota y recursos
 * Módulo 5: Flota y Recursos
 */
@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule, DecimalPipe, FormsModule],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.css'
})
export class FleetComponent {
  selectedVehicle: Vehicle | null = null;
  showAssignForm = false;
  availableShipments: any[] = [];
  assignmentData = {
    shipmentId: '',
    ruta: ''
  };

  vehicles: Vehicle[] = [
    {
      id: 'VH-001',
      patente: 'ABC123',
      tipo: 'Camión Mediano',
      capacidad: 5000,
      chofer: 'Juan Martínez',
      estado: 'En ruta',
      ubicacion: 'Ruta 9, km 45',
      ultimoMantenimiento: '2024-01-01',
      proximoMantenimiento: '2024-02-15',
      kilometraje: 125000,
      zonaAsignada: 'Ruta Norte'
    },
    {
      id: 'VH-002',
      patente: 'DEF456',
      tipo: 'Camioneta',
      capacidad: 1500,
      chofer: 'María López',
      estado: 'Disponible',
      ubicacion: 'Depósito Central',
      ultimoMantenimiento: '2024-01-10',
      proximoMantenimiento: '2024-03-01',
      kilometraje: 85000,
      zonaAsignada: 'Ruta CABA - GBA'
    },
    {
      id: 'VH-003',
      patente: 'GHI789',
      tipo: 'Camión Grande',
      capacidad: 10000,
      chofer: 'Carlos Rodríguez',
      estado: 'En mantenimiento',
      ubicacion: 'Taller',
      ultimoMantenimiento: '2024-01-15',
      proximoMantenimiento: '2024-01-20',
      kilometraje: 200000,
      zonaAsignada: 'Ruta Sur'
    }
  ];

  getStatusClass(status: VehicleStatus): string {
    const classes: Record<VehicleStatus, string> = {
      'Disponible': 'status-available',
      'En ruta': 'status-in-route',
      'En mantenimiento': 'status-maintenance',
      'Fuera de servicio': 'status-out'
    };
    return classes[status] || '';
  }

  getKilometraje(vehicle: Vehicle): string {
    return vehicle.kilometraje ? vehicle.kilometraje.toLocaleString() : 'N/A';
  }

  getValor(prop: string | undefined): string {
    return prop || 'N/A';
  }

  getDisponibles(): number {
    return this.vehicles.filter(v => v.estado === 'Disponible').length;
  }

  getEnRuta(): number {
    return this.vehicles.filter(v => v.estado === 'En ruta').length;
  }

  getEnMantenimiento(): number {
    return this.vehicles.filter(v => v.estado === 'En mantenimiento').length;
  }

  constructor(
    private shipmentsService: ShipmentsService,
    private router: Router
  ) {}

  /**
   * Selecciona un vehículo para ver detalles o asignar
   */
  selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    this.loadAvailableShipments();
  }

  /**
   * Carga envíos disponibles para asignar
   */
  loadAvailableShipments(): void {
    this.availableShipments = this.shipmentsService.getAllShipmentsSync()
      .filter(s => ['Clasificado', 'En depósito'].includes(s.estado))
      .slice(0, 10);
  }

  /**
   * Cambia el estado de un vehículo
   */
  cambiarEstado(vehicle: Vehicle, nuevoEstado: VehicleStatus): void {
    if (confirm(`¿Cambiar estado del vehículo ${vehicle.patente} a "${nuevoEstado}"?`)) {
      vehicle.estado = nuevoEstado;
      if (nuevoEstado === 'En mantenimiento') {
        vehicle.ubicacion = 'Taller';
      }
    }
  }

  /**
   * Asigna un envío a un vehículo
   */
  asignarEnvio(): void {
    if (!this.selectedVehicle || !this.assignmentData.shipmentId) {
      alert('Seleccione un envío');
      return;
    }

    const shipment = this.shipmentsService.getShipmentById(this.assignmentData.shipmentId);
    if (!shipment) {
      alert('Envío no encontrado');
      return;
    }

    if (this.selectedVehicle.estado !== 'Disponible') {
      alert('El vehículo debe estar disponible para asignar envíos');
      return;
    }

    shipment.vehiculoAsignado = this.selectedVehicle.id;
    shipment.choferAsignado = this.selectedVehicle.chofer;
    shipment.estado = 'En tránsito';
    this.selectedVehicle.estado = 'En ruta';
    this.selectedVehicle.ubicacion = 'En ruta';

    this.shipmentsService.updateShipmentStatus(shipment.id, 'En tránsito');
    this.showAssignForm = false;
    this.selectedVehicle = null;
    alert('Envío asignado exitosamente');
  }

  /**
   * Cierra la selección de vehículo
   */
  closeSelection(): void {
    this.selectedVehicle = null;
    this.showAssignForm = false;
  }

  /**
   * Obtiene los estados posibles según el estado actual
   */
  getEstadosPosibles(estado: VehicleStatus): VehicleStatus[] {
    const estados: Record<VehicleStatus, VehicleStatus[]> = {
      'Disponible': ['En ruta', 'En mantenimiento', 'Fuera de servicio'],
      'En ruta': ['Disponible', 'En mantenimiento'],
      'En mantenimiento': ['Disponible', 'Fuera de servicio'],
      'Fuera de servicio': ['Disponible', 'En mantenimiento']
    };
    return estados[estado] || [];
  }
}

