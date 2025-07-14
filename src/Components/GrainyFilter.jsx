import React from 'react'

const GrainyFilter = () => (
       <svg style={{ display: 'none' }}>
              <filter id="grainy">
                     <feTurbulence type="turbulence" baseFrequency="14" />
                     <feColorMatrix type="saturate" values="500" />
              </filter>
       </svg>
);

export default GrainyFilter
