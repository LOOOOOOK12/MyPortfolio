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
      {/* header */}
      <div className='absolute overflow-hidden size-[18rem] -z-10 top-[12rem] left-[40rem] right-0 bottom-0 rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
      <div className='absolute overflow-hidden size-[10rem] -z-10 top-[22rem] left-[20rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
      {/* technoogies */}
      <div className='absolute overflow-hidden size-[15rem] -z-10 top-[68rem] right-[9rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
      <div className='absolute overflow-hidden size-[15rem] -z-10 top-[97rem] left-[7rem] rounded-full blur-3xl opacity-[0.4] bg-accent' ></div>
      {/* sa may contacts */}
      <div className='absolute overflow-hidden size-[12rem] -z-10 md:top-[233rem] md:left-[13rem] rounded-full blur-3xl opacity-[0.5] bg-accent'></div>
      <div className='absolute overflow-hidden size-[20rem] -z-10 md:top-[238rem] md:left-[40rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
      <div className='absolute overflow-hidden size-[16rem] -z-10 md:top-[252rem] md:left-[13rem] rounded-full blur-3xl opacity-[0.2] bg-accent'></div>
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
