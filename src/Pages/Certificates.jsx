import React from 'react'
import { certificates } from '../Constants/certificates'

function CertiContainer({certificate,alt,title}) {
    return (
        <div className='flex flex-col items-center gap-3'>
            <img className='h-64' src={certificate} alt={alt} />
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
}

export default function Certificates() {
    return (
        <div id='Certificates' className='p-14 flex flex-col gap-16 justify-center items-center'>
            <h1 className='text-5xl'>Certificates</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {certificates.map((m)=>(
                    <CertiContainer
                        certificate = {m.certificate}
                        alt = {m.alt}
                        title = {m.title}
                    />
                ))}
            </div>
        </div>
    )
}

