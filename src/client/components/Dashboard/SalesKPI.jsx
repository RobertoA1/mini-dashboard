import React from 'react';

const SalesKPI = ({ kpis }) => {
    const cards = [
        { 
            title: 'Ventas Hoy', 
            value: kpis.ventasHoy || 0, 
            subtitle: `${kpis.usuariosUnicosHoy || 0} clientes`,
            icon: 'fa-shopping-cart', 
            color: 'bg-indigo-600' 
        },
        { 
            title: 'Ingresos Hoy', 
            value: `S/. ${(kpis.ingresosHoy || 0).toFixed(2)}`, 
            subtitle: 'Ventas del día',
            icon: 'fa-money', 
            color: 'bg-green-600' 
        },
        { 
            title: 'Ingresos Totales', 
            value: `S/. ${(kpis.ingresosTotales || 0).toFixed(2)}`, 
            subtitle: `${kpis.totalOrdenes || 0} órdenes`,
            icon: 'fa-line-chart', 
            color: 'bg-blue-600' 
        },
        { 
            title: 'Ticket Promedio', 
            value: `S/. ${(kpis.ticketPromedio || 0).toFixed(2)}`, 
            subtitle: 'Promedio por orden',
            icon: 'fa-ticket', 
            color: 'bg-purple-600' 
        },
        { 
            title: 'Compra por Usuario', 
            value: `S/. ${(kpis.promedioCompraPorUsuario || 0).toFixed(2)}`, 
            subtitle: 'Promedio histórico',
            icon: 'fa-user', 
            color: 'bg-orange-600' 
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {cards.map((card, idx) => (
                <div key={idx} className={`${card.color} text-white p-4 rounded-lg shadow flex items-center`}>
                    <i className={`fa ${card.icon} text-3xl mr-4`}></i>
                    <div>
                        <p className="text-sm opacity-80">{card.title}</p>
                        <p className="text-2xl font-bold">{card.value}</p>
                        <p className="text-xs opacity-70">{card.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SalesKPI;
