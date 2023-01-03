import React, { useRef, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import classNames from 'classnames';
import Section from '@/Components/Courses/Section'
import Progress from '@/Components/Courses/Progress';
import CourseCompleted from '@/Components/Courses/Completed/CourseCompleted';

const Item = ({link,text, length }) =>{
    const isActive = route().current(link);

    const Item = classNames('my-4 font-semibold p-2 px-4  rounded select-none cursor-pointer w-full',
    {
        'border-black border-l-4 bg-orange text-white': isActive,
        'hover:bg-orange hover:bg-opacity-10': !isActive
      })

    return(
        <InertiaLink href={route(link)} >
            <div className={Item}>
            {text} {length ? '(' + length + ')' : null}
            </div>
        </InertiaLink>
    )
}

const History = () => {
    const {save_count, active_courses, collections, completed_courses} = usePage().props
    const {menu, setMenu} = useState(false)
    function goto(e){
        const value = e.target.value
        Inertia.get(route(value))
    }
    return(
        <div className='w-full h-full flex items-stretch'>
            <div className='relative p-4 h-full bg-lightGray hidden w-1/4 lg:block'>
                <h1 className='font-bold text-xl'>My Library</h1>
                <Item text='In Progress' link='me' length={active_courses}/>
                <Item text='Saved' link='me.saved' length={save_count}/>
                <Item text='My Collections' link='me.collections' length={collections}/>
                <Item text='Learning History' link='me.history'/>
                
            </div>

            {
                completed_courses.length == 0 ?
                <div className='w-full flex-1 h-full bg-white p-6 overflow-auto flex flex-col relative justify-center'>
                <div className='lg:hidden'>
                    <h1 className='font-bold text-xl mb-2'>Saved Courses</h1>
                    <select onChange={goto} className='w-full border-gray-200 rounded-lg focus:border-orange focus:ring-orange focus:ring-2' value='me.history'>
                        <option value="me">In progress ({active_courses})</option>
                        <option value="me.saved">Saved ({save_count})</option>
                        <option value="me.collections">My Collections ({collections})</option>
                        <option value="me.history">Learning History</option>
                    </select>
                    </div>
                    <div className='overflow-y-auto'>
                        <div className='w-full text-center'>
                            <h2 className='font-semibold text-2xl'>You don’t have any completed courses - yet.</h2>
                            <img src='/img/empty/history.png' className='w-48 my-8 mx-auto' />
                            <p className='my-2'>When you complete a course, you can find it here</p>
                        </div>
                        <div className='w-full text-center'>
                            <InertiaLink href={route('courses')}>
                                <button className='bg-black p-4 text-white font-semibold rounded-lg'>
                                    Go to courses
                                </button>
                            </InertiaLink>
                        </div>
                    </div>
                </div>
                :
                <div className='w-full h-full p-4'>
                    {
                    completed_courses.map((course, i) => {
                        return(
                            <CourseCompleted key={i} course={course}/>
                        )
                    })
                    }
                </div>
            }

        </div>
        
    )
}

History.layout = page => <Layout title="Course" children={page} />;


export default History;