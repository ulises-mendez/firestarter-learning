import React from 'react';
import { Link, Head, InertiaLink } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Guest';
import Icon from '@/Components/Icon'


const Topic = ()  =>{
    return (
        <>
            <Head title={'Getting Started'} />
            <div className='bg-gray-100 py-4'>
                <div className='max-w-6xl mx-auto p-4 md:px-2'>
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex flex-wrap items-center'>
                            <InertiaLink href={route('help.index')} className='font-semibold text-orange'>
                                FireStarter
                            </InertiaLink>
                            <Icon name='cheveron-right' className='w-4'/>
                            <InertiaLink href={route('help.topic')} className='font-semibold text-orange'>
                            <p>Getting Started</p>
                            </InertiaLink>
                            <Icon name='cheveron-right' className='w-4'/>
                            <p>How to Sign up With FireStarter</p>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <input className='bg-white mt-2 md:mt-0 rounded-full p-2 px-4 w-full' placeholder='Search'></input>
                        </div>
                    </div>
                    <h1 className='text-3xl  font-semibold my-4'>
                    How to Sign up With FireStarter and Log in (on a Browser)
                    </h1>
                    <div className='p-2'>
                    
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='max-w-6xl mx-auto w-full flex sm:p-4 gap-4 my-8'>
                    <div className='w-full md:w-3/4 px-2'>
                        <p>This article explains how you can sign up for FireStarter, while accessing FireStarter on a desktop or laptop browser, and begin your learning experience today.</p>
                        <ul className='list-disc w-full pl-8'>
                            <li>Using the FireStarter mobile app? Review how to sign up and log in using the FireStarter mobile app.</li>
                            <li>Are you unable to log in? Learn how to troubleshoot log in issues.</li>
                        </ul>
                        <h3 className='font-bold mt-4'>Sign up with an email and password</h3>
                        <ol className='list-decimal w-full pl-8'>
                            <li>Click Sign Up at the top right of your desktop or laptop browser. Enter your name, your email address, and a unique password.</li>
                            <li>Select whether you wish to receive promotional emails and recommendations from FireStarter. </li>
                            <li>Click Sign up.</li>
                        </ol>
                        <h3 className='font-bold mt-4'>Log in with an email and password</h3>
                        <ol className='list-decimal w-full pl-8'>
                            <li>On your browser, click Log in at the top right.</li>
                            <li>Enter the credentials you used to sign up.</li>
                            <li>Click Log in.</li>
                        </ol>
                        <h3 className='font-bold mt-4'>How to log out of your FireStarter account</h3>
                        <p>If you’re accessing your FireStarter account from a public or shared device, be sure to log out of your account when you’re finished studying.</p>
                        <ol className='list-decimal w-full pl-8'>
                            <li>Move your cursor to your initials or profile image at the top right of the page.</li>
                            <li>Click Log out in the dropdown menu.</li>
                        </ol>
                        <h3 className='font-bold mt-4'>Was this article helpful?</h3>
                        <div className='flex mt-4'>
                            <div className='p-4 bg-gray-100 mr-2'>
                                <Icon name='thumbs-up-fill' className='w-4'/>
                            </div>
                            <div className='p-4 bg-gray-100 mr-2'>
                            <Icon name='thumbs-up-fill' className='w-4 rotate-180'/>
                            </div>
                            
                        </div>
                    </div>
                    <div className='hidden md:block md:w-1/4'>
                        <div className='mb-6'>
                            <p className='text-orange'>
                                How to Sign up and Log in With The Mobile App
                            </p>
                            <p className='text-orange'>
                                How to Change or Reset Your Password
                            </p>
                            <p className='text-orange'>
                                How to Find Your Missing Course
                            </p>
                            <p className='text-orange'>
                                Payment Methods on FireStarter
                            </p>
                            <p className='text-orange'>
                                Troubleshooting Video Issues on The Mobile App
                            </p>

                        </div>
                        <p className='font-bold text-gray-800 mb-2'>
                            Main Topics
                        </p>
                        <p className='font-semibold text-orange'>
                            Getting Started
                        </p>
                        <p className='text-orange'>
                            Account/Profile
                        </p>
                        <p className='text-orange'>
                            Troubleshooting
                        </p>
                        <p className='text-orange'>
                            Learning Experience
                        </p>
                        <p className='text-orange'>
                            Purchase/Refunds
                        </p>
                        <p className='text-orange'>
                            Mobile
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    );
}

const data = {
    topics: [
        {
            title: 'How to Get Started With FireStarter',
            content: [
                {
                    title:'How to Sign up With FireStarter and Log in (on a Browser)',
                },
                {
                    title:'FireStarter Platforms and Features',
                },
                {
                    title:'System Requirements',
                }
            ]
        },
        {
            title: 'Learn More About FireStarter',
            content: [
                {
                    title:'Learning With FireStarter: FAQ',
                },
                {
                    title:'Lifetime Access',
                },
            ]
        },
        {
            title: 'FireStarter\'s Instructors',
            content: [
                {
                    title:'FireStarter Instructor Partner Badges: What do Learners Need to Know?',
                },
                {
                    title:'Course Instructors and Teaching Assistants',
                },
            ]
        }
    ],
}

Topic.layout = page => <Layout title="Course" children={page} />;
export default Topic;