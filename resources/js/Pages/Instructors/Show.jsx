import React, { useRef, useState, Fragment } from 'react';
import Layout from '@/Layouts/Auth';
import {saved} from '@/data/courses'

import Icon from '@/Components/Icon';
import classNames from 'classnames';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
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
    return(
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto flex justify-between items-center bg-gray-100 w-full max-w-4xl p-10 rounded-lg mt-10'>
                
                <div>
                    <h1 className='text-xl font-semibold'>Name Instructor</h1>
                    <p className='text-sm'>Speaker, Writer, and Instructor</p>
                </div>
                <div className=''>
                    <img src='/img/instructors/01.jpeg' className='w-20 mx-auto rounded'/>
                </div>
            </div>
            <div className='mx-auto bg-gray-100 w-full max-w-4xl p-10 rounded-lg mt-4'>
                <div>
                    <p className='text-sm'>
                    Jodi-Ann Burey is a speaker, writer, and podcaster. 
                    She has a mission to disrupt "business as usual" to achieve social change. She is a sought-after speaker and writer on topics of race, culture, and health equity. Her TED talk, "The Myth of Bringing Your Full Authentic Self to Work," embodies her disruption of traditional narratives about racism at work. Jodi-Ann is also the creator and host of Black Cancer, a podcast about the lives of people of color through their cancer journeys. Jodi-Ann is a lecturer at the University of Washington, and holds a master's in public health from the University of Michigan.
                    </p>
                </div>
            </div>
            <div className='mx-auto  w-full max-w-4xl rounded-lg mt-4'>
                <div>
                    <h2 className='text-sm font-semibold'>Courses</h2>
                </div>
                <div>
                {
                    saved.map(({title, thumbnail, released}, i) => {
                        return(
                            <CourseInstructor key={i} title={title} released={released} thumbnail={thumbnail}/>
                        )
                    })
                }
                </div>
            </div>
        </div>        
    )
}

Instructor.layout = page => <Layout title="Instructor" children={page} />;


export default Instructor;