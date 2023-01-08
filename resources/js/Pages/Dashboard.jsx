import React, { useRef, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import durationFormat from '@/lib/durationFormat'

import Layout from '@/Layouts/Auth'
import Icon from '@/Components/Icon'
import Section from '@/Components/Courses/Section'
import Highlights from '@/Components/Courses/Highlights'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import timeFormat from '@/Components/TimeFormat'
import Carousel from '@/Components/Courses/Carousel';
import { courses } from '@/data/courses'
import Modal from 'react-modal'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import Topic from '@/Components/Courses/Topic'

Modal.setAppElement('*')

const Dashboard = () =>{
    const { active_courses, completed_courses, highlighted, name, subscription, personal_title, goal, topics } = usePage().props
    const videoContainer = useRef(null)
    const videoRef = useRef(null)
    const [careerModal, setCareerModal] = useState(false)
    const [hasGoal, setHasGoal] = useState(goal !== null)
    const [careerData, setCareerData] = useState({
        type: goal?.type || 1,
        description: goal?.description || '',
    })
    console.log(hasGoal,careerData)
    const [stepCareer, setStepCareer] = useState(0)
    const [errors, setErrors] = useState({})
    const [showActive, setShowActive] = useState(true)
    const [showCompleted, setShowCompleted] = useState(true)
    const [showContent, setShowContent] = useState(true)
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState([])


    const [tab, setTab] = useState(1)
    function tabClick(i){
        setTab(i)
    }


    function submitGoal(){
        const formData = new FormData()
        formData.append('type', careerData.type)
        formData.append('description', careerData.description)
        axios.post(route('user.career'), formData)
        .then(res => {
            setCareerData({
                type: res.data.type,
                description: res.data.description
            })
            setHasGoal(true)
            setCareerModal(false)
        })
        .catch(err => console.log(err))
    }

    const content = classNames('bg-lightGray h-full hidden overflow-y-auto p-4 relative',{
        'w-1/3 lg:block' : showContent,
        'w-0': !showContent
    })

    const TabElement = ({label, value, responsive}) =>{
        const classses = classNames('p-2 mx-2 select-none cursor-pointer border-b-2 overflow-hidden',{
            'text-orange border-orange' : value == tab,
            'border-white' : value !== tab,
            'md:hidden' : responsive
        })
        return(
            <div className={classses} onClick={() => tabClick(value)}>{label}</div>
        )
    }


    function setType(x)
    {
        setCareerData({
            type: x,
            description: x == 1 ? '' : careerData.description
        })
    }
    function openGoalModal()
    {
        setCareerModal(true)
    }
    function backCareerModal()
    {
        setCareerData({
            ...careerData,
            type: 1
        })
        setStepCareer(0)
    }
    function closeCareerModal()
    {
        setCareerModal(false)
        setCareerData({
            type: 1,
            description: '',
        })
        setStepCareer(0)
    }
    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setCareerData({
            ...careerData,
            [target]: value
        })
    }
    function showAll(){
        setShowActive(true)
        setShowCompleted(true)
    }
    function showActiveCourses(){
        setShowActive(true)
        setShowCompleted(false)
    }
    function showCompletedCourses(){
        setShowActive(false)
        setShowCompleted(true)
    }
    return(
        <div className='w-full h-full flex items-stretch'>
            <div className={content}>
                <div className='p-2'>
                    <h1 className='font-bold text-xl'>Courses</h1>
                </div>
                <div className='flex'>
                    <button onClick={showAll} className={`border-orange mr-2 px-2 ${showActive && showCompleted == true ? 'border-b-2 text-orange font-semibold' : ''}`}>
                        <span>All</span>
                    </button>
                    <button onClick={showActiveCourses} className={`border-orange mr-2 px-2 ${ showCompleted == false ? 'border-b-2 text-orange font-semibold' : ''}`}>
                        <span>Active</span>
                    </button>
                    <button onClick={showCompletedCourses} className={`border-orange mr-2 px-2 ${ showActive == false ? 'border-b-2 text-orange font-semibold' : ''}`}>
                        <span>Completed</span>
                    </button>
                </div>
                
                {
                    showActive &&
                    <>
                    {
                        showCompleted !== false &&
                        <div className='text-gray-500 my-2 font-semibold text-sm'>
                            Active
                        </div>
                    }
                    {
                    active_courses.map(
                        (course, i) => {

                            const left = course.time - course.played
                            const percent = (course.played / course.time * 100).toFixed(2)
                        return(
                        <InertiaLink href={route('course.show', course.slug)} key={i} className='w-full bg-white p-2 flex justify-between shadow-sm my-2 rounded-lg'>
                            <div className='w-32 h-20 rounded-lg overflow-hidden bg-black'><img src={course.thumbnail} className='object-cover'/></div>
                            <div className='flex-1 p-2 px-4 text-left flex flex-col justify-between'>
                                <h3 className='font-semibold text-sm'>{course.title}</h3>
                                <div className='w-full max-w-xs flex items-center'>
                                    <div className="flex-1 bg-gray-200 rounded-full h-1.5 ">
                                        <div className="bg-orange h-1.5 rounded-full" style={{ width: `${percent}%`}}></div>
                                    </div>
                                    <span className='text-xs ml-3'>{durationFormat(left)} left</span>
                                </div>
                            </div>
                        </InertiaLink>
                        )
                        }
                    )
                    }
                    {
                        active_courses.length === 0 &&
                        <h3 className='text-gray-400'>You don’t have any courses in progress.
                        </h3>
                    }
                    </>
                }
                
                {
                    showCompleted &&
                    <>
                    {
                        showActive !== false &&
                        <div className='text-gray-500 my-2 font-semibold text-sm'>
                            Completed
                        </div>
                    }
                    
                    {
                    completed_courses.map(
                        (course, i) =>
                        <InertiaLink href={route('course.show', course.slug)} key={i} className='w-full bg-white p-2 flex justify-between shadow-sm my-2 rounded-lg'>
                            <div className='w-32 h-20 rounded-lg overflow-hidden bg-black'><img src={course.thumbnail} className='object-cover'/></div>
                            <div className='flex-1 p-2 px-4 text-left flex flex-col justify-between'>
                                <h3 className='font-semibold text-sm'>{course.title}</h3>
                            </div>
                        </InertiaLink>
                    )}
                    {
                        completed_courses.length === 0 &&
                        <h3 className='text-gray-400'>You don’t have any completed courses - yet.
                        </h3>
                    }
                    </>
                }
                
            </div>
            <div className='w-full flex-1 h-full bg-white p-6 overflow-auto relative'>
            <div className='my-3'>
                <h1 className='title mb-4'>Hello, {name}</h1>
                <Highlights courses={highlighted}/>
                <div className='flex flex-wrap'>
                <div className='w-full border-2 border-orange rounded-lg p-12 md:w-1/2 lg:max-w-xs flex flex-col items-center justify-center m-2 relative'>
                    {
                        subscription &&
                        <>
                            <span className='bg-orange text-orange bg-opacity-10 px-4 rounded-full  mb-4 text-sm'>Current plan</span>
                            <div className='text-center'>
                                <h3 className='font-semibold text-orange text-xl'>Premium User</h3>
                                <p>Develop your skills with <span className='font-bold'>FIRESTARTER</span> Learning	</p>
                                <InertiaLink href={route('settings.billing')}>
                                    <button className='bg-orange my-2 rounded p-2 text-white font-semibold'>
                                        Billing Info
                                    </button>
                                </InertiaLink>
                            </div>
                        </>
                    }
                    {
                        !subscription &&
                        <>
                        <div className='mb-6 font-semibold'>
                        Let's upgrade to PRO plan
                        </div>
                        <a href='/plans/premium'>
                        <button className='w-full bg-orange text-white text-center font-semibold p-4 rounded-lg'> Get started</button>
                        </a>
                        </>
                    }
                    
                </div>
                <div className='bg-gray-100 rounded-lg p-12 w-full md:flex-1 flex flex-col m-2'>
                    <div className='flex w-full justify-between items-center'>
                        <div className='mb-6 font-semibold'>
                            {name}
                            <p className='text-gray-500 text-sm'>{personal_title ? personal_title : 'Add personal title'}</p>
                            <InertiaLink href={route('curriculum')} className='text-xs text-orange hover:underline'>Edit CV</InertiaLink>
                        </div>
                        <div className='bg-white w-20 rounded-lg overflow-hidden flex'>
                            {/*
                            <img src='/img/pic-01.png' className='w-full'/>
                            */}
                        </div>

                    </div>
                    <div className='text-left mb-4'>
                        <h4 className='font-semibold text-gray-500'>Career goals</h4>
                        {
                            hasGoal == false ?
                            <>
                                <p className='font-semibold'>Personalize your learning experience towards your career goals</p>
                                <p className='text-sm mb-4'>Let us know your career goals. Your response is private to you.</p>
                                <button className='btn-orange' onClick={openGoalModal}>Set career goal</button>
                            </>
                            :
                            careerData.type == 1 ?
                            <p className='text-lg font-semibold'>My career goal is to grow and advance.</p>
                            :
                            <p>My career goal is to become a {careerData.description}.</p>
                        }
                       {
                            hasGoal == true ?
                            <button className='text-xs font-semibold text-orange' onClick={openGoalModal}>Edit</button>
                            :
                            null
                       } 
                    </div>
                    {
                    /*
                    <div className='flex flex-wrap items-end'>
                        <div className='flex items-baseline mr-20'>
                            <h4 className='font-semibold text-sm text-gray-500 pr-4'>In progress</h4>
                            <p className='font-bold text-lg'>8</p>
                        </div>
                        <div className='flex items-baseline'>
                            <h4 className='font-semibold text-sm text-gray-500 pr-4'>Completed</h4>
                            <p className='font-bold text-lg'>2</p>
                        </div>
                    </div>
                    */
                    }
                    
                </div>
                </div>
                <div className='my-8'>
                    <h2 className='mb-2 font-semibold text-lg'>Topics followed</h2>
                    <div className='flex flex-wrap'>
                        {topics.map((topic, i) => 
                            <Topic id={topic.id} key={i} text={topic.title} />)
                        }
                    </div>
                    
                </div>
                
            </div>
            </div>
            <Modal
            isOpen={careerModal}
            onRequestClose={closeCareerModal}
            className="modal-collections"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New category"
            >
                <div className='w-full max-w-2xl bg-orange text-white p-3 flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Set career goals</h2>
                    <button onClick={closeCareerModal} className='cursor-pointer mr-2'>
                        <Icon name='close' className='w-3 h-3 fill-white'/>
                    </button>
                </div>
                {
                    stepCareer === 0 ?
                    <div className='bg-white p-4'>
                        <h2 className='font-semibold text-lg'>What is your career goal for the next 6 to 12 months?</h2>
                        <div className='flex '>
                            <div className='w-1/2 p-2'>
                                <button className={`border-2 rounded-lg p-2 w-full h-full ${careerData.type == 1 ? 'border-orange' : ''}`} onClick={() => setType(1)}>
                                    <img src='/svg/grow.svg' className='w-24 mx-auto my-4'/>
                                    <p>Grow and advance in my current role</p>
                                    </button>
                            </div>
                            <div className='w-1/2 p-2'>
                                <button className={`border-2 rounded-lg p-2 w-full h-full ${careerData.type == 2 ? 'border-orange' : ''}`} onClick={() => setType(2)}>
                                    <img src='/svg/transition.svg' className='w-24 mx-auto my-4'/>
                                    <p>Transition into a new role</p>
                                    </button>
                            </div>
                        </div>
                    </div>
                    : 
                    <div className='bg-white p-4'>
                        <h2 className='font-semibold text-lg mb-2'>Which role do you want to transition to?</h2>
                        <p className='text-gray-500'>We’ll use this information to connect you with the right learning content and job opportunities. Your response is private to you.</p>
                        <div className='text-left my-4'>
                            <InputLabel forInput="description" value="Job Title"/>
                            <TextInput
                                className="mt-1 block w-full"
                                handleChange={handleChange}
                                name="description"
                                placeholder="Ex. Sales Manager"
                                type="text"
                                value={careerData.description}
                            />
                            <InputError message={errors.title} className="mt-2"/>
                        </div>
                    </div>
                }
                <div className='flex justify-between bg-gray-50 p-2'>
                    
                {
                        stepCareer == 0 ?
                        <>
                        <button className='btn-black' onClick={closeCareerModal}>Not now</button>
                        {
                        careerData.type == 2 ?
                        <button className='btn-orange' onClick={() => setStepCareer(1)}>Next</button>
                        :
                        <button className='btn-orange'
                        onClick={submitGoal}
                        >Save</button>
                        }
                        </>
                        :
                        <>
                        <button className='btn-black' onClick={backCareerModal}>Back</button>
                        <button className='btn-orange'
                        onClick={submitGoal}
                        >Save</button>
                        </>
                    }
                    
                </div>
            </Modal>
        </div>
        
    )
}

Dashboard.layout = page => <Layout title="Dashboard" children={page} />;


export default Dashboard;