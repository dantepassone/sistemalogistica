# 📚 Documentación Técnica - LogisPro

## 🏗️ Arquitectura del Sistema

### Estructura de Componentes

El sistema utiliza **componentes standalone** de Angular 17, lo que permite una arquitectura más modular y flexible.

```
app/
├── components/          # Componentes de UI
├── models/              # Interfaces y tipos TypeScript
├── services/            # Lógica de negocio y datos
├── guards/             # Protección de rutas
└── app.routes.ts        # Configuración de routing
```

### Flujo de Datos

```
Component → Service → Model → BehaviorSubject → Component
```

Los servicios utilizan `BehaviorSubject` de RxJS para mantener el estado reactivo y notificar cambios a todos los componentes suscritos.

## 🔄 Flujo de Estados de Envío

### Estados Posibles

```
Recepcionado → En depósito → Clasificado → En tránsito → En reparto → Entregado
                                    ↓
                            En devolución / Con reclamo / Cancelado
```

### Transiciones Válidas

- **Recepcionado** → En depósito
- **En depósito** → Clasificado
- **Clasificado** → En tránsito
- **En tránsito** → En reparto
- **En reparto** → Entregado
- Cualquier estado → En devolución / Con reclamo / Cancelado

## 📦 Modelos de Datos

### Shipment (Envío)

```typescript
interface Shipment {
  id: string;
  codigoTrazabilidad: string;
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  ciudad: string;
  provincia: string;
  direccion: string;
  estado: ShipmentStatus;
  fechaRecepcion?: string;
  fechaEstimadaEntrega: string;
  fechaEntrega?: string;
  rutaAsignada: string;
  vehiculoAsignado?: string;
  choferAsignado?: string;
  peso: number;
  volumen: number;
  dimensiones: string;
  tipo: PackageType;
  prioridad: 'Normal' | 'Alta' | 'Urgente';
  valorDeclarado: number;
  ubicacionActual?: string;
  historialTracking?: TrackingEvent[];
  zonaDeposito?: string;
}
```

### TrackingEvent

```typescript
interface TrackingEvent {
  fecha: string;
  hora: string;
  estado: ShipmentStatus;
  ubicacion?: string;
  descripcion: string;
  usuario?: string;
}
```

## 🔌 Servicios

### ShipmentsService

**Responsabilidades:**
- Gestión de envíos (CRUD)
- Actualización de estados con historial automático
- Cálculo de estadísticas
- Filtrado y búsqueda

**Métodos principales:**
- `getAllShipments()`: Observable de todos los envíos
- `getAllShipmentsSync()`: Array síncrono de envíos
- `addShipment()`: Agregar nuevo envío
- `updateShipmentStatus()`: Actualizar estado con historial
- `getStatistics()`: Calcular estadísticas
- `filterByStatus()`: Filtrar por estado
- `searchShipments()`: Buscar por texto

### ReceptionService

**Responsabilidades:**
- Generación de códigos de trazabilidad únicos
- Registro de nuevos paquetes
- Asignación automática de rutas
- Cálculo de fechas estimadas

## 🛡️ Guards

### AuthGuard

Protege las rutas que requieren autenticación. Verifica la existencia de `isAuthenticated` en localStorage.

```typescript
canActivate(): boolean {
  return localStorage.getItem('isAuthenticated') === 'true';
}
```

## 🎨 Estilos y Diseño

### Sistema de Colores

- **Primario**: `#667eea` (Azul púrpura)
- **Secundario**: `#764ba2` (Púrpura)
- **Éxito**: `#27ae60` (Verde)
- **Advertencia**: `#f39c12` (Naranja)
- **Error**: `#e74c3c` (Rojo)

### Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Móvil**: < 768px

## 🔐 Autenticación

El sistema utiliza autenticación simulada:

- **Login**: Cualquier usuario/contraseña válida
- **Almacenamiento**: `localStorage.setItem('isAuthenticated', 'true')`
- **Protección**: `AuthGuard` en todas las rutas excepto login

## 📊 Cálculos y Estadísticas

### Tiempo Promedio de Entrega

```typescript
const entregados = shipments.filter(s => 
  s.estado === 'Entregado' && s.fechaEntrega && s.fechaRecepcion
);
const tiempos = entregados.map(s => {
  const diff = new Date(s.fechaEntrega) - new Date(s.fechaRecepcion);
  return Math.ceil(diff / (1000 * 60 * 60 * 24)); // días
});
const promedio = tiempos.reduce((a, b) => a + b, 0) / tiempos.length;
```

### Tasa de Éxito

```typescript
const tasa = (entregados / total) * 100;
```

## 🚀 Optimización

### Build de Producción

- **Tree-shaking**: Elimina código no usado
- **Minificación**: Comprime JavaScript y CSS
- **AOT Compilation**: Compilación anticipada
- **Output Hashing**: Nombres únicos para cache busting

### Performance

- Componentes standalone (menor bundle size)
- Lazy loading de rutas (si se implementa)
- OnPush change detection (optimización futura)

## 🧪 Testing

Para ejecutar tests (cuando se implementen):

```bash
npm test
```

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: `kebab-case.component.ts`
- Servicios: `kebab-case.service.ts`
- Modelos: `kebab-case.model.ts`

### Estructura de Componentes
```typescript
// 1. Imports
// 2. Decorator
// 3. Class
// 4. Properties
// 5. Constructor
// 6. Lifecycle hooks
// 7. Methods
```

## 🔄 Actualizaciones Futuras

### Mejoras Sugeridas

1. **Validación de Flujo de Estados**: Prevenir transiciones inválidas
2. **Notificaciones Toast**: Reemplazar `alert()` por notificaciones elegantes
3. **Lazy Loading**: Cargar módulos bajo demanda
4. **PWA**: Convertir en Progressive Web App
5. **Backend Real**: Integración con API REST
6. **Base de Datos**: Persistencia de datos

---

**Última actualización**: 2024

