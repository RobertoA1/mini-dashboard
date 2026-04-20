import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

const ReportOperacional = () => {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState('');
    const [loading, setLoading] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const res = await api.get('/categorias/all'); // Endpoint para obtener todas sin paginación
                setCategorias(res.data);
            } catch (err) {
                setError('Error al cargar categorías');
            }
        };
        fetchCategorias();
    }, []);

    const generatePDF = async () => {
        setGenerating(true);
        setError('');
        try {
            const response = await api.get('/reports/operational', {
                params: { categoria: selectedCategoria },
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `reporte_operacional_${new Date().toISOString().slice(0, 10)}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            setError('Error al generar el PDF');
        } finally {
            setGenerating(false);
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-primary mb-4">Reporte Operacional</h1>
            {error && <Alert type="error" message={error} />}
            <div className="bg-white p-6 rounded-lg shadow max-w-md">
                <p className="mb-4 text-gray-600">Genera un PDF con el listado detallado de productos (SKU, nombre, stock y valor total).</p>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Filtrar por Categoría (opcional)</label>
                    <select
                        value={selectedCategoria}
                        onChange={(e) => setSelectedCategoria(e.target.value)}
                        className="border rounded w-full px-3 py-2"
                    >
                        <option value="">Todas las categorías</option>
                        {categorias.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={generatePDF}
                    disabled={generating}
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary disabled:opacity-50 flex items-center"
                >
                    {generating ? (
                        <>
                            <i className="fa fa-spinner fa-spin mr-2"></i> Generando...
                        </>
                    ) : (
                        <>
                            <i className="fa fa-file-pdf-o mr-2"></i> Generar PDF
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ReportOperacional;