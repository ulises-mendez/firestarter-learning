import React, {useContext, useState} from 'react'
import Rate from '@/Components/Courses/Rate'
import Icon from '@/Components/Icon'
import { usePage } from '@inertiajs/inertia-react'
import { Context } from '@/Components/Courses/Context'
import axios from 'axios'

export default ({review, index}) =>{
    const { auth } = usePage().props
    const { reviewsData, setReviewsData } = useContext(Context)
    const {user, content, rate} = review
    const login = auth.user == null

    function liked(){
        const prevReviews = [...reviewsData]
        prevReviews[index].like = !prevReviews[index].like

        setReviewsData(prevReviews)
        
        const formData = new FormData()
        formData.append('review_id',review.id)
        axios.post(route('course.reaction_review', review.id), formData)
        .then(res => {
            const prevReviews = [...reviewsData]
            const like = res.data.liked
            prevReviews[index].like = like
            setReviewsData(prevReviews)
        })

        .catch(err => console.error(err))
    }
    return(
        <div className='border w-full rounded-lg p-4 flex my-4'>
            <div>
                <div className='w-12 h-12 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                    <Icon name="user" className='w-full fill-current'/>
                </div>
            </div>
            <div className='mb-2'>
                <div className='mb-4'>
                    <p className='font-semibold mt-2'>{user}</p>
                </div>
                <Rate rate={rate}/>
                <div className='my-4'>
                    <p className='text-sm'>{content}</p>
                </div>
                {
                !login &&
                <div className='flex'>
                    <div className={`flex items-center mr-2 cursor-pointer ${review.like == true && 'text-orange'}`} onClick={liked}>
                        <Icon className={`w-3.5 h-3.5 fill-current mr-1 `} name={`${review.like == true ? 'thumbs-up-fill' : 'thumbs-up'}`}/>
                        <span className='text-sm'>Helpful</span>
                    </div>
                    <span className='mx-2'>&#8226;</span>
                    <div className='flex items-center mr-2 cursor-pointer' >
                        <span className='text-sm'>! Report</span>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}