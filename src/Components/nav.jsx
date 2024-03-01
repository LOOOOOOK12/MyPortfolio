import React from 'react'
import { Link } from 'react-scroll';

function nav() {
    return (
        <div className='w-full'>
            <nav className='px-16 p-4 w-full top-0 z-10 fixed flex justify-between items-center text-center bg-slate-500'>
                <Link to='Hero' smooth={true} duration={500}><h1 className='text-3xl'>LOGO</h1></Link>
                <ul className='flex gap-8'>
                    <Link to='Hero' smooth={true} duration={500}>Home</Link>
                    <Link to='AboutMe' smooth={true} duration={500}>About Me</Link>
                    <Link to='Projects' smooth={true} duration={500}>Projects</Link>
                    <Link to='Certificates' smooth={true} duration={500}>Certificates</Link>
                    <Link to='ContactMe' smooth={true} duration={500}>Contact Me</Link>
                </ul>
            </nav>
        </div>
    )
}

export default nav