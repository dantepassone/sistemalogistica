import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShipmentsService } from '../../services/shipments.service';
import { Shipment } from '../../models/shipment.model';

/**
 * Componente que muestra las rutas y distribución de envíos
 */
@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent implements OnInit {
  routes: { ruta: string; cantidad: number; envios: Shipment[] }[] = [];
  selectedRoute: string = '';
  routeShipments: Shipment[] = [];
  showOptimization = false;
  optimizationResult: any = null;

  constructor(
    private shipmentsService: ShipmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRoutes();
  }

  /**
   * Carga las rutas desde el servicio
   */
  loadRoutes(): void {
    const routesData = this.shipmentsService.getShipmentsByRoute();
    this.routes = routesData.map(route => ({
      ...route,
      envios: this.shipmentsService.filterByStatus('En tránsito')
        .filter(s => s.rutaAsignada === route.ruta)
    }));
  }

  /**
   * Selecciona una ruta para ver detalles
   */
  selectRoute(ruta: string): void {
    this.selectedRoute = ruta;
    this.routeShipments = this.shipmentsService.getAllShipmentsSync()
      .filter(s => s.rutaAsignada === ruta && ['En tránsito', 'En reparto', 'Clasificado'].includes(s.estado));
  }

  /**
   * Optimiza una ruta
   */
  optimizeRoute(ruta: string): void {
    const envios = this.shipmentsService.getAllShipmentsSync()
      .filter(s => s.rutaAsignada === ruta && ['Clasificado', 'En depósito'].includes(s.estado));
    
    if (envios.length === 0) {
      alert('No hay envíos para optimizar en esta ruta');
      return;
    }

    // Simulación de optimización
    const totalEnvios = envios.length;
    const distanciaEstimada = totalEnvios * 15; // km promedio
    const tiempoEstimado = totalEnvios * 0.5; // horas
    const costoEstimado = distanciaEstimada * 50; // $ por km

    this.optimizationResult = {
      ruta,
      totalEnvios,
      distanciaEstimada: distanciaEstimada.toFixed(1),
      tiempoEstimado: tiempoEstimado.toFixed(1),
      costoEstimado: costoEstimado.toFixed(2),
      optimizacion: 'Ruta optimizada por proximidad geográfica'
    };

    this.showOptimization = true;
  }

  /**
   * Asigna envíos a una ruta
   */
  assignToRoute(shipment: Shipment, ruta: string): void {
    if (confirm(`¿Asignar envío ${shipment.codigoTrazabilidad} a ${ruta}?`)) {
      this.shipmentsService.updateShipmentRoute(shipment.id, ruta);
      this.loadRoutes();
      if (this.selectedRoute) {
        this.selectRoute(this.selectedRoute);
      }
    }
  }

  /**
   * Ver detalle de envío
   */
  verDetalle(shipment: Shipment): void {
    this.router.navigate(['/envio', shipment.id]);
  }

  /**
   * Cierra la optimización
   */
  closeOptimization(): void {
    this.showOptimization = false;
    this.optimizationResult = null;
  }
}

