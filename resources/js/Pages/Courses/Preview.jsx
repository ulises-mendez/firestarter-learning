import React, { useState } from 'react';
import { Link, Head, usePage, InertiaLink } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Guest';
import Icon from '@/Components/Icon'
import Dropdown from '@/Components/Courses/Dropdown'
import Featured from '@/Components/Courses/Featured';
import Card from '@/Components/Courses/Card'
import Topic from '@/Components/Courses/Topic';
// import course  from '@/data/Course';
import Instructor from '@/Components/Courses/Instructor';
import { courses } from '@/data/courses';
import Rate from '@/Components/Courses/Rate';
import Review from '@/Components/Courses/Review';
import since from '@/lib/since'
import duration from '@/lib/durationFormat'
import Lesson from './Lesson';
import VideoJS from '@/Components/Courses/Video'

const Preview = ()  =>{
    
    const { course, isLesson, lesson, premium, first_lesson } = usePage().props
    const [showVideo, setShowVideo] = useState(false)
    return (
        <>
            <Head title="Leadership Strategies for Women Online Class" />
            <div className='max-w-5xl mx-auto w-full flex flex-wrap'>
                <div className='w-full md:w-2/3'>
                    <div className='w-full bg-gray-100 rounded-lg overflow-hidden'>
                        {
                            premium ?
                            <div className='relative'>
                                <img src={course.thumbnail} className='w-full'/>
                                <div className='absolute w-full h-full bg-black bg-opacity-80 top-0 left-0' />
                                <div className='absolute -translate-y-1/2 top-1/2 w-full'>
                                    <div className='flex items-center justify-center text-white'>
                                        <Icon name='lock' className='w-5 h-5 mr-2 fill-current'/>
                                        <h3 className='font-semibold text-xl'>Unlock this course with a free trial</h3>
                                    </div>
                                    <h4 className='text-center text-white'>
                                            Join today to unlimited access.
                                    </h4>
                                </div>
                            </div>
                            :
                            isLesson ?
                            !showVideo ?
                            <div className='relative'>
                            <img src={course.thumbnail} className='w-full'/>
                            <button onClick={() => setShowVideo(true)} className='absolute top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-1/2 border bg-black bg-opacity-80 p-4 rounded-lg text-white'>
                                <Icon name='play-linear' className='w-4 h-4 fill-current mr-2'/>
                                Play Lesson
                            </button>
                            </div>
                            :
                            <div className='relative'>
                                <VideoJS
                                options={{
                                    autoplay: true,
                                    controls: true,
                                    responsive: true,
                                    fluid: true,
                                    playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
                                    sources: [{
                                    src: lesson.video.path,
                                    }],
                                }}
                                title={lesson.title}>
                                    <track
                                        src='/cc/01.vtt'
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                        default
                                    />
                                </VideoJS>
                            </div>
                            :
                            <div className='relative'>
                            <img src={course.thumbnail} className='w-full'/>
                            <InertiaLink href={route('course.lesson', [course.slug ,first_lesson])} className='absolute top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-1/2 border bg-black bg-opacity-80 p-4 rounded-lg text-white'>
                                <Icon name='play-linear' className='w-4 h-4 fill-current'/>
                                <span className='ml-2'>Preview Lesson</span>
                            </InertiaLink>
                            </div>
                        }
                        
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>{isLesson ? lesson.title : course.title}</h1>
                            {
                                isLesson ?
                                <p>
                                    From the course:
                                    <InertiaLink
                                    className='ml-2 text-orange font-semibold'
                                    href={route('course.show', course.slug)}>
                                        {course.title}
                                    </InertiaLink>
                                </p>
                                :
                                <>
                                <p className='text-sm py-2'>
                                    <span>{course.by}</span>
                                    {
                                        course.likes > 0 &&
                                        <span className='mx-2'>{/*&#8226;*/}
                                        <span>Liked by {course.likes} { course.likes > 1 ? 'users' : 'user'}</span>
                                        </span>
                                    }
                                </p>
                                <p className='text-xs'>
                                    Duration: <span>{duration(course.time)}</span>
                                    <span className='mx-2'>&#8226;</span>
                                    <span>Skill level: {course.level}</span>
                                    <span className='mx-2'>&#8226;</span>
                                    <span>Released: {since(course.released)}</span>
                                </p>
                                </>
                            }
                        </div>
                        <div className='p-4'>
                            <InertiaLink href={route('login')}>
                            <button className='btn-orange'>Start my 1-month free trial</button>
                            </InertiaLink>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h2 className='text-xl font-semibold'>Course details</h2>
                        <p className='text-sm py-2'>{course.description}</p>
                    </div>
                    <div className='p-2'>
                        <h2 className='text-xl font-semibold'>Skills you'll gain</h2>
                        {
                            course.skills.length > 0 &&
                            <ul className='flex flex-wrap'>
                                {
                                    course.skills.map((skill,i) => {
                                        return(
                                                <li key={i} className='p-2 rounded-full border text-xs font-semibold mr-2'>
                                                    {skill.title}
                                                </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                    <div className='p-2'>
                        <h2 className='text-xl font-semibold'>Earn a sharable certificate</h2>
                        <p className='text-sm py-2'>Share what you’ve learned, and be a standout professional in your desired industry with a certificate showcasing your knowledge gained from the course.</p>
                    </div>
                    <div className='p-2'>
                        <h2 className='text-xl font-semibold'>Meet the instructors</h2>
                        {
                            course.instructors.map((instructor, i)=>{
                                return(
                                    <Instructor instructor={instructor} key={i}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-full md:w-1/3 px-4'>
                    <h2 className='text-xl font-semibold'>Contents</h2>
                    <div className='w-full bg-gray-50 rounded-lg overflow-hidden'>
                        {
                            course.content.map(
                                (item, i) => {
                                return(
                                    <Dropdown
                                    key={i}
                                    item={item}
                                    last={i == course.content.length -1}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='p-2 w-full max-w-2xl'>
                    <h2 className='text-xl font-semibold'>Learner reviews</h2>
                    <div className='my-2'>
                        <span className='text-4xl font-bold'>{course.rate} </span>
                        <span>out of 5</span>
                        <div>
                            <Rate ratings={course.ratings} rate={course.rate}/>
                        </div>
                    </div>
                    <div className='w-full my-4'>
                        {
                            course.reviews.map(({user, content, rate}, i) => {
                                return(
                                    <div className='border w-full rounded-lg p-4 flex my-4'>
                                        <div>
                                            <div className='w-12 h-12 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                                                <Icon name="user" className='w-full fill-current'/>
                                            </div>
                                        </div>
                                        <div className='mb-2'>
                                            <div className='mb-4'>
                                                <p className='font-semibold mt-2'>{user}</p>
                                            </div>
                                            <Rate rate={rate}/>
                                            <div className='my-4'>
                                                <p className='text-sm'>{content}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
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

Preview.layout = page => <Layout title="Course" children={page} />;
export default Preview;