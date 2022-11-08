import React from 'react'
import {skills, data} from './data'
import DeveloperList from './DeveloperList'


function DetailsSection() {
    
  return (
    <div >
        <div className='flex flex-col items-center text-center mt-8'>
            <h1 className='text-3xl font-bold'>Search for your tech match</h1>
            <h1 className='text-slate-400'>Connect and grow</h1>
        </div>
        <div className='border-b-2  border-amber-400 pb-3'></div>
        <div className='mt-6'>
            <select className='mr-6 px-4 py-2 outline-none border-none'>
               <option value="all">All Developers</option>
                {data.map((title,index) => {
                    return <option value={title.title} key={index}>{title.title}</option>
                })}
            </select>

            <select className='px-4 py-2 outline-none border-none'>
               <option value="all">All Languages</option>
                {skills.map((skill,index) => {
                    return <option value={skill} key={index}>{skill}</option>
                })}
            </select>
        </div>
<DeveloperList/>

       
    </div>
  )
}

export default DetailsSection