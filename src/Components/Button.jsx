import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Button = () => {
       return (
              <div>
                     <a href="https://cal.com/the-jekey/book-a-call" target="_blank" rel="noopener noreferrer">

                            <button className='cursor-pointer group px-8 py-4 md:px-12 md:py-8 md:text-2xl lg:py-5 lg:px-6 lg:text-xl bg-[var(--secondary-color)]  active:scale-97 transition-all  text-white rounded-full flex  text-base font-["font"]'>
                                   <h1 className='flex lg:items-center '> Book a Call <span className='font-black text-xl lg:text-2xl'><MdOutlineArrowOutward /></span></h1>
                            </button>
                     </a>
              </div>
       )
}

export default Button;
