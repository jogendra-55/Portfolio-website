import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    
    <>
    <Header/>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='myprojects' element={<Projects/>}/>
        
      </Routes>

    </BrowserRouter>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App