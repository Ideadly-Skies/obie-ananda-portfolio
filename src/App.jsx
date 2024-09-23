import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )  
}

export default App