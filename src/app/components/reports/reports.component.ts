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
    const shipments = this.shipmentsService.getAllShipmentsSync();
    const stats = this.shipmentsService.getStatistics();
    
    this.statistics.totalEntregas = stats.entregado;
    
    // Calcular tiempo promedio de entrega real
    const entregados = shipments.filter(s => s.estado === 'Entregado' && s.fechaEntrega && s.fechaRecepcion);
    if (entregados.length > 0) {
      const tiempos = entregados.map(s => {
        const fechaRecepcion = new Date(s.fechaRecepcion!);
        const fechaEntrega = new Date(s.fechaEntrega!);
        const diffTime = Math.abs(fechaEntrega.getTime() - fechaRecepcion.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // días
      });
      this.statistics.tiempoPromedioEntrega = tiempos.reduce((a, b) => a + b, 0) / tiempos.length;
    } else {
      this.statistics.tiempoPromedioEntrega = 2.5; // valor por defecto
    }
    
    // Calcular tasa de éxito
    if (stats.total > 0) {
      this.statistics.tasaEntregaExitosa = (stats.entregado / stats.total) * 100;
    } else {
      this.statistics.tasaEntregaExitosa = 0;
    }
    
    // Calcular costo total (basado en envíos en tránsito y entregados)
    const enviosActivos = shipments.filter(s => 
      ['En tránsito', 'En reparto', 'Entregado'].includes(s.estado)
    );
    this.statistics.costoTotalDistribucion = enviosActivos.length * 1500; // $1500 por envío
  }
}

