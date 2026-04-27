import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Loader from '../common/Loader';
import Alert from '../common/Alert';

// Componente para gestión de imágenes
const ImageManager = ({ productId, images, onImagesChange }) => {
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newImageType, setNewImageType] = useState('detail');
    const [uploadMode, setUploadMode] = useState('url'); // 'url' o 'file'
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const fileInputRef = React.useRef(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        // Validar tipo de archivo
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            alert('Solo se permiten imágenes (JPEG, PNG, WebP, GIF)');
            return;
        }
        
        // Validar tamaño (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('El archivo es demasiado grande. Máximo 5MB.');
            return;
        }
        
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const uploadImageFile = async () => {
        if (!selectedFile) return;
        
        setLoading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);
        
        try {
            // Subir archivo al servidor
            const uploadRes = await api.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            // Agregar imagen al producto con la URL devuelta
            const res = await api.post(`/productos/${productId}/images`, {
                url: uploadRes.data.url,
                tipo: newImageType,
                orden: images.length
            });
            
            onImagesChange([...images, res.data]);
            
            // Limpiar estado
            setSelectedFile(null);
            setPreviewUrl('');
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (err) {
            alert('Error al subir imagen: ' + (err.response?.data?.error || err.message));
        } finally {
            setLoading(false);
        }
    };

    const handleAddImage = async () => {
        if (uploadMode === 'file') {
            await uploadImageFile();
        } else {
            // Modo URL
            if (!newImageUrl.trim()) return;
            setLoading(true);
            try {
                const res = await api.post(`/productos/${productId}/images`, {
                    url: newImageUrl,
                    tipo: newImageType,
                    orden: images.length
                });
                onImagesChange([...images, res.data]);
                setNewImageUrl('');
            } catch (err) {
                alert('Error al agregar imagen: ' + (err.response?.data?.error || err.message));
            } finally {
                setLoading(false);
            }
        }
    };

    const handleDeleteImage = async (imageId) => {
        if (!confirm('¿Está seguro de eliminar esta imagen?')) return;
        try {
            await api.delete(`/productos/images/${imageId}`);
            onImagesChange(images.filter(img => img.id !== imageId));
        } catch (err) {
            alert('Error al eliminar imagen: ' + (err.response?.data?.error || err.message));
        }
    };

    const handleSetMain = async (imageId) => {
        try {
            await api.patch(`/productos/${productId}/images/main`, { imageId });
            // Recargar producto para obtener orden actualizado
            const res = await api.get(`/productos/${productId}`);
            onImagesChange(res.data.imagenes || []);
        } catch (err) {
            alert('Error al establecer imagen principal: ' + (err.response?.data?.error || err.message));
        }
    };

    return (
        <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-lg mb-3">Imágenes del Producto</h3>
            
            {/* Lista de imágenes */}
            <div className="grid grid-cols-4 gap-3 mb-4">
                {images.map((img, idx) => (
                    <div key={img.id} className={`relative border rounded overflow-hidden ${img.orden === 0 ? 'ring-2 ring-primary' : ''}`}>
                        <img src={img.url} alt={`Imagen ${idx + 1}`} className="w-full h-24 object-cover" />
                        {img.orden === 0 && (
                            <span className="absolute top-1 left-1 bg-primary text-white text-xs px-2 py-0.5 rounded">Principal</span>
                        )}
                        <div className="absolute bottom-0 right-0 flex gap-1 p-1">
                            {img.orden !== 0 && (
                                <button 
                                    onClick={() => handleSetMain(img.id)}
                                    className="bg-green-600 text-white text-xs px-2 py-1 rounded hover:bg-green-700"
                                    title="Establecer como principal"
                                >
                                    ★
                                </button>
                            )}
                            <button 
                                onClick={() => handleDeleteImage(img.id)}
                                className="bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                ))}
                {images.length === 0 && (
                    <div className="col-span-4 text-center text-gray-500 py-4">
                        No hay imágenes. Agregue una URL de imagen.
                    </div>
                )}
            </div>

            {/* Selector de modo */}
            <div className="flex gap-2 mb-3">
                <button
                    type="button"
                    onClick={() => setUploadMode('url')}
                    className={`px-3 py-1 rounded text-sm ${uploadMode === 'url' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    📎 URL Externa
                </button>
                <button
                    type="button"
                    onClick={() => setUploadMode('file')}
                    className={`px-3 py-1 rounded text-sm ${uploadMode === 'file' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                    📁 Subir Archivo
                </button>
            </div>

            {/* Agregar nueva imagen - Modo URL */}
            {uploadMode === 'url' && (
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="URL de la imagen (ej: https://ejemplo.com/imagen.jpg)"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        className="flex-1 border rounded px-3 py-2 text-sm"
                    />
                    <select
                        value={newImageType}
                        onChange={(e) => setNewImageType(e.target.value)}
                        className="border rounded px-3 py-2 text-sm"
                    >
                        <option value="card">Card</option>
                        <option value="detail">Detalle</option>
                    </select>
                    <button
                        onClick={handleAddImage}
                        disabled={loading || !newImageUrl.trim()}
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 disabled:opacity-50"
                    >
                        {loading ? '...' : 'Agregar'}
                    </button>
                </div>
            )}

            {/* Agregar nueva imagen - Modo Archivo */}
            {uploadMode === 'file' && (
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-start">
                        <div className="flex-1">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                onChange={handleFileSelect}
                                className="w-full border rounded px-3 py-2 text-sm"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Máximo 5MB. Formatos: JPEG, PNG, WebP, GIF
                            </p>
                        </div>
                        <select
                            value={newImageType}
                            onChange={(e) => setNewImageType(e.target.value)}
                            className="border rounded px-3 py-2 text-sm"
                        >
                            <option value="card">Card</option>
                            <option value="detail">Detalle</option>
                        </select>
                        <button
                            onClick={handleAddImage}
                            disabled={loading || !selectedFile}
                            className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 disabled:opacity-50"
                        >
                            {loading ? '⏳' : '📤 Subir'}
                        </button>
                    </div>
                    
                    {/* Preview de imagen seleccionada */}
                    {previewUrl && (
                        <div className="mt-2">
                            <p className="text-sm text-gray-600 mb-1">Vista previa:</p>
                            <img 
                                src={previewUrl} 
                                alt="Preview" 
                                className="h-32 w-auto border rounded object-cover"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// Componente para gestión de atributos
const AttributeManager = ({ productId, attributes, onAttributesChange }) => {
    const [newClave, setNewClave] = useState('');
    const [newValor, setNewValor] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAddAttribute = async () => {
        if (!newClave.trim() || !newValor.trim()) return;
        setLoading(true);
        try {
            const res = await api.post(`/productos/${productId}/attributes`, {
                clave: newClave,
                valor: newValor,
                orden: attributes.length
            });
            onAttributesChange([...attributes, res.data]);
            setNewClave('');
            setNewValor('');
        } catch (err) {
            alert('Error al agregar atributo: ' + (err.response?.data?.error || err.message));
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAttribute = async (attrId) => {
        if (!confirm('¿Está seguro de eliminar esta característica?')) return;
        try {
            await api.delete(`/productos/attributes/${attrId}`);
            onAttributesChange(attributes.filter(attr => attr.id !== attrId));
        } catch (err) {
            alert('Error al eliminar atributo: ' + (err.response?.data?.error || err.message));
        }
    };

    return (
        <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-lg mb-3">Características del Producto</h3>
            
            {/* Lista de atributos */}
            <div className="space-y-2 mb-4">
                {attributes.map((attr) => (
                    <div key={attr.id} className="flex items-center justify-between bg-white p-2 rounded border">
                        <div className="flex gap-4">
                            <span className="font-medium text-gray-700">{attr.clave}:</span>
                            <span className="text-gray-600">{attr.valor}</span>
                        </div>
                        <button 
                            onClick={() => handleDeleteAttribute(attr.id)}
                            className="text-red-600 hover:text-red-800 px-2"
                        >
                            ×
                        </button>
                    </div>
                ))}
                {attributes.length === 0 && (
                    <div className="text-center text-gray-500 py-2">
                        No hay características definidas.
                    </div>
                )}
            </div>

            {/* Agregar nuevo atributo */}
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Característica (ej: Color)"
                    value={newClave}
                    onChange={(e) => setNewClave(e.target.value)}
                    className="flex-1 border rounded px-3 py-2 text-sm"
                />
                <input
                    type="text"
                    placeholder="Valor (ej: Rojo)"
                    value={newValor}
                    onChange={(e) => setNewValor(e.target.value)}
                    className="flex-1 border rounded px-3 py-2 text-sm"
                />
                <button
                    onClick={handleAddAttribute}
                    disabled={loading || !newClave.trim() || !newValor.trim()}
                    className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 disabled:opacity-50"
                >
                    {loading ? '...' : 'Agregar'}
                </button>
            </div>
        </div>
    );
};

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    const [atributos, setAtributos] = useState([]);
    const [formData, setFormData] = useState({
        sku: '',
        nombre: '',
        descripcion: '',
        descuento_tipo: '',
        descuento_valor: '0',
        cuotas_sin_interes: false,
        envio_gratis: false,
        costo_envio: '0',
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
                        descuento_tipo: p.descuento_tipo || '',
                        descuento_valor: String(p.descuento_valor ?? '0'),
                        cuotas_sin_interes: Boolean(p.cuotas_sin_interes),
                        envio_gratis: Boolean(p.envio_gratis),
                        costo_envio: String(p.costo_envio ?? '0'),
                        categoria: p.categoria,
                        precio_compra: p.precio_compra,
                        precio_venta: p.precio_venta,
                        stock_actual: p.stock_actual,
                        stock_minimo: p.stock_minimo,
                        proveedor: p.proveedor,
                    });
                    setImagenes(p.imagenes || []);
                    setAtributos(p.atributos || []);
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
        const descuentoValor = parseFloat(formData.descuento_valor || '0');
        const costoEnvio = parseFloat(formData.costo_envio || '0');
        if (formData.descuento_tipo && Number.isNaN(descuentoValor)) {
            setError('El descuento ingresado no es válido');
            return false;
        }
        if (formData.descuento_tipo === 'porcentaje' && descuentoValor > 100) {
            setError('El descuento porcentual no puede superar 100%');
            return false;
        }
        if (formData.descuento_tipo && descuentoValor < 0) {
            setError('El descuento no puede ser negativo');
            return false;
        }
        if (!formData.envio_gratis && (Number.isNaN(costoEnvio) || costoEnvio < 0)) {
            setError('El costo de envío no puede ser negativo');
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
            const descuentoValor = formData.descuento_tipo ? parseFloat(formData.descuento_valor || '0') : 0;
            const costoEnvio = formData.envio_gratis ? 0 : parseFloat(formData.costo_envio || '0');
            const payload = {
                ...formData,
                descuento_tipo: formData.descuento_tipo || null,
                precio_compra: parseFloat(formData.precio_compra),
                precio_venta: parseFloat(formData.precio_venta),
                stock_actual: parseFloat(formData.stock_actual),
                stock_minimo: parseFloat(formData.stock_minimo),
                descuento_valor: descuentoValor,
                costo_envio: costoEnvio,
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
                        <label className="block text-sm font-medium mb-1">Tipo de descuento</label>
                        <select name="descuento_tipo" value={formData.descuento_tipo} onChange={handleChange} className="border rounded w-full px-3 py-2">
                            <option value="">Sin descuento</option>
                            <option value="porcentaje">Porcentaje</option>
                            <option value="monto">Monto fijo</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Valor de descuento</label>
                        <input type="number" step="0.01" name="descuento_valor" value={formData.descuento_valor} onChange={handleChange} className="border rounded w-full px-3 py-2" disabled={!formData.descuento_tipo} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Costo de envío</label>
                        <input type="number" step="0.01" name="costo_envio" value={formData.costo_envio} onChange={handleChange} className="border rounded w-full px-3 py-2" disabled={formData.envio_gratis} />
                    </div>
                    <div className="flex items-center pt-6">
                        <label className="inline-flex items-center gap-2">
                            <input type="checkbox" name="cuotas_sin_interes" checked={formData.cuotas_sin_interes} onChange={(e) => setFormData(prev => ({ ...prev, cuotas_sin_interes: e.target.checked }))} />
                            12 cuotas sin interés
                        </label>
                    </div>
                    <div className="flex items-center pt-6">
                        <label className="inline-flex items-center gap-2">
                            <input type="checkbox" name="envio_gratis" checked={formData.envio_gratis} onChange={(e) => setFormData(prev => ({ ...prev, envio_gratis: e.target.checked, costo_envio: e.target.checked ? '0' : prev.costo_envio }))} />
                            Envío gratis
                        </label>
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

                {/* Gestión de Imágenes - Solo en modo edición */}
                {id && (
                    <div className="mt-6">
                        <ImageManager 
                            productId={id} 
                            images={imagenes} 
                            onImagesChange={setImagenes} 
                        />
                    </div>
                )}

                {/* Gestión de Atributos - Solo en modo edición */}
                {id && (
                    <div className="mt-6">
                        <AttributeManager 
                            productId={id} 
                            attributes={atributos} 
                            onAttributesChange={setAtributos} 
                        />
                    </div>
                )}

                <div className="mt-6 flex justify-end space-x-3">
                    <button type="button" onClick={() => navigate('/productos')} className="px-4 py-2 border rounded hover:bg-gray-100">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
