import React from 'react'

const Featured = () =>{
    return(
        <div className='bg-white rounded-lg shadow-lg p-4 w-full md:w-80 mx-2'>
            <div className='relative'>
                <img src='/img/thumbnails/sales.jpeg' className='w-full' />
            </div>
            <div className='flex my-2'>
                <div className='rounded-full w-auto'><span className='text-orange text-sm font-semibold'>Sales management</span></div>
            </div>
            <h4 className='font-semibold my-2'>Develop a High-Performance Mindset</h4>
            <p className='text-sm text-gray-500'>Released Sep 20,2022</p>
            
        </div>
    )
}

export default Featured