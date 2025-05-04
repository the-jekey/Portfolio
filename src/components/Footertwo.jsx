import React, { useRef, useEffect } from 'react'
import { BiWorld } from "react-icons/bi";
import { Link } from 'react-scroll';
import gsap from 'gsap';

const Footertwo = () => {
       const menuLinks = useRef([]);
       const socialLinks = useRef([]);

       useEffect(() => {
              // Initialize GSAP animations for menu links
              menuLinks.current.forEach((link, index) => {
                     link.addEventListener('mouseenter', () => {
                            gsap.to(link, {
                                   rotation: 1,
                                   duration: 0.3,
                                   ease: "power2.out"
                            });
                     });

                     link.addEventListener('mouseleave', () => {
                            gsap.to(link, {
                                   rotation: 0,
                                   duration: 0.3,
                                   ease: "power2.out"
                            });
                     });
              });

              // Initialize GSAP animations for social links
              socialLinks.current.forEach((link, index) => {
                     link.addEventListener('mouseenter', () => {
                            gsap.to(link, {
                                   rotation: 1,
                                   duration: 0.3,
                                   ease: "power2.out"
                            });
                     });

                     link.addEventListener('mouseleave', () => {
                            gsap.to(link, {
                                   rotation: 0,
                                   duration: 0.3,
                                   ease: "power2.out"
                            });
                     });
              });
       }, []);

       return (
              <div className='h-[50vh] md:h-[55vh] lg:h-[60vh] w-full px-6  bg-grey-300 text-white flex flex-col justify-between font-[PPPangaia-MediumItalic]'>
                     <div className="footer w-full h-[40vh] flex  md:p-3 lg:px-[12vh] ">
                            <div className="footer-1 size-1/2 p-2 text-[5vw] md:text-[4vw] lg:text-2xl">
                                   <h1 className='font-bold'>Menu</h1>
                                   <hr />
                                   <div className="all-p pt-2 font-bold">
                                          <p className='cursor-pointer' ref={el => menuLinks.current[0] = el}>
                                                 <Link to="Home" smooth={true} duration={1000}>Home</Link>
                                          </p>
                                          <p className='cursor-pointer' ref={el => menuLinks.current[1] = el}>
                                                 <Link to="Services" smooth={true} duration={1000}>Services</Link>
                                          </p>
                                          <p className='cursor-pointer' ref={el => menuLinks.current[2] = el}>
                                                 <Link to="Works" smooth={true} duration={1000}>Works</Link>
                                          </p>
                                          <p className='cursor-pointer' ref={el => menuLinks.current[3] = el}>
                                                 <Link to="" smooth={true} duration={1000}>Testimonial</Link>
                                          </p>
                                          <p className='cursor-pointer' ref={el => menuLinks.current[4] = el}>
                                                 <Link to="Contact" smooth={true} duration={1000}>Contact</Link>
                                          </p>
                                   </div>
                            </div>
                            <div className="footer-2 size-1/2 p-2  text-[5vw] md:text-[4vw] lg:text-2xl ">
                                   <h1 className='font-bold'>Socials</h1>
                                   <hr />
                                   <div className="all-p pt-2 font-bold font-[PPPangaia-MediumItalic]">
                                          <p className='cursor-pointer' ref={el => socialLinks.current[0] = el}>
                                                 <a target='_blank' href="https://www.instagram.com/the_jekeyy/">Instagram</a>
                                          </p>
                                          <p className='cursor-pointer' ref={el => socialLinks.current[1] = el}>
                                                 <a target='_blank' href="https://www.linkedin.com/in/the-jekey/">Linkedin</a>
                                          </p>
                                          <p className='cursor-pointer' ref={el => socialLinks.current[2] = el}>
                                                 <a target='_blank' href="https://www.youtube.com/@the_jekey">Youtube</a>
                                          </p>
                                          <p className='cursor-pointer' ref={el => socialLinks.current[3] = el}>
                                                 <a target='_blank' href="https://github.com/the-jekey">Github</a>
                                          </p>
                                          <p className='cursor-pointer' ref={el => socialLinks.current[4] = el}>
                                                 <a target='_blank' href="https://x.com/the_jekey"> X (Twiter)</a>
                                          </p>
                                   </div>
                            </div>
                     </div>
                     <div className="bottom flex  justify-between p-3 py-2 items-end lg:px-[13vh] font-[PPPangaia-MediumItalic]">
                            <div className="left text-2xl font-bold">&copy;2025 <br />
                                   <h1 className='uppercase text-3xl'><a target='_blank' href="https://www.instagram.com/the_jekeyy/">the jekey</a></h1>
                                   <p>All Right Reserved.</p>
                            </div>
                            <div className="right text-2xl font-bold flex items-center justify-between gap-1">
                                   <BiWorld /> India
                            </div>
                     </div>
              </div>
       )
}

export default Footertwo
