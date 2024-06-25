import React from 'react'
import { projects } from '../Constants/projects'
import ProjectContainer from '../Components/projectContainer'
import { motion } from 'framer-motion'

function Projects() {
    return (
        <div id='Projects' className='p-8 flex flex-col overflow-hidden gap-14 justify-center items-center relative bg-transparent'>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1 ,y: 0 }}
                viewport={{ once: true }}
                transition={{duration:1 }}
                className='text-5xl md:text-6xl font-semibold'>Projects</motion.h1>
            <div className='flex flex-col items-center justify-center gap-16 w-full'>
                {projects.map((p,idx)=>(
                    <motion.div
                        initial={{opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.05 }}
                        key={idx}>
                            <ProjectContainer
                            image = {p.image}
                            alt = {p.alt}
                            title = {p.title}
                            desc = {p.desc}
                            language = {p.language}
                            github = {p.github}
                            link = {p.link}
                        />
                    </motion.div>
                ))}
            </div>
            
        </div>
    )
}

export default Projects