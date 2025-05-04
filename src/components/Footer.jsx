import React, { useRef, useEffect } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { getCalApi } from "@calcom/embed-react";
import { Link, animateScroll as scroll } from 'react-scroll';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Footer = () => {
       const headingRef = useRef();

       useEffect(() => {
              (async function () {
                     const cal = await getCalApi({ "namespace": "30min" });
                     cal("ui", { "cssVarsPerTheme": { "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
              })();
       }, []);

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
              <div className='w-full h-[100] px-3 flex justify-center text-center items-center'>
                     <div id="Contact" style={{ height: '100vh' }}>
                     </div>
                     <div className="footer h-[70vh] lg:h-[90vh] text-white w-[90%] bg-black rounded-2xl flex flex-col justify-around items-center p-4 ">
                            <p>(Need a unfair advantage)</p>
                            <h1 ref={headingRef} className='Main-h1 text-4xl font-bold tracking-wider uppercase md:text-7xl lg:font-black lg:text-7xl lg:leading-15 lg:tracking-widest'>Let's <br /> make it <br /> happen</h1>
                            <button data-cal-namespace="30min"
                                   data-cal-link="jekey-fnptfy/30min"
                                   data-cal-config='{"layout":"month_view","theme":"auto"}' className='px-12 py-4 text-1xl font-bold tracking-tight rounded-full bg-zinc-500 flex items-center gap-1 cursor-pointer hover:scale-102 active:scale-100 transition-all md:px-15 md:py-8 md:text-2xl lg:py-6 lg:mx-3 '>Book a Call <GoArrowUpRight /></button>
                            <p>for further inquriese <br />
                                   <a href="mailto:workwithjekey@gmail.com">workwithjekey@gmail.com</a></p>
                     </div>
              </div>
       )
}

export default Footer
