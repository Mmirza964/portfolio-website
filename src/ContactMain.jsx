import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';
import ContactPage from './ContactPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContactPage />
    </ThemeProvider>
  </React.StrictMode>
);
