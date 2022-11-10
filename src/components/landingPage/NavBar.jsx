import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link } from 'react-router-dom'

function NavBar({values, onChange, name}) {
  
  return (
    <div className="flex flex-row justify-between items-center mt-4 ">
   <h1 className='text-2xl font-bold'>CoderVerse</h1>
   <div className='flex bg-white  border-solid border-2 border-slate-300 rounded-3xl'>
    <input className="outline-none border-none bg-white pl-2 lg:w-[600px] focus:bg-white focus:border-none focus:outline-none focus:rounded-3xl" type="search" placeholder="Search..." name="search" 
    value={values}
    onChange={onChange}/>
    <div className='bg-slate-300 border-l-[2px] p-2 border-black rounded-tr-3xl rounded-br-3xl lg:px-5'>
    <button className='' ><FaSearch /></button>
    </div>
   </div>
   <div className='flex items-center'>
   <h4 className='text-slate-400 mr-3'>Are you a coder?</h4>
   <Link to='/createprofile'>
   <button className='border-solid border-2 border-amber-400 rounded-md px-3 py-2 hover:bg-amber-400 hover:text-white duration-500'>{name}</button>
   </Link>
    
   </div>
    </div>
  )
}

export default NavBar