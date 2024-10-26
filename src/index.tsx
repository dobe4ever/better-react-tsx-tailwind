// src/index.tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import './index.css';
import App from './App';

const root = createRoot( // Use createRoot directly
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);