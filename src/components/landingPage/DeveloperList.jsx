// import React, { useEffect, useState } from 'react'

import {ImLocation2} from "react-icons/im"
import { useParams, Link } from "react-router-dom"

function DeveloperList({data, onClick}) {
  
   const{id} =useParams()

  return (
    <div className='mt-6 grid grid-cols-2 md:grid-cols-4 '>

        {data.map((data, index) => {
            return (<>
            <Link to={`/devs/${data.id}`} onClick={() => onClick(data.id)}>
            <div className='flex flex-col items-center justify-center w-[200px] h-[200px] ' key={index}>
                <img className='rounded-[100px] w-[90px] h-[80px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHvEGamFasFcudDxAlTzNzd2ZsSRKsmf4Uw&usqp=CAU'/>
                 <h1 className='font-bold text-xl mt-3'>{data.name}</h1>
                <h1 className='text-slate-400'>{data.title}</h1>
                <p className='flex items-center'>
                    <span className='text-amber-400'><ImLocation2/></span>{data.location}</p>
            </div>
            </Link>
            </>
            )
        })}
    </div>
  )
}

export default DeveloperList

