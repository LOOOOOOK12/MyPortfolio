import React from 'react'
import { projects } from '../Constants/projects'
import ProjectContainer from '../Components/projectContainer'

function Projects() {
    return (
        <div id='Projects' className='p-16 bg-slate-900 flex flex-col gap-14 justify-center items-center'>
            <h1 className='text-6xl'>Projects</h1>
            <div className=' flex flex-col gap-28'>
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