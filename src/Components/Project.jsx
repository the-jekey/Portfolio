import React from 'react'
import TextReveal from './TextReveal'

const Project = () => {
  return (
    <>
      <div id='Work' className="project max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-auto pb-10 font-[font] bg-transparent">
        <div className="txt pt-3 w-full lg:w-[50%] lg:mx-auto px-14">
          <TextReveal delay={0.1}>
            <h1 className='text-5xl lg:text-8xl'>Selected</h1>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className='text-4xl lg:text-6xl  text-end'>Work (4)</h1>
          </TextReveal>
        </div>
        <div className="works w-full h-auto">


          <div className="lg:w-full lg:flex lg:h-[80vh] lg:px-20 lg:pt-10 lg:gap-20 lg:-pb-10">

            <div className="workOne w-full h-[50vh] lg:h-[70vh] pt-5">
              <div className="one w-full bg-cover bg-center rounded-3xl flex items-center justify-center h-[80%]" style={{ backgroundImage: "url('sre.jpg')" }}>
                <div className="w-[60%] h-[20vh] lg:h-[30vh]">
                </div>
              </div>
              <div className="one w-full h-[20%] ">
                <TextReveal delay={0.1}>
                  <h1 className='text-sm pt-1'>Stone Art Comapany</h1>
                  <a href="https://sre.org.in/">  <h1 className='uppercase text-2xl cursor-pointer'>Shree Ram Enterprises&copy;</h1></a>
                </TextReveal>

                <h1 className=' flex gap-1 text-sm'>
                  <TextReveal delay={0.1} >
                    <li className='list-none rounded-full border-1 px-2'>Design</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>Development</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>2024</li>
                  </TextReveal>
                </h1>
              </div>
            </div>




            <div className="workOne two and three w-full h-[50vh] lg:h-[70vh] pt-5">
              <div className="one w-full bg-cover bg-center rounded-3xl flex items-center justify-center h-[80%]" style={{ backgroundImage: "url('./OH Image.avif')" }}>
                <div className="w-[80%] h-[15vh] lg:h-[30vh]">
                </div>
              </div>

              <div className="one w-full h-[20%]">
                <TextReveal delay={0.1}>
                  <h1 className='text-sm pt-1'>Archicture Compnay</h1>
                  <a href="https://oh-architecture.vercel.app/"> <h1 className='uppercase text-2xl cursor-pointer'>OH Architecture Clone</h1></a>
                </TextReveal>
                <h1 className=' flex gap-1 text-sm'>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>Design</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>Development</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>2025</li>
                  </TextReveal>
                </h1>
              </div>
            </div>
          </div>


          <div className=" lg:w-full lg:flex lg:h-[80vh] lg:px-20 lg:pt-10 lg:gap-20">


            <div className="workOne w-full h-[50vh] lg:h-[70vh] pt-5">
              <div className="one w-full bg-cover bg-center rounded-3xl flex items-center justify-center h-[80%]" style={{ backgroundImage: "url('./Exoape Image.webp')" }}>
                <div className="w-[80%] h-[15vh] lg:h-[30vh]">
                </div>
              </div>

              <div className="one w-full h-[20%]">
                <TextReveal delay={0.1}>
                  <h1 className='text-sm pt-1'>Design Agency</h1>
                  <a href="https://exo-ape-nu.vercel.app/"> <h1 className='uppercase text-2xl cursor-pointer'>ExoApe</h1></a>
                </TextReveal>
                <h1 className=' flex gap-1 text-sm'>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>Design</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>Development</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>2025</li>
                  </TextReveal>
                </h1>
              </div>
            </div>





            <div className="workOne w-full h-[50vh] lg:h-[70vh] pt-5">
              <div className="one w-full bg-cover bg-center rounded-3xl flex items-center justify-center h-[80%]" style={{ backgroundImage: "url('./Arock Image.webp')" }}>
                <div className="w-[80%] h-[15vh] lg:h-[30vh]">
                </div>
              </div>

              <div className="one w-full h-[20%]">
                <TextReveal delay={0.1}>
                  <h1 className='text-sm pt-1'>AROCK</h1>
                  <a href="https://arock-alpha.vercel.app/"> <h1 className='uppercase text-2xl cursor-pointer'>AROCK</h1></a>
                </TextReveal>
                <h1 className=' flex gap-1 text-sm'>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>Design</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>Development</li>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <li className='list-none rounded-full border-1 px-2'>2025</li>
                  </TextReveal>
                </h1>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Project
