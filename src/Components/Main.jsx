import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import { motion } from 'motion/react';
import TextReveal from './TextReveal';

const Main = () => {

       return (
              <div id='Home' className='max-w-screen mx-auto px-6 md:px-8  lg:px-1 h-[93vh] lg:h-screen bg-transparent  relative overflow-hidden font-["font"]'>
                     <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#grainy)', opacity: 1 }}></div>
                     <Navbar />
                     <main className='w-full mt-45 lg:mt-28 relative z-50 md:px-8 lg:px-10  bg-red-60 text-[6vh] md:text-[15vh] lg:text-[35vh] '>
                            <div className="name overflow-hidden select-none  leading-none lg:flex text-[8vh] lg:text-[30vh]">
                                   <TextReveal delay={0.1} animateOnScroll={false}>
                                          <h1 className='origin-left w-fit' >THE</h1>
                                   </TextReveal>
                                   <TextReveal delay={0.1} animateOnScroll={false}>
                                          <h1 className='origin-left ' >JEKEY&copy;</h1>
                                   </TextReveal>
                            </div>
                            <div className="pera text-[12px] md:text-lg lg:text-2xl lg:pt-10 font-['fontt'] font-semibold   ">
                                   <p className='w-[70%] pt-3 capitalize tracking-wide  md:w-[60%] lg:w-[40%]'>
                                          <TextReveal delay={0.1} animateOnScroll={false}>
                                                 <p className='w-fit origin-left  overflow-hidden'><h1>I help growing personal brands and</h1></p>
                                                 <p className='w-fit origin-left  overflow-hidden'><h1>startups gain an unfair advantage through</h1></p>
                                                 <p className='w-fit  origin-left overflow-hidden'><h1>premium, results-driven websites.</h1></p>
                                          </TextReveal>

                                   </p>
                            </div>
                            <div className="btn pt-5 w-fit bg-red- overflow-hidden">
                                   <TextReveal delay={0.1} animateOnScroll={false}>
                                          <p><Button /></p>
                                   </TextReveal>
                            </div>
                     </main >
                     <section className='w-full md:px-8 lg:px-10 bg-red-60 h-[20vh] mt-5 lg:-mt-10 flex items-end justify-between '>
                            <TextReveal delay={0.1} animateOnScroll={false}>
                                   <div className="img h-[19vh] w-[12vh] rounded-2xl overflow-hidden  lg:left-1/2 relative lg:h-[40vh] lg:w-[25vh] lg:bottom-7">
                                          <img loading='lazy' className='grayscale-100 w-full h-full object-cover object-center ' src="../image.avif" alt="Profile image" />
                                   </div>
                            </TextReveal>
                            <div className="txt relative lg:text-sm text-[10px] lg:flex lg:gap-1 lg:pb-6">
                                   <TextReveal delay={0.1} animateOnScroll={false}>
                                          <p className='leading-none'>Web Designer </p>
                                   </TextReveal>
                                   <TextReveal delay={0.1} animateOnScroll={false}>
                                          <p> & Developer</p>
                                   </TextReveal>
                            </div>
                     </section>

              </div >
       )
}
export default Main
