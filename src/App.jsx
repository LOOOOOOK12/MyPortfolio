import Nav from './Components/nav'
import Hero from './Pages/Hero'
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Certificates from './Pages/Certificates'
import ContactMe from './Pages/ContactMe'
import Footer from './Components/Footer'
import './App.css'


function App() {
  
  return (
    <div className='relative overflow-hidden'>
      <Nav/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
