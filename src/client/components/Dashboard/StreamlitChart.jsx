import React from 'react';

// Detectar URL de Streamlit - en desarrollo usa localhost, en producción se puede configurar
const STREAMLIT_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:8501'
    : (window.STREAMLIT_URL || 'http://localhost:8501');

const StreamlitChart = ({ chartType, height = 400 }) => {
    const streamlitUrl = `${STREAMLIT_BASE_URL}/?chart=${chartType}&embed=true&embed_options=light_theme`;

    return (
        <div style={{ overflow: 'hidden' }}>
            <iframe
                src={streamlitUrl}
                width="100%"
                height={height}
                frameBorder="0"
                scrolling="no"
                style={{
                    border: 'none',
                    overflow: 'hidden',
                    display: 'block'
                }}
                allow="clipboard-read; clipboard-write"
                title={`streamlit-${chartType}`}
            />
        </div>
    );
};

// Componentes específicos para cada tipo de gráfico (alturas ajustadas para evitar scroll)
export const SalesLineChartStreamlit = () => (
    <StreamlitChart chartType="sales-line" height={360} />
);

export const TopProductsChartStreamlit = () => (
    <StreamlitChart chartType="top-products" height={440} />
);

export const InventoryPieChartStreamlit = () => (
    <StreamlitChart chartType="inventory-pie" height={390} />
);

export const FrecuenciaChartStreamlit = () => (
    <StreamlitChart chartType="frecuencia" height={390} />
);

export const CategoriesBarChartStreamlit = () => (
    <StreamlitChart chartType="categories" height={390} />
);

export default StreamlitChart;
