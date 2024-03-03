import React from 'react'
import album from '../assets/Images/album.png'
import { Element } from 'react-scroll'

function Hero() {
    return (
        <Element name='Hero' className='h-screen bg-slate-200 flex flex-col'>
            <div className='h-[70vh] w-full flex flex-col gap-5 items-center justify-center bg-slate-400'>
                <img src={album} alt="" className='h-40 rounded-full' />
                <h1>loek</h1>
            </div>
        </Element>
    )
}

export default Hero