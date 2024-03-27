import React from 'react'

function nav() {
    return (
        <div className='w-full z-20'>
            <nav className='px-16 p-4 w-full top-0 z-10 fixed flex justify-between items-center text-center'>
                <a href='#Hero'><h1 className='text-3xl cursor-default text-gray-300'>LOGO</h1></a>
                <ul className='flex gap-8 max-[780px]:hidden'>
                    <a href='#Hero' className='cursor-default'>Home</a>
                    <a href='#AboutMe' className='cursor-default'>About Me</a>
                    <a href='#Projects' className='cursor-default'>Projects</a>
                    <a href='#Certificates' className='cursor-default'>Certificates</a>
                    <a href='#ContactMe' className='cursor-default'>Contact Me</a>
                </ul>
            </nav>
        </div>
    )
}

export default nav