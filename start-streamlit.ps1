# Script para iniciar el servidor Streamlit
# Ejecutar desde PowerShell: .\start-streamlit.ps1

$env:API_BASE_URL = "http://localhost:3000/api"

Write-Host "Iniciando Streamlit Charts Server..." -ForegroundColor Green
Write-Host "URL: http://localhost:8501" -ForegroundColor Cyan
Write-Host "API Backend: $env:API_BASE_URL" -ForegroundColor Gray
Write-Host ""

streamlit run streamlit/app.py `
    --server.port=8501 `
    --server.enableCORS=true `
    --server.enableXsrfProtection=false
