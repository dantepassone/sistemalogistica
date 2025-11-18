import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente que muestra los planes disponibles (PYME y Corporativo)
 */
@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  // Datos de los planes
  plans = [
    {
      name: 'Plan PYME',
      description: 'Ideal para empresas pequeñas y medianas',
      price: 'Consultar',
      features: [
        'Hasta 5 usuarios',
        'Hasta 3 sucursales',
        'Gestión básica de envíos',
        'Reportes estándar',
        'Soporte por email',
        'Actualizaciones mensuales'
      ],
      icon: '🏢',
      color: '#667eea'
    },
    {
      name: 'Plan Corporativo',
      description: 'Para grandes empresas con alto volumen de envíos',
      price: 'Consultar',
      features: [
        'Usuarios ilimitados',
        'Sucursales ilimitadas',
        'Gestión avanzada de envíos',
        'Reportes personalizados y analytics',
        'Soporte prioritario 24/7',
        'Actualizaciones continuas',
        'API personalizada',
        'Integración con sistemas existentes',
        'Capacitación dedicada'
      ],
      icon: '🏛️',
      color: '#764ba2'
    }
  ];
}

