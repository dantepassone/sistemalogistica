# 🚀 Guía de Despliegue - GitHub Pages

Esta guía te ayudará a desplegar LogisPro en GitHub Pages paso a paso.

## 📋 Requisitos Previos

- Cuenta de GitHub
- Repositorio creado en GitHub
- Node.js instalado localmente (para pruebas)

## 🔧 Configuración Inicial

### 1. Ajustar Base-Href

El `base-href` debe coincidir con el nombre de tu repositorio en GitHub.

**Edita `package.json`:**

```json
{
  "scripts": {
    "build:prod": "ng build --configuration production --base-href /NOMBRE-DE-TU-REPO/"
  }
}
```

**Ejemplos:**
- Repo: `sistemalogistica` → `--base-href /sistemalogistica/`
- Repo: `logispro` → `--base-href /logispro/`
- Repo: `mi-usuario.github.io` → `--base-href /`

### 2. Verificar el Workflow

El archivo `.github/workflows/deploy.yml` ya está configurado. Solo necesitas:

1. Asegurarte de que existe en tu repositorio
2. Que tu rama principal sea `main` o `master`

## 📤 Pasos para Desplegar

### Método 1: Deploy Automático (Recomendado) ✅

1. **Habilitar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - En "Source", selecciona **"GitHub Actions"**
   - Guarda los cambios

2. **Hacer commit y push**:
   ```bash
   git add .
   git commit -m "Configurar GitHub Pages"
   git push origin main
   ```

3. **Verificar el deploy**:
   - Ve a la pestaña **Actions** en GitHub
   - Espera a que el workflow "Deploy to GitHub Pages" termine (verde ✓)
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/NOMBRE-DE-TU-REPO/`

### Método 2: Deploy Manual

Si prefieres desplegar manualmente:

1. **Compilar**:
   ```bash
   npm run build:prod
   ```

2. **Instalar gh-pages**:
   ```bash
   npm install -g gh-pages
   ```

3. **Publicar**:
   ```bash
   gh-pages -d dist/sistema-logistica
   ```

4. **Configurar GitHub Pages**:
   - Settings → Pages
   - Source: Branch `gh-pages` / folder `/ (root)`

## 🔍 Verificación

Después del deploy, verifica:

1. ✅ La URL funciona: `https://tu-usuario.github.io/sistemalogistica/`
2. ✅ El login carga correctamente
3. ✅ La navegación funciona (no hay errores 404)
4. ✅ Los módulos se cargan correctamente

## ⚠️ Problemas Comunes

### Página en blanco

**Causa**: Base-href incorrecto

**Solución**:
1. Verifica el nombre de tu repositorio
2. Ajusta el `base-href` en `package.json`
3. Vuelve a compilar y desplegar

### Error 404 en rutas

**Causa**: GitHub Pages no soporta routing de Angular por defecto

**Solución**: El workflow ya está configurado correctamente. Si persiste:
- Verifica que el workflow haya terminado exitosamente
- Asegúrate de usar GitHub Actions como fuente

### Assets no cargan

**Causa**: Rutas relativas incorrectas

**Solución**: El `base-href` debe estar correctamente configurado

## 📝 Checklist de Deploy

Antes de desplegar, verifica:

- [ ] Base-href configurado correctamente
- [ ] Workflow `.github/workflows/deploy.yml` existe
- [ ] GitHub Pages configurado para usar GitHub Actions
- [ ] Build local funciona: `npm run build:prod`
- [ ] Archivos en `dist/sistema-logistica/` se generaron correctamente

## 🔄 Actualizar el Deploy

Cada vez que hagas push a `main` o `master`, el deploy se actualizará automáticamente.

Para forzar un nuevo deploy:
1. Haz un cambio pequeño (ej: actualizar README)
2. Commit y push
3. El workflow se ejecutará automáticamente

## 📞 Soporte

Si tienes problemas con el deploy:
1. Revisa los logs en la pestaña **Actions**
2. Verifica que el `base-href` sea correcto
3. Asegúrate de que GitHub Pages esté habilitado

---

**¡Listo!** Tu aplicación debería estar disponible en GitHub Pages. 🎉

