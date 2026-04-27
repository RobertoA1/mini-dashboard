import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#251f47', '#404e7c', '#260f26', '#8884d8', '#82ca9d'];

const FrecuenciaChart = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p className="text-gray-500 text-center py-8">No hay datos de frecuencia de compras</p>;
    }

    // Procesar datos
    const processedData = data.map(item => ({
        name: item.rango || 'Sin dato',
        value: Number(item.cantidad_usuarios) || 0
    })).filter(item => item.value > 0);

    const totalUsuarios = processedData.reduce((sum, item) => sum + item.value, 0);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            const percent = ((data.value / totalUsuarios) * 100).toFixed(1);
            return (
                <div className="bg-white p-3 border rounded shadow">
                    <p className="font-semibold">{data.name}</p>
                    <p>{data.value} usuarios</p>
                    <p>{percent}% del total</p>
                </div>
            );
        }
        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={processedData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                    {processedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default FrecuenciaChart;
