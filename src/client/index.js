import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css'; // archivo de entrada de Tailwind

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);