import React from 'react'
import Github from '../assets/logos/projectsLogo/github.png'
import Link from '../assets/logos/projectsLogo/link.png'

function projectContainer({image,alt,title,desc,language,github,link}) {
    return (
        <div className='flex flex-col gap-8 w-full justify-center items-center md:flex-row md:max-w-3xl'>
            <img src={image} alt={alt} className='h-[300px] w-full rounded-md md:w-[450px]'/>
            <div className='flex flex-col gap-3 w-full'>
                <h1 className='text-4xl'>{title}</h1>
                <p className='text-left'>{desc}</p>
                <div className='grid grid-cols-3 gap-2'>
                    {language.map((lang,idx) =>( 
                        <h1 key={idx} className='bg-[#0c1727] text-sm text-center px-2 rounded-full border border-[#8a8a8a]'>{lang}</h1> 
                    ))}
                </div>
                <div className='flex gap-3'>
                    <a href={github}><img src={Github} alt="Github" /></a>
                    <a href={link}><img src={Link} alt="Link" /></a>
                </div>
            </div>
        </div>
    )
}

export default projectContainer