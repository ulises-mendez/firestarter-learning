import React, { useContext, useRef, useState } from 'react'
import {Context} from '@/Components/Courses/Collections/CollectionDataContext'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import releasedFormat from '@/lib/releasedFormat'
import Icon from '@/Components/Icon'
import axios from 'axios'
import durationFormat from '@/lib/durationFormat'

const CourseItem = ({course, index}) =>{
    const {coursesData, setCoursesData} = useContext(Context)
    const {collection} = usePage().props
    const {id, title, date, thumbnail,released, slug, time, played} = course
    const [menu, setMenu] = useState(false)

    const left = time - played

    const percent = (played / time * 100).toFixed(2)
    
    function deleteItem()
    {
        const formData =  new FormData()
        formData.append('course', course.id)
        formData.append('collection', collection.id)
        axios.post(route('course.collection'), formData)
        .then(res => {
            const courses = [...coursesData]
            courses.splice(index, 1)
            setCoursesData(courses)
        })
        .catch(err => console.log(err))
    }
    return(
        <div  className='flex p-4 border rounded-lg w-full my-4'>
            <div>
                <InertiaLink href={route('course.show', slug)}>
                <img src={thumbnail} className='rounded w-full max-w-xs'/>
                </InertiaLink>
            </div>
            <div className='p-4 flex-1 flex flex-col justify-between'>
                <div>
                    <InertiaLink href={route('course.show', slug)}>
                        <h4 className='font-semibold my-2'>{title}</h4>
                    </InertiaLink>
                    <p className='text-sm text-gray-500'>{releasedFormat(released)}</p>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='w-full max-w-xs flex items-center'>
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5 ">
                            <div className="bg-orange h-1.5 rounded-full" style={{ width: `${percent}%`}}></div>
                        </div>
                        <span className='text-xs ml-3'>{durationFormat(left)} left</span>
                    </div>
                    <div className="relative">
                        <button 
                        onClick={() => setMenu(true)}>
                            <Icon name="dots" className='w-6'/>
                        </button>
                        <div>
                        <div 
                        onClick={() => setMenu(false)}
                        className={`origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${menu == true ? '' : 'hidden'}`}>
                            
                            <div className="w-full text-left">
                                <button
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"
                                onClick={deleteItem}
                                >
                                    Remove
                                </button>
                            </div>
                            
                        </div>
                        <div
                            onClick={() => {
                            setMenu(false);
                            }}
                            className={`fixed inset-0 z-10 ${menu == true ? '' : 'hidden'}`}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem