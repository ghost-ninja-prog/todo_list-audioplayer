import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Index from './pages';
import Contacts from './pages/Contacts';
import LayoutPage from './pages/LayoutPage';
import AudioPlayer from './pages/AudioPlayer/AudioPlayer';
import TodoList from './pages/TodoList/TodoList';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import About from './pages/About';
import Home from './pages/Home/Home';


import { store } from './store/store';

import './styles/reset.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'audioplayer',
        element: <AudioPlayer />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'todolist',
        element: <TodoList />
      }
    ]
  }
  // {
  //   path: '/contacts',
  //   element: <Contacts />
  // },
  // {
  //   path: '/about',
  //   element: <About />
  // },
  // {
  //   path: '/todolist',
  //   element: <TodoList />
  // },
  // {
  //   path: '/audioplayer',
  //   element: <AudioPlayer />
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

