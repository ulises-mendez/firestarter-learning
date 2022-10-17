import React from 'react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import { InertiaLink } from '@inertiajs/inertia-react';

const ManagePremium = () =>{
    return(
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto w-full max-w-3xl  rounded-lg'>
                <div className='border rounded-lg'>
                    <InertiaLink className='flex items-center p-4 text-gray-600' href={route('settings')}>
                        <Icon name='arrow-left' className='w-6 h-6 fill-current'/>
                        <h3 className='font-semibold ml-2 text-sm'>Back</h3>
                    </InertiaLink>
                    <div>
                        <h1 className='text-xl font-semibold px-4'>Manage Premium account</h1>
                    </div>
                    <div className='p-4 py-2'>
                        <p>You’re currently subscribed to Learning Premium.</p>
                    </div>

                    <div className='p-4'>
                        <div className='py-2'>
                        <InertiaLink href={route('settings')} className='text-orange font-semibold'>
                            Switch plans
                        </InertiaLink>
                        </div>
                        <div className='py-2'>
                        <InertiaLink href={route('settings')} className='text-orange font-semibold'>
                            Cancel subscription
                        </InertiaLink>
                        </div>
                        <div className='py-2'>
                        <InertiaLink href={route('settings')} className='text-orange font-semibold'>
                            Manage payment methods
                        </InertiaLink>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>        
    )
}

ManagePremium.layout = page => <Layout title="My curriculum" children={page} />;


export default ManagePremium;