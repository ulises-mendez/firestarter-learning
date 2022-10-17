import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
const Featured = ({className}) =>{
    return(
        <div className={`bg-white rounded-lg shadow-lg p-4 w-full md:w-80 mx-2 ${className}`}>
            <InertiaLink href={route('course.preview')} className='relative'>
                <img src='/img/thumbnails/sales.jpeg' className='w-full' />
            </InertiaLink>
            <div className='flex my-2'>
                <div className='rounded-full w-auto'><span className='text-orange text-sm font-semibold'>Sales management</span></div>
            </div>
            <InertiaLink  href={route('course.preview')} className='font-semibold my-2'>
                Develop a High-Performance Mindset
            </InertiaLink>
            <p className='text-sm text-gray-500'>Released Sep 20,2022</p>
            
        </div>
    )
}

export default Featured