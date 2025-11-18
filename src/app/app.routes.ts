import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShipmentsListComponent } from './components/shipments-list/shipments-list.component';
import { ShipmentDetailComponent } from './components/shipment-detail/shipment-detail.component';
import { RoutesComponent } from './components/routes/routes.component';
import { PlansComponent } from './components/plans/plans.component';
import { authGuard } from './guards/auth.guard';

/**
 * Configuración de rutas de la aplicación
 * Las rutas protegidas usan el authGuard para verificar autenticación
 */
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'envios', 
    component: ShipmentsListComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'envio/:id', 
    component: ShipmentDetailComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'rutas', 
    component: RoutesComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'planes', 
    component: PlansComponent,
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/login' }
];

