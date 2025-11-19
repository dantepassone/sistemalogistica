import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShipmentsService } from '../../services/shipments.service';
import { Subscription } from 'rxjs';

/**
 * Componente del dashboard principal
 * Muestra estadísticas y enlaces a las diferentes secciones
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  statistics = {
    total: 0,
    enTransito: 0,
    entregado: 0,
    enDevolucion: 0
  };

  private subscription?: Subscription;

  constructor(
    private shipmentsService: ShipmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar estadísticas al iniciar
    this.loadStatistics();
    
    // Suscribirse a cambios en los envíos para actualizar estadísticas
    this.subscription = this.shipmentsService.getAllShipments().subscribe(() => {
      this.loadStatistics();
    });
  }

  ngOnDestroy(): void {
    // Limpiar suscripción al destruir el componente
    this.subscription?.unsubscribe();
  }

  /**
   * Carga las estadísticas desde el servicio
   */
  loadStatistics(): void {
    this.statistics = this.shipmentsService.getStatistics();
  }

  /**
   * Navega a la sección de envíos
   */
  goToShipments(): void {
    this.router.navigate(['/envios']);
  }

  /**
   * Navega a la sección de rutas
   */
  goToRoutes(): void {
    this.router.navigate(['/rutas']);
  }

  /**
   * Navega a la sección de recepción
   */
  goToReception(): void {
    this.router.navigate(['/recepcion']);
  }

  /**
   * Navega a la sección de depósito
   */
  goToWarehouse(): void {
    this.router.navigate(['/deposito']);
  }

  /**
   * Navega a la sección de flota
   */
  goToFleet(): void {
    this.router.navigate(['/flota']);
  }

  /**
   * Navega a la sección de reclamos
   */
  goToClaims(): void {
    this.router.navigate(['/reclamos']);
  }

  /**
   * Navega a la sección de reportes
   */
  goToReports(): void {
    this.router.navigate(['/reportes']);
  }

  /**
   * Navega a la sección de planes
   */
  goToPlans(): void {
    this.router.navigate(['/planes']);
  }

  /**
   * Verifica si el usuario ya vio la guía
   */
  hasViewedGuide(): boolean {
    return localStorage.getItem('guideViewed') === 'true';
  }
}

