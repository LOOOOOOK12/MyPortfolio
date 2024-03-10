import React from 'react'
import { links } from '../Constants/links'
import Logos from './logos'

function Footer() {
    return (
        <div className='flex flex-col justify-center items-center text-slate-50 bg-slate-700 h-40'>
            <p>Made with love by Luke Symon Alamil</p>
            <div className='flex gap-5'>
                {links.map((l)=>(
                    <Logos
                        logo ={l.logo}
                        alt={l.alt}
                        links={l.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Footer