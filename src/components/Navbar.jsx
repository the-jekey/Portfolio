import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {

       const tl = gsap.timeline()

       useGSAP(() => {
              tl.from('.name', {
                     y: 0,
                     opacity: 0,
                     duration: 2,
                     stagger: 0.1,
              })
              tl.from('.links', {
                     x: 20,
                     opacity: 0,
                     duration: 1,
              })
       })


       return (

              <div>
                     <div id="Home" style={{ height: '' }}></div>
                     <div className='flex justify-between items-top p-2 bg-zinc-900 text-white md:text-2xl'>
                            <div className="name ">
                                   <h1 className='text-1xl font-bold font-[] md:p-4 px-1 lg:text-[2vh] select-none' >THE JEKEY&copy;</h1>
                            </div>
                            <div className="links text-1xl font-bold px-2  md:flex md:gap-3 md:p-4 lg:text-[2vh] md:text-[20px] ">
                                   <a href="#Services"> <h2 className='cursor-pointer' ><Link to="Services" smooth={true} duration={1000}>Services!</Link></h2> </a>
                                   <a href="#Work"> <h2 className='cursor-pointer' ><Link to="Work" smooth={true} duration={1000}>Work!</Link></h2> </a>
                                   <a href="#About-us"> <h2 className='cursor-pointer' ><Link to="About" smooth={true} duration={1000}>About us!</Link></h2> </a>
                                   <a href="#Contact"> <h2 className='cursor-pointer' ><Link to="Contact" smooth={true} duration={1000}>Contact!</Link></h2> </a>
                            </div>

                     </div>
              </div>
       )
}

export default Navbar
