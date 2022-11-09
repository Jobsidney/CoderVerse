import React, { useState, useEffect } from 'react'
import Community from './Community'
import Conclude from './Conclude'
import DetailsSection from './DetailsSection'
import Footer from './Footer'
import HeroSection from './HeroSection'
import NavBar from './NavBar'

function LandingPage() {

  const[search, setSearch] = useState("")
  const[dev, setDev] = useState("All Developers")
  const[lan, setLanguage] = useState("All Languages")
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/devs")
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
    <div className='lg:mx-[300px] sm:mx-[100px]'>
      <NavBar values={search} onChange={handleChange}/>
      <HeroSection/>
      <DetailsSection 
      dev={dev} 
      handleDevChange={handleDevChange} 
      lan={lan}
      handleLanguageChange={handleLanguageChange}
      list={list}/>
      <Community/>
      <Conclude/>
     {/* <Footer/> */}
      </div>
  )
}

export default LandingPage