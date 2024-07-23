import React from 'react'
import { certificates } from '../Constants/certificates'
import { motion } from 'framer-motion';

function CertiContainer({certificate,alt,title}) {
    return (
        <div className='flex flex-col items-center gap-3'>
            <div className='h-full w-full'>
                <img className='rounded-md bg-contain' src={certificate} alt={alt} />
            </div>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
}

export default function Certificates() {
    return (
        <div id='Certificates' className='p-8 flex flex-col gap-16 justify-center items-center bg-transparent'>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1 ,y: 0 }}
                viewport={{ once: true }}
                transition={{duration:1 }}
                className='text-5xl md:text-6xl font-semibold'>Certificates</motion.h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {certificates.map((m,idx)=>(
                    <motion.div
                        initial={{opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.5 }}
                        key={idx}
                        className='h-full w-full'>
                        <CertiContainer
                        certificate = {m.certificate}
                        alt = {m.alt}
                        title = {m.title}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

