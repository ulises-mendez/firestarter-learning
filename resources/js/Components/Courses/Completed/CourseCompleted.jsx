import React, { useRef, useState } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import releasedFormat from '@/lib/releasedFormat'
import since from '@/lib/since'
import Icon from '@/Components/Icon'
import axios from 'axios'

const CourseCompleted = ({course}) =>{
    const { created_at, id, title, date, thumbnail,released, slug, time, played} = course
    const [menu, setMenu] = useState(false)

    const left = time - played

    const percent = (played / time * 100).toFixed(2)
    
    function deleteSaved()
    {
        /*
        axios.delete(route('course.save.delete', id))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        */
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
                        <span className='font-semibold text-sm'>Completed {since(created_at)}</span>
                    </div>
                    {
                    /*
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
                                onClick={deleteSaved}
                                >
                                    Unsave
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
                    */
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseCompleted