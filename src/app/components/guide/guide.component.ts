import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

/**
 * Componente de guía y bienvenida del sistema
 * Explica cómo usar el sistema, el flujo y los módulos
 */
@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {
  showFullGuide = false;

  constructor(private router: Router) {}

  /**
   * Alterna la visualización de la guía completa
   */
  toggleGuide(): void {
    this.showFullGuide = !this.showFullGuide;
  }

  /**
   * Navega al dashboard
   */
  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * Marca la guía como vista
   */
  markAsRead(): void {
    localStorage.setItem('guideViewed', 'true');
    this.goToDashboard();
  }
}

