# ⚡ Guía Rápida - LogisPro

## 🌐 Probar Sin Instalar

**Demo en vivo:** [https://dantepassone.github.io/sistemalogistica/](https://dantepassone.github.io/sistemalogistica/)

Puedes probar el sistema completo sin instalar nada. Solo ingresa cualquier usuario y contraseña.

## 🚀 Inicio Rápido (3 pasos)

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```

3. **Abrir en navegador**
   ```
   http://localhost:4200
   ```

## 📦 Compilar para Producción

```bash
npm run build:prod
```

Los archivos estarán en `dist/sistema-logistica/`

## 🌐 Desplegar en GitHub Pages

### ⚡ Proceso Rápido (Sin Compilar Manualmente)

1. **Ajusta el base-href** en `package.json` línea 9:
   - Cambia `/sistemalogistica/` por el nombre de tu repo

2. **Habilita GitHub Pages**:
   - Settings → Pages → Source: **GitHub Actions**

3. **Push a main** (GitHub compilará automáticamente):
   ```bash
   git add .
   git commit -m "Deploy"
   git push origin main
   ```

4. **Espera** a que el workflow termine en la pestaña **Actions** (2-3 minutos)

5. **Accede** a: `https://tu-usuario.github.io/sistemalogistica/`

### 💡 ¿Compilar Antes?

**No es necesario**, pero puedes hacerlo para verificar:
```bash
npm run build:prod  # Verifica que compila sin errores
```

### Opción Manual

```bash
npm run deploy
```

## 🔑 Login

- **Usuario**: Cualquier texto
- **Contraseña**: Cualquier texto
- El sistema es simulado, no requiere autenticación real

## 📚 Documentación Completa

- [README.md](README.md) - Documentación principal
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía de despliegue detallada
- [DOCUMENTACION_TECNICA.md](DOCUMENTACION_TECNICA.md) - Documentación técnica

## ⚙️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run build:prod` | Build para GitHub Pages |
| `npm run deploy` | Build + Deploy manual |

## 🆘 Problemas Comunes

**Error: npm no reconocido**
→ Instala Node.js desde [nodejs.org](https://nodejs.org/)

**Página en blanco en GitHub Pages**
→ Verifica que el `base-href` coincida con el nombre de tu repo

**Error 404 en rutas**
→ Asegúrate de usar GitHub Actions como fuente en Pages

---

**¿Listo?** ¡Empieza a usar LogisPro! 🎉

