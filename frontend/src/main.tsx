import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.tsx';
import AdminMenu from './pages/AdminMenu.tsx';
import Protect from './components/Protect.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/admin-page',
    element: <Protect><AdminMenu/></Protect>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);