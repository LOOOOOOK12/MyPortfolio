import React from 'react'
import { projects } from '../Constants/projects'
import ProjectContainer from '../Components/projectContainer'

function Projects() {
    return (
        <div id='Projects' className='p-8 flex flex-col gap-14 justify-center items-center relative'>
            <div className='absolute overflow-hidden size-[200px] -z-10 top-0 right-0 rounded-full blur-3xl opacity-[0.5] bg-accent md:top-[300px]'></div>
            <div className='absolute size-[200px] -z-10 top-[30rem] right-[10rem] md:top-[130px] md:left-[50px] rounded-full blur-3xl opacity-35 bg-accent'></div>
            <div className='absolute overflow-hidden size-[200px] top-[50rem] right-0 md:left-[250px] -z-10 rounded-full blur-3xl opacity-35 bg-accent'></div>
            <h1 className='text-5xl md:text-6xl font-semibold'>Projects</h1>
            <div className='flex flex-col items-center justify-center gap-16 w-full'>
                {projects.map((p)=>(
                    <ProjectContainer
                        image = {p.image}
                        alt = {p.alt}
                        title = {p.title}
                        desc = {p.desc}
                        language = {p.language}
                        github = {p.github}
                        link = {p.link}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Projects