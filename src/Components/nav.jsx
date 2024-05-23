import React from 'react'

function nav() {
    return (
        <div className='w-full z-20'>
            <nav className='px-8 p-5 w-full top-0 z-50 fixed flex justify-between items-center text-center'>
                <a href='#Hero'><h1 className='text-2xl cursor-default text-gray-300 underline underline-offset-8 decoration-blue-400 -rotate-6'>Loak☕</h1></a>
                <ul className='flex gap-8 max-[780px]:hidden'>
                    <a href='#Hero' className='cursor-default hover:text-primary transition ease-in delay-75'>Home</a>
                    <a href='#AboutMe' className='cursor-default hover:text-primary transition ease-in delay-75'>About Me</a>
                    <a href='#Projects' className='cursor-default hover:text-primary transition ease-in delay-75'>Projects</a>
                    <a href='#Certificates' className='cursor-default hover:text-primary transition ease-in delay-75'>Certificates</a>
                    <a href='#ContactMe' className='cursor-default hover:text-primary transition ease-in delay-75'>Contact Me</a>
                </ul>
            </nav>
        </div>
    )
}

export default nav