import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Page } from './pages/components/page.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page/>,
  },
  {
    path: "/legacy",
    element: <App></App>,
  },
  {
    path: "/home",
    element: <Page>Home Page</Page>,
  },
  {
    path: "/about",
    element: <Page>About Page</Page>,
  },
  {
    path: "/projects",
    element: <Page>Projects</Page>,
  },  
  {
    path: "/contact",
    element: <Page>Contact</Page>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
