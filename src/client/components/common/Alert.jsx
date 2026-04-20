import React from 'react';

const Alert = ({ type, message }) => {
    const bgColor = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700';
    const icon = type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle';

    return (
        <div className={`border ${bgColor} px-4 py-3 rounded mb-4`} role="alert">
            <span className="mr-2"><i className={`fa ${icon}`}></i></span>
            <span>{message}</span>
        </div>
    );
};

export default Alert;