import React, {useState} from 'react'
import Rate from '@/Components/Courses/Rate'
import Icon from '@/Components/Icon'

export default ({name, text, rate}) =>{
    const [like, setLike] = useState(false)
    console.log(like)
    return(
        <div className='border w-full rounded-lg p-4 flex my-4'>
            <div>
                <div className='w-12 h-12 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                    <Icon name="user" className='w-full fill-current'/>
                </div>
            </div>
            <div className='mb-2'>
                <div className='mb-4'>
                    <p className='font-semibold mt-2'>{name}</p>
                </div>
                <Rate rate={rate}/>
                <div className='my-4'>
                    <p>{text}</p>
                </div>
                <div className='flex'>
                    <div className='flex items-center mr-2 cursor-pointer' onClick={() => setLike(!like)}>
                        <Icon className='w-3.5 h-3.5 fill-current mr-1' name={`${like === true ? 'thumbs-up-fill' : 'thumbs-up'}`}/>
                        <span className='text-sm'>Helpful</span>
                    </div>
                    <span className='mx-2'>&#8226;</span>
                    <div className='flex items-center mr-2 cursor-pointer' onClick={() => setLike(!like)}>
                        <Icon className='w-3.5 h-3.5 fill-current mr-1' name={`${like === true ? 'thumbs-up-fill' : 'thumbs-up'}`}/>
                        <span className='text-sm'>Report</span>
                    </div>
                </div>
            </div>
        </div>
    )
}