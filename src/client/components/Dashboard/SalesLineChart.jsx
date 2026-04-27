import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesLineChart = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p className="text-gray-500 text-center py-8">No hay datos de ventas disponibles</p>;
    }

    // Formatear fecha para mostrar
    const formattedData = data.map(item => ({
        ...item,
        fecha: new Date(item.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
        total_ventas: Number(item.total_ventas) || 0,
        cantidad_ordenes: Number(item.cantidad_ordenes) || 0
    })).reverse();

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                    formatter={(value, name) => {
                        if (name === 'total_ventas') return [`S/. ${Number(value).toFixed(2)}`, 'Ventas'];
                        return [value, 'Órdenes'];
                    }}
                />
                <Legend />
                <Line 
                    yAxisId="left" 
                    type="monotone" 
                    dataKey="total_ventas" 
                    stroke="#404e7c" 
                    strokeWidth={2}
                    name="Ventas (S/.)" 
                    dot={{ fill: '#404e7c' }}
                />
                <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="cantidad_ordenes" 
                    stroke="#82ca9d" 
                    strokeWidth={2}
                    name="Órdenes" 
                    dot={{ fill: '#82ca9d' }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SalesLineChart;
