import React from 'react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

const Billing = () =>{
    const { end } = usePage().props
    return(
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto w-full max-w-3xl  rounded-lg'>
                <div className='border rounded-lg'>
                    <InertiaLink className='flex items-center p-4 text-gray-600' href={route('settings')}>
                        <Icon name='arrow-left' className='w-6 h-6 fill-current'/>
                        <h3 className='font-semibold ml-2 text-sm'>Back</h3>
                    </InertiaLink>
                    <div>
                        <h1 className='text-xl font-semibold px-4'>Billing info</h1>
                    </div>
                    <div className='p-4 py-2'>
                        <p>Your next monthly payment of CAN$49.00* for Learning Premium is scheduled for {end}.</p>
                    </div>
                    <div className='px-4'>
                       <p className='text-xs text-gray-600'>*Sales tax not included</p>
                    </div>
                    <div className='p-4'>
                        <a href={route('billing.portal')} target='_blank' className='text-orange font-semibold'>
                            Manage payment methods
                        </a>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>        
    )
}

Billing.layout = page => <Layout title="My curriculum" children={page} />;


export default Billing;