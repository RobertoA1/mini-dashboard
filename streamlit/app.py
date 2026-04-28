import streamlit as st
import requests
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import os

# Configuración de página
st.set_page_config(
    page_title="Dashboard Charts",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Ocultar elementos de Streamlit para integración en iframe + tema claro
hide_streamlit_style = """
<style>
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}
header {visibility: hidden;}
.stDeployButton {display: none;}

/* Tema claro forzado */
.stApp {
    background-color: #ffffff;
}

/* Reducir padding del contenedor */
.block-container {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    max-width: 100%;
}
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True)

# API base URL - usa ruta relativa para funcionar desde cualquier dominio
API_BASE_URL = os.getenv('API_BASE_URL', '/api')

def fetch_dashboard_data():
    """Obtener datos del dashboard desde la API"""
    try:
        response = requests.get(f"{API_BASE_URL}/dashboard/kpis")
        response.raise_for_status()
        return response.json()
    except Exception as e:
        st.error(f"Error al cargar datos: {e}")
        return None

def render_sales_line_chart(data):
    """Gráfico de línea: Evolución de Ventas"""
    if not data or 'evolucionVentas' not in data:
        st.info("No hay datos de evolución de ventas")
        return
    
    df = pd.DataFrame(data['evolucionVentas'])
    if df.empty:
        st.info("No hay datos de ventas disponibles")
        return
    
    # Formatear fecha
    df['fecha'] = pd.to_datetime(df['fecha']).dt.strftime('%d/%m')
    
    fig = make_subplots(specs=[[{"secondary_y": True}]])
    
    # Línea de total ventas
    fig.add_trace(
        go.Scatter(
            x=df['fecha'],
            y=df['total_ventas'],
            name="Ventas (S/)",
            line=dict(color='#251f47', width=3),
            mode='lines+markers',
            marker=dict(size=8)
        ),
        secondary_y=False
    )
    
    # Línea de cantidad de órdenes
    fig.add_trace(
        go.Scatter(
            x=df['fecha'],
            y=df['cantidad_ordenes'],
            name="Órdenes",
            line=dict(color='#82ca9d', width=2, dash='dot'),
            mode='lines+markers',
            marker=dict(size=6)
        ),
        secondary_y=True
    )
    
    fig.update_layout(
        title="Evolución de Ventas (Últimos 30 días)",
        xaxis_title="Fecha",
        yaxis_title="Ventas (S/)",
        height=340,
        showlegend=True,
        legend=dict(orientation="h", yanchor="bottom", y=-0.25),
        margin=dict(l=40, r=40, t=50, b=60)
    )
    
    fig.update_yaxes(title_text="Ventas (S/)", secondary_y=False)
    fig.update_yaxes(title_text="Órdenes", secondary_y=True)
    
    st.plotly_chart(fig, use_container_width=True, key="sales_line_chart")

def render_top_products_chart(data):
    """Gráfico de barras horizontal: Top Productos Más Vendidos"""
    if not data or 'productosMasVendidos' not in data:
        st.info("No hay datos de productos")
        return
    
    df = pd.DataFrame(data['productosMasVendidos'])
    if df.empty:
        st.info("No hay datos de productos disponibles")
        return
    
    # Limitar a top 10
    df = df.head(10)
    
    colors = ['#251f47', '#404e7c', '#260f26', '#8884d8', '#82ca9d', 
              '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#83a6ed']
    
    fig = go.Figure()
    
    fig.add_trace(go.Bar(
        x=df['total_vendido'],
        y=df['nombre'],
        orientation='h',
        marker_color=colors[:len(df)],
        text=df['total_vendido'],
        textposition='outside'
    ))
    
    fig.update_layout(
        title="Top 10 Productos Más Vendidos",
        xaxis_title="Total Vendido",
        yaxis_title="",
        height=420,
        yaxis=dict(autorange="reversed"),
        margin=dict(l=150, r=40, t=50, b=30),
        showlegend=False
    )
    
    st.plotly_chart(fig, use_container_width=True, key="top_products_chart")

def render_inventory_pie_chart(data):
    """Gráfico de pastel: Valor del Inventario por Categoría"""
    if not data or 'distribucionValorCategorias' not in data:
        st.info("No hay datos de categorías")
        return
    
    df = pd.DataFrame(data['distribucionValorCategorias'])
    if df.empty:
        st.info("No hay datos de inventario disponibles")
        return
    
    colors = ['#251f47', '#404e7c', '#260f26', '#8884d8', '#82ca9d', 
              '#ffc658', '#ff8042', '#a4de6c']
    
    fig = px.pie(
        df,
        values='total',
        names='nombre',
        title="Valor del Inventario por Categoría",
        color_discrete_sequence=colors
    )
    
    fig.update_traces(
        textposition='inside',
        textinfo='percent+label',
        hovertemplate='%{label}: S/ %{value:,.2f}<extra></extra>'
    )
    
    fig.update_layout(
        height=370,
        showlegend=True,
        legend=dict(orientation="v", yanchor="middle", y=0.5, xanchor="left", x=1.02),
        margin=dict(l=30, r=120, t=50, b=30)
    )
    
    st.plotly_chart(fig, use_container_width=True, key="inventory_pie_chart")

def render_frecuencia_chart(data):
    """Gráfico de pastel: Frecuencia de Compras"""
    if not data or 'frecuenciaCompras' not in data:
        st.info("No hay datos de frecuencia")
        return
    
    df = pd.DataFrame(data['frecuenciaCompras'])
    if df.empty:
        st.info("No hay datos de frecuencia disponibles")
        return
    
    colors = ['#251f47', '#404e7c', '#260f26', '#8884d8', '#82ca9d']
    
    fig = px.pie(
        df,
        values='cantidad_usuarios',
        names='rango',
        title="Frecuencia de Compras por Usuario",
        color_discrete_sequence=colors,
        hole=0.4
    )
    
    fig.update_traces(
        textposition='inside',
        textinfo='percent+label',
        hovertemplate='%{label}: %{value} usuarios<extra></extra>'
    )
    
    fig.update_layout(
        height=370,
        showlegend=True,
        legend=dict(orientation="h", yanchor="bottom", y=-0.18),
        margin=dict(l=40, r=40, t=50, b=70)
    )
    
    st.plotly_chart(fig, use_container_width=True, key="frecuencia_chart")

def render_categories_bar_chart(data):
    """Gráfico de barras: Top Categorías por Cantidad"""
    if not data or 'categoriasTop' not in data:
        st.info("No hay datos de categorías")
        return
    
    df = pd.DataFrame(data['categoriasTop'])
    if df.empty:
        st.info("No hay datos de categorías disponibles")
        return
    
    fig = go.Figure()
    
    fig.add_trace(go.Bar(
        x=df['nombre'],
        y=df['total'],
        marker_color='#404e7c',
        text=df['total'],
        textposition='outside'
    ))
    
    fig.update_layout(
        title="Top Categorías (Cantidad de Productos)",
        xaxis_title="",
        yaxis_title="Cantidad",
        height=370,
        showlegend=False,
        margin=dict(l=40, r=40, t=50, b=70)
    )
    
    st.plotly_chart(fig, use_container_width=True, key="categories_bar_chart")

# Main - Renderizar gráficos según parámetro de query
query_params = st.query_params
chart_type = query_params.get("chart", "all")

data = fetch_dashboard_data()

if data:
    if chart_type == "sales-line":
        render_sales_line_chart(data)
    elif chart_type == "top-products":
        render_top_products_chart(data)
    elif chart_type == "inventory-pie":
        render_inventory_pie_chart(data)
    elif chart_type == "frecuencia":
        render_frecuencia_chart(data)
    elif chart_type == "categories":
        render_categories_bar_chart(data)
    elif chart_type == "all":
        # Mostrar todos los gráficos en layout de dashboard
        col1, col2 = st.columns(2)
        with col1:
            render_sales_line_chart(data)
        with col2:
            render_top_products_chart(data)
        
        col3, col4, col5 = st.columns(3)
        with col3:
            render_inventory_pie_chart(data)
        with col4:
            render_frecuencia_chart(data)
        with col5:
            render_categories_bar_chart(data)
else:
    st.error("No se pudieron cargar los datos del dashboard")
