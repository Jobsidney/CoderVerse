import React from 'react'

function HeroSection() {
  return (
    <div className='h-[600px] bg-yellow-400 mt-5 rounded-xl flex flex-col items-center justify-center'>
       <div className='text-center'>
        <h1 className='text-5xl font-bold'>Welcome to the coders world</h1>
        <h1 className='text-2xl'>Where creativity meets passion</h1>
       </div>
       <button className='bg-white py-4  px-6 mt-6'>Explore more</button>
    </div>
  )
}

export default HeroSection