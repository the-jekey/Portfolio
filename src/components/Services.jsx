import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowDownRight } from "react-icons/go";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Services = () => {
       const helpHeadingRef = useRef(null);

       useEffect(() => {
              if (helpHeadingRef.current) {
                     const split = new SplitText(helpHeadingRef.current, { type: "words" });

                     gsap.from(split.words, {
                            y: 50,
                            opacity: 0,
                            duration: 1,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                   trigger: helpHeadingRef.current,
                                   start: "top 80%",
                                   end: "bottom 20%",
                                   toggleActions: "play none none reverse"
                            }
                     });
              }
       }, []);

       return (
              <div className='w-full h-[60vh] bg-light-900 px-1 select-none md:h-[50vh] lg:h-[100vh] py-4  text-white'>
                     <div id="Services" style={{ height: '' }}></div>
                     <div className="work w-full text-center overflow-hidden">
                            <h1 ref={helpHeadingRef} className='Help text-[9vw] pt-2 capitalize font-black lg:text-[8vw] lg:pt-2 hover:border-0 '>How i can help you !</h1>
                            <p className='text-start relative px-2 lg:relative  lg:bottom-5 xl:left-30 '>(Services)</p>
                            <br />
                            <hr />
                            <br />
                            <div className="work w-full h-12 flex justify-between items-center   ">
                                   <div className="arrow text-2xl md:text-4xl lg:px-[7vw]">
                                          <GoArrowDownRight />
                                   </div>
                                   <div className="h1 px-20">
                                          <h1 className='text-2xl md:text-4xl font-bold'>Web Development</h1>
                                   </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="work w-full h-12 flex justify-between items-center  ">
                                   <div className="arrow text-2xl md:text-4xl lg:px-[7vw]">
                                          <GoArrowDownRight />
                                   </div>
                                   <div className="h1 px-20">
                                          <h1 className='text-2xl md:text-4xl font-bold'>Web Designing</h1>
                                   </div>
                            </div>

                            <br />
                            <hr />
                            <br />
                            <div className="work w-full h-12 flex justify-between items-center  ">
                                   <div className="arrow text-2xl md:text-4xl lg:px-[7vw]">
                                          <GoArrowDownRight />
                                   </div>
                                   <div className="h1 px-20">
                                          <h1 className='text-2xl md:text-4xl font-bold'>Wireframing</h1>
                                   </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="work w-full h-12 flex justify-between items-center  ">
                                   <div className="arrow text-2xl md:text-4xl lg:px-[7vw]">
                                          <GoArrowDownRight />
                                   </div>
                                   <div className="h1 px-20">
                                          <h1 className='text-2xl md:text-4xl font-bold'>Figma Creation</h1>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Services
