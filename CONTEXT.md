# Contexto del Proyecto - Sistema de Gestión Logística ByteCore

## Información General

**Proyecto:** Sistema de gestión logística y de paquetería para empresas de transporte de paquetes en Argentina  
**Desarrollado por:** ByteCore  
**Tipo:** Demo web simple

## Objetivo de la Demo

Mostrar, de forma sencilla, cómo una empresa de logística puede:
- Ver sus envíos (paquetes) en diferentes estados
- Consultar detalles de un envío
- Simular la gestión básica de rutas y devoluciones
- Ver un pequeño resumen con estadísticas (totales por estado)

## Requisitos Técnicos

- **Framework:** Angular (última versión disponible)
- **Componentes:** Standalone si es posible
- **Ruteo:** Angular Router básico
- **Backend:** Sin backend real ni base de datos
- **Datos:** Mockeados en memoria (arrays/JSON en un servicio)
- **Tecnologías:** TypeScript + Angular, HTML + CSS (simple o Bootstrap por CDN)
- **Deploy:** Debe poder compilarse a archivos estáticos para GitHub Pages (SPA)

## Funcionalidades Requeridas

### 1. Pantalla de Login Simulado
- Campo "Usuario"
- Campo "Contraseña"
- Botón "Ingresar"
- Validación: campos no vacíos
- Redirige al Dashboard al enviar

### 2. Dashboard Principal
- Nombre ByteCore y descripción
- Tarjetas con estadísticas:
  - Total de envíos
  - Envíos "En tránsito"
  - Envíos "Entregado"
  - Envíos "En devolución" o "Con reclamo"
- Botones de navegación:
  - "Listado de envíos"
  - "Rutas y distribución"
  - "Configuración / Planes"

### 3. Listado de Envíos
- Tabla con:
  - ID de envío
  - Remitente
  - Destinatario
  - Origen
  - Destino
  - Estado
- Filtros:
  - Por estado (dropdown)
  - Búsqueda por ID o destinatario (input)
- Botón "Ver detalle" en cada fila

### 4. Detalle de Envío
- Información completa del envío
- Botones de acción simulados:
  - Cambiar estado a "En tránsito"
  - Cambiar estado a "Entregado"
  - Cambiar estado a "En devolución"
- Actualiza datos en memoria

### 5. Rutas y Distribución
- Lista de rutas de ejemplo
- Para cada ruta:
  - Nombre de la ruta
  - Cantidad de envíos asignados

### 6. Página de Planes
- Plan PYME: para empresas pequeñas/medianas
- Plan Corporativo: para grandes empresas
- Descripción de características de cada plan

## Datos Simulados

- Servicio `ShipmentsService` con:
  - Array de 10-20 envíos de prueba
  - Métodos para:
    - Obtener todos los envíos
    - Filtrar por estado o texto
    - Obtener envío por ID
    - Actualizar estado de envío

## Diseño / UI

- Header con logo/nombre "ByteCore"
- Menú de navegación (Dashboard, Envíos, Rutas, Planes, Cerrar sesión)
- CSS simple (flexbox/grid)
- Responsive (escritorio y móvil)
- Diseño limpio y moderno mínimo

## Estructura de Componentes

- login
- dashboard
- shipments-list
- shipment-detail
- routes
- plans
- navbar

## Buenas Prácticas

- Organización en módulos/componentes
- Enrutado para cambiar entre pantallas
- Binding de datos Angular ([(ngModel)], *ngFor, *ngIf)
- Comentarios en código importante
- README.md con instrucciones completas

