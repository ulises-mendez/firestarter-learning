import React from 'react'
import Logo from '@/Components/Logo'
import Icon from '@/Components/Icon'
import MainMenu from '@/Layouts/Guest/MainMenu'
import { InertiaLink } from '@inertiajs/inertia-react'
const Header = () =>{
    return(
        <nav className='p-4 max-w-7xl mx-auto flex items-center'>
            <div>
                <InertiaLink href='/'>
                    <Logo className='w-56'/>
                </InertiaLink>
            </div>
            <div className='p-2'>
                <Icon name='categories' className='ml-2 w-4 h-4'/>
            </div>
            <div className='p-2 flex-1'>
                <input className='bg-lightGray rounded-full p-2 px-4 w-full' placeholder='Search for anything'></input>
            </div>
            <div>
                <MainMenu />
            </div>
            
        </nav>
    )
}

export default Header