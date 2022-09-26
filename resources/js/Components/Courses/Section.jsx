import React, { useState } from 'react'
import Icon from '@/Components/Icon'
import classNames from 'classnames'

const Section = () => {
    const [show, setShow] = useState(true)
    const classes = classNames('',{
        'block' : show,
        'hidden' : !show
    })

    return(
        <div className='w-full bg-white p-2 rounded shadow-sm my-2 select-none'>
            <div className='flex justify-between hover:underline cursor-pointer' onClick={() => setShow(!show)}>
                <div><span className='font-semibold text-sm'>1. Leadership and the Power of Mindsets</span></div>
                <div className=''><span></span><Icon name='cheveron-down' className='w-5 h-5'/></div>
            </div>
            <div><p className='text-xs'>1/3 | 5m</p></div>
            <div className={classes}>
                <div className='flex my-1 bg-orange text-white p-1 rounded-sm hover:underline'>
                    <div className='mr-2 mt-1'><div className='w-4 h-4 border rounded-full bg-white text-orange flex items-center justify-center'><Icon name='check' className='w-2 h-2 fill-current' /></div></div>
                    <div className='text-sm'>
                        <p>Improve your mindset to shift your work experience</p>
                        <p className='text-xs '>1m 16s</p>
                        </div>
                </div>
                <div className='flex my-1 p-1 rounded-sm cursor-pointer hover:bg-darkGray hover:underline'>
                    <div className='mr-2 mt-1'><div className='w-4 h-4 border rounded-full bg-lightGray'></div></div>
                    <div className='text-sm'>
                        <p>How mindsets trigger leadership styles</p>
                        <p className='text-xs text-gray-500'>2m 36s</p>
                        </div>
                </div>
                <div className='flex my-1 p-1 rounded-sm cursor-pointer hover:bg-darkGray hover:underline'>
                    <div className='mr-2 mt-1'><div className='w-4 h-4 border rounded-full bg-lightGray'></div></div>
                    <div className='text-sm'>
                        <p>Chapter Quiz</p>
                        <p className='text-xs text-gray-500'>2 questions</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Section