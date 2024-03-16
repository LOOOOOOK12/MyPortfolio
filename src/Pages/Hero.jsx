import React from 'react'
import album from '../assets/Images/album.png'
import { Element } from 'react-scroll'

function Hero() {
    return (
        <Element name='Hero' className='h-screen relative flex flex-col justify-center items-center'>
            <img src={album} className='absolute brightness-50 h-full w-full object-cover -z-10'/>
            <div className='flex flex-col items-center gap-5'>
                <img src={album} alt="" className='h-40 rounded-full' />
                <h1 className='text-gray-300 text-3xl'>Luke Symon A. Alamil</h1>
            </div>
        </Element>
    )
}

export default Hero