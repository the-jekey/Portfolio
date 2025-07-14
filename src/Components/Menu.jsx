import { motion } from 'motion/react'
import React from 'react'
import { easeIn } from "motion"
import MagneticCircle from './MagneticCircle'
import { HiArrowDownRight } from "react-icons/hi2";
const Menu = () => {
       const eased = easeIn(0.75)
       return (
              <>
                     <div className="Menu max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen relative font-black bg-[var(--secondary-color)]  font-['font'] ">
                            <div className="nav  w-full flex items-center justify-end py-3">
                                   <MagneticCircle />
                            </div>
                            <div className="lniks w-full gap-2 flex flex-col text-3xl md:text-5xl md:gap-4 justify-center items-center py-20">
                                   <div className='overflow-hidden  w-fit transition-all '><motion.h1 initial={{ rotate: 90, y: 30 }} animate={{ rotate: 0, y: 0 }} transition={{ delay: 0.1, ease: [0, 0, 0.2, 1], duration: 0.4, }} className='origin-left cursor-pointer transition-all hover:border-b-2'>Home</motion.h1></div>
                                   <div className='overflow-hidden  w-fit transition-all '><motion.h1 initial={{ rotate: 90, y: 30 }} animate={{ rotate: 0, y: 0 }} transition={{ delay: 0.1, ease: [0, 0, 0.2, 1], duration: 0.4, }} className='origin-left cursor-pointer transition-all hover:border-b-2'>Projects</motion.h1></div>
                                   <div className='overflow-hidden  w-fit transition-all '><motion.h1 initial={{ rotate: 90, y: 30 }} animate={{ rotate: 0, y: 0 }} transition={{ delay: 0.1, ease: [0, 0, 0.2, 1], duration: 0.4, }} className='origin-left cursor-pointer transition-all hover:border-b-2'>About Us</motion.h1></div>
                                   <div className='overflow-hidden  w-fit transition-all '><motion.h1 initial={{ rotate: 90, y: 30 }} animate={{ rotate: 0, y: 0 }} transition={{ delay: 0.1, ease: [0, 0, 0.2, 1], duration: 0.4, }} className='origin-left cursor-pointer transition-all hover:border-b-2'>Testimonial</motion.h1></div>
                                   <div className='overflow-hidden  w-fit transition-all '><motion.h1 initial={{ rotate: 90, y: 30 }} animate={{ rotate: 0, y: 0 }} transition={{ delay: 0.1, ease: [0, 0, 0.2, 1], duration: 0.4, }} className='origin-left cursor-pointer transition-all hover:border-b-2'>Contact Us</motion.h1></div>
                            </div>
                            <div className="email overflow-hidden  w-full transition-all  text-[10px] md:text-xl lg:text-[12px] absolute bottom-0 left-0 mb-1 text-center">
                                   <a className='' href="mailto:Workwithjekey@gmail.com"><motion.h1 initial={{ rotate: 90, y: 30 }} animate={{ rotate: 0, y: 0 }} transition={{ delay: 0.1, ease: [0, 0, 0.2, 1], duration: 0.4, }} className='cursor-pointer origin-left'  >Further Inqurise<br />( Workwithjekey@gmail.com )</motion.h1></a>
                            </div>
                     </div>
              </>
       )
}

export default Menu
