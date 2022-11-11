import React from 'react';
import {ImLocation2} from "react-icons/im"

function Devcard({data, languages}) {



  return (
	<div className=' mt-4 flex flex-col space-y-9 xl:mx-[200px] lg:mx-[80px] 2xl:mx-[400px] md:mx-[100px] sm:mx-[10px] max-[490px]:mx-[10px]'>
		
		<div className=''>
			<img className='w-full rounded-[20px] h-[350px]' src='https://orientation.engsci.utoronto.ca/wp-content/uploads/2022/07/Best-Code-and-Text-Editors.png'/>
		</div>
        
		<div className='flex justify-between border-b-2  border-amber-400 pb-3 max-[490px]:flex-col max-[490px]:space-y-3' >
			<div className='flex space-x-8'>
				<img className='w-[100px] rounded-[200px]'  src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=' />
				<div>
					<h1 className='text-2xl font-bold' >{data.name}</h1>
					<h1 className='text-xl font-bold text-slate-500'>{data.title}</h1>
				</div>
				<div className='flex items-center space-x-2'>
                <span className='text-amber-400 text-2xl'><ImLocation2/></span>
                <p className=''>{data.location} </p>
				</div>
			</div>
			<div>
			<button className='bg-amber-400 px-4 py-3'  >Delete Account</button>
			</div>
		</div>
        <div className='flex space-x-6 max-[490px]:flex-col max-[490px]:space-y-4 max-[490px]:space-x-0'>
        <div className='flex flex-col space-y-4 border-r-2  border-slate-500 pr-6 max-[490px]:border-none'>
        <div className=''>
            <h1 className='font-bold text-2xl'>Skills</h1>
            <ul className='flex space-x-4 text-xl text-slate-500'>
                {languages.map((language,index) => {
                   return <li key={index}>{language.language}</li>
                })}
    
            </ul> 
        </div>
        <div>
        <h1 className='font-bold text-2xl'>GitHub Profile</h1>
            <p>Lets connect on github <a className='text-teal-400 font-bold' href=''>GitHub</a></p>
        </div>
        </div>
        <div className=' space-y-2'>
        <button className='border-solid border-2 border-amber-400 rounded-md px-4 py-2 '>About</button>
        <p>Hello, my name is {data.name}. Am currently situated at {data.location}. My proefficiency is main based on {data.title} development and am open for work and collaborations</p>
        </div>
        </div>
	</div>
  )
}

export default Devcard