import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-64">
            <i className="fa fa-spinner fa-spin text-4xl text-primary"></i>
        </div>
    );
};

export default Loader;