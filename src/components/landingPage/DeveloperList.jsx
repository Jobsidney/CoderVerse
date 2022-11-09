// import React, { useEffect, useState } from 'react'

import {ImLocation2} from "react-icons/im"

function DeveloperList({data}) {
  
   

  return (
    <div className='mt-6 grid grid-cols-2 md:grid-cols-4 '>

        {data.map((data, index) => {
            return (<>
            <div className='flex flex-col items-center justify-center w-[200px] h-[200px] ' key={index}>
                <img className='rounded-[100px] w-[90px] h-[80px]' src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='/>
                 <h1 className='font-bold text-xl mt-3'>{data.name}</h1>
                <h1 className='text-slate-400'>{data.title}</h1>
                <p className='flex items-center'>
                    <span className='text-amber-400'><ImLocation2/></span>{data.location}</p>
            </div>

            </>
            )
        })}
    </div>
  )
}

export default DeveloperList

