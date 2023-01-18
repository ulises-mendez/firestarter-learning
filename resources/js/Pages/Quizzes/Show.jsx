import React, { useRef, useState, useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios'
import Layout from '@/Layouts/Auth'
import Icon from '@/Components/Icon'
import classNames from 'classnames'
import durationFormat from '@/lib/durationFormat'
import Section from '@/Components/Courses/Section'
import Question from '@/Components/Courses/Question'
//import Video from '@/Components/Courses/Video'
import VideoJS from '@/Components/Courses/Video'
import Review from '@/Components/Courses/Review'
import releasedFormat from '@/lib/releasedFormat'
import Note from '@/Components/Courses/Note'
import { usePage, Head, InertiaLink, useForm } from '@inertiajs/inertia-react'
import timeFormat from '@/Components/TimeFormat'
import NotesDropdown from '@/Components/NotesDropdown'
import { Context } from '@/Components/Courses/Context'
import AddCollectionModal from '@/Components/Courses/Collections/AddCollectionModal'
import useTimeout from '@/Components/useTimeout'
import Modal from 'react-modal'
Modal.setAppElement('*')

const QuizQuestion = () =>{
    const { acknowledged, course, question, quiz_question, questions, quiz } = usePage().props
    const { chapters } = course
    const [like, setLike] = useState(course.like ? 1 == true : false || false)
    const [likes, setLikes] = useState(course.likes || 0)
    const [save, setSave] = useState(course.save ? 1 == true : false || false)
    const [saves, setSaves] = useState(course.saves || 0)
    const [modal,setModal] = useState(false)
    const [showContent, setShowContent] = useState(true)
    const {data,setData, errors, post} = useForm({
        course: course.id,
        quiz: quiz.id,
        quiz_question: quiz_question,
        question_id: question.id,
        answer: '',
        option: '',
    })
    function changeOption(e){
        const id = e.target.id
        const value = e.target.value
        setData(values => ({
            ...values,
            answer:value,
            option: id
        }))
    }
    function closeModal(){
        setModal(false)
    }

    const content = classNames('relative p-4 h-full bg-lightGray hidden overflow-y-auto',{
        'w-1/3 lg:block' : showContent,
        'w-0': !showContent
    })

    function submit(e)
    {
        e.preventDefault()
        const slug = course.slug
        const quizId = quiz.id
        
        post(route('quiz.answer', [slug, quizId]))
    }

    function toggleLike()
    {
        //setLikes();
        const formData = new FormData()
        formData.append('course_id',course.id)
        axios.post(route('course.like'), formData)
        .then(res => {
            setLike(res.data.liked)
            setLikes(res.data.likes)
        })
        .catch(error => console.log(error))
    }
    function toggleSaves()
    {
        const formData = new FormData()
        formData.append('course_id',course.id)
        axios.post(route('course.save'), formData)
        .then(res => {
            setSave(res.data.save)
            setSaves(res.data.saves)
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
        <div className='w-full h-full flex items-stretch'>
            <Head title='Quiz' />
            <div className={content}>
                <h1 className='font-bold text-xl'>Contents</h1>
                {
                    chapters.map((chapter, i)=> <Section key={i} data={chapter} slug={course.slug}/>)
                }    
            </div>
            <div className='w-full flex-1 h-full bg-white p-6 overflow-auto relative'>
            <div
                onClick={()=>setShowContent(!showContent)}
                className='content-toggle'
                >
                <Icon  name='cheveron-left' className={`w-5 -ml-0.5 fill-current transition-all duration-500 ${!showContent ? 'rotate-180' : ''}`} />
            </div>
            <div className='border-b'>
                <div className='w-full flex justify-between items-center p-2'>
                    <div>
                        <p className='font-semibold text-sm'>{course.title}</p>
                    </div>
                    <div className='flex'>
                        <div className='flex items-center px-2'>
                            <button 
                                tooltip={like ? 'Liked' : 'Like'}
                                flow='down' 
                                className='p-2 hover:bg-gray-800 rounded-full mr-2'
                                onClick={toggleLike}
                                >
                                <Icon className={`w-4 h-4 fill-current ${like && 'fill-yellow'}`} name={`${like == false ? 'thumbs-up' : 'thumbs-up-fill'}`}/>
                            </button>
                            <p className='text-sm'>{likes}</p>
                        </div>
                        <div className='flex items-center px-2'>
                            <button 
                                tooltip={save ? 'Saved' : 'Save'}
                                flow='down' 
                                className='p-2 hover:bg-gray-800 rounded-full mr-2'
                                onClick={toggleSaves}
                            >
                                <Icon name={`${save == true ? 'bookmark-fill' : 'bookmark'}`} className={`w-4 h-4 fill-current ${save && 'fill-yellow'}`}/>
                            </button>
                            <p className='text-sm'>{saves}</p>
                        </div>
                        <div className='flex items-center pl-2  border-white'>
                            <button tooltip='Add to...' flow='down' onClick={()=> setModal(true)} className='p-2 hover:bg-gray-800 hover:text-white rounded-full mr-2'>
                                <Icon name='plus' className='w-3 h-3 fill-current'/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='my-3 text-center'>
                <h1 className='title'>Quiz Chapter</h1>
            </div>
            <div className='text-sm text-gray-500'>
                Question {quiz_question + 1} of {questions}
            </div>
            <div className='my-4'>
                {
                    question.text
                }
            </div>
            <form onSubmit={submit}>
                {
                    question.options.map(
                        (option, i) =>
                        <div
                        className='border p-2'
                        key={i}>
                            <label
                            className='flex items-center group w-full  checked:bg-slate-400'
                            //htmlFor={option.text}
                            >
                            <input 
                                className='border border-gray-200 mr-2'
                                id={option.id}
                                onChange={(e) => changeOption(e)}
                                type='radio'
                                name='answer'
                                value={option.text}
                            />
                            <p>{option.text}</p>
                            
                            </label>
                            {
                                acknowledged && option.id == acknowledged.id &&
                                <div className='p-2'>
                                {
                                acknowledged.value == 1 ? 
                                <p className='font-semibold text-green-600'>Correct</p> : 
                                <p className='font-semibold text-red-600'>Incorrect</p>
                                }
                                <p>{acknowledged.message}</p>
                                </div>
                            }
                            
                        </div>
                    )
                }
                <div className='mt-4 text-right'>
                    <button disabled={data.answer == '' ? true: false} className='btn-black disabled:opacity-30' type='submit'>Submit</button>
                </div>
            </form>
            </div>
            <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            className="modal-collections"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New category"
            >
                <AddCollectionModal onRequestClose={closeModal}/>
            </Modal>
        </div>
        </div>
    )
}

QuizQuestion.layout = page => <Layout children={page} />;


export default QuizQuestion;