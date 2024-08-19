import React from 'react';
import { links } from '../Constants/links';

function Footer() {
    return (
        <div className='flex flex-col gap-5 justify-center items-center text-slate-50 h-40'>
            <p>Made with 💙 by Luke Symon Alamil</p>
            <div className='flex flex-row gap-3'>
                {links.map((link, idx) => (
                    <a key={idx} href={link.link} target='_blank' rel='noopener noreferrer'>
                        {link.type === 'icon' ? (
                            <link.icon size={35} />
                        ) : (
                            <img src={link.logo} alt={link.alt} />
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;
