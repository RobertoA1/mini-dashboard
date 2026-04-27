import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

const ESTADOS = ['TODOS', 'PAGADA', 'EMPAQUE', 'ENTREGA', 'ENTREGADO'];

const OrderList = () => {
    const navigate = useNavigate();
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [estadoFiltro, setEstadoFiltro] = useState('TODOS');
    const [nombreFiltro, setNombreFiltro] = useState('');
    const [apellidoFiltro, setApellidoFiltro] = useState('');
    const [fechaDesdeFiltro, setFechaDesdeFiltro] = useState('');
    const [fechaHastaFiltro, setFechaHastaFiltro] = useState('');
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [total, setTotal] = useState(0);

    const cargarOrdenes = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (estadoFiltro !== 'TODOS') params.append('estado', estadoFiltro);
            if (nombreFiltro.trim()) params.append('nombre', nombreFiltro.trim());
            if (apellidoFiltro.trim()) params.append('apellido', apellidoFiltro.trim());
            if (fechaDesdeFiltro) params.append('fechaDesde', fechaDesdeFiltro);
            if (fechaHastaFiltro) params.append('fechaHasta', fechaHastaFiltro);
            params.append('page', pagina);
            params.append('limit', 10);

            const res = await api.get(`/orders/admin/all?${params.toString()}`);
            setOrdenes(res.data.ordenes || []);
            setTotalPaginas(res.data.totalPages || 1);
            setTotal(res.data.total || 0);
            setError('');
        } catch (err) {
            const errorMsg = err.response?.data?.error || err.message || 'Error al cargar las órdenes';
            setError(errorMsg);
            console.error('Error cargando órdenes:', err);
        } finally {
            setLoading(false);
        }
    };

    // Solo estado y pagina activan busqueda automatica
    // Los filtros de texto/fecha requieren presionar Enter
    useEffect(() => {
        cargarOrdenes();
    }, [estadoFiltro, pagina]);

    const handleBuscar = () => {
        setPagina(1);
        cargarOrdenes();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleBuscar();
        }
    };

    const limpiarFiltros = () => {
        setEstadoFiltro('TODOS');
        setNombreFiltro('');
        setApellidoFiltro('');
        setFechaDesdeFiltro('');
        setFechaHastaFiltro('');
        setPagina(1);
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
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading && ordenes.length === 0) return <Loader />;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-primary mb-6">Gestión de Órdenes</h1>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                    <p className="font-semibold">Error: {error}</p>
                    <p className="text-sm mt-1">
                        Verifica que: (1) El servidor backend esté corriendo, (2) Las migraciones estén aplicadas, 
                        (3) El bundle de React esté actualizado (ejecuta <code>npm run build</code>)
                    </p>
                    <button 
                        onClick={cargarOrdenes}
                        className="mt-2 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                        Reintentar
                    </button>
                </div>
            )}

            {/* Filtros */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <div className="flex flex-wrap items-end gap-4">
                    {/* Filtro por Estado */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Estado
                        </label>
                        <select
                            value={estadoFiltro}
                            onChange={(e) => {
                                setEstadoFiltro(e.target.value);
                                setPagina(1);
                            }}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                        >
                            {ESTADOS.map(est => (
                                <option key={est} value={est}>{est}</option>
                            ))}
                        </select>
                    </div>

                    {/* Filtro por Nombre */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre Cliente
                        </label>
                        <input
                            type="text"
                            placeholder="Ej: Juan"
                            value={nombreFiltro}
                            onChange={(e) => setNombreFiltro(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary w-40"
                        />
                    </div>

                    {/* Filtro por Apellido */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Apellido Cliente
                        </label>
                        <input
                            type="text"
                            placeholder="Ej: Pérez"
                            value={apellidoFiltro}
                            onChange={(e) => setApellidoFiltro(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary w-40"
                        />
                    </div>

                    {/* Filtro por Fecha Desde */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Fecha Desde
                        </label>
                        <input
                            type="date"
                            value={fechaDesdeFiltro}
                            onChange={(e) => setFechaDesdeFiltro(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                        />
                    </div>

                    {/* Filtro por Fecha Hasta */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Fecha Hasta
                        </label>
                        <input
                            type="date"
                            value={fechaHastaFiltro}
                            onChange={(e) => setFechaHastaFiltro(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
                        />
                    </div>

                    {/* Botón Buscar */}
                    <div>
                        <button
                            onClick={handleBuscar}
                            className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-opacity-90"
                        >
                            🔍 Buscar
                        </button>
                    </div>

                    {/* Botón Limpiar Filtros */}
                    <div>
                        <button
                            onClick={limpiarFiltros}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300"
                        >
                            🔄 Limpiar
                        </button>
                    </div>

                    <div className="ml-auto">
                        <span className="text-gray-600">
                            Total de órdenes: <strong>{total}</strong>
                        </span>
                    </div>
                </div>
            </div>

            {/* Tabla de Órdenes */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pago</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {ordenes.map((orden) => (
                            <tr key={orden.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                    #{orden.id}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {orden.usuario ? (
                                        <div>
                                            <div>{orden.usuario.nombre} {orden.usuario.apellido}</div>
                                            <div className="text-xs text-gray-400">{orden.usuario.correo}</div>
                                        </div>
                                    ) : (
                                        <span className="text-gray-400">-</span>
                                    )}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {formatFecha(orden.fecha_creacion)}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {orden.items?.length || 0} productos
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                    S/ {parseFloat(orden.total).toFixed(2)}
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getEstadoColor(orden.estado)}`}>
                                        {orden.estado}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {orden.pago ? (
                                        <div>
                                            <span className="text-xs">{orden.pago.metodo_pago}</span>
                                            <span className={`ml-2 px-2 py-0.5 text-xs rounded ${
                                                orden.pago.estado_pago === 'COMPLETADO' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {orden.pago.estado_pago}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-gray-400">-</span>
                                    )}
                                </td>
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => navigate(`/ordenes/${orden.id}`)}
                                        className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-opacity-90"
                                    >
                                        Ver
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {ordenes.length === 0 && !loading && (
                    <div className="text-center py-8 text-gray-500">
                        No se encontraron órdenes
                    </div>
                )}
            </div>

            {/* Paginación */}
            {totalPaginas > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    <button
                        onClick={() => setPagina(p => Math.max(1, p - 1))}
                        disabled={pagina === 1}
                        className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
                    >
                        ← Anterior
                    </button>
                    <span className="text-sm text-gray-600">
                        Página {pagina} de {totalPaginas}
                    </span>
                    <button
                        onClick={() => setPagina(p => Math.min(totalPaginas, p + 1))}
                        disabled={pagina === totalPaginas}
                        className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
                    >
                        Siguiente →
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderList;
