import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [formData, setFormData] = useState({
        sku: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        precio_compra: '',
        precio_venta: '',
        stock_actual: '',
        stock_minimo: '0',
        proveedor: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const filterRes = await api.get('/productos/filters/data');
                setCategorias(filterRes.data.categorias);
                setProveedores(filterRes.data.proveedores);
                if (id) {
                    const prodRes = await api.get(`/productos/${id}`);
                    const p = prodRes.data;
                    setFormData({
                        sku: p.sku,
                        nombre: p.nombre,
                        descripcion: p.descripcion,
                        categoria: p.categoria,
                        precio_compra: p.precio_compra,
                        precio_venta: p.precio_venta,
                        stock_actual: p.stock_actual,
                        stock_minimo: p.stock_minimo,
                        proveedor: p.proveedor,
                    });
                }
            } catch (err) {
                setError('Error al cargar datos');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        if (!formData.sku || !formData.nombre || !formData.descripcion || !formData.categoria || !formData.proveedor) {
            setError('Todos los campos obligatorios deben completarse');
            return false;
        }
        if (parseFloat(formData.precio_compra) < 0 || parseFloat(formData.precio_venta) < 0) {
            setError('Los precios no pueden ser negativos');
            return false;
        }
        if (parseFloat(formData.precio_venta) <= parseFloat(formData.precio_compra)) {
            setError('El precio de venta debe ser mayor al precio de compra');
            return false;
        }
        if (parseFloat(formData.stock_actual) < 0 || parseFloat(formData.stock_minimo) < 0) {
            setError('El stock no puede ser negativo');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        setError('');
        try {
            const payload = {
                ...formData,
                precio_compra: parseFloat(formData.precio_compra),
                precio_venta: parseFloat(formData.precio_venta),
                stock_actual: parseFloat(formData.stock_actual),
                stock_minimo: parseFloat(formData.stock_minimo),
            };
            if (id) {
                await api.put(`/productos/${id}`, payload);
            } else {
                await api.post('/productos', payload);
            }
            navigate('/productos');
        } catch (err) {
            const errorMsg = err.response?.data?.error || 'Error desconocido al guardar.';
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-primary mb-4">{id ? 'Editar' : 'Nuevo'} Producto</h1>
            {error && <Alert type="error" message={error} />}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">SKU *</label>
                        <input name="sku" value={formData.sku} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Nombre *</label>
                        <input name="nombre" value={formData.nombre} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium mb-1">Descripción *</label>
                        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="border rounded w-full px-3 py-2" rows="3" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Categoría *</label>
                        <select name="categoria" value={formData.categoria} onChange={handleChange} className="border rounded w-full px-3 py-2" required>
                            <option value="">Seleccione</option>
                            {categorias.map(cat => <option key={cat.id} value={cat.id}>{cat.nombre}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Proveedor *</label>
                        <select name="proveedor" value={formData.proveedor} onChange={handleChange} className="border rounded w-full px-3 py-2" required>
                            <option value="">Seleccione</option>
                            {proveedores.map(prov => <option key={prov.id} value={prov.id}>{prov.nombre}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Precio Compra *</label>
                        <input type="number" step="0.01" name="precio_compra" value={formData.precio_compra} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Precio Venta *</label>
                        <input type="number" step="0.01" name="precio_venta" value={formData.precio_venta} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Stock Actual *</label>
                        <input type="number" step="0.01" name="stock_actual" value={formData.stock_actual} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Stock Mínimo</label>
                        <input type="number" step="0.01" name="stock_minimo" value={formData.stock_minimo} onChange={handleChange} className="border rounded w-full px-3 py-2" />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                    <button type="button" onClick={() => navigate('/productos')} className="px-4 py-2 border rounded hover:bg-gray-100">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;