import React from 'react'
import HeroRightPart from './HeroRightPart'
import HeroLeftPart from './HeroLeftPart'

function Hero() {
  return (
    <>
    <div className='w-full flex lg:flex-row flex-col border border-blue-700' >
   

    <HeroRightPart />
    <HeroLeftPart/>
    </div>
    </>
  )
}

export default Hero