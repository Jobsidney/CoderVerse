import React from 'react'

function CommPage() {
  return (
    <div className='lg:mx-[300px] sm:mx-[100px]'>
       
        <div className="com">
        <div className='flex flex-col justify-center items-center md:mr-[100px]  h-[900px] text-center space-y-7 '>
            <h1 className='font-bold text-3xl '>Community Profile</h1>
            <p className='lg:w-[500px]'>The CodeVerse community is a safe space where dev across the world are able to share fun facts about 
                the coding community. Proffesionals and the entry level programmers work together and share different level of knowledge
            </p>
            <button className='button'>Join</button>
        </div>
        </div>
       
    </div>
  )
}

export default CommPage