import React from 'react'
import TextReveal from './TextReveal'


const About = () => {
       return (
              <div id='About' className='h-[110vh] lg:h-[110vh] z-[999]  max-w-screen mx-auto px-6 md:px-8 lg:px-10 md:h-[70vh] bg-transparent bgg-[var(--primary-color)]   font-["fontOne"]' >
                     <div className="txt w-full flex flex-col  justify-center items-center text-4xl md:text-6xl font-black uppercase py-5  ">
                            <TextReveal delay={0.1}>
                                   <h1>Designer.</h1>
                                   <h1>Developer/</h1>
                            </TextReveal>
                     </div>
                     <div className="md:flex md:gap-5 md:pt-5 mx-auto w-full items-center justify-center">
                            <div className="img w-full h-[60vh] md:h-[40vh] md:w-[40%] lg:w-[30%] lg:h-[70vh] overflow-hidden rounded-xl  ">
                                   <img className='h-full w-full object-cover object-top-left grayscale-100 active:grayscale-0  transition-all ' src="./image.avif" alt="About" />
                            </div>

                            <div className=" md:w-[50%] text-start">

                                   <div className="pl- about  w-full font-['font'] text-[18px] py-5  ">
                                          <TextReveal delay={0.1}>
                                                 <h1 className='w-[100%] text-start lg:text-2xl text-sm tracking-tigh leading-[120%]'>With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive  impact on the digital landscape and your business.</h1>
                                          </TextReveal>
                                   </div>
                                   <div className="about w-full font-['font'] ">
                                          <TextReveal delay={0.1}>
                                                 <h1 className='lg:font-black tracking-wider'>(About Me)</h1>
                                                 <p className=' w-[100%] inline lg:text-xl text-sm leading-[120%]  lg:leading-8 '>I’m Jekey, a web designer and developer dedicated to turning ideas into powerful websites. I create clean, modern, and interactive designs that not only look great but also solve real problems for businesses and individuals.
                                                        <div className="h-[2vh] w-full "></div>
                                                        <br /> My focus is always on building websites that are easy to use, visually engaging, and connect brands with people in a meaningful way.</p>

                                          </TextReveal>



                                   </div>
                            </div>

                     </div>

              </div >
       )
}

export default About
