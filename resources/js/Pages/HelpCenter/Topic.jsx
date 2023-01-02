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
                        <div className='flex items-center'>
                            <InertiaLink href={route('help.index')} className='font-semibold text-orange'>
                                FireStarter
                            </InertiaLink>
                            <Icon name='cheveron-right' className='w-4'/>
                            <p>Getting Started</p>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <input className='bg-white rounded-full p-2 px-4 w-full' placeholder='Search'></input>
                        </div>
                    </div>
                    <h1 className='text-3xl  font-semibold my-4'>
                    Getting Started
                    </h1>

                </div>
            </div>
            <div className='w-full'>
                <div className='max-w-6xl mx-auto w-full flex sm:p-4 gap-4 my-8'>
                    <div className='hidden md:block md:w-1/4'>
                        <p className='font-bold text-gray-800'>
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
                    <div className='w-full md:w-3/4'>
                        {
                            data.topics.map((topic, i)=>{
                                return(
                                    <section key={i} className='mb-4 mx-2'>
                                        <h2 className='text-2xl font-bold mb-2'>{topic.title}</h2>
                                        <ul>
                                            {topic.content.map((link, i)=>{
                                                return(
                                                    <li key={i} className='py-1'>
                                                    <InertiaLink href={route('help.article')} className='text-orange underline'>
                                                        {link.title}
                                                    </InertiaLink>
                                                </li>
                                                )
                                            }
                                                
                                            )
                                            
                                            }
                                        </ul>
                                    </section>
                                )
                            })
                        }
                        
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