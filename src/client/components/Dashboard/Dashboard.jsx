import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import KPICards from './KPICards';
import BarChart from './BarChart';
import CustomPieChart from './PieChart';
import LowStockTable from './LowStockTable';

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
            <KPICards kpis={data} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">Top 10 Categorías</h2>
                    <BarChart data={data.categoriasTop} />
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">Valor del Inventario por Categoría</h2>
                    {data?.distribucionValorCategorias ? (
                        <CustomPieChart data={data.distribucionValorCategorias} />
                    ) : (
                        <p className="text-gray-500 text-center py-8">Cargando datos...</p>
                    )}
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Productos con Bajo Stock</h2>
                <LowStockTable data={data.bajoStockList} />
            </div>
        </div>
    );
};

export default Dashboard;