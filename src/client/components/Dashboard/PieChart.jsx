import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#251f47', '#404e7c', '#260f26', '#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];

const CustomPieChart = ({ data }) => {
    // Validación robusta
    if (!data || !Array.isArray(data)) {
        return <p className="text-gray-500 text-center py-8">Cargando datos...</p>;
    }

    // Procesar datos: asegurar números válidos y filtrar ceros
    const processedData = data
        .map(item => ({
            nombre: item?.nombre || 'Sin nombre',
            total: parseFloat(item?.total) || 0,
        }))
        .filter(item => item.total > 0)
        .sort((a, b) => b.total - a.total);

    if (processedData.length === 0) {
        return <p className="text-gray-500 text-center py-8">No hay productos con valor en inventario</p>;
    }

    // Calcular total para tooltip
    const totalValue = processedData.reduce((sum, item) => sum + item.total, 0);

    // Componente de tooltip personalizado
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            const percent = ((data.total / totalValue) * 100).toFixed(1);
            return (
                <div className="bg-white p-3 border rounded shadow">
                    <p className="font-semibold">{data.nombre}</p>
                    <p>S/ {data.total.toFixed(2)}</p>
                    <p>{percent}% del total</p>
                </div>
            );
        }
        return null;
    };

    // Renderizado de etiquetas en el gráfico
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return percent > 0.05 ? (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>
                <Pie
                    data={processedData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="total"
                    nameKey="nombre"
                >
                    {processedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPieChart;