import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShipmentsListComponent } from './components/shipments-list/shipments-list.component';
import { ShipmentDetailComponent } from './components/shipment-detail/shipment-detail.component';
import { RoutesComponent } from './components/routes/routes.component';
import { PlansComponent } from './components/plans/plans.component';
import { ReceptionComponent } from './components/reception/reception.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GuideComponent } from './components/guide/guide.component';
import { authGuard } from './guards/auth.guard';

/**
 * Configuración de rutas de la aplicación
 * Las rutas protegidas usan el authGuard para verificar autenticación
 */
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'guia', 
    component: GuideComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'recepcion', 
    component: ReceptionComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'deposito', 
    component: WarehouseComponent,
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
    path: 'flota', 
    component: FleetComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'reclamos', 
    component: ClaimsComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'reportes', 
    component: ReportsComponent,
    canActivate: [authGuard]
  },
  { 
    path: 'planes', 
    component: PlansComponent,
    canActivate: [authGuard]
  },
  { 
    path: '404', 
    component: NotFoundComponent
  },
  { path: '**', component: NotFoundComponent }
];

