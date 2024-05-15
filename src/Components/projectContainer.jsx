import React from 'react'

function projectContainer({image,alt,title,desc,language,github,link}) {
    return (
        <div className='flex flex-col md:flex-row gap-8 justify-center items-center max-w-xl'>
            <img src={image} alt={alt} className='h-48 w-full rounded-md'/>
            <div className='flex flex-col gap-3 w-auto'>
                <h1 className='text-3xl'>{title}</h1>
                <p className='text-left'>{desc}</p>
                <div className='flex gap-5'>
                    {language.map((lang,idx) =>(
                        <h2 key={idx}>{lang}</h2>
                    ))}
                </div>
                <div className='flex gap-3'>
                    <a href={github}>Github</a>
                    <a href={link}>Demo</a>
                </div>
            </div>
        </div>
    )
}

export default projectContainer