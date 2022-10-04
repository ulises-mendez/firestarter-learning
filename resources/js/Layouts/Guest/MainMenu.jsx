import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
const MainMenu = () =>{
    return(
        <div className='flex'>
            <div>
                <InertiaLink href={route('subscription')}>
                    <button className='p-2 px-4 text-orange rounded-full'>Start free trial</button>
                </InertiaLink>
            </div>
            <div className='ml-4'>
                <InertiaLink href={route('course')} className='cursor-pointer'>
                    <button className='p-2 px-4 text-white bg-orange cursor-pointer rounded-full'>Login</button>
                </InertiaLink>
            </div>
        </div>
    )
}

export default MainMenu