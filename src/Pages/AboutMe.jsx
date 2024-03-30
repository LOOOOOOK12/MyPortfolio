import React from 'react'
import image from '../assets/Images/album.png'

function AboutMe() {
    return (
        <div id='AboutMe' className='h-screen p-40 gap-20 bg-slate-800 flex items-center'>
            <img src={image} alt="" className='h-[30rem] w-[25rem]'/>
            <div className='flex flex-col gap-8'>
                <h1 className='text-6xl'>About Me</h1>
                <p className='text-3xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ducimus vel ipsa vitae temporibus 
                    iste praesentium minus nam velit, rem dicta, molestiae perferendis dolore illum dolores nemo veritatis. Repellat, deserunt.
                </p>
                <a href="">Download CV</a>
            </div>
        </div>
    )
}

export default AboutMe