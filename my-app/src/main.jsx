import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todos from './features/todos/Todos.jsx';
import { useState } from 'react';
import Addtodo from './features/todos/Addtodo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/todos",
        element: <Todos></Todos>,
      },

      {
        path: "/addtodo",
        element: <Addtodo></Addtodo>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </Provider>
);
