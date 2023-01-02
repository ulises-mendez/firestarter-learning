import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Course = ({category, title, released, src, className}) =>{
    return(
        <div className='card'>
            <InertiaLink href={route('course.preview')} className='relative'>
                <img src={src} className='w-full rounded' />
            </InertiaLink>
            <div className='flex mt-2'>
                <div className='rounded-full w-auto'><span className='text-orange text-sm font-semibold'>{category}</span></div>
            </div>
            <InertiaLink  href={route('course.preview')} className='font-semibold my-2'>
               {title}
            </InertiaLink>
            <p className='text-sm text-gray-500'>{released}</p>
        </div>
    )
}

export default Course