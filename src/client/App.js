import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import ProductList from './components/Products/ProductList';
import ProductForm from './components/Products/ProductForm';
import CategoryList from './components/Categories/CategoryList';
import CategoryForm from './components/Categories/CategoryForm';
import ProviderList from './components/Providers/ProviderList';
import ProviderForm from './components/Providers/ProviderForm';
import ReportOperacional from './components/Reports/ReportOperacional';
import ReportGestion from './components/Reports/ReportGestion';
import DeletedProducts from './components/Products/DeletedProducts'; // para restaurar

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/productos" element={<ProductList />} />
                    <Route path="/productos/nuevo" element={<ProductForm />} />
                    <Route path="/productos/editar/:id" element={<ProductForm />} />
                    <Route path="/productos/eliminados" element={<DeletedProducts />} />
                    <Route path="/categorias" element={<CategoryList />} />
                    <Route path="/categorias/nueva" element={<CategoryForm />} />
                    <Route path="/categorias/editar/:id" element={<CategoryForm />} />
                    <Route path="/categorias/eliminadas" element={<CategoryList deleted />} />
                    <Route path="/proveedores" element={<ProviderList />} />
                    <Route path="/proveedores/nuevo" element={<ProviderForm />} />
                    <Route path="/proveedores/editar/:id" element={<ProviderForm />} />
                    <Route path="/proveedores/eliminados" element={<ProviderList deleted />} />
                    <Route path="/reportes/operacional" element={<ReportOperacional />} />
                    <Route path="/reportes/gestion" element={<ReportGestion />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;