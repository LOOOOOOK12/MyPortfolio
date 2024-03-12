import React from 'react'
import album from '../assets/Images/album.png'
import { Element } from 'react-scroll'

function Hero() {
    return (
        <Element name='Hero' className='h-screen relative flex flex-col justify-center items-center'>
            <img src={album} className='absolute brightness-50 h-full w-full object-cover -z-10'/>
            <img src={album} alt="" className='h-40 rounded-full' />
            <h1>loek</h1>
        </Element>
    )
}

export default Hero