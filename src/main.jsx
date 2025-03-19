/* ===========================================
   |             GABRIELA WAISMAN            |
   |    Copyright © All rights reserved      |
   =========================================== */   
   
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Services from './components/services'
import Contact from './components/contact'
import App from './App';

import "./index.css";

{/* ---- ROUTER ---- */}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
         
  </React.StrictMode>,
)
