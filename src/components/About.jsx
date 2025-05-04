import React from 'react'

const About = () => {
       return (
              <div className='flex justify-center  flex-col items-center h-[170vh] mt-12  md:w-full md:p-1 md:h-[70vh] lg:h-[100vh]'>
                     <div id="About" style={{ height: '1vh' }}></div>
                     <h1 className='about text-[10vw] font-black leading-12 uppercase px-3 md:leading-16 md:text-[8vw] lg:leading-13 lg:text-[4vw]'>designer,<br />
                            Developer,<br />
                            Creator/.</h1>
                     <div className="img md:flex   lg:flex lg:justify-center ">
                            <img loading="lazy" className='h-[70vh] mx-4 my-1 rounded-2xl  md:my-2 md:h-[40vh]   md:mt-6 lg:h-[55vh]  transition-all' src="../src/assets/image.avif" alt="img" />
                            <div className="about text-2xl font-medium md:h-[10vh] lg:w-[60%] lg:text-[20px] lg:relative lg:top-10">
                                   <p className='m-3 p-2 text-start    '>With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive impact on the digital landscape and your business. Would you like me to rewrite this in a more formal, creative, or catchy tone?</p>
                                   <p className='m-3 p-2  font-bold'>(About me)</p>
                                   <p className='m-3 p-2 ' >Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles. </p>

                                   <p className='md:hidden lg:inline-block m-3 p-2 '> When I'm not immersed in web development and design, you can find me sharing insights about my freelance journey on YouTube, bouldering, playing music, or tending to my cherished houseplants. </p>
                            </div>
                     </div>

              </div>
       )
}

export default About
