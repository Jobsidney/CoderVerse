import React from 'react'
import CirclesAnim from './CirclesAnim'

function HeroSection() {
  return (
    <div className='h-[600px] bg-amber-400 mt-5 rounded-xl flex flex-col items-center justify-center'>
      
       <div className='text-center z-40'>
        <h1 className='text-5xl font-bold '>Welcome to the coders world</h1>
        <h1 className='text-2xl font-bold '>Where creativity meets passion</h1>
       </div>
       <CirclesAnim/>
       <button className='bg-white py-3  px-8 mt-[50px]'>Explore more</button>
       
    </div>
  )
}

export default HeroSection