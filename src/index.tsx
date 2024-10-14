import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App';

// src/App.tsx

const root = createRoot( // Use createRoot directly
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="box-sizing overflow-y-auto md:box-content">

      <App/>

    </div>
  </React.StrictMode>
);