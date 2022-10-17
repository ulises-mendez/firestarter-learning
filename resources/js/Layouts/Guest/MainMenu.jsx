import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import Icon from '@/Components/Icon'
const MainMenu = () =>{
    return(
        <div className='flex items-center'>
            <div>
                <InertiaLink href={route('subscription')}>
                    <button className='p-2 px-4 text-orange rounded-full'>Start free trial</button>
                </InertiaLink>
            </div>
            <div className='ml-4'>
                <InertiaLink href={route('login')} className='cursor-pointer'>
                    <button className='p-2 px-4 text-white bg-orange cursor-pointer rounded-full'>Login</button>
                </InertiaLink>
            </div>
            
            
        </div>
    )
}

export default MainMenu