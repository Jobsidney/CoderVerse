import React from 'react'

function CreateProfile() {
  return (
    <div className='h-screen flex flex-col'>
    <div className="h-full flex flex-col space-y-2 justify-center items-center">
        <h1 className='text-2xl font-bold'>Set up your profile</h1>
        <h1>Welcome to the community</h1>
        <form className='form flex flex-col space-y-6 text-slate-400'>
            <input className=''
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            value=""/>
             <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            required 
            value=""/>
             <input 
            type="text" 
            name="location" 
            placeholder="Location" 
            required 
            value=""/>
             <input 
            type="text" 
            name="languages" 
            placeholder="Languages" 
            required 
            value=""/>
             <input 
            type="text" 
            name="github" 
            placeholder="GitHub Link" 
            required 
            value=""/>
            
             <input 
            type="file" 
            name="image" 
            placeholder="Upload image" 
            required 
            value=""/>
              <button type="submit" className='bg-amber-400 text-white font-bold text-xl py-4'>
                Submit profile</button>
        </form>
    </div>
    </div>
  )
}

export default CreateProfile