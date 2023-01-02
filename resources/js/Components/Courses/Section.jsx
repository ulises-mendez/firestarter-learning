import React, { useState, useMemo } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import Icon from '@/Components/Icon'
import classNames from 'classnames'
import timeFormat from '../TimeFormat'
import msFormat from '@/Components/msFormat'
const Item = ({ link, title, course, user_history, video }) => {
    const completed = user_history
    const isActive = route().current('course.lesson', [course, link ]);
    const classnames = classNames('flex my-1 p-1 rounded-lg hover:underline',{
      'bg-orange text-white': isActive,
      '': !isActive
    })
    const check = classNames('w-4 h-4 border rounded-full flex items-center justify-center',{
        'bg-orange text-white border-orange' : completed,
        'text-orange bg-gray-100' : !completed,
        'border-orange' : isActive,

    })
  
    return (
        <div className={classnames}>
            <InertiaLink href={route('course.lesson', [course, link ])} className='flex'>
                <div className='mr-2 mt-1'>
                    <div className={check}>
                        {
                        user_history == true &&
                        <Icon name='check' className='w-2 h-2 fill-current'/>
                        }
                    </div>
                </div>
                <div className='text-sm'>
                    <p>{title}</p>
                    <p className='text-xs'>{timeFormat(video.time)}</p>
                </div>
            </InertiaLink>
        </div>
    );
}

const Section = ({ data, slug }) => {
    const info = data || { title:'', lessons: [] }
    
    const arrayValues = []

    info.lessons.map(lesson =>
        arrayValues.push(lesson.user_history)
    )

    const sumWithInitial = arrayValues.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    

    const [show, setShow] = useState(true)
    const classes = classNames('',{
        'block' : show,
        'hidden' : !show
    })
    return(
        <div className='w-full bg-white p-2 rounded shadow-sm my-2 select-none'>
            <div className='flex justify-between hover:underline cursor-pointer' onClick={() => setShow(!show)}>
                <div><span className='font-semibold text-sm'>{info.title}</span></div>
                <div className=''><span></span><Icon name='cheveron-down' className='w-5 h-5'/></div>
            </div>
            <div><p className='text-xs'><span className='font-semibold text-xs text-gray-500'>{sumWithInitial}/{info.lessons.length}</span> | {msFormat(info.time)}</p></div>
            <div className={classes}>
                {
                    info.lessons.map((lesson, i)=>
                    <Item key={i} title={lesson.title} link={lesson.slug} course={slug} user_history={lesson.user_history} video={lesson.video}/>
                )
                }

            </div>
        </div>
    )
}

export default Section