import React from 'react'

const Card = ({className}) => {
    return(
        <div className={`bg-white rounded-lg p-4 w-full md:w-1/4 mx-2 ${className}`}>
            <div className='relative'>
                <img src='/img/thumbnails/sales.jpeg' className='w-full' />
            </div>
            <h4 className='font-semibold my-2'>Develop a High-Performance Mindset</h4>
            <p className='text-sm text-gray-500'>Released Sep 20,2022</p>
        </div>
    )
}

export default Card