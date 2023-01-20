import React, { useState } from 'react';
import { InertiaLink, Head, usePage } from '@inertiajs/inertia-react'
import Card from '@/Components/Courses/Card'
import Carousel from '@/Components/Courses/Carousel'
import Featured from '@/Components/Courses/Featured'
import Icon from '@/Components/Icon'
import Layout from '@/Layouts/Guest'
import Topic from '@/Components/Courses/Topic'
import useMediaQuery from '@/Components/useMediaQuery'
import { courses } from '@/data/courses'


function Welcome(props) {
    const { topics, latest } = props
    const Desktop = useMediaQuery(768)
    const Tablet = useMediaQuery(1200)
    const Slides = [0, 1, 2]
    const SlidesTablet = [0, 1]
    const [index, setIndex] = useState(0)
    //console.log('item', courses[0])
    const maxSlide = courses.length - 3
    const previous = () => setIndex(Math.max(0, index - 1))
    const next = () => setIndex(Math.min(maxSlide, index + 1))
    return (
        <>
            <Head title="FireStarter Club Learning" />
            <div className='bg-orange '>
                <div className='max-w-5xl mx-auto flex flex-wrap items-center p-8 md:p-24'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-5xl font-bold text-white'>We help grow your skills</h1>
                        <InertiaLink href={route('subscription')}>
                            <button className='bg-black p-4 text-white rounded-lg font-semibold my-4'>Get started</button>
                        </InertiaLink>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='w-full bg-white bg-opacity-30 rounded-xl overflow-hidden'>
                            <img src='/img/learning.png' className='w-full' alt='Women Learning' />
                        </div>  
                    </div>
                </div>
            </div>
            
            <div className='bg-gray-100 w-full flex flex-wrap items-center '>
                <div className='w-full flex flex-wrap items-center justify-between max-w-7xl mx-auto pt-12'>
                    <div className='px-8 w-full lg:w-1/5'>
                        <h3 className='text-4xl leading-tight font-semibold'>Latest <br/> Courses<br/></h3>
                    </div>
                    <div className='w-full lg:w-4/5'>
                        <Carousel courses={latest}/>
                    </div>
                </div>
            </div>
            <section className='w-full max-w-5xl mx-auto my-12 flex flex-wrap py-4'>
                <div className='w-full md:w-1/2 px-8'>
                    <h3 className='text-4xl leading-tight'>Find the right course for you</h3>
                        <p className='my-4 hidden'>Choose from over 20,400 courses and Learning Paths, dozens added each week.</p>
                </div>
                <div className='w-full md:w-1/2 px-8 md:px-0'>
                    <h4 className='font-semibold text-lg'>POPULAR TOPICS</h4>
                    <div className='flex flex-wrap'>
                        {topics.map((topic, i) => 
                        <Topic id={topic.id} key={i} text={topic.title} />)
                        }
                    </div>
                </div>
            </section>
            {
                /*
                <section className='w-full max-w-5xl mx-auto py-4'>
                <h4 className='font-semibold text-lg text-orange'>TRENDING TIME MANAGEMENT COURSES</h4>
                <div className='flex'>
                <Card />
                <Card className='hidden sm:block'/>
                <Card className='hidden md:block'/>
                <Card className='hidden lg:block'/>
                </div>
                <div className='w-full flex justify-end py-4'>
                        <div className='bg-white rounded-full p-2'>
                            <Icon name='cheveron-left'  className='w-6 h-6'/>
                        </div>
                        <div className='bg-white rounded-full p-2 ml-2'>
                            <Icon name='cheveron-right'  className='w-6 h-6'/>
                        </div>
                </div>
            </section>
                */
            }
            
        </>
    );
}

Welcome.layout = page => <Layout title="Course" children={page} />;
export default Welcome;