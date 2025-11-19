# 🚚 LogisPro por ByteCore

**Sistema de Gestión Logística y de Paquetería para Empresas de Transporte en Argentina**

[![Angular](https://img.shields.io/badge/Angular-17-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Descripción

LogisPro es una plataforma integral de gestión logística desarrollada por **ByteCore** que permite a las empresas de transporte gestionar eficientemente sus operaciones de paquetería. El sistema incluye 7 módulos principales que cubren todo el ciclo de vida de un envío, desde la recepción hasta la entrega final.

### ✨ Características Principales

- ✅ **7 Módulos Funcionales**: Recepción, Depósito, Envíos, Rutas, Flota, Reclamos y Reportes
- ✅ **Trazabilidad Completa**: Código único de seguimiento para cada paquete
- ✅ **Historial Automático**: Registro completo de todos los eventos del envío
- ✅ **Optimización de Rutas**: Sistema de planificación y optimización de entregas
- ✅ **Gestión de Flota**: Control de vehículos y asignación de recursos
- ✅ **Reportes en Tiempo Real**: Estadísticas y analítica del sistema
- ✅ **Interfaz Intuitiva**: Diseño moderno y responsive
- ✅ **Guía Integrada**: Tutorial interactivo para nuevos usuarios

## 🎯 Módulos del Sistema

### 1. 📥 Módulo de Recepción y Registro
- Registro de nuevos paquetes con datos completos
- Generación automática de código único de trazabilidad
- Validación de datos y cálculo automático de volumen
- Asignación automática de ruta según destino

### 2. 🏭 Módulo de Depósito / Centro de Distribución
- Visualización de paquetes por zonas (Recepción, Almacenamiento, Clasificación, Despacho)
- Movimiento de paquetes entre zonas
- Control de capacidad y ocupación del depósito
- Seguimiento de ubicación física de cada paquete

### 3. 📋 Módulo de Envíos y Seguimiento
- Listado completo de envíos con filtros avanzados
- Búsqueda por código de trazabilidad, ID, remitente, destinatario, destino
- Vista detallada con historial completo de tracking
- Cambio de estados con registro automático en historial
- Timeline visual del recorrido del paquete

### 4. 🗺️ Módulo de Planificación y Optimización de Rutas
- Visualización de rutas asignadas (Norte, Sur, CABA-GBA)
- Optimización automática de rutas con cálculo de distancia, tiempo y costo
- Asignación de envíos a rutas
- Detalles de envíos por ruta

### 5. 🚛 Módulo de Flota y Recursos
- Gestión de vehículos disponibles
- Asignación de envíos a vehículos
- Control de estados (Disponible, En ruta, En mantenimiento)
- Información de choferes y capacidad
- Seguimiento de mantenimiento

### 6. ⚠️ Módulo de Reclamos y Devoluciones
- Registro de nuevos reclamos y devoluciones
- Seguimiento de casos con estados (Abierto, En investigación, Resuelto, Cerrado)
- Gestión de prioridades
- Vinculación con envíos

### 7. 📊 Módulo de Reportes y Analítica
- Estadísticas en tiempo real
- Tiempo promedio de entrega calculado automáticamente
- Tasa de éxito de entregas
- Costos de distribución
- Indicadores operativos (KPIs)

## 🛠️ Tecnologías Usadas

- **Angular 17** - Framework principal con componentes standalone
- **TypeScript 5.2** - Lenguaje de programación
- **RxJS** - Programación reactiva (Observables, BehaviorSubject)
- **Angular Router** - Navegación entre componentes
- **HTML5 / CSS3** - Estructura y estilos responsive
- **GitHub Pages** - Hosting estático

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** 18 o superior
- **npm** (incluido con Node.js)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/sistemalogistica.git
   cd sistemalogistica
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:4200`

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo en `http://localhost:4200` |
| `npm run build` | Compila para producción (sin base-href) |
| `npm run build:prod` | Compila para producción con base-href para GitHub Pages |
| `npm test` | Ejecuta las pruebas unitarias |

## 🌐 Despliegue en GitHub Pages

### Opción 1: Deploy Automático con GitHub Actions (Recomendado) ✅

El proyecto incluye un workflow de GitHub Actions que despliega automáticamente en cada push a `main` o `master`.

**Pasos:**

1. **Ajustar el base-href** en `package.json`:
   ```json
   "build:prod": "ng build --configuration production --base-href /NOMBRE-DE-TU-REPO/"
   ```
   Reemplaza `NOMBRE-DE-TU-REPO` con el nombre de tu repositorio en GitHub.

2. **Habilitar GitHub Pages** en tu repositorio:
   - Ve a **Settings** → **Pages**
   - En **Source**, selecciona **GitHub Actions**

3. **Hacer commit y push**:
   ```bash
   git add .
   git commit -m "Configurar GitHub Pages"
   git push origin main
   ```

4. **Verificar el deploy**:
   - Ve a la pestaña **Actions** en GitHub
   - Espera a que el workflow termine
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/sistemalogistica/`

### Opción 2: Deploy Manual

1. **Compilar el proyecto**:
   ```bash
   npm run build:prod
   ```

2. **Instalar gh-pages** (si no lo tienes):
   ```bash
   npm install -g gh-pages
   ```

3. **Publicar**:
   ```bash
   gh-pages -d dist/sistema-logistica
   ```

### ⚠️ Importante: Configurar Base-Href

Antes de desplegar, asegúrate de que el `base-href` en `package.json` coincida con el nombre de tu repositorio:

- Si tu repo es `sistemalogistica` → `--base-href /sistemalogistica/`
- Si tu repo es `logispro` → `--base-href /logispro/`
- Si es la raíz del usuario → `--base-href /`

## 📁 Estructura del Proyecto

```
sistemalogistica/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de GitHub Actions
├── src/
│   ├── app/
│   │   ├── components/         # Componentes de la aplicación
│   │   │   ├── dashboard/      # Dashboard principal
│   │   │   ├── login/          # Pantalla de login
│   │   │   ├── guide/          # Guía de uso del sistema
│   │   │   ├── reception/      # Recepción de paquetes
│   │   │   ├── warehouse/     # Depósito y distribución
│   │   │   ├── shipments-list/ # Listado de envíos
│   │   │   ├── shipment-detail/# Detalle de envío
│   │   │   ├── routes/         # Rutas y optimización
│   │   │   ├── fleet/          # Gestión de flota
│   │   │   ├── claims/         # Reclamos y devoluciones
│   │   │   ├── reports/        # Reportes y analítica
│   │   │   └── ...
│   │   ├── models/             # Modelos de datos
│   │   │   ├── shipment.model.ts
│   │   │   ├── vehicle.model.ts
│   │   │   ├── claim.model.ts
│   │   │   └── ...
│   │   ├── services/            # Servicios
│   │   │   ├── shipments.service.ts
│   │   │   └── reception.service.ts
│   │   ├── guards/             # Guards de autenticación
│   │   ├── app.routes.ts       # Configuración de rutas
│   │   └── app.component.ts    # Componente raíz
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── README.md
```

## 🎮 Cómo Usar el Sistema

### Primer Acceso

1. **Login**: Ingresa cualquier usuario y contraseña (sistema simulado)
2. **Guía**: Si es tu primera vez, verás una guía interactiva
3. **Dashboard**: Accede al dashboard principal con estadísticas

### Flujo de Trabajo Típico

1. **📥 Recepción**: Registra un nuevo paquete
   - Completa el formulario con datos del remitente y destinatario
   - El sistema genera automáticamente un código de trazabilidad único
   - El paquete queda en estado "Recepcionado"

2. **🏭 Depósito**: Mueve el paquete entre zonas
   - Recepción → En depósito → Clasificado → Despacho
   - Cada movimiento se registra en el historial

3. **🚛 Flota**: Asigna un vehículo
   - Selecciona un vehículo disponible
   - Asigna el envío al vehículo
   - El estado cambia automáticamente a "En tránsito"

4. **📋 Envíos**: Realiza seguimiento
   - Busca por código de trazabilidad
   - Visualiza el historial completo
   - Cambia estados según avance

5. **✅ Entrega**: Marca como entregado
   - Al cambiar a "Entregado", se guarda la fecha automáticamente
   - El historial se actualiza

## 🔍 Funcionalidades Detalladas

### Búsqueda Avanzada
- Por código de trazabilidad
- Por ID de envío
- Por remitente o destinatario
- Por destino o ciudad
- Filtros por estado

### Historial de Tracking
- Registro automático de todos los eventos
- Fecha, hora y usuario de cada cambio
- Descripción contextual de cada evento
- Timeline visual en el detalle del envío

### Optimización de Rutas
- Cálculo de distancia estimada
- Tiempo estimado de entrega
- Costo estimado de la ruta
- Agrupación por zona geográfica

## 📝 Notas Importantes

- **Sin Backend**: Todos los datos son mockeados en memoria
- **Sin Base de Datos**: Los cambios se mantienen solo durante la sesión del navegador
- **Componentes Standalone**: Arquitectura moderna de Angular 17
- **Responsive**: Funciona en desktop, tablet y móvil
- **SPA**: Single Page Application sin dependencias de servidor

## 🐛 Solución de Problemas

### Error: "Cannot GET /"
- Asegúrate de que el servidor esté corriendo con `npm start`
- Verifica que estés accediendo a `http://localhost:4200`

### Error en GitHub Pages: Página en blanco
- Verifica que el `base-href` en `package.json` coincida con el nombre de tu repo
- Asegúrate de que el workflow de GitHub Actions haya terminado exitosamente

### Error: "npm no reconocido"
- Instala Node.js desde [nodejs.org](https://nodejs.org/)
- Reinicia la terminal después de instalar

## 📚 Documentación Adicional

- [Guía de Uso del Sistema](src/app/components/guide/) - Guía interactiva integrada
- [Mejoras Implementadas](MEJORAS_IMPLEMENTADAS.md) - Lista de mejoras realizadas
- [Evaluación del Sistema](EVALUACIÓN_Y_MEJORAS.md) - Análisis del sistema

## 🤝 Contribuir

Este es un proyecto demo desarrollado por ByteCore. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es una demo desarrollada por **ByteCore**.

## 👥 Desarrollo

**Desarrollado por ByteCore**  
Sistema de gestión logística y de paquetería para empresas de transporte en Argentina.

---

## 🔗 Enlaces Útiles

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📚 Documentación Adicional

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Guía completa de despliegue en GitHub Pages
- **[DOCUMENTACION_TECNICA.md](DOCUMENTACION_TECNICA.md)** - Documentación técnica detallada
- **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - Guía rápida de inicio
- **[CHANGELOG.md](CHANGELOG.md)** - Historial de cambios

## 🎯 Estado del Proyecto

✅ **Sistema Funcional** - Todos los módulos operativos  
✅ **Listo para GitHub Pages** - Configuración completa  
✅ **Documentación Completa** - Guías y documentación técnica  
✅ **Responsive** - Funciona en todos los dispositivos  

---

**¿Necesitas ayuda?** Revisa la guía integrada en el sistema o consulta la documentación técnica.
