/* ===============================
   |  Student: GABRIELA WAISMAN  |
   |         # 301328259         |
   ============================= */   
   
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Services from './pages/services'
import Contact from './pages/contact'
import App from './App';

import "./index.css";




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
