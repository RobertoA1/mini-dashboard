import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Pagination from '../common/Pagination';
import Loader from '../common/Loader';
import Modal from '../common/Modal';
import Alert from '../common/Alert';
import ProductFilters from './ProductFilters';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
    const [filters, setFilters] = useState({ search: '', categoria: '', proveedor: '', stockBajo: false });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const params = {
                page: pagination.page,
                limit: 10,
                search: filters.search || undefined,
                categoria: filters.categoria || undefined,
                proveedor: filters.proveedor || undefined,
                stockBajo: filters.stockBajo ? 'true' : undefined,
            };
            const res = await api.get('/productos', { params });
            setProducts(res.data.data);
            setPagination({ page: res.data.page, totalPages: res.data.totalPages });
        } catch (err) {
            setError('Error al cargar productos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [pagination.page, filters]);

    const handleDelete = (product) => {
        setProductToDelete(product);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        try {
            await api.delete(`/productos/${productToDelete.id}`);
            setShowDeleteModal(false);
            fetchProducts();
        } catch (err) {
            setError('Error al eliminar producto');
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-primary">Productos</h1>
                <div>
                    <Link to="/productos/nuevo" className="bg-secondary text-white px-4 py-2 rounded mr-2">
                        <i className="fa fa-plus"></i> Nuevo
                    </Link>
                    <Link to="/productos/eliminados" className="bg-gray-500 text-white px-4 py-2 rounded">
                        <i className="fa fa-trash"></i> Papelera
                    </Link>
                </div>
            </div>
            {error && <Alert type="error" message={error} />}
            <ProductFilters filters={filters} setFilters={setFilters} />
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-3">SKU</th><th>Nombre</th><th>Categoría</th><th>Precio Venta</th><th>Stock</th><th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id} className={Number(p.stock_actual) < Number(p.stock_minimo) ? 'bg-red-100' : ''}>
                                <td className="p-3">{p.sku}</td>
                                <td>{p.nombre}</td>
                                <td>{p.categoriaRel?.nombre}</td>
                                <td>${p.precio_venta}</td>
                                <td>{p.stock_actual} {Number(p.stock_actual) < Number(p.stock_minimo) && <i className="fa fa-exclamation-triangle text-red-600 ml-1"></i>}</td>
                                <td>
                                    <Link to={`/productos/editar/${p.id}`} className="text-blue-600 mr-2"><i className="fa fa-edit"></i></Link>
                                    <button onClick={() => handleDelete(p)} className="text-red-600"><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination currentPage={pagination.page} totalPages={pagination.totalPages} onPageChange={(page) => setPagination({ ...pagination, page })} />
            <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Confirmar eliminación">
                <p>¿Está seguro de eliminar el producto "{productToDelete?.nombre}"?</p>
                <div className="flex justify-end mt-4">
                    <button onClick={() => setShowDeleteModal(false)} className="mr-2 px-4 py-2 border rounded">Cancelar</button>
                    <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded">Eliminar</button>
                </div>
            </Modal>
        </div>
    );
};

export default ProductList;