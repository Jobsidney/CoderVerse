import React, { useState, useEffect } from 'react'
import Community from './Community'
import Conclude from './Conclude'
import DetailsSection from './DetailsSection'
import HeroSection from './HeroSection'


function LandingPage({onClick}) {

  const[search, setSearch] = useState("")
  const[dev, setDev] = useState("All Developers")
  const[lan, setLanguage] = useState("All Languages")
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://devs35.herokuapp.com/devs")
    .then(response => response.json())
    .then(d =>{
      if(dev === "All Developers"){
          setList(d)
      }else{
         const filtered = d.filter(li => li.title === dev)
         setList(filtered)
      }
    })
 
 
  },[dev])
  console.log(list)

  function handleDevChange(e) {
     setDev(e.target.value)
    
  }

  function handleLanguageChange(e) {
      setLanguage(e.target.value)
  }
console.log(dev)

  function handleChange(e){
    setSearch(e.target.value)
   
  }
  console.log(search)
  return (
    <div className='lg:mx-[80px] md:mx-[20px] sm:mx-[100px] 2xl:mx-[200px] xl:mx-[100px]'>
     
      <HeroSection/>
      <DetailsSection
      onClick={onClick} 
      dev={dev} 
      handleDevChange={handleDevChange} 
      lan={lan}
      handleLanguageChange={handleLanguageChange}
      list={list}/>
      <Community/>
      <Conclude/>
     
  
     
      </div>
  )
}

export default LandingPage