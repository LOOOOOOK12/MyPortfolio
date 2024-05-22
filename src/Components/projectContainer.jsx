import React from 'react'
import Github from '../assets/logos/projectsLogo/github.png'
import Link from '../assets/logos/projectsLogo/link.png'

function projectContainer({image,alt,title,desc,language,github,link}) {
    return (
        <div className='flex flex-col md:flex-row gap-8 justify-center items-center md:w-[800px]'>
            <img src={image} alt={alt} className='h-[300px] w-full md:w-[460px] rounded-md'/>
            <div className='flex flex-col gap-3 w-auto'>
                <h1 className='text-4xl'>{title}</h1>
                <p className='text-left'>{desc}</p>
                <div className='grid grid-cols-3 gap-2'>
                    {language.map((lang,idx) =>( 
                        <p key={idx} className='bg-[#0c1727] text-center rounded-full px-2 border border-[#8a8a8a]'>{lang}</p> 
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