import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-primary">Sistema de Gestión de Productos</h2>
            <div className="flex items-center space-x-4">
                <i className="fa fa-bell text-gray-600"></i>
                <i className="fa fa-user-circle text-2xl text-primary"></i>
            </div>
        </header>
    );
};

export default Header;