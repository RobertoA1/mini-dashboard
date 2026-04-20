import React from 'react';
import { BarChart as ReBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <ReBar data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nombre" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#404e7c" />
            </ReBar>
        </ResponsiveContainer>
    );
};

export default BarChart;