import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

const OrderDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [orden, setOrden] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        cargarOrden();
    }, [id]);

    const cargarOrden = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/orders/admin/${id}`);
            setOrden(res.data);
            setError('');
        } catch (err) {
            const errorMsg = err.response?.data?.error || err.message || 'Error al cargar la orden';
            setError(errorMsg);
            console.error('Error cargando orden:', err);
        } finally {
            setLoading(false);
        }
    };

    const getEstadoColor = (estado) => {
        switch (estado) {
            case 'PAGADA': return 'bg-green-100 text-green-800';
            case 'EMPAQUE': return 'bg-yellow-100 text-yellow-800';
            case 'ENTREGA': return 'bg-blue-100 text-blue-800';
            case 'ENTREGADO': return 'bg-purple-100 text-purple-800';
            case 'CANCELADA': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const formatFecha = (fecha) => {
        return new Date(fecha).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatMoneda = (valor) => {
        return `S/ ${parseFloat(valor).toFixed(2)}`;
    };

    if (loading) return <Loader />;
    if (error) return (
        <div className="p-6">
            <Alert type="error" message={error} />
            <button 
                onClick={() => navigate('/ordenes')}
                className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
            >
                ← Volver a Órdenes
            </button>
        </div>
    );
    if (!orden) return null;

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Orden #{orden.id}</h1>
                    <p className="text-gray-500 text-sm">Creada el {formatFecha(orden.fecha_creacion)}</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getEstadoColor(orden.estado)}`}>
                        {orden.estado}
                    </span>
                    <button 
                        onClick={() => navigate('/ordenes')}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        ← Volver
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Columna izquierda: Productos */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Productos */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="px-4 py-3 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800">Productos</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {orden.items?.map((item) => (
                                <div key={item.id} className="p-4 flex items-start gap-4">
                                    <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                                        {item.producto?.imagen ? (
                                            <img 
                                                src={item.producto.imagen} 
                                                alt={item.producto.nombre}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <i className="fa fa-image text-2xl"></i>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">{item.producto?.nombre || 'Producto'}</h3>
                                        <p className="text-sm text-gray-500">SKU: {item.producto?.sku || '-'}</p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <span className="text-sm text-gray-600">
                                                {item.cantidad} x {formatMoneda(item.precio_unitario)}
                                            </span>
                                            <span className="font-semibold text-gray-900">
                                                {formatMoneda(item.subtotal)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Subtotal productos:</span>
                                <span className="font-semibold">{formatMoneda(orden.subtotal)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Información de Pago */}
                    {orden.pago && (
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">Información de Pago</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Método de pago</p>
                                    <p className="font-medium">{orden.pago.metodo_pago}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Estado del pago</p>
                                    <span className={`px-2 py-1 text-xs rounded ${
                                        orden.pago.estado_pago === 'COMPLETADO' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {orden.pago.estado_pago}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Columna derecha: Resumen y Envío */}
                <div className="space-y-6">
                    {/* Resumen de totales */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumen</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal:</span>
                                <span>{formatMoneda(orden.subtotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">IGV:</span>
                                <span>{formatMoneda(orden.igv)}</span>
                            </div>
                            {orden.descuento_cupon > 0 && (
                                <div className="flex justify-between text-green-600">
                                    <span>Descuento:</span>
                                    <span>-{formatMoneda(orden.descuento_cupon)}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-gray-600">Costo de envío:</span>
                                <span>{formatMoneda(orden.costo_envio)}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-2 mt-2">
                                <div className="flex justify-between text-lg font-bold text-primary">
                                    <span>Total:</span>
                                    <span>{formatMoneda(orden.total)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Información de Envío */}
                    {orden.envio && (
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">Dirección de Envío</h2>
                            <div className="space-y-1 text-sm">
                                <p className="font-medium">{orden.envio.nombre_completo}</p>
                                <p className="text-gray-600">{orden.envio.email}</p>
                                <p className="text-gray-600">{orden.envio.telefono}</p>
                                <div className="mt-2 pt-2 border-t border-gray-100">
                                    <p className="text-gray-800">{orden.envio.direccion} {orden.envio.numero}</p>
                                    {orden.envio.apartamento && <p className="text-gray-600">Apt: {orden.envio.apartamento}</p>}
                                    <p className="text-gray-600">{orden.envio.ciudad}, {orden.envio.region}</p>
                                    <p className="text-gray-600">{orden.envio.pais} - {orden.envio.codigo_postal}</p>
                                </div>
                                <div className="mt-2 pt-2 border-t border-gray-100">
                                    <p className="text-sm text-gray-500">Método de envío</p>
                                    <p className="font-medium">{orden.envio.metodo_envio}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
