@echo off
echo ========================================
echo ByteCore - Sistema de Gestion Logistica
echo ========================================
echo.

REM Verificar si Node.js esta instalado
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js no esta instalado o no esta en el PATH
    echo.
    echo Por favor instala Node.js desde: https://nodejs.org/
    echo Descarga la version LTS (recomendada)
    echo.
    pause
    exit /b 1
)

echo [1/2] Verificando Node.js...
node --version
npm --version
echo.

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo [2/2] Instalando dependencias (esto puede tardar unos minutos)...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Error al instalar dependencias
        pause
        exit /b 1
    )
    echo.
) else (
    echo [2/2] Dependencias ya instaladas
    echo.
)

echo [LISTO] Iniciando servidor de desarrollo...
echo.
echo La aplicacion estara disponible en: http://localhost:4200
echo Presiona Ctrl+C para detener el servidor
echo.

call npm start

