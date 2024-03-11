import React from 'react'

function logos({logo, alt, link}) {
    return (
        <a href={link} target='_blank' className='cursor-default'>
            <img src={logo} alt={alt} />
        </a>
    )
}

export default logos