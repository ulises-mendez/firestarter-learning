import React, { useState, useContext } from 'react'
import Icon from '@/Components/Icon'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import timeFormat from '@/Components/TimeFormat'
import { Context } from '@/Components/Courses/Context'
import axios from 'axios'
import timeAgo from '@/lib/timeAgo'

export default({data, slug, index}) =>{
    const { csrf } = usePage().props
    const { quotes, setQuotes } = useContext(Context)
    const [likes, setLikes] = useState(data.likes || 0)
    const [like,setLike] = useState(data.user_like || false)
    const [reply,setReply] = useState(false)
    const [menu, setMenu] = useState(false)
    const [answer, setAnswer] = useState('')
    console.log(data)
    function saveAnswer()
    {
        console.log(index)

        setReply(false)
        setAnswer('')

        axios.post(route('quote.answer'),{
            _token: csrf,
            course_id: 0,
            chapter_id: 0,
            lesson_id: 0,
            content:answer,
            time:null,
            reply_to: data.id
        })
        .then(res => {
                const prevQuotes = [...quotes]
                const quote = res.data.quote
                prevQuotes[index] = quote
                setQuotes(prevQuotes)
        })
        .catch(err => console.log(err))
    }
    
    function handleLike()
    {
        axios.post(route('quote.like'),{
            _token: csrf,
            question: data.id,
        })
        .then(res => {
                    const status = res.data.like
                    setLike(status)
                    const likesN = Number(likes)
                    setLikes(status === true ? likesN + 1 : likes - 1)
                    })
        .catch(err => console.log(err))
    }

    return(
    <div className='border my-4 bg-gray-100'>
        <div className='flex bg-white justify-between'>
            <div className='flex px-4 py-2 bg-white'>
                <div className='w-8 h-8 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                    <Icon name="user" className='w-full fill-current'/>
                </div>
                <div className='text-sm text-gray-500'>
                <p className='text-sm text-black'>{data.user}</p>
                <p className='text-xs'>Sales manager</p>
                <p className='text-xs'>{timeAgo(data.created_at)}</p>
                </div>
            </div>
            <div className=" bg-white relative text-right p-4">
                <button 
                onClick={() => setMenu(true)}>
                    <Icon name="dots" className='w-4'/>
                </button>
                <div>
                    <div 
                    onClick={() => setMenu(false)}
                    className={`origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${menu == true ? '' : 'hidden'}`}>
                        
                        <div className="w-full text-left">
                            <p
                            className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white">
                                Report
                            </p>
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
        
        <div className='border-b pb-1 bg-white px-4 py-2'>
            <p className='text-sm'>{data.content}</p>
            <p className='text-xs text-gray-500'>From the video: 
                <InertiaLink href={route('course.lesson', [slug, data.slug ])} className='text-yellow'> {data.lesson} ({timeFormat(data.time)})</InertiaLink>
            </p>
            <p className='text-xs'>{likes} Likes &#8226; {data.replies_count} Answers</p>
        </div>
        <div className='flex bg-white px-4 py-2 text-black'>
            <div className='flex items-center mr-2 cursor-pointer' onClick={handleLike}>
                <Icon className={`w-3.5 h-3.5 fill-current mr-1 ${like && 'fill-orange'}`} name={`${like == false ? 'thumbs-up' : 'thumbs-up-fill'}`}/>
                <span className='text-sm'>Like</span>
            </div>
            <div className='flex items-center cursor-pointer' onClick={() => setReply(!reply)}>
                <Icon className='w-3.5 h-3.5 fill-current mr-1' name='comment'/>
                <span className='text-sm'>Answer</span>
            </div>
        </div>
        <div className='w-full bg-lightGray'>
            {
                reply &&
                <div>
                    <div className='flex px-4 py-2'>
                        <div className='w-8 h-8 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                            <Icon name="user" className='w-full fill-current'/>
                        </div>
                        <div className='flex-1'>
                            <textarea placeholder='Add your answer here' value={answer} onChange={(e)=> setAnswer(e.target.value)} className='w-full'/>
                        </div>
                    </div>
                    <div className='w-full text-right px-4 py-2'>
                        <button className='btn-orange' disabled={answer.length > 1 ? false : true} onClick={saveAnswer} type='button'>Post</button>
                    </div>
                </div>
            }
            {
                data.replies.map((reply, i)=>
                <div key={i} className='flex px-4 py-2 border-t border-gray-200'>
                    <div className='w-8 h-8 rounded-full p-2 bg-gray-200 mr-2 text-white border-b shadow-sm'>
                        <Icon name="user" className='h-full fill-current'/>
                    </div>
                    <div className='text-sm text-gray-500'>
                        <p className='text-sm text-black'>{reply.user}</p>
                        <p className='text-xs'>Creative Director</p>
                        <p className='text-xs'>{timeAgo(reply.created_at)}</p>
                        <p className='text-sm text-black'>{reply.content}</p>
                    </div>
                </div>
            )
            }
        </div>
    </div>
    )
}