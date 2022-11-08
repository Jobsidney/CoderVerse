import React from 'react'
import {data} from './data'
import {ImLocation2} from "react-icons/im"

function DeveloperList() {
  return (
    <div className='mt-6 grid grid-cols-2 md:grid-cols-4 '>

        {/* {data} */}
        {/* <div className='flex flex-col items-center justify-center w-[200px] h-[200px] bg-red-500'>
            <h1>Jane Doe</h1>
            <h2>Front End </h2>
        </div> */}
        {data.map((data) => {
            return (<>
            <div className='flex flex-col items-center justify-center w-[200px] h-[200px] '>
                <img className='rounded-[100px] w-[90px] h-[80px]' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='/>
                 <h1 className='font-bold text-xl mt-3'>{data.name}</h1>
                <h1 className='text-slate-400'>{data.title}</h1>
                <p className='flex items-center'>
                    <span className='text-amber-400'><ImLocation2/></span>{data.location}</p>
            </div>
            <div className='flex flex-col items-center justify-center w-[200px] h-[200px] '>
                <img className='rounded-[100px] w-[90px] h-[80px]' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='/>
                 <h1 className='font-bold text-xl mt-3'>{data.name}</h1>
                <h1 className='text-slate-400'>{data.title}</h1>
                <p className='flex items-center'>
                <span className='text-amber-400'><ImLocation2/></span>
                    {data.location}</p>
            </div>
            </>
            )
        })}
    </div>
  )
}

export default DeveloperList
