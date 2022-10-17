import React from 'react'

const Topic = ({text}) => {
    return(
        <div className='p-3 border border-black rounded-full mr-2 my-1'>
            <span className='text-sm'>{text}</span>
        </div>
    )
}

export default Topic