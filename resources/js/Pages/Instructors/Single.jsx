import React, { useRef, useState, Fragment } from 'react'
import Layout from '@/Layouts/Auth'
import {saved} from '@/data/courses'
import Icon from '@/Components/Icon'
import classNames from 'classnames'
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput';
import Section from '@/Components/Courses/Section'
import CourseInstructor from '@/Components/Courses/CourseInstructor'

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Instructor = () =>{
    const {instructor, courses} = usePage().props
    return(
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto flex justify-between items-center bg-gray-100 w-full max-w-4xl p-10 rounded-lg mt-10'>
                
                <div>
                    <h1 className='text-xl font-semibold'>
                        {instructor.name}
                    </h1>
                    <p className='text-sm'>
                        {instructor.title}
                    </p>
                </div>
                <div className=''>
                    <img 
                    src={instructor.avatar}
                    className='w-20 mx-auto rounded'/>
                </div>
            </div>
            <div className='mx-auto bg-gray-100 w-full max-w-4xl p-10 rounded-lg mt-4'>
                <div>
                    <p className='text-sm'>
                    {
                        instructor.description
                    }
                    </p>
                </div>
            </div>
            <div className='mx-auto  w-full max-w-4xl rounded-lg mt-4'>
                <div>
                    <h2 className='text-sm font-semibold'>Courses</h2>
                </div>
                <div>
                {
                    courses.map((course, i) => {
                        return(
                            <CourseInstructor data={course} key={i}/>
                        )
                    })
                }
                </div>
            </div>
        </div>        
    )
}

Instructor.layout = page => <Layout title="Instructor" children={page} />


export default Instructor