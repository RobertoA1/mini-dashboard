import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-primary">Sistema de Gestión de Productos</h2>
            <div className="flex items-center space-x-4">
                {user && (
                    <span className="text-sm text-gray-600">
                        {user.nombre} · {user.rol}
                    </span>
                )}
                {user && (
                    <button onClick={logout} className="text-sm text-red-600 underline">
                        Salir
                    </button>
                )}
                <i className="fa fa-bell text-gray-600"></i>
                <i className="fa fa-user-circle text-2xl text-primary"></i>
            </div>
        </header>
    );
};

export default Header;
