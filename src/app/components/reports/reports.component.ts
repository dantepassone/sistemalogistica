import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsService } from '../../services/shipments.service';

/**
 * Componente para reportes y analítica
 * Módulo 7: Reportes y Analítica
 */
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  statistics = {
    totalEntregas: 0,
    tiempoPromedioEntrega: 0,
    tasaEntregaExitosa: 0,
    totalReclamos: 2,
    costoTotalDistribucion: 0
  };

  constructor(private shipmentsService: ShipmentsService) {}

  ngOnInit(): void {
    this.calculateStatistics();
  }

  calculateStatistics(): void {
    const stats = this.shipmentsService.getStatistics();
    this.statistics.totalEntregas = stats.entregado;
    this.statistics.tiempoPromedioEntrega = 2.5; // días (mock)
    this.statistics.tasaEntregaExitosa = ((stats.entregado / stats.total) * 100);
    this.statistics.costoTotalDistribucion = stats.total * 1500; // costo promedio por envío
  }
}

