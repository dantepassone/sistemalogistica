import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Vehicle, VehicleType, VehicleStatus } from '../../models/vehicle.model';

/**
 * Componente para gestión de flota y recursos
 * Módulo 5: Flota y Recursos
 */
@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.css'
})
export class FleetComponent {
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
}

