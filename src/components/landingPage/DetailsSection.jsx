import React from 'react'
import {skills, data} from './data'
import DeveloperList from './DeveloperList'


function DetailsSection() {
    const[dev, setDev] = useState("All Developers")
    const[lan, setLanguage] = useState("All Languages")
    const [list, setList] = useState([]);
    
    useEffect(() => {
    //   fetch("http://localhost/9292/devs")
    //   .then(response => response.json())
    //   .then(data => setList(data))
    if(dev === "All Developers"){
        setList(data)
    }else{
       const filtered = data.filter(li => li.title === dev)
       setList(filtered)
    }
   
    },[dev])
    console.log(list)
    function handleDevChange(e) {
       setDev(e.target.value)
      
    }

    function handleLanguageChange(e) {
        setLanguage(e.target.value)
    }
console.log(dev)
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