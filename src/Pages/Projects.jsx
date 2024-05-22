import React from 'react'
import { projects } from '../Constants/projects'
import ProjectContainer from '../Components/projectContainer'

function Projects() {
    return (
        <div id='Projects' className='p-14 flex flex-col gap-14 justify-center items-center'>
            <h1 className='text-6xl'>Projects</h1>
            <div className=' flex flex-col items-center justify-center gap-16'>
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