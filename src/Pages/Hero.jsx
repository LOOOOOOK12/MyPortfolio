import React from 'react'
import album from '../assets/Images/album.png'
import { Element } from 'react-scroll'

function Hero() {
    return (
        <Element name='Hero' className='h-screen bg-slate-200 flex flex-col justify-center items-center'>
            <img src={album} alt="" className='h-40 rounded-full' />
            <h1>loek</h1>
        </Element>
    )
}

export default Hero