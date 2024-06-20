import React, { useState } from 'react';
import { navLinks } from "../Constants/navLinks";

function Nav() {
    const [hamOpen, setHamOpen] = useState(false);

    const toggleHamburger = () => {
        setHamOpen(!hamOpen);
        console.log("open");
    };

    return (
        <div className='relative w-full z-20'>
            <nav className='px-8 p-5 w-full top-0 z-50 fixed flex justify-between items-center text-center'>
                <a href='#Hero'><h1 className='text-2xl cursor-default text-gray-300 underline underline-offset-8 decoration-blue-400 -rotate-6'>Loak☕</h1></a>
                <ul className='flex gap-8 max-[780px]:hidden'>
                    {navLinks.map((l) => (
                        <a href={l.href} className='hover:text-primary  transition ease-in delay-75 text-base font-semibold'>{l.link}</a>
                    ))}
                </ul>
                <div className='min-[770px]:hidden'>
                    <div className='flex flex-col gap-2' onClick={toggleHamburger}>
                        <span className='h-[.2rem] w-[2rem] border border-primary rounded-xl bg-primary animate-pulse'></span>
                        <span className='h-[.2rem] w-[2rem] border border-primary rounded-xl bg-primary animate-pulse'></span>
                        <span className='h-[.2rem] w-[2rem] border border-primary rounded-xl bg-primary animate-pulse'></span>
                    </div>
                    {hamOpen && (
                        <div className='absolute top-0 right-0 h-[31rem] flex flex-col gap-10 p-10 z-10 bg-secondary'>
                            <div className='flex flex-col items-end' onClick={toggleHamburger}>
                                <span className='h-[.2rem] w-[2rem] -rotate-45 border border-primary rounded-xl bg-primary animate-pulse'></span>
                                <span className='h-[.2rem] w-[2rem] -rotate-45 border border-primary rounded-xl bg-primary animate-pulse'></span>
                            </div>
                            <div className='flex flex-col gap-6'>
                                {navLinks.map((l) => (
                                    <a key={l.link} href={l.href}>{l.link}</a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Nav;
