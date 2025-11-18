# Script de inicio para ByteCore - Sistema de Gestión Logística

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "ByteCore - Sistema de Gestion Logistica" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si Node.js está instalado
try {
    $nodeVersion = node --version
    $npmVersion = npm --version
    Write-Host "[1/2] Node.js encontrado:" -ForegroundColor Green
    Write-Host "  Node.js: $nodeVersion" -ForegroundColor Gray
    Write-Host "  npm: $npmVersion" -ForegroundColor Gray
    Write-Host ""
} catch {
    Write-Host "[ERROR] Node.js no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor instala Node.js desde: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Descarga la versión LTS (recomendada)" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Presiona Enter para salir"
    exit 1
}

# Verificar si node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "[2/2] Instalando dependencias (esto puede tardar unos minutos)..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Error al instalar dependencias" -ForegroundColor Red
        Read-Host "Presiona Enter para salir"
        exit 1
    }
    Write-Host ""
} else {
    Write-Host "[2/2] Dependencias ya instaladas" -ForegroundColor Green
    Write-Host ""
}

Write-Host "[LISTO] Iniciando servidor de desarrollo..." -ForegroundColor Green
Write-Host ""
Write-Host "La aplicación estará disponible en: http://localhost:4200" -ForegroundColor Cyan
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

npm start

