import React from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import Icon from '@/Components/Icon'

const MainMenu = () =>{
    const { auth } = usePage().props
    return(
        <div className='flex items-center'>
            <div>
                <InertiaLink href={route('subscription')}>
                    <button className='p-2 px-4 text-orange rounded-full'>Sign up</button>
                </InertiaLink>
            </div>
            <div className='ml-4'>
                <InertiaLink href={route('login')} className='cursor-pointer'>
                    {
                        auth.user == null ?
                        <button className='p-2 px-4 text-white bg-orange cursor-pointer rounded-full'>Login</button>
                        :
                        <button className='p-2 px-4 text-white bg-orange cursor-pointer rounded-full'>Dashboard</button>
                    }
                </InertiaLink>
            </div>           
        </div>
    )
} 

export default MainMenu