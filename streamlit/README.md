# Streamlit Charts Server

Servidor Streamlit para renderizar gráficos del dashboard de forma independiente.

## Instalación

```bash
cd streamlit
pip install -r requirements.txt
```

## Ejecución

```bash
# Desarrollo (se recarga automáticamente)
streamlit run app.py --server.port=8501 --server.corsOrigins=["http://localhost:3000"]

# Producción
streamlit run app.py --server.port=8501 --server.headless=true --server.enableCORS=true
```

## Parámetros de Query

El parámetro `chart` controla qué gráfico mostrar:

- `?chart=sales-line` - Evolución de Ventas
- `?chart=top-products` - Top Productos Más Vendidos
- `?chart=inventory-pie` - Valor del Inventario por Categoría
- `?chart=frecuencia` - Frecuencia de Compras
- `?chart=categories` - Top Categorías
- `?chart=all` - Todos los gráficos (default)

## Variables de Entorno

- `API_BASE_URL` - URL base de la API backend (default: http://localhost:3000/api)
