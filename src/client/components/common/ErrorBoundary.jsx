import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error en componente:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <p className="text-red-500 p-4">Error al cargar el gráfico</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;