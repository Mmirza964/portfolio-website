import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';
import ProjectsPage from './ProjectsPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ProjectsPage />
    </ThemeProvider>
  </React.StrictMode>
);
