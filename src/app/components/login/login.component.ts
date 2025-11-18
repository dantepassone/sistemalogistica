import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Componente de login simulado
 * No requiere autenticación real, solo valida que los campos no estén vacíos
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  contraseña: string = '';
  error: string = '';

  constructor(private router: Router) {}

  /**
   * Valida el formulario y redirige al dashboard
   */
  ingresar(): void {
    // Validación simple: campos no vacíos
    if (!this.usuario.trim() || !this.contraseña.trim()) {
      this.error = 'Por favor, complete todos los campos';
      return;
    }

    // Simular autenticación exitosa
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/dashboard']);
  }
}

