# ByteCore - Sistema de Gestión Logística

Sistema de gestión logística y de paquetería para empresas de transporte de paquetes en Argentina. Demo web desarrollada con Angular.

## 📋 Descripción

Esta es una aplicación demo que muestra cómo una empresa de logística puede:
- Ver sus envíos (paquetes) en diferentes estados
- Consultar detalles de un envío
- Simular la gestión básica de rutas y devoluciones
- Ver un pequeño resumen con estadísticas (totales por estado)

## 🛠️ Tecnologías Usadas

- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **HTML5 / CSS3** - Estructura y estilos
- **RxJS** - Programación reactiva
- **Angular Router** - Navegación entre componentes

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (viene incluido con Node.js)

### Instalación

1. Clona el repositorio o descarga el proyecto
2. Abre una terminal en la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

### Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm start
```

O alternativamente:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

El servidor de desarrollo se recargará automáticamente cuando cambies algún archivo.

## 📦 Compilar para Producción

Para compilar el proyecto para producción:

```bash
npm run build
```

O:

```bash
ng build --configuration production
```

Los archivos compilados se generarán en la carpeta `dist/sistema-logistica/`

### Compilar para GitHub Pages

Si vas a publicar en GitHub Pages, usa el siguiente comando que incluye el `base-href` correcto:

```bash
npm run build:prod
```

Este comando compila con `--base-href /sistemalogistica/` (ajusta el nombre según tu repositorio).

## 🌐 Publicar en GitHub Pages

### Opción 1: Usando GitHub Actions (Recomendado)

1. Crea un archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build:prod
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/sistema-logistica
```

2. Ajusta el `base-href` en `package.json` según el nombre de tu repositorio
3. Haz commit y push. GitHub Actions se encargará del deploy automáticamente

### Opción 2: Deploy Manual

1. Compila el proyecto con `npm run build:prod`
2. Instala `gh-pages` globalmente: `npm install -g gh-pages`
3. Publica la carpeta `dist/sistema-logistica`:

```bash
gh-pages -d dist/sistema-logistica
```

### Opción 3: Usando el branch gh-pages

1. Compila el proyecto: `npm run build:prod`
2. Copia el contenido de `dist/sistema-logistica` a un branch `gh-pages`
3. Configura GitHub Pages para usar el branch `gh-pages` como fuente

**Importante:** Asegúrate de ajustar el `base-href` en `package.json` según el nombre de tu repositorio en GitHub.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/          # Dashboard principal
│   │   ├── login/              # Pantalla de login
│   │   ├── navbar/             # Barra de navegación
│   │   ├── shipments-list/     # Listado de envíos
│   │   ├── shipment-detail/    # Detalle de envío
│   │   ├── routes/             # Rutas y distribución
│   │   └── plans/              # Planes y configuración
│   ├── models/
│   │   └── shipment.model.ts   # Modelo de datos de envío
│   ├── services/
│   │   └── shipments.service.ts # Servicio con datos mock
│   ├── app.component.ts        # Componente raíz
│   ├── app.routes.ts           # Configuración de rutas
│   └── ...
├── index.html
├── main.ts
└── styles.css                   # Estilos globales
```

## 🎯 Funcionalidades

### 1. Login Simulado
- Formulario de login con validación básica
- No requiere autenticación real
- Redirige al dashboard al completar

### 2. Dashboard
- Estadísticas en tiempo real:
  - Total de envíos
  - Envíos en tránsito
  - Envíos entregados
  - Devoluciones y reclamos
- Accesos rápidos a las diferentes secciones

### 3. Listado de Envíos
- Tabla con todos los envíos
- Filtros por estado
- Búsqueda por ID, remitente o destinatario
- Acceso al detalle de cada envío

### 4. Detalle de Envío
- Información completa del envío
- Cambio de estado (En tránsito, Entregado, En devolución)
- Actualización en tiempo real

### 5. Rutas y Distribución
- Visualización de rutas asignadas
- Cantidad de envíos por ruta
- Información sobre el sistema de rutas

### 6. Planes
- Información sobre Plan PYME
- Información sobre Plan Corporativo
- Comparación de características

## 📝 Notas Importantes

- **Sin Backend**: Todos los datos son mockeados en memoria usando el servicio `ShipmentsService`
- **Sin Base de Datos**: Los cambios se mantienen solo durante la sesión del navegador
- **Componentes Standalone**: El proyecto usa componentes standalone de Angular para simplificar la estructura
- **Responsive**: La aplicación es responsive y se adapta a diferentes tamaños de pantalla

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run build:prod` - Compila para producción con base-href para GitHub Pages

## 📄 Licencia

Este proyecto es una demo desarrollada por ByteCore.

## 👥 Desarrollo

Desarrollado por **ByteCore** - Sistema de gestión logística y de paquetería

---

Para más información o consultas, contacta al equipo de desarrollo.

