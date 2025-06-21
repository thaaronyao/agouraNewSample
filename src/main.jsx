import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';

import { RouterProvider } from 'react-router';

import routes from './Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
