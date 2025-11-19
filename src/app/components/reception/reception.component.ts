import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReceptionService } from '../../services/reception.service';
import { ShipmentsService } from '../../services/shipments.service';
import { PackageType } from '../../models/shipment.model';

/**
 * Componente para recepción y registro de paquetes
 * Módulo 1: Recepción y Registro de Paquetes
 */
@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {
  // Datos del formulario
  formData = {
    remitente: '',
    destinatario: '',
    origen: 'Buenos Aires',
    destino: '',
    ciudad: '',
    provincia: '',
    direccion: '',
    peso: 0,
    volumen: 0,
    dimensiones: '',
    tipo: 'Paquete' as PackageType,
    prioridad: 'Normal' as 'Normal' | 'Alta' | 'Urgente',
    valorDeclarado: 0
  };

  tiposPaquete: PackageType[] = ['Paquete', 'Sobre', 'Caja', 'Pallet', 'Carga Especial'];
  prioridades = ['Normal', 'Alta', 'Urgente'];
  provincias = ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Tucumán', 'Salta', 'Corrientes', 'Neuquén', 'San Juan'];
  
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(
    private receptionService: ReceptionService,
    private shipmentsService: ShipmentsService,
    private router: Router
  ) {}

  /**
   * Calcula el volumen automáticamente si se ingresan dimensiones
   */
  calcularVolumen(): void {
    if (this.formData.dimensiones) {
      // Formato esperado: "30x20x15 cm" o "30x20x15"
      const dims = this.formData.dimensiones.match(/(\d+)\s*x\s*(\d+)\s*x\s*(\d+)/i);
      if (dims) {
        const largo = parseFloat(dims[1]) / 100; // convertir cm a m
        const ancho = parseFloat(dims[2]) / 100;
        const alto = parseFloat(dims[3]) / 100;
        this.formData.volumen = largo * ancho * alto;
      }
    }
  }

  /**
   * Registra el paquete en el sistema
   */
  registrarPaquete(): void {
    // Limpiar mensajes previos
    this.mensajeError = '';
    this.mensajeExito = '';

    // Validación completa
    if (!this.formData.remitente?.trim()) {
      this.mensajeError = 'El campo Remitente es obligatorio';
      return;
    }
    if (!this.formData.destinatario?.trim()) {
      this.mensajeError = 'El campo Destinatario es obligatorio';
      return;
    }
    if (!this.formData.destino?.trim()) {
      this.mensajeError = 'El campo Destino es obligatorio';
      return;
    }
    if (!this.formData.ciudad?.trim()) {
      this.mensajeError = 'El campo Ciudad es obligatorio';
      return;
    }
    if (!this.formData.provincia?.trim()) {
      this.mensajeError = 'Debe seleccionar una Provincia';
      return;
    }
    if (!this.formData.direccion?.trim()) {
      this.mensajeError = 'El campo Dirección es obligatorio';
      return;
    }
    if (!this.formData.peso || this.formData.peso <= 0) {
      this.mensajeError = 'El peso debe ser mayor a 0';
      return;
    }
    if (!this.formData.tipo) {
      this.mensajeError = 'Debe seleccionar un tipo de paquete';
      return;
    }

    try {
      const nuevoEnvio = this.receptionService.registerPackage(this.formData);
      
      // Agregar al servicio de envíos
      this.shipmentsService.addShipment(nuevoEnvio);
      
      this.mensajeExito = `✅ Paquete registrado exitosamente! Código de trazabilidad: ${nuevoEnvio.codigoTrazabilidad}`;
      this.mensajeError = '';
      
      // Limpiar formulario después de 3 segundos y redirigir
      setTimeout(() => {
        this.limpiarFormulario();
        this.router.navigate(['/envios']);
      }, 3000);
    } catch (error: any) {
      console.error('Error al registrar paquete:', error);
      this.mensajeError = error?.message || 'Error al registrar el paquete. Intente nuevamente.';
      this.mensajeExito = '';
    }
  }

  /**
   * Limpia el formulario
   */
  limpiarFormulario(): void {
    this.formData = {
      remitente: '',
      destinatario: '',
      origen: 'Buenos Aires',
      destino: '',
      ciudad: '',
      provincia: '',
      direccion: '',
      peso: 0,
      volumen: 0,
      dimensiones: '',
      tipo: 'Paquete',
      prioridad: 'Normal',
      valorDeclarado: 0
    };
    this.mensajeExito = '';
    this.mensajeError = '';
  }
}

