import React from 'react'

function nav() {
    return (
        <div className='w-full'>
            <nav className='px-16 p-4 w-full top-0 z-10 fixed flex justify-between items-center text-center bg-slate-500'>
                <h1 className='text-3xl'>LOGO</h1>
                <ul className='flex gap-8'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Certificates</li>
                    <li>Contact Me</li>
                </ul>
            </nav>
        </div>
    )
}

export default nav