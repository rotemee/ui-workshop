import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@elementor/ui/styles';
import CssBaseline from '@elementor/ui/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider colorScheme="light">
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
