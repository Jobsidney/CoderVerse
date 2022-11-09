import React from 'react'
import Community from './Community'
import Conclude from './Conclude'
import DetailsSection from './DetailsSection'
import Footer from './Footer'
import HeroSection from './HeroSection'
import NavBar from './NavBar'

function LandingPage() {
  return (
    <div className='lg:mx-[300px] sm:mx-[100px]'>
      <NavBar/>
      <HeroSection/>
      <DetailsSection/>
      <Community/>
      <Conclude/>
     {/* <Footer/> */}
      </div>
  )
}

export default LandingPage