import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsService } from '../../services/shipments.service';
import { Shipment } from '../../models/shipment.model';

/**
 * Componente para gestión de depósito / centro de distribución
 * Módulo 2: Depósito / Centro de Distribución
 */
@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css'
})
export class WarehouseComponent implements OnInit {
  shipments: Shipment[] = [];
  zonas = {
    recepcion: [] as Shipment[],
    almacenamiento: [] as Shipment[],
    clasificacion: [] as Shipment[],
    despacho: [] as Shipment[]
  };

  capacidadTotal = 1000;
  ocupacionTotal = 0;
  porcentajeOcupacion = 0;

  constructor(private shipmentsService: ShipmentsService) {}

  ngOnInit(): void {
    this.loadShipments();
  }

  loadShipments(): void {
    this.shipmentsService.getAllShipments().subscribe(shipments => {
      this.shipments = shipments;
      this.clasificarPorZonas();
      this.calcularOcupacion();
    });
  }

  /**
   * Clasifica los envíos por zonas del depósito
   */
  clasificarPorZonas(): void {
    this.zonas.recepcion = this.shipments.filter(s => s.estado === 'Recepcionado');
    this.zonas.almacenamiento = this.shipments.filter(s => s.estado === 'En depósito');
    this.zonas.clasificacion = this.shipments.filter(s => s.estado === 'Clasificado');
    this.zonas.despacho = this.shipments.filter(s => s.estado === 'En tránsito' || s.estado === 'En reparto');
  }

  /**
   * Calcula la ocupación del depósito
   */
  calcularOcupacion(): void {
    this.ocupacionTotal = this.shipments
      .filter(s => ['Recepcionado', 'En depósito', 'Clasificado'].includes(s.estado))
      .length;
    this.porcentajeOcupacion = (this.ocupacionTotal / this.capacidadTotal) * 100;
  }

  /**
   * Obtiene el color según el porcentaje de ocupación
   */
  getOcupacionColor(): string {
    if (this.porcentajeOcupacion >= 90) return '#e74c3c';
    if (this.porcentajeOcupacion >= 70) return '#f39c12';
    return '#27ae60';
  }
}

