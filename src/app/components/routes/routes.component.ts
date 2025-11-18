import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsService } from '../../services/shipments.service';

/**
 * Componente que muestra las rutas y distribución de envíos
 */
@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent implements OnInit {
  routes: { ruta: string; cantidad: number }[] = [];

  constructor(private shipmentsService: ShipmentsService) {}

  ngOnInit(): void {
    this.loadRoutes();
  }

  /**
   * Carga las rutas desde el servicio
   */
  loadRoutes(): void {
    this.routes = this.shipmentsService.getShipmentsByRoute();
  }
}

