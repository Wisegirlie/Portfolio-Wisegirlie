import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Services from './components/services';
import Skills from './components/skills';
import Contact from './components/contact';


const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/"          element={<Home />} />
                <Route exact path="/about"     element={<About />} />
                <Route exact path="/projects"  element={<Projects />} />
                <Route exact path="/skills"    element={<Skills />} />
                <Route exact path="/services"  element={<Services />} />
                <Route exact path="/contact"   element={<Contact />} />
            </Routes>
        </div>
    )
}
export default MainRouter
