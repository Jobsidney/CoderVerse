import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function CreateProfile() {
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    location:"",
    languages:[],
    github: "",
    image: "",
  })
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e){
 e.preventDefault();

 fetch ("https://devs35.herokuapp.com/devs",{
  method: "POST",
  headers: {'Content-type':'application/json'},
  body: JSON.stringify(formData)
 })
 .then(response => response.json())
 .then(data => data)

//  fetch ("https://devs35.herokuapp.com/languagesg",{
//   method: "POST",
//   headers: {'Content-type':'application/json'},
//   body: JSON.stringify({
//     language: formData.languages,
//   })
//  })
//  .then(response => response.json())
//  .then(data => console.log(data))

 history.push("/");
  }
  console.log(formData)
  return (<>
  <div className='lg:mx-[300px] sm:mx-[100px]'>

  </div>
    <div className='h-screen flex flex-col'>
    <div className="h-full flex flex-col space-y-2 justify-center items-center">
        <h1 className='text-2xl font-bold'>Set up your profile</h1>
        <h1>Welcome to the community</h1>
        <form className='form flex flex-col space-y-6 text-slate-400' onSubmit={handleSubmit}>
            <input className=''
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            value={formData.name}
            onChange={handleChange}/>

             <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            required 
            value={formData.title}
            onChange={handleChange}/>
             <input 
            type="text" 
            name="location" 
            placeholder="Location" 
            required 
            value={formData.location}
            onChange={handleChange}/>

             <input 
            type="text" 
            name="languages" 
            placeholder="Languages" 
            // required 
            value={formData.languages}
            onChange={handleChange}/>

             <input 
            type="text" 
            name="github" 
            placeholder="GitHub Link" 
            required 
            value={formData.github}
            onChange={handleChange}/>
            
             <input 
            type="file" 
            name="image" 
            placeholder="Upload image" 
            required 
            value={formData.image}
            onChange={handleChange}/>
              <button type="submit" className='bg-amber-400 text-white font-bold text-xl py-4'>
                Submit profile</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default CreateProfile