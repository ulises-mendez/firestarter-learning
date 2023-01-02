import React from 'react'
import Helmet from 'react-helmet'
import { useForm, usePage, InertiaLink, Link } from '@inertiajs/inertia-react';
import Logo from '@/Components/Logo'

export default function Layout({ title, children }) {
    return(
        <div className='bg-gray-100 text-gray-800 h-screen'>
            <Helmet titleTemplate="%s | Firestarter Club" title={title} />
            <div className='w-full bg-white p-4 '>
                <div className='max-w-7xl mx-auto flex justify-between items-center'>
                    <div className='p-2'>
                        <InertiaLink href="/">
                            <Logo className='w-56'/>
                        </InertiaLink>
                    </div>
                    <div>
                        <Link href={route('logout')} method="post" as="button">
                            <p className='p-2 px-4 text-orange rounded-full'>Log out</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 text-gray-800 py-10 text-center'>
                {children}
            </div>
        </div>
    )
}

