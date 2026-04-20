import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Pagination from '../common/Pagination';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import Modal from '../common/Modal';

const ProviderList = ({ deleted = false }) => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
    const [showModal, setShowModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [actionType, setActionType] = useState('');

    const endpoint = deleted ? '/proveedores/deleted' : '/proveedores';

    const fetchProviders = async () => {
        setLoading(true);
        try {
            const res = await api.get(endpoint, { params: { page: pagination.page, limit: 10 } });
            setProviders(res.data.data);
            setPagination({ page: res.data.page, totalPages: res.data.totalPages });
        } catch (err) {
            setError('Error al cargar proveedores');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProviders();
    }, [pagination.page, deleted]);

    const handleDelete = (prov) => {
        setSelectedProvider(prov);
        setActionType('delete');
        setShowModal(true);
    };

    const handleRestore = (prov) => {
        setSelectedProvider(prov);
        setActionType('restore');
        setShowModal(true);
    };

    const confirmAction = async () => {
        try {
            if (actionType === 'delete') {
                await api.delete(`/proveedores/${selectedProvider.id}`);
            } else {
                await api.patch(`/proveedores/restore/${selectedProvider.id}`);
            }
            setShowModal(false);
            fetchProviders();
        } catch (err) {
            setError(`Error al ${actionType === 'delete' ? 'eliminar' : 'restaurar'} proveedor`);
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-primary">
                    {deleted ? 'Proveedores Eliminados' : 'Proveedores'}
                </h1>
                <div>
                    {!deleted ? (
                        <>
                            <Link to="/proveedores/nuevo" className="bg-secondary text-white px-4 py-2 rounded mr-2">
                                <i className="fa fa-plus"></i> Nuevo
                            </Link>
                            <Link to="/proveedores/eliminados" className="bg-gray-500 text-white px-4 py-2 rounded">
                                <i className="fa fa-trash"></i> Papelera
                            </Link>
                        </>
                    ) : (
                        <Link to="/proveedores" className="bg-secondary text-white px-4 py-2 rounded">
                            <i className="fa fa-arrow-left"></i> Volver
                        </Link>
                    )}
                </div>
            </div>
            {error && <Alert type="error" message={error} />}
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-3">ID</th>
                            <th>Nombre</th>
                            <th>RUC</th>
                            <th>Representante</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            {deleted && <th>Fecha Eliminación</th>}
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {providers.map(prov => (
                            <tr key={prov.id}>
                                <td className="p-3">{prov.id}</td>
                                <td>{prov.nombre}</td>
                                <td>{prov.ruc || '-'}</td>
                                <td>{prov.representante}</td>
                                <td>{prov.correo}</td>
                                <td>{prov.telefono}</td>
                                {deleted && <td>{new Date(prov.fecha_eliminacion).toLocaleString()}</td>}
                                <td>
                                    {!deleted ? (
                                        <>
                                            <Link to={`/proveedores/editar/${prov.id}`} className="text-blue-600 mr-2">
                                                <i className="fa fa-edit"></i>
                                            </Link>
                                            <button onClick={() => handleDelete(prov)} className="text-red-600">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </>
                                    ) : (
                                        <button onClick={() => handleRestore(prov)} className="text-green-600">
                                            <i className="fa fa-undo"></i> Restaurar
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination currentPage={pagination.page} totalPages={pagination.totalPages} onPageChange={(page) => setPagination({ ...pagination, page })} />
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={actionType === 'delete' ? 'Confirmar eliminación' : 'Confirmar restauración'}>
                <p>¿Está seguro de {actionType === 'delete' ? 'eliminar' : 'restaurar'} el proveedor "{selectedProvider?.nombre}"?</p>
                <div className="flex justify-end mt-4">
                    <button onClick={() => setShowModal(false)} className="mr-2 px-4 py-2 border rounded">Cancelar</button>
                    <button onClick={confirmAction} className={`${actionType === 'delete' ? 'bg-red-600' : 'bg-green-600'} text-white px-4 py-2 rounded`}>
                        {actionType === 'delete' ? 'Eliminar' : 'Restaurar'}
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ProviderList;