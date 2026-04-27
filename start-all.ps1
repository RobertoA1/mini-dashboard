# Script para iniciar ambos servidores (Node.js + Streamlit)
# Ejecutar desde PowerShell: .\start-all.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Iniciando Dashboard Servers" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si streamlit está instalado
try {
    $streamlitVersion = streamlit --version 2>$null
    Write-Host "Streamlit detectado: $streamlitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Streamlit no está instalado." -ForegroundColor Red
    Write-Host "Instálalo con: pip install -r streamlit/requirements.txt" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "1. Iniciando Node.js Backend (puerto 3000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-Command", "npm run dev; Read-Host 'Presiona Enter para cerrar'" -WindowStyle Normal

# Esperar a que el backend inicie
Write-Host "   Esperando 3 segundos para que el backend inicie..." -ForegroundColor Gray
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "2. Iniciando Streamlit Charts (puerto 8501)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-Command", ".\start-streamlit.ps1; Read-Host 'Presiona Enter para cerrar'" -WindowStyle Normal

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Servidores iniciados:" -ForegroundColor Cyan
Write-Host "  - React Dashboard: http://localhost:3000" -ForegroundColor Green
Write-Host "  - Streamlit Charts: http://localhost:8501" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona cualquier tecla para salir (los servidores seguirán corriendo)..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
