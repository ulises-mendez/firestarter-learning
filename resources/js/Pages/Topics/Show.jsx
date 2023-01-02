import React from 'react';
import { Link, Head, InertiaLink } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Guest';
import Icon from '@/Components/Icon'
import Dropdown from '@/Components/Courses/Dropdown'
import Featured from '@/Components/Courses/Featured';
import Card from '@/Components/Courses/Card'
import course  from '@/data/Course';
import Instructor from '@/Components/Courses/Instructor';
import { courses } from '@/data/courses';
import Rate from '@/Components/Courses/Rate';
import Review from '@/Components/Courses/Review';
import Topics from '@/Components/Courses/Topic';
import date from '@/Components/Date';
import { usePage } from '@inertiajs/inertia-react';

const Topic = ()  =>{
    const { courses, topic, topics, trending } = usePage().props
    return (
        <>
            <Head title={data.title + ' Online Training Courses'} />
            
            <div className='max-w-5xl mx-auto w-full flex flex-wrap'>
                <div className='w-full p-2 md:w-2/3'>
                    <h1 className='text-xl font-semibold mb-4'>{topic.title} <span className='font-normal'>Online Training Courses</span></h1>
                    <p className='text-sm mb-2'>{topic.description}</p>
                    <div className='my-4'>
                        <h2 className='text-xl font-semibold'>Trending courses</h2>
                        <div className='w-full my-2 overflow-x-auto'>
                            <div className='w-auto inline-flex'>
                                {trending.map((course, i)=>{
                                return(
                                    <InertiaLink href={route('course.show',course.slug)} key={i}>
                                        <div  className='relative w-48 p-2 px-4 border-r'>
                                            <img src={course.thumbnail} className='w-full' />
                                            <h4 className='font-semibold mb-2 text-sm'>{course.title.length > 34 ? course.title.slice(0,34) + '...' : course.title}</h4>
                                        </div>
                                    </InertiaLink>
                                    )
                                })
                                }
                            </div>
                        
                        </div>
                    </div>
                    <div className='p-2'>
                        <div>
                            <p><span>{courses.length}</span> results for "{topic.title}"</p>
                        </div>
                        {
                        courses.map((course,i)=>{
                            return(
                                <InertiaLink href={route('course.show',course.slug)} key={i}>
                                    <div className='w-full flex py-8 border-b'>
                                        <div className='relative w-48'>
                                            <img src={course.thumbnail} className='w-full' />
                                        </div>
                                        <div className='px-2 flex-1 flex flex-col justify-between'>
                                            <p className='font-semibold text-sm text-gray-600'>Course</p>
                                            <h4 className='font-semibold mb-2'>{course.title}</h4>
                                            <p className='text-sm'>By: {course.by}</p>
                                            <p className='text-sm text-gray-500'>{date(course.created_at)}</p>
                                        </div>
                                    </div>
                                </InertiaLink>
                            )
                        })
                        }
                    </div>
                    
                    
                    
                </div>
                <div className='w-full md:w-1/3 p-2'>
                    <h2 className='text-xl font-semibold mb-4'>Explore Related Topics</h2>
                    <div className='flex flex-wrap'> 
                        {
                            topics.map((topic,i)=>{
                                return(
                                    <Topics id={topic.id} key={i} text={topic.title}/>
                                )
                            })
                        }
                    </div>
                </div>
                
            
               
                
            </div>
            <div className='bg-orange text-white p-4'>
                <div className='max-w-5xl mx-auto flex justify-between'>
                    <h3 className='text-2xl font-semibold'>
                        Start learning today.
                    </h3>
                    <button className='bg-white text-orange rounded-lg p-2 font-semibold'>
                        Start my free month
                    </button>
                </div>
                
            </div>
        </>
    );
}

const data = {
    title: 'Business Analysis',
    desc: 'Enhance your business analysis skills with expert-led courses on critical thinking, business analytics, project management, requirements gathering, and data presentation.',
    trending: [
        {
            thumb: '/img/thumbnails/develop.jpeg',
            title: 'Ultralearning: Accelerate Your Career and Outsmart the Competition (Blinkist Summary)',
            by: 'Blinkist',
            released: 'Released Aug 21, 2020'
        },
        {
            thumb: '/img/thumbnails/sales.jpeg',
            title: 'Women in STEM',
            by: 'Blinkist',
            released: 'Released Aug 21, 2020'
        }
    ],
    results:[
        {
            type:'Video',
            thumb: '/img/thumbnails/develop.jpeg',
            title: 'Ultralearning: Accelerate Your Career and Outsmart the Competition (Blinkist Summary)',
            by: 'Blinkist',
            released: 'Released Aug 21, 2020'
        },
        {
            type:'Course',
            thumb: '/img/thumbnails/sales.jpeg',
            title: 'Women in STEM',
            by: 'Jess Stratton, Peggy Fisher, and Sheeri Cabral',
            released: 'Released Jun 13, 2022'
        },
        {
            type:'VIDEO',
            thumb: '/img/thumbnails/sales.jpeg',
            title: 'Being strategic with memorization sessions 2m',
            by: 'Jess Stratton, Peggy Fisher, and Sheeri Cabral',
            released: 'Released Jun 13, 2022'
        },
        {
            type:'Video',
            thumb: '/img/thumbnails/develop.jpeg',
            title: 'Ultralearning: Accelerate Your Career and Outsmart the Competition (Blinkist Summary)',
            by: 'Blinkist',
            released: 'Released Aug 21, 2020'
        },

    ],
    topics: [ 
        'AdSense',
        'Corporate Training',
        'E-Learning Software',
        'Educational Technology',
        'HR Administration',
        'Leadership Skills',
        'Leadership and Management',
        'Teaching',
        'Training and Education',
        'WordPress'
    ]
}
Topic.layout = page => <Layout title="Course" children={page} />;
export default Topic;