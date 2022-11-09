import React from 'react'


function Community() {
  return (
    <div className='grid place-items-center min-h-screen mt-[100px]'>
    <div className='  grid gap-4 xs:grid-cols-2  xs:p-8 md:grid-cols-4 '>
        <h1 className='font-bold text-2xl text-center xs:col-span-2 xs:grid xs:grid-cols-2  x:gap-4 md:col-span-3 md:text-5xl' >
            <span className='bg-amber-400'>Join a community today</span>
            </h1>
        <p className='xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg'>Do you want to be a pro in your field? Or want to grow your skills? Join a community
                    today and be ble to meet a team of other developers who yarn to learn and perfect there skills.
                </p>

                <div className='h-16 bg-teal-900 xs:h-auto xs:square  '>
                <img className='' src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2JTIwY29tbXVuaXR5JTIwd29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                </div>
                <div className='h-16 bg-teal-900 xs:h-auto xs:square'>
                    <img src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2JTIwY29tbXVuaXR5JTIwd29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                </div>
                <div className='h-16 bg-teal-900 xs:h-auto xs:square md:col-start-2'>
                    <img src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldiUyMGNvbW11bml0eSUyMHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                </div>
                <div className='h-16 bg-teal-900 xs:h-auto xs:square'>
                    <img src='https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRldiUyMGNvbW11bml0eSUyMHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                </div>
                <div className='h-16 bg-teal-900 xs:h-auto xs:square'>
                    <img src='https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldiUyMGNvbW11bml0eSUyMGNvbnRlc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                </div>
                <div className='h-16 bg-teal-900 xs:h-auto xs:square'>
                    <img src='https://media.istockphoto.com/id/871461580/photo/diverse-education-shoot.jpg?s=612x612&w=is&k=20&c=nhjxz2bnQ3uMZlHEaSxC_E71QsrKrqGg7omCldMapmc='/>
                </div>
                <div className='h-16 bg-teal-900 xs:h-auto xs:square'>
                    <img src='https://media.istockphoto.com/id/1197257945/photo/programmers-cooperating-at-it-company-developing-apps.jpg?b=1&s=170667a&w=0&k=20&c=2yNXxXvEJeCAwd5UCtd04OsJmF-NSuCfVn0bPzZJmhQ='/>
                </div>
                <div className='self-center md:text-lg md:col-span-2 md:text-center md:px-4'>
                <p >Do you want to be a pro in your field? Or want to grow your skills?</p>
                <button className='button'>Join</button>
              
                </div>
    </div>
    </div>
  )
}

export default Community