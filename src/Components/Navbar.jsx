import { motion } from 'motion/react';
import React from 'react';
import { MdOutlineCopyright } from "react-icons/md";
import TextReveal from './TextReveal';

const Navbar = () => {

  const smoothScrollTo = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // adjust for extra smoothness
    let start = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed / duration) * distance + startPosition;

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      <navr
        className='max-w-screen relative overflow-hidden mx-auto py-6 text-black font-[" font"] flex justify-between md:px-8 lg:px-10'>
        <div className="name flex md:text-2xl lg:text-3xl">
          <a href="/">
            <TextReveal delay={0.3} animateOnScroll={false}>
              <motion.h1> Jekey &copy; </motion.h1>
            </TextReveal>
          </a>
        </div>
        <div className="links text-[14px] font-[sdf] font-semibold md:flex md:gap-4">
          <a href="#Services" onClick={(e) => smoothScrollTo(e, "Services")}>
            <TextReveal delay={0.3} animateOnScroll={false}>

              <motion.h1 className='cursor-pointer hover:border-b-2'>Services!</motion.h1>
            </TextReveal>
          </a>
          <a href="#Work" onClick={(e) => smoothScrollTo(e, "Work")}>
            <TextReveal delay={0.3} animateOnScroll={false}>
              <motion.h1 className='cursor-pointer  hover:border-b-2'>Work!</motion.h1>
            </TextReveal>
          </a>
          <a href="#About" onClick={(e) => smoothScrollTo(e, "About")}>
            <TextReveal delay={0.3} animateOnScroll={false}>
              <motion.h1 className='cursor-pointer hover:border-b-2'>About!</motion.h1>
            </TextReveal>
          </a>
          <a href="#Contact" onClick={(e) => smoothScrollTo(e, "Contact")}>
            <TextReveal delay={0.3} animateOnScroll={false}>
              <motion.h1 className='cursor-pointer hover:border-b-2'>Contact!</motion.h1>
            </TextReveal>
          </a>
        </div>
      </navr >
    </>
  );
};

export default Navbar;
