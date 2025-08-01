import React from 'react'
import Main from './Components/Main'
import LocomotiveScroll from 'locomotive-scroll';
import Service from './Components/Service';
import Hover from './Components/Hover';
import Footer from './Components/Footer';
import BookCall from './Components/BookCall';
import Menu from './Components/Menu';
import About from './Components/About';
import ButtonAndMenu from './Components/ButtonAndMenu';
import Noise from './Components/Noise';
import Project from './Components/Project';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="selection:bg-black selection:text-white ">
        <div className="w-full z-[999]  h-full relative overflow-hidden">
          <Noise
            patternSize={500}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={15}
          />
          <Main />
          <Service />
        </div>
        <div className="w-full z-[999]  h-full relative overflow-hidden">
          <Noise
            patternSize={500}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={15}
          />
          <Project />
          <About />
        </div>


        <div className="w-full h-full relative overflow-hidden">
          <Noise
            patternSize={500}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={15}
          />
          <BookCall />
          <Footer />
        </div>








      </div>
    </>
  )
}

export default App
