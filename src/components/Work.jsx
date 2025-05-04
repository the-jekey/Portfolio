import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Work = () => {
       const headingRef = useRef();

       useEffect(() => {
              if (headingRef.current) {
                     const split = new SplitText(headingRef.current, { type: "words" });

                     gsap.from(split.words, {
                            y: 100,
                            opacity: 0,
                            duration: 1,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                   trigger: headingRef.current,
                                   start: "top 80%",
                                   end: "bottom 20%",
                                   toggleActions: "play none none reverse"
                            }
                     });
              }
       }, []);

       return (
              <div className=' w-full lg:h-[360vh] mt-5 mx-auto select-none text-white'>
                     <div className="work">

                            <h1 ref={headingRef} className=' Work text-[12vw] font-bold px-2  md:pt-10 md:tracking-wider xl:mt-12 text-center' >Our Work! </h1>
                            <div id="Works" style={{ height: '1vh' }}></div>
                            <p className='px-4 md:relative md:top-[-10px]  md:text-2xl lg:px-[120px]  text-center'>(Projects)</p>
                            <div className="projects py-6 text-center">
                                   <div className="headings text-center">
                                          <h1 className='text-4xl font-bold md:text-6xl lg:text-4xl'>01/ SRE </h1>
                                          <p className='text-[15px] font-bold md:text-2xl lg:text-[15px]'>Architecture & Stone art </p>
                                   </div>
                                   <div className="img">
                                          <img loading="lazy" className=' p-5 cursor-pointer bg-black h-[30vh] my-4 mx-auto rounded-2xl md:h-[40vh] w-[90%]  object-cover lg:h-[60vh] lg:w-[50%]' src="{work}" alt="project image " />
                                   </div>
                            </div>
                            <div className="projects py-6 text-center">
                                   <div className="headings text-center">
                                          <h1 className='text-4xl font-bold md:text-6xl lg:text-4xl'>02/ JEKEY</h1>
                                          <p className='text-[15px] font-bold md:text-2xl lg:text-[15px]'>Portfolio</p>
                                   </div>
                                   <div className="img">
                                          <img loading="lazy" className=' p-5 cursor-pointer bg-black h-[30vh] my-4 mx-auto rounded-2xl md:h-[40vh] w-[90%]  object-cover lg:h-[60vh] lg:w-[50%]' src="../src/assets/portfolio.avif" alt="project image " />
                                   </div>
                            </div>
                            <div className="projects py-6 text-center">
                                   <div className="headings text-center">
                                          <h1 className='text-4xl font-bold md:text-6xl lg:text-4xl'>03/ HUGINN</h1>
                                          <p className='text-[15px] font-bold md:text-2xl lg:text-[15px]'>Architecture</p>
                                   </div>
                                   <div className="img">
                                          <img loading="lazy" className='  cursor-pointer p-5 bg-black h-[30vh] my-4 mx-auto rounded-2xl md:h-[40vh] w-[90%]  object-cover lg:h-[60vh] lg:w-[50%]' src="../src/assets/work-1.avif" alt="project image " />
                                   </div>
                            </div>
                            <div className="projects py-6 text-center">
                                   <div className="headings text-center">
                                          <h1 className='text-4xl font-bold md:text-6xl lg:text-4xl'>04/ Botiko</h1>
                                          <p className='text-[15px] font-bold md:text-2xl lg:text-[15px]'>Interior Designing</p>
                                   </div>
                                   <div className="img">
                                          <img loading="lazy" className='p-5 cursor-pointer bg-black h-[30vh] my-4 mx-auto rounded-2xl md:h-[40vh] w-[90%]  object-cover lg:h-[60vh] lg:w-[50%]' src="../src/assets/work-2.avif" alt="project image " />
                                   </div>
                            </div>

                     </div>
              </div>
       )
}

export default Work
