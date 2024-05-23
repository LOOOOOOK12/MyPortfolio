import React from 'react'
import { projects } from '../Constants/projects'
import ProjectContainer from '../Components/projectContainer'

function Projects() {
    return (
        <div id='Projects' className='p-8 flex flex-col gap-14 justify-center items-center relative'>
            {/* <div className='absolute h-[300px] w-[250px] -z-10 top-[300px] left-[300px] rounded-full blur-3xl opacity-[0.5] bg-accent md:top-[300px] md:left-[500px]'></div> */}
            <h1 className='text-6xl'>Projects</h1>
            <div className='flex flex-col items-center justify-center gap-16 w-full'>
                {/* <div className='absolute h-[300px] w-[250px] -z-10 -top-32 -right-20 rounded-full blur-3xl opacity-35 bg-accent'></div>
                <div className='absolute h-[300px] w-[250px] -z-10 top-32 -left-14 rounded-full blur-3xl opacity-35 bg-accent'></div> */}
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