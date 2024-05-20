import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './scss/index.scss'; 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
}])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
