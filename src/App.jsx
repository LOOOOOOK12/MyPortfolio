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
      <div className='absolute overflow-hidden size-[18rem] -z-10 top-[17rem] left-[35rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
      <div className='absolute overflow-hidden size-[10rem] -z-10 top-[24rem] left-[20rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
      <div className='absolute overflow-hidden size-[15rem] -z-10 top-[68rem] left-[9rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
      <div className='absolute overflow-hidden size-[15rem] -z-10 top-[107rem] left-[7rem] rounded-full blur-3xl opacity-[0.4] bg-accent'></div>
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
