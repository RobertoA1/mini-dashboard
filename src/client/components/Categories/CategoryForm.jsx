import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

const CategoryForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        if (id) {
            const fetchCategory = async () => {
                setLoading(true);
                try {
                    const res = await api.get(`/categorias/${id}`);
                    setNombre(res.data.nombre);
                } catch (err) {
                    setError('Error al cargar categoría');
                } finally {
                    setLoading(false);
                }
            };
            fetchCategory();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            setError('El nombre es obligatorio');
            return;
        }
        setLoading(true);
        setError('');
        try {
            if (id) {
                await api.put(`/categorias/${id}`, { nombre });
            } else {
                await api.post('/categorias', { nombre });
            }
            navigate('/categorias');
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
            <h1 className="text-2xl font-bold text-primary mb-4">{id ? 'Editar' : 'Nueva'} Categoría</h1>
            {error && <Alert type="error" message={error} />}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Nombre *</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                        required
                    />
                </div>
                <div className="flex justify-end space-x-3">
                    <button type="button" onClick={() => navigate('/categorias')} className="px-4 py-2 border rounded hover:bg-gray-100">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default CategoryForm;