import { Bars3Icon, Bars3Iconnp } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between text-2xl px-10 py-2 bg-primary font-hero-font" id='header'>
        <a className="font-bold text-black" href="">Portfolio</a>
        <nav className="hidden md:block ">
            <ul className="flex text-white">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About </a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href="#">Contact</a></li> */}
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About </a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href="#">Contact</a></li> */}
            </ul>
        </nav>}
        <buttton onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5 ' /> </buttton>

    </header>
}