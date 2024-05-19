import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Main from './pages/Main';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Main', element: <Main /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}