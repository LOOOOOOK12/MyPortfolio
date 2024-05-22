import React from 'react'
import Github from '../assets/logos/projectsLogo/github.png'
import Link from '../assets/logos/projectsLogo/link.png'

function projectContainer({image,alt,title,desc,language,github,link}) {
    return (
        <div className='flex flex-col md:flex-row gap-8 justify-center items-center md:w-[750px]'>
            <img src={image} alt={alt} className='h-[300px] w-[500px] rounded-md'/>
            <div className='flex flex-col gap-3 w-auto'>
                <h1 className='text-3xl'>{title}</h1>
                <p className='text-left'>{desc}</p>
                <div className='flex gap-5'>
                    {language.map((lang,idx) =>(
                        <h2 key={idx}>{lang}</h2>
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