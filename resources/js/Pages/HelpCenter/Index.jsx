import React from 'react';
import { Link, Head, InertiaLink } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Guest';
import Icon from '@/Components/Icon'


const Topic = ()  =>{
    return (
        <>
            <Head title={'Help Center'} />
            <div className='bg-orange py-8'>
                <div className='max-w-3xl mx-auto'>
                <h1 className='text-2xl font-semibold mb-4 text-center text-white'>
                    How may we help you?
                </h1>
                <div className='p-2 flex-1'>
                <input className='bg-white rounded-full p-2 px-4 w-full' placeholder='Search for anything'></input>
                </div>
            </div>
            

            </div>
            <div className='w-full'>
            <div className='max-w-5xl mx-auto w-full grid sm:grid-cols-2 md:grid-cols-3 sm:p-4 gap-4 my-8'>
                <InertiaLink href={route('help.topic', 1)} className='bg-gray-100 rounded-lg  p-4  md:p-10'>
                    <img src='/svg/logo.svg' className='w-10 mx-auto mb-4'/>
                    <h1 className='text-xl text-center font-semibold mb-2'>Getting Started</h1>
                    <p>Learn how FireStater works and how to start learning.</p>
                </InertiaLink>
                
                <InertiaLink href={route('help.topic', 1)} className='bg-gray-100 rounded-lg p-4  md:p-10'>
                        <div className='w-10 mx-auto mb-4 bg-orange text-white rounded-full p-2'>
                            <Icon name='user' className='fill-current'/>
                        </div>
                        <h1 className='text-xl text-center font-semibold mb-2'>Account/Profile</h1>
                        <p>Manage your account settings.</p>
                </InertiaLink>
               
                <InertiaLink href={route('help.topic', 1)} className='bg-gray-100 rounded-lg p-4  md:p-10'>
                    <div className='w-10 mx-auto mb-4 bg-orange text-white rounded-full p-2'>
                        <Icon name='error' className='fill-current'/>
                    </div>
                    <h1 className='text-xl text-center font-semibold mb-2'>Troubleshooting</h1>
                    <p>Experiencing a technical issue? Check here.</p>
                </InertiaLink>
                <InertiaLink href={route('help.topic', 1)} className='bg-gray-100 rounded-lg p-4  md:p-10'>
                    <div className='w-10 mx-auto mb-4 bg-orange text-white rounded-full p-2'>
                        <Icon name='book' className='fill-current'/>
                    </div>
                    <h1 className='text-xl text-center font-semibold mb-2'>Learning Experience</h1>
                    <p>Everything about the FireStarter learning experience.</p>
                </InertiaLink>
                <InertiaLink href={route('help.topic', 1)} className='bg-gray-100 rounded-lg p-4  md:p-10'>
                    <div className='w-10 mx-auto mb-4 bg-orange text-white rounded-full p-2'>
                        <Icon name='withdraw' className='fill-current'/>
                    </div>
                    <h1 className='text-xl text-center font-semibold mb-2'>Purchase/Refunds</h1>
                    <p>Learn about purchasing courses, how to send gifts, and refunds.</p>
                </InertiaLink>
                <InertiaLink href={route('help.topic', 1)} className='bg-gray-100 rounded-lg p-4  md:p-10'>
                    <div className='w-10 mx-auto mb-4 bg-orange text-white rounded-full p-2'>
                        <Icon name='document' className='fill-current'/>
                    </div>
                    <h1 className='text-xl text-center font-semibold mb-2'>Mobile</h1>
                    <p>On the go? Learn about our mobile app.</p>
                </InertiaLink>
            </div>
            
            </div>
            
        </>
    );
}

Topic.layout = page => <Layout title="Course" children={page} />;
export default Topic;