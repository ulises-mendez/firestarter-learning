import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Logo from '@/Components/Logo'

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-orange">
            

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-xs overflow-hidden sm:rounded-lg">
            <div className='flex w-full justify-center my-4'>
                <Link href="/">
                    <Logo className='w-56' />
                </Link>
            </div>
                {children}
            </div>
        </div>
    );
}
