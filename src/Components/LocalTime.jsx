import React, { useState, useEffect } from 'react';
import TextReveal from './TextReveal';

const LocalTime = () => {
       const [time, setTime] = useState('');

       useEffect(() => {
              const updateTime = () => {
                     const now = new Date();
                     const options = {
                            timeZone: 'Asia/Kolkata',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            hour12: true // ensures AM/PM format
                     };
                     let indianTime = now.toLocaleTimeString('en-IN', options);

                     // Convert am/pm to AM/PM
                     indianTime = indianTime.replace('am', 'AM').replace('pm', 'PM');

                     setTime(indianTime);
              };

              updateTime(); // initial call
              const interval = setInterval(updateTime, 1000); // update every second

              return () => clearInterval(interval); // cleanup on unmount
       }, []);

       return (
              <>
                    
                            <span className=' font-["font"]'>
                                   {time} IND.
                            </span>
                     
              </>
       );
};

export default LocalTime;
