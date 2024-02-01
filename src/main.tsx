import './styles/normalize.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorBoundaryPage from './components/ErrorBoundary/ErrorBoundaryPage';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorBoundaryPage />}>
      <CssBaseline />
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
