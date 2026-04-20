import React, { useState } from 'react';
import api from '../../services/api';
import Alert from '../common/Alert';

const ReportGestion = () => {
    const [generating, setGenerating] = useState(false);
    const [error, setError] = useState('');

    const generatePDF = async () => {
        setGenerating(true);
        setError('');
        try {
            const response = await api.get('/reports/management', { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `reporte_gestion_${new Date().toISOString().slice(0, 10)}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            setError('Error al generar el PDF');
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-primary mb-4">Reporte de Gestión</h1>
            {error && <Alert type="error" message={error} />}
            <div className="bg-white p-6 rounded-lg shadow max-w-md">
                <p className="mb-4 text-gray-600">Genera un PDF ejecutivo con KPIs, gráficos y listado completo de productos para toma de decisiones.</p>
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
                            <i className="fa fa-file-pdf-o mr-2"></i> Generar PDF de Gestión
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ReportGestion;