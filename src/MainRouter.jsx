import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Services from './pages/services'
import Contact from './pages/contact'



const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/"          element={<Home />} />
                <Route exact path="/about"     element={<About />} />
                <Route exact path="/projects"  element={<Projects />} />
                <Route exact path="/services"  element={<Services />} />
                <Route exact path="/contact"   element={<Contact />} />
            </Routes>
        </div>
    )
}
export default MainRouter
