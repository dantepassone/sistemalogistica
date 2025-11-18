# Instalación de Node.js - Requisito Previo

## ⚠️ Node.js no está instalado

Para ejecutar este proyecto Angular, necesitas tener **Node.js** instalado en tu sistema.

## 📥 Cómo Instalar Node.js

### Opción 1: Descarga Directa (Recomendado)

1. Ve a la página oficial de Node.js: https://nodejs.org/
2. Descarga la versión **LTS (Long Term Support)** - Recomendada para la mayoría de usuarios
3. Ejecuta el instalador descargado
4. Sigue las instrucciones del instalador (acepta los valores por defecto)
5. **Reinicia tu terminal** después de la instalación

### Opción 2: Usando Chocolatey (Si lo tienes instalado)

```powershell
choco install nodejs-lts
```

### Opción 3: Usando winget (Windows 10/11)

```powershell
winget install OpenJS.NodeJS.LTS
```

## ✅ Verificar la Instalación

Después de instalar, abre una **nueva terminal** y ejecuta:

```bash
node --version
npm --version
```

Deberías ver las versiones instaladas. Necesitas:
- **Node.js**: versión 18 o superior
- **npm**: viene incluido con Node.js

## 🚀 Después de Instalar Node.js

Una vez que Node.js esté instalado, vuelve a este proyecto y ejecuta:

```bash
npm install
npm start
```

## 📝 Nota Importante

**Reinicia tu terminal o IDE** después de instalar Node.js para que los cambios en el PATH surtan efecto.

---

Si ya tienes Node.js instalado pero no se reconoce el comando, verifica que esté en el PATH del sistema.

