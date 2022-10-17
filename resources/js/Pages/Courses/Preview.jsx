import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Guest';
import Icon from '@/Components/Icon'
import Dropdown from '@/Components/Courses/Dropdown'
import Featured from '@/Components/Courses/Featured';
import Card from '@/Components/Courses/Card'
import Topic from '@/Components/Courses/Topic';
import course  from '@/data/Course';
import Instructor from '@/Components/Courses/Instructor';
import { courses } from '@/data/courses';
import Rate from '@/Components/Courses/Rate';
import Review from '@/Components/Courses/Review';


const Preview = ()  =>{
    return (
        <>
            <Head title="Leadership Strategies for Women Online Class" />
            <div className='max-w-5xl mx-auto w-full flex flex-wrap'>
                <div className='w-full md:w-2/3'>
                    <div className='w-full bg-gray-100 rounded-lg overflow-hidden'>
                        <div className='relative'>
                            <img src={course.preview} className='w-full'/>
                            <div className='absolute top-1/2 left-1/2 flex items-center -translate-x-1/2 -translate-y-1/2 border bg-black bg-opacity-80 p-4 rounded-lg text-white'>
                                <Icon name='play-linear' className='w-4 h-4 mr-2 fill-current'/>
                                <span>Preview</span>
                            </div>
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>{course.title}</h1>
                            <p className='text-sm py-2'>
                                <span>{course.by}</span>
                                <span className='mx-2'>&#8226;</span>
                                <span>Liked by {course.liked} users</span>
                            </p>
                            <p className='text-xs'>
                                Duration: <span>{course.duration}</span>
                                <span className='mx-2'>&#8226;</span>
                                <span>Skill level: {course.level}</span>
                                <span className='mx-2'>&#8226;</span>
                                <span>Released: {course.released}</span>
                            </p>
                        </div>
                        <div className='p-4'>
                            <button className='btn-orange'>Start my 1-month free trial</button>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h2 className='text-xl font-semibold'>Course details</h2>
                        <p className='text-sm py-2'>{course.details}</p>
                    </div>
                    <div className='p-2'>
                        <h2 className='text-xl font-semibold'>Skills you’ll gain</h2>
                        {
                            course.skills.length > 0 &&
                            <ul className='flex flex-wrap'>
                                {
                                    course.skills.map((x,i) => {
                                        return(
                                            <li key={i} className='p-2 rounded-full border text-xs font-semibold'>
                                                Transformational Leadership
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
                            course.content.map((item, i) => {
                                return(
                                    <Dropdown key={i} item={item} index={i == course.content.length -1 ? true: false}/>
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
                            course.reviews.map((review, i) => {
                                return(
                                    <Review key={i} name={review.name} rate={review.rate} text={review.text}/>
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