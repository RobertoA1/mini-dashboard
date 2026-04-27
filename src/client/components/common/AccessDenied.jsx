import React from 'react';

const AccessDenied = () => (
    <div className="p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-primary mb-2">Acceso restringido</h1>
        <p className="mb-4">Esta sección solo está disponible para cuentas administrativas.</p>
        <a href="/tienda/auth" className="text-blue-600 underline">
            Ir a iniciar sesión en la tienda
        </a>
    </div>
);

export default AccessDenied;
