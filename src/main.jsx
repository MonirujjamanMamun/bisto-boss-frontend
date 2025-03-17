import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import router from './routes/mainRoute.jsx';
import AuthContext from './context/AuthContext/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);
