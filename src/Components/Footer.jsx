import React, { useEffect } from 'react'
import LocalTime from './LocalTime'
import { GiWorld } from "react-icons/gi";
import MagneticCircle from './MagneticCircle';
import TopGo from './TopGo';
import gsap from 'gsap';
import TextReveal from './TextReveal';

const Footer = () => {
       useEffect(() => {
              gsap.to('.globe', {
                     rotation: '360deg',
                     ease: 'linear',
                     repeat: Infinity,
                     duration: 7,
                     transformOrigin: '50% 50%',
              });
       }, []);

       const smoothScrollTo = (e, id) => {
              e.preventDefault();

              const section = document.getElementById(id);
              if (!section) return;

              const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
              const startPosition = window.pageYOffset;
              const distance = targetPosition - startPosition;
              const duration = 1000; // adjust for extra smoothness
              let start = null;

              const easeInOutCubic = (t) =>
                     t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

              const animation = (currentTime) => {
                     if (start === null) start = currentTime;
                     const timeElapsed = currentTime - start;
                     const run = easeInOutCubic(timeElapsed / duration) * distance + startPosition;

                     window.scrollTo(0, run);

                     if (timeElapsed < duration) requestAnimationFrame(animation);
              };

              requestAnimationFrame(animation);
       };


       return (
              <>
                     <footer id='Contact' className='max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen lg relative py-5 bg-blue-40 flex flex-col justify-between bg-transparent  bg-[var(--primary-color)]  font-["font"]'>
                            <div className="prt-1 w-full h-[40%] bg-green-60 flex gap-1 font-['font'] ">
                                   <div className="w-1/2 bg-red-0 h-full md:text-2xl lg:text-xl ">
                                          <TextReveal delay={0.1}>
                                                 <h1 className='border-b-1 border-zinc-600/50'>Menu</h1>
                                          </TextReveal>
                                          <a href="#Home" onClick={(e) => smoothScrollTo(e, "Home")}>
                                                 <TextReveal delay={0.1}>
                                                        <h1 className='cursor-pointer hover:border-b-2 w-fit'>Home!</h1>
                                                 </TextReveal>
                                          </a>
                                          <a href="#Work" onClick={(e) => smoothScrollTo(e, "Work")}>
                                                 <TextReveal delay={0.1}>
                                                        <h1 className='cursor-pointer hover:border-b-2 w-fit'>Work!</h1>
                                                 </TextReveal>
                                          </a>
                                          <a href="#About" onClick={(e) => smoothScrollTo(e, "About")}>
                                                 <TextReveal delay={0.1}>
                                                        <h1 className='cursor-pointer hover:border-b-2 w-fit'>About!</h1>
                                                 </TextReveal>
                                          </a>
                                          <a href="#Services" onClick={(e) => smoothScrollTo(e, "Services")}>
                                                 <TextReveal delay={0.1}>
                                                        <h1 className='cursor-pointer hover:border-b-2 w-fit'>Services!</h1>
                                                 </TextReveal>
                                          </a>
                                          <a href="#Contact" onClick={(e) => smoothScrollTo(e, "Contact")}>
                                                 <TextReveal delay={0.1}>
                                                        <h1 className='cursor-pointer hover:border-b-2 w-fit'>Contact!</h1>
                                                 </TextReveal>
                                          </a>
                                   </div>
                                   <div className="w-1/2 bg-red-0 h-full  md:text-2xl lg:text-xl ">
                                          <TextReveal delay={0.1}>
                                                 <h1 className='border-b-1 border-zinc-600/50'>Social</h1>
                                          </TextReveal>
                                          <TextReveal delay={0.1}>
                                                 <a target='_blank' href="https://www.instagram.com/the_jekeyy/">   <h1 className='cursor-pointer hover:border-b-2 w-fit'>Instagram</h1></a>
                                          </TextReveal>
                                          <TextReveal delay={0.1}>
                                                 <a target='_blank' href="https://linkedin.com/in/the-jekey/">   <h1 className='cursor-pointer hover:border-b-2 w-fit'>Linkedin</h1></a>
                                          </TextReveal>
                                          <TextReveal delay={0.1}>
                                                 <a target='_blank' href="https://www.youtube.com/@the_jekey">  <h1 className='cursor-pointer hover:border-b-2 w-fit'>YouTube</h1></a>
                                          </TextReveal>
                                          <TextReveal delay={0.1}>
                                                 <a target='_blank' href="https://github.com/the-jekey">  <h1 className='cursor-pointer hover:border-b-2 w-fit'>Github</h1></a>
                                          </TextReveal>
                                          <TextReveal delay={0.1}>
                                                 <a target='_blank' href="https://x.com/the_jekey">  <h1 className='cursor-pointer hover:border-b-2 w-fit'>X</h1></a>
                                          </TextReveal>
                                   </div>

                            </div>
                            <div className="prt-1 w-full select-none ">
                                   <TextReveal delay={0.1}>
                                          <h1 className='uppercase text-[7vh] md:text-[12vh] leading-none  opacity-75 lg:text-[25vh]'>TheJekey&copy;</h1>
                                   </TextReveal>
                                   <TextReveal delay={0.1}>
                                          <h1 className='md:text-xl text-xs left-2 lg:left-8 relative'>( Web Designer & Developer ) </h1>
                                   </TextReveal>
                            </div>
                            <div className=" flex justify-between items-end">
                                   <TextReveal delay={0.1} animateOnScroll={false}>
                                          <h1 className='uppercase md:text-2xl lg:text-sm'>
                                                 &copy; 2025 <br />
                                                 <span className='text-2xl md:text-5xl lg:text-3xl'> the Jekey!</span>
                                                 <br />
                                                 All rights reserved.
                                          </h1>
                                   </TextReveal>

                                   <h1 className='text-[14px] md:text-xl lg:text-sm flex items-center flex-col '>

                                          <div className=" flex items-center gap-0.5 md:gap-1">Local Time <span className='globe'> <GiWorld /></span></div>


                                          <div className="globee"><span> <LocalTime /></span></div>

                                   </h1>

                            </div>
                            <TextReveal delay={0.1} animateOnScroll={false}>
                                   <div
                                          className="Home top absolute  bottom-15 md:bottom-20 md:right-8 right-5"
                                          onClick={(e) => smoothScrollTo(e, "Home")}
                                          style={{ cursor: 'pointer' }}
                                   >
                                          <TopGo />
                                   </div>
                            </TextReveal>
                     </footer>
              </>
       )
}

export default Footer
