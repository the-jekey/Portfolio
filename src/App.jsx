import React, { useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Footertwo from './components/Footertwo';
import gsap from 'gsap';




const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  const navbarRef = useRef();
  const mainRef = useRef();
  const servicesRef = useRef();
  const workRef = useRef();
  const aboutRef = useRef();
  const footerRef = useRef();
  const footertwoRef = useRef();

  const tl = gsap.timeline();

  tl.from(navbarRef.current, {
    y: -10,
    opacity: 0,
    duration: 0,
    delay: 0.5,
    stagger: 0.1,
  })
    .from(mainRef.current, {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    })
    .from(servicesRef.current, {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    })
    .from(workRef.current, {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    })
    .from(aboutRef.current, {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    })
    .from(footerRef.current, {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    })
    .from(footertwoRef.current, {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });

  return (

    <div>
      <div className="bg-zinc-700 overflow-hidden">
        <Navbar ref={navbarRef} />
        <Main ref={mainRef} />
        <Services ref={servicesRef} />
        <Work ref={workRef} />
        <About ref={aboutRef} />
        <Footer ref={footerRef} />
        <Footertwo ref={footertwoRef} />
      </div>
    </div>
  )
}

export default App
