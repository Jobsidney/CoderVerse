import React from 'react'
import DetailsSection from './DetailsSection'
import HeroSection from './HeroSection'
import NavBar from './NavBar'

function LandingPage() {
  return (
    <div className='lg:mx-[200px] '>
      <NavBar/>
      <HeroSection/>
      <DetailsSection/>
      </div>
  )
}

export default LandingPage