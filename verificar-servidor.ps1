# Script para verificar el estado del servidor
$env:Path += ";C:\Program Files\nodejs"

Write-Host "=== Verificacion del Servidor ByteCore ===" -ForegroundColor Cyan
Write-Host ""

# Verificar procesos
$processes = Get-Process -Name node -ErrorAction SilentlyContinue
if ($processes) {
    Write-Host "✅ Procesos Node.js activos: $($processes.Count)" -ForegroundColor Green
    $processes | ForEach-Object { Write-Host "   PID: $($_.Id)" -ForegroundColor Gray }
} else {
    Write-Host "❌ No hay procesos Node.js corriendo" -ForegroundColor Red
    Write-Host "   Ejecuta: npm start" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Probando conexiones..." -ForegroundColor Cyan

# Probar diferentes URLs
$urls = @(
    "http://localhost:4200",
    "http://localhost:4200/login",
    "http://127.0.0.1:4200"
)

foreach ($url in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $url -TimeoutSec 3 -UseBasicParsing
        Write-Host "✅ $url - Status: $($response.StatusCode)" -ForegroundColor Green
        break
    } catch {
        Write-Host "❌ $url - No responde" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=== Instrucciones ===" -ForegroundColor Cyan
Write-Host "1. Si el servidor no responde, puede estar compilando" -ForegroundColor Yellow
Write-Host "2. Espera 1-2 minutos y vuelve a intentar" -ForegroundColor Yellow
Write-Host "3. Revisa la terminal donde corre 'ng serve' para ver errores" -ForegroundColor Yellow
Write-Host "4. Si hay errores, deten el servidor (Ctrl+C) y ejecuta: npm start" -ForegroundColor Yellow

