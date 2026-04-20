import React from 'react';

const KPICards = ({ kpis }) => {
    const cards = [
        { title: 'Total Productos', value: kpis.totalProductos, icon: 'fa-cubes', color: 'bg-blue-500' },
        { title: 'Valor Inventario', value: `$${parseFloat(kpis.valorTotalInventario).toFixed(2)}`, icon: 'fa-dollar', color: 'bg-green-500' },
        { title: 'Bajo Stock', value: kpis.productosBajoStock, icon: 'fa-exclamation-triangle', color: 'bg-red-500' },
        { title: 'Producto Más Valioso', value: kpis.productoMasValioso?.nombre || 'N/A', icon: 'fa-star', color: 'bg-yellow-500' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, idx) => (
                <div key={idx} className={`${card.color} text-white p-4 rounded-lg shadow flex items-center`}>
                    <i className={`fa ${card.icon} text-3xl mr-4`}></i>
                    <div>
                        <p className="text-sm opacity-80">{card.title}</p>
                        <p className="text-2xl font-bold">{card.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KPICards;