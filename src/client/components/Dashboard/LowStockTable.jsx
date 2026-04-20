import React from 'react';

const LowStockTable = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary text-white">
                    <tr>
                        <th className="px-4 py-2">SKU</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Stock Actual</th>
                        <th className="px-4 py-2">Stock Mínimo</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2">{item.sku}</td>
                            <td className="px-4 py-2">{item.nombre}</td>
                            <td className="px-4 py-2 text-red-600 font-medium">{item.stock_actual}</td>
                            <td className="px-4 py-2">{item.stock_minimo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LowStockTable;