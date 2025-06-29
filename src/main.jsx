// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProviderWrapper from './ThemeProviderWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      {(toggleColorMode) => (
        <BrowserRouter>
          <App toggleColorMode={toggleColorMode} />
        </BrowserRouter>
      )}
    </ThemeProviderWrapper>
  </React.StrictMode>
);
