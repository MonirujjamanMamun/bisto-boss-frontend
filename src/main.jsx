import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/mainRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthContext from './context/AuthContext/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </HelmetProvider>
  </StrictMode>
);
