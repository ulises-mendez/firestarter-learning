import React, { useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import Icon from '@/Components/Icon'
import classNames from 'classnames'


const Dropdown = ({index, item, last,}) =>{
    console.log(index)
    const { course } = usePage().props;
    const [open, setOpen] = useState(index || false)
    const {lessons} = item
    return(
        <div className={`${last == true ? '' : 'border-b'}`}>
        <button onClick={() => setOpen(!open)} className='w-full h-full flex p-2 justify-between'>
            <div className='flex-1 text-left'>
                <span className='font-semibold text-sm'>{item.title}</span>
            </div>
            <Icon name='cheveron-down' className='w-6'/>
        </button>
        {
        open &&
        <div>
            {
                lessons.map(
                    (lesson, i) => {
                        const isActive = route().current('course.lesson', [course.slug, lesson.slug ])
                    return(
                        <div key={i} className={`border-gray-900  ${isActive ? 'bg-orange bg-opacity-20' : 'hover:bg-gray-200' }`}>
                            {
                                isActive ?
                                <div className='border-l-2 border-orange flex items-center p-2 select-none'>
                                    <button  className='py-2 mr-2 text-orange'>
                                    <Icon name={lesson.premium ? 'lock' : 'play'} className='w-3 h-3 fill-current'/>
                                    </button>
                                    <div>
                                        <p className='text-sm'>{lesson.title}</p>
                                        <p className='text-xs text-gray-500'>{lesson.duration}</p>
                                    </div>
                                </div>
                                :
                                <InertiaLink
                                className='flex items-center p-2'
                                href={route('course.lesson', [course.slug, lesson.slug])}
                                >
                                    <button  className='py-2 mr-2'>
                                    <Icon name={lesson.premium ? 'lock' : 'play-linear'} className='w-3 h-3'/>
                                    </button>
                                    <div>
                                        <p className='text-sm'>{lesson.title}</p>
                                        <p className='text-xs text-gray-500'>{lesson.duration}</p>
                                    </div>
                                </InertiaLink>
                            }
                            
                        </div>
                    )
                })
            }
        </div>
        }
        </div>
    )
}

export default Dropdown