import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import Pagination from '../common/Pagination';
import Modal from '../common/Modal';

const DeletedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
    const [showRestoreModal, setShowRestoreModal] = useState(false);
    const [productToRestore, setProductToRestore] = useState(null);

    const fetchDeleted = async () => {
        setLoading(true);
        try {
            const res = await api.get('/productos/deleted', { params: { page: pagination.page, limit: 10 } });
            setProducts(res.data.data);
            setPagination({ page: res.data.page, totalPages: res.data.totalPages });
        } catch (err) {
            setError('Error al cargar productos eliminados');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDeleted();
    }, [pagination.page]);

    const handleRestore = (prod) => {
        setProductToRestore(prod);
        setShowRestoreModal(true);
    };

    const confirmRestore = async () => {
        try {
            await api.patch(`/productos/restore/${productToRestore.id}`);
            setShowRestoreModal(false);
            fetchDeleted();
        } catch (err) {
            setError('Error al restaurar producto');
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-primary">Productos Eliminados</h1>
                <Link to="/productos" className="bg-secondary text-white px-4 py-2 rounded">
                    <i className="fa fa-arrow-left"></i> Volver
                </Link>
            </div>
            {error && <Alert type="error" message={error} />}
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-3">SKU</th><th>Nombre</th><th>Fecha Eliminación</th><th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id}>
                                <td className="p-3">{p.sku}</td>
                                <td>{p.nombre}</td>
                                <td>{new Date(p.fecha_eliminacion).toLocaleString()}</td>
                                <td>
                                    <button onClick={() => handleRestore(p)} className="text-green-600">
                                        <i className="fa fa-undo"></i> Restaurar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination currentPage={pagination.page} totalPages={pagination.totalPages} onPageChange={(page) => setPagination({ ...pagination, page })} />
            <Modal isOpen={showRestoreModal} onClose={() => setShowRestoreModal(false)} title="Confirmar restauración">
                <p>¿Está seguro de restaurar el producto "{productToRestore?.nombre}"?</p>
                <div className="flex justify-end mt-4">
                    <button onClick={() => setShowRestoreModal(false)} className="mr-2 px-4 py-2 border rounded">Cancelar</button>
                    <button onClick={confirmRestore} className="bg-green-600 text-white px-4 py-2 rounded">Restaurar</button>
                </div>
            </Modal>
        </div>
    );
};

export default DeletedProducts;