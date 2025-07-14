import React, { useRef } from 'react'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const ButtonAndMenu = () => {

       const menuref = useRef(null)

       useGSAP(() => {
              gsap.from(menuref.current, {

                     duration: 1,
                     ease: "power2.out",
                     scrollTrigger: {
                            trigger: document.body,
                            start: "17%  bottom",
                            end: "10%  bottom",
                            toggleActions: "play none none reverse",
                            // markers: true,
                     }
              })
       }, []);

       return (
              <div ref={menuref} className='fixed top-0 max-w-screen mx-auto px-6 md:px-8 lg:px-10 pt-3 right-0 flex justify-end items-center'>
                     <motion.div className="flex gap-2 items-center    ">
                            <motion.div className="btn origin-right">
                                   <Button />
                            </motion.div>
                            <motion.div className="size-14   bg-[#565656] text-[#cacaca] cursor-pointer rounded-full flex flex-col items-center justify-center py-6 ">
                                   <div className="border-t-3 opacity-50 w-7 py-1"></div>
                                   <div className="border-t-3 opacity-50 w-7"></div>
                            </motion.div>
                     </motion.div>
              </div>
       )
}

export default ButtonAndMenu;
