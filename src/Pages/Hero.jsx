import React from 'react'
import album from '../assets/Images/album.png'
import pfp from '../assets/Images/pfp.jpg'

function Hero() {
    return (
        <div id='Hero' className='h-screen relative flex flex-col justify-center items-center'>
            <img src={album} className='absolute brightness-50 h-full w-full object-cover -z-10'/>
            <div className='flex flex-col items-center gap-5'>
                <img src={pfp} alt="" className='h-52 rounded-full' />
                <h1 className=' text-3xl'>Luke Symon A. Alamil</h1>
            </div>
        </div>
    )
}

export default Hero