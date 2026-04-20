import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

const ProviderForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        nombre: '',
        ruc: '',
        representante: '',
        correo: '',
        telefono: '',
    });

    useEffect(() => {
        if (id) {
            const fetchProvider = async () => {
                setLoading(true);
                try {
                    const res = await api.get(`/proveedores/${id}`);
                    const p = res.data;
                    setFormData({
                        nombre: p.nombre,
                        ruc: p.ruc || '',
                        representante: p.representante,
                        correo: p.correo,
                        telefono: p.telefono,
                    });
                } catch (err) {
                    setError('Error al cargar proveedor');
                } finally {
                    setLoading(false);
                }
            };
            fetchProvider();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        if (!formData.nombre || !formData.representante || !formData.correo || !formData.telefono) {
            setError('Todos los campos obligatorios deben completarse');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.correo)) {
            setError('Correo electrónico inválido');
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
            if (id) {
                await api.put(`/proveedores/${id}`, formData);
            } else {
                await api.post('/proveedores', formData);
            }
            navigate('/proveedores');
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
            <h1 className="text-2xl font-bold text-primary mb-4">{id ? 'Editar' : 'Nuevo'} Proveedor</h1>
            {error && <Alert type="error" message={error} />}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nombre *</label>
                        <input name="nombre" value={formData.nombre} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">RUC</label>
                        <input name="ruc" value={formData.ruc} onChange={handleChange} className="border rounded w-full px-3 py-2" maxLength="11" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Representante *</label>
                        <input name="representante" value={formData.representante} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Correo *</label>
                        <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Teléfono *</label>
                        <input name="telefono" value={formData.telefono} onChange={handleChange} className="border rounded w-full px-3 py-2" required />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                    <button type="button" onClick={() => navigate('/proveedores')} className="px-4 py-2 border rounded hover:bg-gray-100">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default ProviderForm;