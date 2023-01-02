import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Icon from '@/Components/Icon'
import axios from 'axios'

export default({collection, course}) => {
    const [ status,setStatus ] = useState(collection.status || false)
    
    function toggleStatus()
    {
        setStatus(!status)
        const formData = new FormData()
        formData.append('collection', collection.id)
        formData.append('course', course)
        axios.post(route('course.collection'), formData)
        .then(res=>{
            setStatus(res.data.status)
        })
        .catch(err => console.error(err))
    }
    return(
        <div className='bg-white border-b p-4 flex-1 flex items-center justify-between overflow-y-auto'>
            <div className='flex'>
                <div className='bg-gray-100 w-20'>
                    <img src={collection.thumbnail} className='w-full'/>
                </div>
                <div className='px-2'>
                    <p className='font-semibold'>{collection.title}</p>
                </div>
            </div>
            <div>
                <div>
                {
                    status == true ?
                    <button onClick={toggleStatus} className='text-orange'>Remove</button>
                    :
                    <button onClick={toggleStatus} className='text-black flex items-center'>
                        <Icon name='plus' className='mr-2 w-3 h-3'/>
                        <span>Add</span>
                    </button>
                }
                </div>
            </div>
        </div>
    )
}