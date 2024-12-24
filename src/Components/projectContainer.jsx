import Github from '../assets/logos/projectsLogo/github.png'
import Link from '../assets/logos/projectsLogo/link.png'

function projectContainer({image,alt,title,desc,language,github,link}) {

    return (
        <div className='flex flex-col gap-4 p-4 bg-[#0e0e1a] border-[1px] border-[#4d5975] rounded-md  w-full justify-center items-center md:flex-row md:max-w-4xl'>
            <div className='h-full w-full md:w-[65rem] md:h-[17rem]'>
                <a href={link} target='_blank'><img src={image} alt={alt} className='h-full w-full bg-contain rounded-md'/></a>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <h1 className='text-3xl'>{title}</h1>
                <p className='text-left leading-relaxed'>{desc}</p>
                <div className='flex flex-wrap gap-2'>
                    {language.map((lang,idx) =>( 
                        <h1 key={idx} className='bg-[#0e0e1a] text-sm text-center py-1 px-2 rounded-[8px] border border-[#4d5975] hover:bg-[#1d1d36] duration-200 cursor-pointer'>{lang}</h1> 
                    ))}
                </div>
                <div className='flex gap-3'>
                    <a href={github}><img src={Github} alt="Github" /></a>
                    <a href={link} target="_blank"><img src={Link} alt="Link" /></a>
                </div>
            </div>
        </div>
    )
}

export default projectContainer