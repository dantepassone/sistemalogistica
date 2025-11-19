import { Injectable } from '@angular/core';
import { Shipment, PackageType } from '../models/shipment.model';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Servicio para recepción y registro de paquetes
 */
@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  private receptionSubject = new BehaviorSubject<Shipment[]>([]);

  /**
   * Genera un código único de trazabilidad
   */
  generateTrackingCode(): string {
    const prefix = 'LP';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }

  /**
   * Registra un nuevo paquete en el sistema
   */
  registerPackage(data: {
    remitente: string;
    destinatario: string;
    origen: string;
    destino: string;
    ciudad: string;
    provincia: string;
    direccion: string;
    peso: number;
    volumen: number;
    dimensiones: string;
    tipo: PackageType;
    prioridad: 'Normal' | 'Alta' | 'Urgente';
    valorDeclarado: number;
  }): Shipment {
    const codigoTrazabilidad = this.generateTrackingCode();
    const id = `ENV-${Date.now()}`;
    
    const shipment: Shipment = {
      id,
      codigoTrazabilidad,
      ...data,
      estado: 'Recepcionado',
      fechaRecepcion: new Date().toISOString().split('T')[0],
      fechaEstimadaEntrega: this.calculateEstimatedDelivery(data.destino),
      rutaAsignada: this.assignRoute(data.destino),
      historialTracking: [{
        fecha: new Date().toISOString().split('T')[0],
        hora: new Date().toTimeString().split(' ')[0],
        estado: 'Recepcionado',
        descripcion: 'Paquete recepcionado y registrado en el sistema',
        usuario: 'Sistema'
      }]
    };

    return shipment;
  }

  /**
   * Calcula fecha estimada de entrega según destino
   */
  private calculateEstimatedDelivery(destino: string): string {
    const today = new Date();
    const days = destino.includes('CABA') || destino.includes('GBA') ? 1 : 
                 destino.includes('Córdoba') || destino.includes('Rosario') ? 2 : 3;
    today.setDate(today.getDate() + days);
    return today.toISOString().split('T')[0];
  }

  /**
   * Asigna ruta según destino
   */
  private assignRoute(destino: string): string {
    if (destino.includes('CABA') || destino.includes('GBA') || destino.includes('La Plata')) {
      return 'Ruta CABA - GBA';
    } else if (destino.includes('Córdoba') || destino.includes('Tucumán') || destino.includes('Salta')) {
      return 'Ruta Norte';
    } else {
      return 'Ruta Sur';
    }
  }
}

