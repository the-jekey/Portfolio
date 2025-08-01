import { motion } from 'motion/react'
import React from 'react'
import TextReveal from './TextReveal'

const Service = () => {

  return (
    <>
      <div data-scroll id='Services' className=" service max-w-screen  mx-auto font-['font'] rounded-[20px] px-6 md:px-8 lg:px-10 h-auto pb-[60px] text-white bg-black ">
        <div className="text-4xl md:text-6xl md:text-center lg:text-8xl  overflow-hidden  mx-auto pt-5 ">
          <TextReveal delay={0.1}>
            <h1>How Can I Help You</h1>
          </TextReveal>
        </div>

        <div className="w-[80%]  relative left-12 md:left-20 lg:px-45">
          <TextReveal delay={0.1}>
            <p className='text-sm font-[f] md:text-xl pt-2 '>( Service )</p>
            <p className='text-[12px]  font-[f] pt-2 capitalize md:text-xl tracking-wider '>Frustrated with websites that don't reflect your brand or drive growth? I craft premium web experiences that captivate and help you focus on growing your business.</p>
          </TextReveal>
        </div>
        <div className="service-1 mt-10 w-full md:px-11 lg:px-45">
          <TextReveal delay={0.1}>
            <h1 className='text-2xl md:text-3xl lg:text-5xl tracking-wide'> 01. Web Development</h1>
          </TextReveal>
          <div className="w-[80%]  relative left-11 lg:left-22">
            <TextReveal delay={0.1}>
              <p className='text-[13px] md:text-lg  font-[f] pt-2 capitalize tracking-wide  leading-4 lg:leading-6'>A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are crafted to reflect your unique identity.</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <div className="pt-4 flex flex-col gap-2 md:text-xl">
                <li className='border-b-1 lg:w-[40%] tracking-tight'>Code Development</li>
                <li className='border-b-1  lg:w-[40%]'>Intergration</li>
                <li className='border-b-1  lg:w-[40%]'>Animation</li>
              </div>
            </TextReveal>
          </div>
        </div>
        <div className="service-1 mt-10 w-full md:px-11 lg:px-45">
          <TextReveal delay={0.1}>
            <h1 className='text-2xl md:text-3xl lg:text-5xl'> 02. Web Design</h1>
          </TextReveal>
          <div className="w-[80%]  relative left-11 lg:left-22">

            <TextReveal delay={0.1}>
              <p className='text-[13px] md:text-lg  font-[f] pt-2 capitalize leading-4 lg:leading-6 '>Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning.</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <div className="pt-4 flex flex-col gap-2 md:text-xl">
                <li className='border-b-1 lg:w-[40%] '>Figma Design</li>
                <li className='border-b-1  lg:w-[40%]'>Wireframing</li>
                <li className='border-b-1  lg:w-[40%]'>Animation</li>
              </div>
            </TextReveal>
          </div>
        </div>
        <div className="service-1 mt-10 w-full md:px-11 lg:px-45">
          <TextReveal delay={0.1}>
            <h1 className='text-2xl md:text-3xl lg:text-5xl'> 03. SEO</h1>
          </TextReveal>
          <div className="w-[80%]  relative left-11 lg:left-22">
            <TextReveal delay={0.1}>
              <p className='text-[13px] md:text-lg  font-[f] pt-2 capitalize  leading-4 lg:leading-6'>Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results.</p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <div className="pt-4 flex flex-col gap-2 md:text-xl">
                <li className='border-b-1  lg:w-[40%]'>Technical SEO</li>
                <li className='border-b-1 lg:w-[40%] '>On Page Optimization</li>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
