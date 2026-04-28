import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [openMantenimiento, setOpenMantenimiento] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);
    const toggleMantenimiento = () => setOpenMantenimiento(!openMantenimiento);

    const navItemClass = ({ isActive }) =>
        `flex items-center p-2 text-gray-200 hover:bg-accent rounded ${isActive ? 'bg-accent' : ''}`;

    return (
        <div className={`bg-primary text-white h-screen transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col`}>
            <div className="p-4 flex justify-between items-center">
                {!collapsed && <span className="text-xl font-bold">Gestión</span>}
                <button onClick={toggleSidebar} className="text-white">
                    <i className={`fa ${collapsed ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
                </button>
            </div>
            <nav className="flex-1 px-2 space-y-1">
                <NavLink to="/" className={navItemClass}>
                    <i className="fa fa-dashboard w-6"></i> {!collapsed && 'Dashboard'}
                </NavLink>
                <NavLink to="/ordenes" className={navItemClass}>
                    <i className="fa fa-shopping-bag w-6"></i> {!collapsed && 'Órdenes'}
                </NavLink>
                <div>
                    <button onClick={toggleMantenimiento} className="w-full flex items-center p-2 text-gray-200 hover:bg-accent rounded">
                        <i className="fa fa-wrench w-6"></i>
                        {!collapsed && <span className="flex-1 text-left">Mantenimiento</span>}
                        {!collapsed && <i className={`fa fa-chevron-${openMantenimiento ? 'down' : 'right'}`}></i>}
                    </button>
                    {openMantenimiento && !collapsed && (
                        <div className="ml-6 space-y-1 mt-1">
                            <NavLink to="/productos" className={navItemClass}><i className="fa fa-cube w-6"></i> Productos</NavLink>
                            <NavLink to="/categorias" className={navItemClass}><i className="fa fa-tags w-6"></i> Categorías</NavLink>
                            <NavLink to="/proveedores" className={navItemClass}><i className="fa fa-truck w-6"></i> Proveedores</NavLink>
                        </div>
                    )}
                </div>
                {/* Reportes */}
                <div className="pt-4">
                    <NavLink to="/reportes/operacional" className={navItemClass}><i className="fa fa-file-pdf-o w-6"></i> {!collapsed && 'Reporte Operacional'}</NavLink>
                    <NavLink to="/reportes/gestion" className={navItemClass}><i className="fa fa-bar-chart w-6"></i> {!collapsed && 'Reporte Gestión'}</NavLink>
                </div>
                {/* Tienda */}
                <div className="pt-4 border-t border-gray-600">
                    <a href="/tienda/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-gray-200 hover:bg-accent rounded">
                        <i className="fa fa-external-link w-6"></i> {!collapsed && 'Ir a Tienda'}
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;