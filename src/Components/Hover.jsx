import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import TextPressure from './TextPressure';
const Hover = () => {
       return (
              <>
                     <div className="max-w-screen h-[200vh] relative mx-auto px-6 md:px-8 font-['font'] lg:px-10 p-10 text-white/70 flex flex-col justify-center items-center gap-1  bg-[var(--primary-coloor)] ">
                            <div className="w-full bg-r00 flex flex-col items-center justify-center  gap-1 lg:flex-row">
                                   <div className="partone relative p-3 cursor-pointer w-full h-[40vh] lg:h-[50vh] lg:w-[80vh] bg-zinc-700 rounded-xl active:bg-purple-500 hover:bg-red-500 transition-all duration-300 ease-in-out">
                                          <h1 className='border-b-1 text-2xl'>Web Design</h1>
                                          <div className="">
                                                 <p className='flex  items-center gap-1'><span className=''><GoDotFill /></span>Web Design</p>
                                                 <p className='flex  items-center gap-1'><span className=''><GoDotFill /></span>Web Development</p>
                                                 <p className='flex  items-center gap-1'><span className=''><GoDotFill /></span>Wireframing</p>
                                                 <p className='flex  items-center gap-1'><span className=''><GoDotFill /></span>Figma Design</p>
                                          </div>
                                          <div className=" border-b-2 absolute bottom-2 w-[93%] flex items-center justify-end "> <span cla><MdOutlineArrowOutward /></span></div>
                                   </div>
                                   <div className="parttwo cursor-pointer  w-full h-[30vh] lg:h-[50vh] lg:w-[30vw] bg-zinc-600 rounded-xl active:bg-yellow-500 hover:bg-yellow-500 transition-all duration-300 ease-in-out ">
                                   </div>
                            </div>
                            <div className="w-full bg-r00 flex flex-col items-center justify-center gap-1 lg:flex-row">
                                   <div className="partone  cursor-pointer w-full h-[30vh] lg:h-[50vh] lg:w-[70vh] bg-zinc-700 rounded-xl active:bg-purple-500 hover:bg-purple-500 transition-all duration-300 ease-in-out">
                                   </div>
                                   <div className="parttwo cursor-pointer  w-full h-[40vh] lg:h-[50vh] lg:w-[75vh] bg-zinc-600 rounded-xl active:bg-purple-500 hover:bg-blue-500 transition-all duration-300 ease-in-out ">
                                   </div>
                            </div>


                     </div>
                     <div className='pb-36' style={{ position: 'relative', height: '900px' }}>
                            <TextPressure
                                   text="JEKEYY!"
                                   flex={true}
                                   alpha={false}
                                   stroke={false}
                                   width={true}
                                   weight={true}
                                   italic={true}
                                   textColor="#000000"
                                   strokeColor="#ff0000"
                                   minFontSize={130}
                            />
                     </div>

              </>
       )
}

export default Hover
