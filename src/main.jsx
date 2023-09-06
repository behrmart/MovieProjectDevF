import React from 'react'
import ReactDOM from 'react-dom/client'
import AppMain from './app-main';
import Fortune from './components/fortune/fortune';
import Body from './components/body/body';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // React Router


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppMain />,
    errorElement: <h1>Not Found 404</h1>,
    children: [
      {
        path:"/fortune",
        element: <Fortune />
      },
      {
        path:"/comedia",
        element: <Body genero="comedia" key={"comedia"}/>
      },
      ,
      {
        path:"/independientes",
        element: <Body genero="independientes" key={"independientes"}/>
      }
    ]
  },
  /* {
    path: ":genero/:pelicula",
    element: <DetailMovie key={2}/>,
  } */
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
)

