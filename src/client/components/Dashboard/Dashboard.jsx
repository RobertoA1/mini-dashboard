import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import KPICards from './KPICards';
import SalesKPI from './SalesKPI';
import LowStockTable from './LowStockTable';
import {
    SalesLineChartStreamlit,
    TopProductsChartStreamlit,
    InventoryPieChartStreamlit,
    FrecuenciaChartStreamlit,
    CategoriesBarChartStreamlit
} from './StreamlitChart';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await api.get('/dashboard/kpis');
                setData(res.data);
            } catch (err) {
                setError('Error al cargar datos del dashboard');
            } finally {
                setLoading(false);
            }
        };
        fetchDashboard();
    }, []);

    if (loading) return <Loader />;
    if (error) return <Alert type="error" message={error} />;
    if (!data) return null;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
            
            {/* KPIs de Ventas */}
            <section>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Métricas de Ventas</h2>
                <SalesKPI kpis={data} />
            </section>

            {/* KPIs de Inventario */}
            <section>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Métricas de Inventario</h2>
                <KPICards kpis={data} />
            </section>

            {/* Gráficos principales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Evolución de Ventas */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <SalesLineChartStreamlit />
                </div>

                {/* Productos más vendidos */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <TopProductsChartStreamlit />
                </div>
            </div>

            {/* Segunda fila de gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Valor del Inventario por Categoría */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <InventoryPieChartStreamlit />
                </div>

                {/* Frecuencia de Compras */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <FrecuenciaChartStreamlit />
                </div>

                {/* Top Categorías */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <CategoriesBarChartStreamlit />
                </div>
            </div>

            {/* Tabla de bajo stock */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Productos con Bajo Stock</h2>
                <LowStockTable data={data.bajoStockList} />
            </div>
        </div>
    );
};

export default Dashboard;