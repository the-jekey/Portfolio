import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { getCalApi } from "@calcom/embed-react";

const Main = () => {
       const boxRef = useRef()
       const pRef = useRef()
       const imageRef = useRef()
       const buttonRef = useRef()
       const circleRef = useRef()
       const mainRef = useRef()
       const [isVisible, setIsVisible] = useState(false)

       const tl = gsap.timeline()
       useGSAP(() => {
              tl.from(boxRef.current, {
                     y: -10,
                     opacity: 0,
                     duration: 0.5,
                     delay: 0.2,
                     stagger: 0.1,
              })

              tl.from(pRef.current, {
                     y: -10,
                     opacity: 0,
                     duration: 0.5,
              })
              tl.from(buttonRef.current, {
                     y: 10,
                     opacity: 0,
                     duration: 0.5,
              })
              tl.from(imageRef.current, {
                     y: -10,
                     opacity: 0,
                     duration: 0.5,
              })
       })


       useEffect(() => {
              (async function () {
                     const cal = await getCalApi({ "namespace": "30min" });
                     cal("ui", { "cssVarsPerTheme": { "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
              })();
       }, [])

       return (
              <div ref={mainRef} className='h-[90vh] md:h-[9F4vh] w-full bg-zinc-900 px-1 select-none overflow-hidden'>
                     <div ref={circleRef} className="circle h-10 w-10 rounded-full flex items-center justify-center text-[10px] fixed pointer-events-none z-50 opacity-0 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">scroll</div>
                     <div className="name text-white ">
                            <h1 ref={boxRef} className='text-8xl overflow-y-hidden-hidden font-black p-1 pt-[10vh] md:text-[20vw] lg:pt-[1vh] lg:text-[33vh]'>THE JEKEY&copy;</h1>
                            <p ref={pRef} className='w-[80%] p-3 md:w-[60%] md:text-[20px]  lg:w-[30%] lg:text-[2.5vh] my-2 lg:px-6 ' >I help growing brands and startups gain an unfair advantage through premium, results driven websites.I help growing brands and startups gain an unfair advantage through premium, results driven websites.</p>
                            <div ref={buttonRef} className="button px-2">
                                   <button data-cal-namespace="30min"
                                          data-cal-link="jekey-fnptfy/30min"
                                          data-cal-config='{"layout":"month_view","theme":"auto"}' className='px-12 py-4  text-1xl font-bold tracking-tight rounded-full bg-zinc-500 flex items-center gap-1 cursor-pointer hover:scale-102 active:scale-100 transition-all md:px-14 md:py-6 md:text-[2.5vw] lg:py-4 lg:mx-3 lg:text-[1.5vw]'>Book a Call <GoArrowUpRight /></button>
                                   <div ref={imageRef} className="image ">
                                          <img loading="lazy" className='myimage h-[27vh] rounded-2xl px-4 mt-[3vh] md:mt-[1vh] md:rounded-2xl lg:relative lg:h-[50vh]  lg:top-[-33vh] left-[90vh] ' src="../src/assets/image.avif" alt="" />
                                   </div>
                                   <div className="text flex justify-end px-2">
                                          <h2 className='text-[15px] absolute bottom-[10px] md:top-[35vw] lg:text-1xl lg:font-bold z-20  lg:top-37 '>Web Designer <br />& Developer ! </h2>
                                   </div>
                            </div>

                     </div>
              </div>
       )
}

export default Main
