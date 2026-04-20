import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const ProductFilters = ({ filters, setFilters }) => {
    const [categorias, setCategorias] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    // Estado local para el input de búsqueda
    const [searchInput, setSearchInput] = useState(filters.search || '');

    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const res = await api.get('/productos/filters/data');
                setCategorias(res.data.categorias || []);
                setProveedores(res.data.proveedores || []);
            } catch (error) {
                console.error('Error cargando filtros', error);
            }
        };
        fetchFilters();
    }, []);

    // Sincronizar searchInput cuando filters.search cambie externamente (ej. al limpiar)
    useEffect(() => {
        setSearchInput(filters.search || '');
    }, [filters.search]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = () => {
        setFilters(prev => ({ ...prev, search: searchInput }));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-600">Buscar (SKU/Nombre)</label>
                    <div className="flex">
                        <input
                            type="text"
                            name="searchInput"
                            placeholder="Escribe y presiona Enter o click en Buscar"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            onKeyDown={handleKeyDown}
                            className="border rounded-l px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button
                            onClick={handleSearchSubmit}
                            className="bg-primary text-white px-4 py-2 rounded-r hover:bg-secondary"
                        >
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        <i className="fa fa-info-circle"></i> Presiona Enter o haz clic en el botón para buscar
                    </p>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Categoría</label>
                    <select name="categoria" value={filters.categoria} onChange={handleChange} className="border rounded px-3 py-2 w-full">
                        <option value="">Todas las categorías</option>
                        {categorias.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Proveedor</label>
                    <select name="proveedor" value={filters.proveedor} onChange={handleChange} className="border rounded px-3 py-2 w-full">
                        <option value="">Todos los proveedores</option>
                        {proveedores.map(prov => (
                            <option key={prov.id} value={prov.id}>{prov.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center h-full pt-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name="stockBajo"
                            checked={filters.stockBajo}
                            onChange={handleChange}
                        />
                        <span>Solo bajo stock</span>
                    </label>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            setFilters({ search: '', categoria: '', proveedor: '', stockBajo: false });
                            setSearchInput('');
                        }}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        <i className="fa fa-times mr-1"></i> Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters;