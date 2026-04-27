import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#251f47', '#404e7c', '#260f26', '#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#83a6ed'];

const TopProductsChart = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p className="text-gray-500 text-center py-8">No hay datos de productos vendidos</p>;
    }

    // Procesar datos: limitar a top 10 y formatear
    const processedData = data
        .slice(0, 10)
        .map(item => ({
            nombre: item.nombre.length > 20 ? item.nombre.substring(0, 20) + '...' : item.nombre,
            total_vendido: Number(item.total_vendido) || 0,
            total_ingresos: Number(item.total_ingresos) || 0
        }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={processedData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="nombre" type="category" width={150} style={{ fontSize: '11px' }} />
                <Tooltip 
                    formatter={(value, name, props) => {
                        if (name === 'total_vendido') return [`${value} unidades`, 'Cantidad Vendida'];
                        return [`S/. ${Number(value).toFixed(2)}`, 'Ingresos'];
                    }}
                />
                <Legend />
                <Bar dataKey="total_vendido" name="Unidades Vendidas" radius={[0, 4, 4, 0]}>
                    {processedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default TopProductsChart;
