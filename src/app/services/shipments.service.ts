import { Injectable } from '@angular/core';
import { Shipment, ShipmentStatus } from '../models/shipment.model';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Servicio que maneja los datos mockeados de envíos
 * Simula una API sin necesidad de backend real
 */
@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  // Array de envíos de ejemplo (datos mockeados)
  private shipments: Shipment[] = [
    {
      id: 'ENV-001',
      remitente: 'ElectroShop S.A.',
      destinatario: 'Juan Pérez',
      origen: 'Buenos Aires',
      destino: 'Córdoba',
      ciudad: 'Córdoba Capital',
      provincia: 'Córdoba',
      direccion: 'Av. Colón 1234',
      estado: 'En tránsito',
      fechaEstimadaEntrega: '2024-01-15',
      rutaAsignada: 'Ruta Norte',
      peso: 2.5,
      dimensiones: '30x20x15 cm',
      valorDeclarado: 15000
    },
    {
      id: 'ENV-002',
      remitente: 'Moda Express',
      destinatario: 'María González',
      origen: 'Buenos Aires',
      destino: 'Rosario',
      ciudad: 'Rosario',
      provincia: 'Santa Fe',
      direccion: 'San Martín 567',
      estado: 'Entregado',
      fechaEstimadaEntrega: '2024-01-12',
      rutaAsignada: 'Ruta Sur',
      peso: 0.8,
      dimensiones: '25x15x10 cm',
      valorDeclarado: 8500
    },
    {
      id: 'ENV-003',
      remitente: 'TechStore',
      destinatario: 'Carlos Rodríguez',
      origen: 'Buenos Aires',
      destino: 'Mendoza',
      ciudad: 'Mendoza Capital',
      provincia: 'Mendoza',
      direccion: 'Las Heras 890',
      estado: 'En depósito',
      fechaEstimadaEntrega: '2024-01-18',
      rutaAsignada: 'Ruta Norte',
      peso: 5.2,
      dimensiones: '40x30x25 cm',
      valorDeclarado: 45000
    },
    {
      id: 'ENV-004',
      remitente: 'Libros y Más',
      destinatario: 'Ana Martínez',
      origen: 'Buenos Aires',
      destino: 'La Plata',
      ciudad: 'La Plata',
      provincia: 'Buenos Aires',
      direccion: 'Calle 50 1234',
      estado: 'Recepcionado',
      fechaEstimadaEntrega: '2024-01-16',
      rutaAsignada: 'Ruta CABA - GBA',
      peso: 1.2,
      dimensiones: '20x15x10 cm',
      valorDeclarado: 3200
    },
    {
      id: 'ENV-005',
      remitente: 'Deportes Total',
      destinatario: 'Luis Fernández',
      origen: 'Buenos Aires',
      destino: 'Tucumán',
      ciudad: 'San Miguel de Tucumán',
      provincia: 'Tucumán',
      direccion: 'Av. Alem 456',
      estado: 'En tránsito',
      fechaEstimadaEntrega: '2024-01-20',
      rutaAsignada: 'Ruta Norte',
      peso: 3.8,
      dimensiones: '35x25x20 cm',
      valorDeclarado: 12000
    },
    {
      id: 'ENV-006',
      remitente: 'Hogar y Deco',
      destinatario: 'Sofía López',
      origen: 'Buenos Aires',
      destino: 'Mar del Plata',
      ciudad: 'Mar del Plata',
      provincia: 'Buenos Aires',
      direccion: 'Av. Constitución 789',
      estado: 'En devolución',
      fechaEstimadaEntrega: '2024-01-14',
      rutaAsignada: 'Ruta Sur',
      peso: 4.5,
      dimensiones: '50x40x30 cm',
      valorDeclarado: 28000
    },
    {
      id: 'ENV-007',
      remitente: 'Farmacia Central',
      destinatario: 'Roberto Sánchez',
      origen: 'Buenos Aires',
      destino: 'Salta',
      ciudad: 'Salta Capital',
      provincia: 'Salta',
      direccion: 'Mitre 234',
      estado: 'Entregado',
      fechaEstimadaEntrega: '2024-01-11',
      rutaAsignada: 'Ruta Norte',
      peso: 0.5,
      dimensiones: '15x10x8 cm',
      valorDeclarado: 1500
    },
    {
      id: 'ENV-008',
      remitente: 'Juguetes del Sur',
      destinatario: 'Laura Díaz',
      origen: 'Buenos Aires',
      destino: 'Bahía Blanca',
      ciudad: 'Bahía Blanca',
      provincia: 'Buenos Aires',
      direccion: 'Alsina 567',
      estado: 'Con reclamo',
      fechaEstimadaEntrega: '2024-01-13',
      rutaAsignada: 'Ruta Sur',
      peso: 2.1,
      dimensiones: '30x20x15 cm',
      valorDeclarado: 9500
    },
    {
      id: 'ENV-009',
      remitente: 'Muebles Premium',
      destinatario: 'Diego Torres',
      origen: 'Buenos Aires',
      destino: 'Neuquén',
      ciudad: 'Neuquén Capital',
      provincia: 'Neuquén',
      direccion: 'Roca 123',
      estado: 'En tránsito',
      fechaEstimadaEntrega: '2024-01-19',
      rutaAsignada: 'Ruta Sur',
      peso: 12.5,
      dimensiones: '80x60x40 cm',
      valorDeclarado: 75000
    },
    {
      id: 'ENV-010',
      remitente: 'Cosméticos Beauty',
      destinatario: 'Patricia Ruiz',
      origen: 'Buenos Aires',
      destino: 'San Juan',
      ciudad: 'San Juan Capital',
      provincia: 'San Juan',
      direccion: 'Rivadavia 456',
      estado: 'En depósito',
      fechaEstimadaEntrega: '2024-01-17',
      rutaAsignada: 'Ruta Norte',
      peso: 0.6,
      dimensiones: '18x12x8 cm',
      valorDeclarado: 4200
    },
    {
      id: 'ENV-011',
      remitente: 'Herramientas Pro',
      destinatario: 'Miguel Castro',
      origen: 'Buenos Aires',
      destino: 'Santa Fe',
      ciudad: 'Santa Fe Capital',
      provincia: 'Santa Fe',
      direccion: 'San Martín 789',
      estado: 'Entregado',
      fechaEstimadaEntrega: '2024-01-10',
      rutaAsignada: 'Ruta Sur',
      peso: 6.8,
      dimensiones: '45x35x25 cm',
      valorDeclarado: 35000
    },
    {
      id: 'ENV-012',
      remitente: 'Ropa y Accesorios',
      destinatario: 'Carmen Vega',
      origen: 'Buenos Aires',
      destino: 'Corrientes',
      ciudad: 'Corrientes Capital',
      provincia: 'Corrientes',
      direccion: 'Junín 234',
      estado: 'Recepcionado',
      fechaEstimadaEntrega: '2024-01-21',
      rutaAsignada: 'Ruta Norte',
      peso: 1.5,
      dimensiones: '25x18x12 cm',
      valorDeclarado: 6800
    }
  ];

  // Subject para notificar cambios en los envíos
  private shipmentsSubject = new BehaviorSubject<Shipment[]>(this.shipments);

  /**
   * Obtiene todos los envíos
   */
  getAllShipments(): Observable<Shipment[]> {
    return this.shipmentsSubject.asObservable();
  }

  /**
   * Obtiene un envío por su ID
   */
  getShipmentById(id: string): Shipment | undefined {
    return this.shipments.find(s => s.id === id);
  }

  /**
   * Filtra envíos por estado
   */
  filterByStatus(status: ShipmentStatus | 'Todos'): Shipment[] {
    if (status === 'Todos') {
      return this.shipments;
    }
    return this.shipments.filter(s => s.estado === status);
  }

  /**
   * Busca envíos por texto (ID, remitente o destinatario)
   */
  searchShipments(searchText: string): Shipment[] {
    if (!searchText.trim()) {
      return this.shipments;
    }
    const text = searchText.toLowerCase();
    return this.shipments.filter(s => 
      s.id.toLowerCase().includes(text) ||
      s.destinatario.toLowerCase().includes(text) ||
      s.remitente.toLowerCase().includes(text)
    );
  }

  /**
   * Actualiza el estado de un envío
   */
  updateShipmentStatus(id: string, newStatus: ShipmentStatus): boolean {
    const shipment = this.shipments.find(s => s.id === id);
    if (shipment) {
      shipment.estado = newStatus;
      // Notificar a los observadores del cambio
      this.shipmentsSubject.next([...this.shipments]);
      return true;
    }
    return false;
  }

  /**
   * Obtiene estadísticas de envíos
   */
  getStatistics() {
    return {
      total: this.shipments.length,
      enTransito: this.shipments.filter(s => s.estado === 'En tránsito').length,
      entregado: this.shipments.filter(s => s.estado === 'Entregado').length,
      enDevolucion: this.shipments.filter(s => s.estado === 'En devolución' || s.estado === 'Con reclamo').length
    };
  }

  /**
   * Obtiene envíos agrupados por ruta
   */
  getShipmentsByRoute(): { ruta: string; cantidad: number }[] {
    const routes = new Map<string, number>();
    this.shipments.forEach(shipment => {
      const count = routes.get(shipment.rutaAsignada) || 0;
      routes.set(shipment.rutaAsignada, count + 1);
    });
    return Array.from(routes.entries()).map(([ruta, cantidad]) => ({ ruta, cantidad }));
  }
}

