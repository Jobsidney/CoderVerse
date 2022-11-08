import React from 'react'
import {FaSearch} from 'react-icons/fa'

function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center mt-4">
   <h1 className='text-2xl font-bold'>CoderVerse</h1>
   <div className='flex bg-white  border-solid border-2 border-slate-300 rounded-3xl'>
    <input className="outline-none border-none bg-transparent pl-2" type="search" placeholder="Search..." name="search" value=""/>
    <div className='bg-slate-300 border-l-[2px] p-2 border-black rounded-tr-3xl rounded-br-3xl'>
    <button className='' ><FaSearch /></button>
    </div>
   </div>
   <div className='flex items-center'>
   <h4 className='text-slate-300 mr-3'>Are you a coder?</h4>
    <button className='border-solid border-2 border-yellow-300 rounded-md px-3 py-2'>Submit Profile</button>
   </div>
    </div>
  )
}

export default NavBar