import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Componente de barra de navegación
 * Muestra el menú principal de la aplicación
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  /**
   * Verifica si está en móvil
   */
  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  /**
   * Toggle del menú móvil
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Cierra el menú móvil
   */
  closeMenu(): void {
    this.menuOpen = false;
  }

  /**
   * Cierra sesión y redirige al login
   */
  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}

