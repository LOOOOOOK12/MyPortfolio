import { motion } from 'framer-motion'
import React from 'react'

function ContactMe() {
    return (
        <div id='ContactMe' className='relative h-screen p-8 flex flex-col gap-5 justify-center items-center text-center bg-transparent'>
            <div className='absolute overflow-hidden size-[10rem] -z-10 bottom-[5rem] right-[8rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
            <div className='absolute overflow-hidden size-[10rem] -z-10 top-[7rem] left-[15rem] rounded-full blur-3xl opacity-[0.3] bg-accent'></div>
            <motion.h1
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1 }}
                viewport={{ once:true }}
                className='text-3xl md:text-5xl font-semibold '>Need Something? Let's Talk!</motion.h1>
            <motion.a
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1 }}
                viewport={{ once:true }}
                href="mailto:lukealamil12@example.com" className='px-3 py-2 bg-accent hover:bg-[#52299A] duration-100 rounded-md '>Contact Me!</motion.a>
        </div>
    )
}

export default ContactMe