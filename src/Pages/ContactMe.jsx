import React from 'react'

function ContactMe() {
    return (
        <div id='ContactMe' className='h-screen p-8 flex flex-col gap-5 justify-center items-center text-center bg-transparent'>
            <h1 className='text-3xl md:text-5xl font-semibold '>Need Something? Let's Talk!</h1>
            <a href="mailto:lukealamil12@example.com" className='px-3 py-2 bg-accent hover:bg-[#52299A] duration-100 rounded-md '>Contact Me!</a>
        </div>
    )
}

export default ContactMe