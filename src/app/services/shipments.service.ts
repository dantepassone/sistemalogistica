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
      codigoTrazabilidad: 'LP-ABC123-XYZ',
      remitente: 'ElectroShop S.A.',
      destinatario: 'Juan Pérez',
      origen: 'Buenos Aires',
      destino: 'Córdoba',
      ciudad: 'Córdoba Capital',
      provincia: 'Córdoba',
      direccion: 'Av. Colón 1234',
      estado: 'En tránsito',
      fechaRecepcion: '2024-01-10',
      fechaEstimadaEntrega: '2024-01-15',
      rutaAsignada: 'Ruta Norte',
      vehiculoAsignado: 'VH-001',
      choferAsignado: 'Juan Martínez',
      peso: 2.5,
      volumen: 0.009,
      dimensiones: '30x20x15 cm',
      tipo: 'Paquete',
      prioridad: 'Normal',
      valorDeclarado: 15000,
      ubicacionActual: 'Ruta 9, km 45',
      historialTracking: [
        { fecha: '2024-01-10', hora: '10:30:00', estado: 'Recepcionado', descripcion: 'Paquete recepcionado', usuario: 'Sistema' },
        { fecha: '2024-01-10', hora: '14:20:00', estado: 'En depósito', descripcion: 'Almacenado en zona A', usuario: 'Operador' },
        { fecha: '2024-01-11', hora: '09:15:00', estado: 'Clasificado', descripcion: 'Clasificado para Ruta Norte', usuario: 'Operador' },
        { fecha: '2024-01-12', hora: '08:00:00', estado: 'En tránsito', descripcion: 'Cargado en vehículo VH-001', usuario: 'Chofer' }
      ]
    },
    {
      id: 'ENV-002',
      codigoTrazabilidad: 'LP-DEF456-ABC',
      remitente: 'Moda Express',
      destinatario: 'María González',
      origen: 'Buenos Aires',
      destino: 'Rosario',
      ciudad: 'Rosario',
      provincia: 'Santa Fe',
      direccion: 'San Martín 567',
      estado: 'Entregado',
      fechaRecepcion: '2024-01-08',
      fechaEntrega: '2024-01-12',
      fechaEstimadaEntrega: '2024-01-12',
      rutaAsignada: 'Ruta Sur',
      peso: 0.8,
      volumen: 0.00375,
      dimensiones: '25x15x10 cm',
      tipo: 'Sobre',
      prioridad: 'Normal',
      valorDeclarado: 8500
    },
    {
      id: 'ENV-003',
      codigoTrazabilidad: 'LP-GHI789-DEF',
      remitente: 'TechStore',
      destinatario: 'Carlos Rodríguez',
      origen: 'Buenos Aires',
      destino: 'Mendoza',
      ciudad: 'Mendoza Capital',
      provincia: 'Mendoza',
      direccion: 'Las Heras 890',
      estado: 'En depósito',
      fechaRecepcion: '2024-01-13',
      fechaEstimadaEntrega: '2024-01-18',
      rutaAsignada: 'Ruta Norte',
      peso: 5.2,
      volumen: 0.03,
      dimensiones: '40x30x25 cm',
      tipo: 'Caja',
      prioridad: 'Alta',
      valorDeclarado: 45000
    },
    {
      id: 'ENV-004',
      codigoTrazabilidad: 'LP-JKL012-GHI',
      remitente: 'Libros y Más',
      destinatario: 'Ana Martínez',
      origen: 'Buenos Aires',
      destino: 'La Plata',
      ciudad: 'La Plata',
      provincia: 'Buenos Aires',
      direccion: 'Calle 50 1234',
      estado: 'Recepcionado',
      fechaRecepcion: '2024-01-14',
      fechaEstimadaEntrega: '2024-01-16',
      rutaAsignada: 'Ruta CABA - GBA',
      peso: 1.2,
      volumen: 0.003,
      dimensiones: '20x15x10 cm',
      tipo: 'Paquete',
      prioridad: 'Normal',
      valorDeclarado: 3200
    },
    {
      id: 'ENV-005',
      codigoTrazabilidad: 'LP-MNO345-JKL',
      remitente: 'Deportes Total',
      destinatario: 'Luis Fernández',
      origen: 'Buenos Aires',
      destino: 'Tucumán',
      ciudad: 'San Miguel de Tucumán',
      provincia: 'Tucumán',
      direccion: 'Av. Alem 456',
      estado: 'En tránsito',
      fechaRecepcion: '2024-01-15',
      fechaEstimadaEntrega: '2024-01-20',
      rutaAsignada: 'Ruta Norte',
      vehiculoAsignado: 'VH-001',
      choferAsignado: 'Juan Martínez',
      peso: 3.8,
      volumen: 0.0175,
      dimensiones: '35x25x20 cm',
      tipo: 'Caja',
      prioridad: 'Normal',
      valorDeclarado: 12000,
      ubicacionActual: 'Ruta 9, km 120'
    },
    {
      id: 'ENV-006',
      codigoTrazabilidad: 'LP-PQR678-MNO',
      remitente: 'Hogar y Deco',
      destinatario: 'Sofía López',
      origen: 'Buenos Aires',
      destino: 'Mar del Plata',
      ciudad: 'Mar del Plata',
      provincia: 'Buenos Aires',
      direccion: 'Av. Constitución 789',
      estado: 'En devolución',
      fechaRecepcion: '2024-01-10',
      fechaEstimadaEntrega: '2024-01-14',
      rutaAsignada: 'Ruta Sur',
      peso: 4.5,
      volumen: 0.06,
      dimensiones: '50x40x30 cm',
      tipo: 'Caja',
      prioridad: 'Normal',
      valorDeclarado: 28000
    },
    {
      id: 'ENV-007',
      codigoTrazabilidad: 'LP-STU901-PQR',
      remitente: 'Farmacia Central',
      destinatario: 'Roberto Sánchez',
      origen: 'Buenos Aires',
      destino: 'Salta',
      ciudad: 'Salta Capital',
      provincia: 'Salta',
      direccion: 'Mitre 234',
      estado: 'Entregado',
      fechaRecepcion: '2024-01-07',
      fechaEntrega: '2024-01-11',
      fechaEstimadaEntrega: '2024-01-11',
      rutaAsignada: 'Ruta Norte',
      peso: 0.5,
      volumen: 0.0012,
      dimensiones: '15x10x8 cm',
      tipo: 'Sobre',
      prioridad: 'Urgente',
      valorDeclarado: 1500
    },
    {
      id: 'ENV-008',
      codigoTrazabilidad: 'LP-VWX234-STU',
      remitente: 'Juguetes del Sur',
      destinatario: 'Laura Díaz',
      origen: 'Buenos Aires',
      destino: 'Bahía Blanca',
      ciudad: 'Bahía Blanca',
      provincia: 'Buenos Aires',
      direccion: 'Alsina 567',
      estado: 'Con reclamo',
      fechaRecepcion: '2024-01-09',
      fechaEstimadaEntrega: '2024-01-13',
      rutaAsignada: 'Ruta Sur',
      peso: 2.1,
      volumen: 0.009,
      dimensiones: '30x20x15 cm',
      tipo: 'Paquete',
      prioridad: 'Normal',
      valorDeclarado: 9500
    },
    {
      id: 'ENV-009',
      codigoTrazabilidad: 'LP-YZA567-VWX',
      remitente: 'Muebles Premium',
      destinatario: 'Diego Torres',
      origen: 'Buenos Aires',
      destino: 'Neuquén',
      ciudad: 'Neuquén Capital',
      provincia: 'Neuquén',
      direccion: 'Roca 123',
      estado: 'En tránsito',
      fechaRecepcion: '2024-01-14',
      fechaEstimadaEntrega: '2024-01-19',
      rutaAsignada: 'Ruta Sur',
      vehiculoAsignado: 'VH-003',
      choferAsignado: 'Carlos Rodríguez',
      peso: 12.5,
      volumen: 0.192,
      dimensiones: '80x60x40 cm',
      tipo: 'Pallet',
      prioridad: 'Alta',
      valorDeclarado: 75000,
      ubicacionActual: 'Ruta 3, km 200'
    },
    {
      id: 'ENV-010',
      codigoTrazabilidad: 'LP-BCD890-YZA',
      remitente: 'Cosméticos Beauty',
      destinatario: 'Patricia Ruiz',
      origen: 'Buenos Aires',
      destino: 'San Juan',
      ciudad: 'San Juan Capital',
      provincia: 'San Juan',
      direccion: 'Rivadavia 456',
      estado: 'En depósito',
      fechaRecepcion: '2024-01-13',
      fechaEstimadaEntrega: '2024-01-17',
      rutaAsignada: 'Ruta Norte',
      peso: 0.6,
      volumen: 0.001728,
      dimensiones: '18x12x8 cm',
      tipo: 'Sobre',
      prioridad: 'Normal',
      valorDeclarado: 4200
    },
    {
      id: 'ENV-011',
      codigoTrazabilidad: 'LP-EFG123-BCD',
      remitente: 'Herramientas Pro',
      destinatario: 'Miguel Castro',
      origen: 'Buenos Aires',
      destino: 'Santa Fe',
      ciudad: 'Santa Fe Capital',
      provincia: 'Santa Fe',
      direccion: 'San Martín 789',
      estado: 'Entregado',
      fechaRecepcion: '2024-01-06',
      fechaEntrega: '2024-01-10',
      fechaEstimadaEntrega: '2024-01-10',
      rutaAsignada: 'Ruta Sur',
      peso: 6.8,
      volumen: 0.039375,
      dimensiones: '45x35x25 cm',
      tipo: 'Caja',
      prioridad: 'Alta',
      valorDeclarado: 35000
    },
    {
      id: 'ENV-012',
      codigoTrazabilidad: 'LP-HIJ456-EFG',
      remitente: 'Ropa y Accesorios',
      destinatario: 'Carmen Vega',
      origen: 'Buenos Aires',
      destino: 'Corrientes',
      ciudad: 'Corrientes Capital',
      provincia: 'Corrientes',
      direccion: 'Junín 234',
      estado: 'Recepcionado',
      fechaRecepcion: '2024-01-16',
      fechaEstimadaEntrega: '2024-01-21',
      rutaAsignada: 'Ruta Norte',
      peso: 1.5,
      volumen: 0.0054,
      dimensiones: '25x18x12 cm',
      tipo: 'Paquete',
      prioridad: 'Normal',
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
   * Agrega un nuevo envío al sistema
   */
  addShipment(shipment: Shipment): void {
    this.shipments.push(shipment);
    this.shipmentsSubject.next([...this.shipments]);
  }

  /**
   * Obtiene todos los envíos de forma síncrona (para filtros)
   */
  getAllShipmentsSync(): Shipment[] {
    return [...this.shipments];
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
   * Actualiza la ruta asignada de un envío
   */
  updateShipmentRoute(id: string, ruta: string): void {
    const shipment = this.shipments.find(s => s.id === id);
    if (shipment) {
      shipment.rutaAsignada = ruta;
      this.shipmentsSubject.next([...this.shipments]);
    }
  }

  /**
   * Obtiene un envío por su ID
   */
  getShipmentById(id: string): Shipment | undefined {
    return this.shipments.find(s => s.id === id);
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
   * Actualiza el estado de un envío y agrega evento al historial
   */
  updateShipmentStatus(id: string, newStatus: ShipmentStatus, descripcion?: string, usuario?: string): boolean {
    const shipment = this.shipments.find(s => s.id === id);
    if (shipment) {
      const estadoAnterior = shipment.estado;
      shipment.estado = newStatus;
      
      // Si se marca como Entregado, guardar fecha de entrega
      if (newStatus === 'Entregado' && !shipment.fechaEntrega) {
        shipment.fechaEntrega = new Date().toISOString().split('T')[0];
      }
      
      // Agregar evento al historial de tracking
      if (!shipment.historialTracking) {
        shipment.historialTracking = [];
      }
      
      const nuevoEvento = {
        fecha: new Date().toISOString().split('T')[0],
        hora: new Date().toTimeString().split(' ')[0],
        estado: newStatus,
        descripcion: descripcion || this.getDefaultDescription(newStatus, estadoAnterior),
        usuario: usuario || 'Sistema'
      };
      
      shipment.historialTracking.push(nuevoEvento);
      
      // Actualizar ubicación según el estado
      if (newStatus === 'En tránsito' || newStatus === 'En reparto') {
        shipment.ubicacionActual = shipment.vehiculoAsignado ? `En vehículo ${shipment.vehiculoAsignado}` : 'En ruta';
      } else if (newStatus === 'En depósito') {
        shipment.ubicacionActual = 'Depósito Central';
      } else if (newStatus === 'Entregado') {
        shipment.ubicacionActual = shipment.direccion;
      }
      
      // Notificar a los observadores del cambio
      this.shipmentsSubject.next([...this.shipments]);
      return true;
    }
    return false;
  }

  /**
   * Obtiene descripción por defecto según el cambio de estado
   */
  private getDefaultDescription(nuevoEstado: ShipmentStatus, estadoAnterior: ShipmentStatus): string {
    const descripciones: Record<ShipmentStatus, string> = {
      'Recepcionado': 'Paquete recepcionado y registrado en el sistema',
      'En depósito': 'Paquete almacenado en depósito',
      'Clasificado': 'Paquete clasificado y listo para asignación',
      'En tránsito': 'Paquete en tránsito hacia destino',
      'En reparto': 'Paquete en proceso de reparto',
      'Entregado': 'Paquete entregado exitosamente',
      'En devolución': 'Paquete en proceso de devolución',
      'Con reclamo': 'Reclamo registrado para este paquete',
      'Cancelado': 'Envío cancelado'
    };
    return descripciones[nuevoEstado] || `Estado cambiado de ${estadoAnterior} a ${nuevoEstado}`;
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

