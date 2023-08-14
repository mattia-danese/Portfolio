import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks, navMediaLinks } from '../constants/index.js';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <div className='flex gap-1 '>
                <Link
                    to="/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive(""); 
                        window.scrollTo(0,0);
                    }}
                >
                    <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Mattia Danese&nbsp;<span><span className='navTitle:inline hidden'>| SWE Portfolio |</span></span>
                    </p>
                </Link>
                <div className='flex items-center gap-2'>
                    {navMediaLinks.map((media) => {
                            return <Link to={media.link} target="_blank" className='align-middle'> <img className='w-5 h-5 object-contain' src={media.img} alt={media.id} title={`My ${media.id}`} /> </Link>
                    })}
                </div>
            </div>
            
            
            <ul className='list-none hidden md:flex flex-row gap-10'>
                {navLinks.map((Link) => {
                    if (Link.id === "resume") {
                        return <li key={Link.id}
                                   className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
                                   
                                >
                                    <a href="src/assets/Resume.pdf" download={"Mattia Danese Resume.pdf"}>Resume</a>
                                </li>
                    }
                    
                    
                    return <li key={Link.id}
                                className={`${active === Link.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(Link.title)}>
                                <a href={`#${Link.id}`}>{Link.title}</a>
                            </li>
                })}
            </ul>
            {/* FOR MOBILE NAV */}
            <div className='md:hidden flex flex-1 justify-end items-center'>
                <img 
                    src={toggle ? close : menu} 
                    alt="menu" 
                    className='w-[28px] h-[28px] object-contain cursor-pointer' 
                    onClick={() => setToggle(!toggle) }
                />
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                    <ul className='list-none flex justify-end items-start flex-col gap-4'>
                        {navLinks.map((Link) => (
                            <li key={Link.id}
                                className={`${active === Link.title ? "text-white" : "text-secondary"
                                } font-poppins font-medium cursor-pointer text-[16px]`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(Link.title);
                                }}>
                                <a href={`#${Link.id}`}>{  Link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar