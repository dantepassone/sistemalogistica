# 🚀 Instrucciones de Deploy - GitHub Pages

## ❓ ¿Hay que compilar antes?

### Respuesta Corta: **NO es necesario** ✅

El workflow de GitHub Actions compila automáticamente en el servidor de GitHub cuando haces push.

### Pero es RECOMENDABLE compilar localmente primero

Para verificar que todo funciona antes de hacer push.

## 📋 Proceso Recomendado

### Opción 1: Verificación Local (Recomendada) ✅

1. **Compilar localmente para verificar**:
   ```bash
   npm run build:prod
   ```
   
2. **Verificar que no hay errores**:
   - Si compila sin errores, está listo
   - Si hay errores, corrígelos antes de hacer push

3. **Hacer push**:
   ```bash
   git add .
   git commit -m "Deploy a GitHub Pages"
   git push origin main
   ```

4. **GitHub Actions compilará automáticamente** en el servidor

### Opción 2: Deploy Directo (Más Rápido)

1. **Solo hacer push** (sin compilar localmente):
   ```bash
   git add .
   git commit -m "Deploy a GitHub Pages"
   git push origin main
   ```

2. **GitHub Actions se encarga de todo**:
   - Instala dependencias
   - Compila el proyecto
   - Despliega en GitHub Pages

3. **Revisa los logs** en la pestaña Actions si hay problemas

## 🔍 ¿Qué hace el Workflow Automáticamente?

El archivo `.github/workflows/deploy.yml` ejecuta estos pasos:

1. ✅ Checkout del código
2. ✅ Setup de Node.js 18
3. ✅ Instalación de dependencias (`npm ci`)
4. ✅ **Compilación** (`npm run build:prod`)
5. ✅ Deploy a GitHub Pages

**Todo esto sucede automáticamente** cuando haces push a `main` o `master`.

## ⚠️ Importante Antes del Primer Deploy

### 1. Ajustar Base-Href

**Edita `package.json` línea 9:**

```json
"build:prod": "ng build --configuration production --base-href /NOMBRE-DE-TU-REPO/"
```

Reemplaza `NOMBRE-DE-TU-REPO` con el nombre real de tu repositorio.

### 2. Habilitar GitHub Pages

- Settings → Pages → Source: **GitHub Actions**

## ✅ Checklist Pre-Deploy

- [ ] Base-href ajustado en `package.json`
- [ ] GitHub Pages habilitado en Settings
- [ ] (Opcional) Compilación local exitosa
- [ ] Cambios commiteados
- [ ] Listo para push

## 🎯 Resumen

| Acción | ¿Necesario? | ¿Por qué? |
|--------|-------------|-----------|
| Compilar localmente | ❌ No | GitHub Actions lo hace automáticamente |
| Compilar localmente | ✅ Recomendado | Para verificar que no hay errores |
| Ajustar base-href | ✅ **SÍ** | Debe coincidir con tu repo |
| Habilitar GitHub Pages | ✅ **SÍ** | Para que funcione el deploy |
| Hacer push | ✅ **SÍ** | Dispara el workflow |

---

**Conclusión**: No es necesario compilar antes, pero es buena práctica hacerlo para verificar que todo funciona. El workflow se encarga del resto automáticamente. 🚀

