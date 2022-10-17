import React from 'react'
export default ({instructor}) =>{
return(
    <div className='w-full flex'>
        <div>
            <img src="/img/instructors/daisy.jpeg" className='rounded-full w-16'/>
        </div>
        <div className='p-2 flex-1'>
            <h3 className='font-bold'>{instructor.name}</h3>
            <p className='text-sm'>{instructor.details}</p>
        </div>
    </div>
)
}