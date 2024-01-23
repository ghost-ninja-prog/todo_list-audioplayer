import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Contacts from './pages/Contacts';
import About from './pages/About';
import Home from './pages/Home';

import AudioPlayer from './pages/AudioPlayer/AudioPlayer';
import TodoList from './pages/TodoList/TodoList';
import ErrorPage from './pages/ErrorPage/ErrorPage';


import { Provider } from 'react-redux';
import { store } from './store/store';

import './styles/reset.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
    // children: [
    //   {
    //     path: 'contacts',
    //     element: <Contacts />
    //   },
    //   {
    //     path: 'about',
    //     element: <About />
    //   }
    // ]
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/todolist',
    element: <TodoList />
  },
  {
    path: '/audioplayer',
    element: <AudioPlayer />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

