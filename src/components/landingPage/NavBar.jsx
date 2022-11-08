import React from 'react'
import {FaSearch} from 'react-icons/fa'
function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center mt-4">
   <h1 className=''>CoderVerse</h1>
   <div className='flex bg-white  border-solid border-2 border-slate-300 rounded-3xl'>
    <input className="outline-none border-none bg-transparent pl-2" type="search" placeholder="Search..." name="search" value=""/>
    <div className='bg-slate-300 border-l-[2px] p-2 border-black rounded-tr-3xl rounded-br-3xl'>
    <button className='' ><FaSearch /></button>
    </div>
   </div>
   <div className='flex'>
   <h4>Are you a coder</h4>
    <button>Submit Profile</button>
   </div>
   
    </div>
  )
}

export default NavBar