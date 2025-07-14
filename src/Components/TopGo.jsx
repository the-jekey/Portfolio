import { motion } from "motion/react";
import React, { useRef, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const TopGo = () => {

       const boxRef = useRef(null);
       const circleRef = useRef(null);

       // Target position set by mouse
       const targetPos = useRef({ x: 0, y: 0 });
       // Current displayed position for smooth interpolation
       const currentPos = useRef({ x: 0, y: 0 });

       useEffect(() => {
              let animationFrame;

              const animate = () => {
                     // Lerp (linear interpolation) for smoothing
                     currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
                     currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;

                     const circle = circleRef.current;
                     if (circle) {
                            circle.style.transform = `translate(calc(-50% + ${currentPos.current.x}px), calc(-50% + ${currentPos.current.y}px))`;
                     }

                     animationFrame = requestAnimationFrame(animate);
              };

              animate();

              return () => cancelAnimationFrame(animationFrame);
       }, []);

       const handleMouseMove = (e) => {
              const box = boxRef.current;
              const rect = box.getBoundingClientRect();

              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;

              // Limit the movement for a softer magnet effect
              const limit = 10;
              const limitedX = Math.max(Math.min(x, limit), -limit);
              const limitedY = Math.max(Math.min(y, limit), -limit);

              targetPos.current = { x: limitedX, y: limitedY };
       };

       const handleMouseLeave = () => {
              targetPos.current = { x: 0, y: 0 }; // Return to center smoothly
       };

       return (
              <div
                     ref={boxRef}
                     onMouseMove={handleMouseMove}
                     onMouseLeave={handleMouseLeave}
                     style={{
                            width: "100px",
                            height: "100px",
                            border: "0px solid #333",
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",

                     }}

              >


                     <div
                            ref={circleRef}
                            className=" flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-all "
                            style={{
                                   width: "60px",
                                   height: "60px",
                                   borderRadius: "50%",
                                   background: "black",
                                   opacity: "70%",
                                   position: "absolute",
                                   top: "50%",
                                   left: "50%",
                                   transform: "translate(-50%, -50%)",
                            }}
                     >
                            <span className="text-3xl text-white "><IoIosArrowRoundUp /></span>
                     </div>
              </div>
       );
};

export default TopGo;
