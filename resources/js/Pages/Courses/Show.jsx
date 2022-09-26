import React, { useRef, useState } from 'react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import classNames from 'classnames';
import Section from '@/Components/Courses/Section'

const ShowCourse = () =>{
    const [showContent, setShowContent] = useState(true)
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState([])
    console.log('note',note)
    console.log('notes',notes)
    const [like, setLike] = useState(false)
    const [reply, setReply] = useState(false)
    const video = useRef(null)
    function time(){
        console.log(video.current.currentTime)
        video.current.currentTime = 5
    }
    function jump(i){
        video.current.currentTime = i
    }
    const [tab, setTab] = useState(1)
    function tabClick(i){
        setTab(i)
    }

    function submitQuote(e){
        e.preventDefault()
        console.log(note)
        const keepNotes = [...notes]
        //keepNotes.push(note)
        setNote('')
        setNotes(keepNotes.concat(note))
    }
    function keyDown(e){
        if(e.key === 'Enter'){
            if(e.shiftKey) return
            submitQuote(e)
        }
    }

    const content = classNames('relative p-4 h-full bg-lightGray hidden ',{
        'w-1/4 lg:block' : showContent,
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
    return(
        <div className='w-full h-full flex items-stretch'>
            <div className={content}>
                <h1 className='font-bold text-xl'>Contents</h1>
                <Section />
                <div className='w-full bg-white p-2 rounded flex justify-between shadow-sm my-2'>
                    <div><span className='font-semibold text-sm'>2. New Mindsets for a New Era of Work</span></div>
                    <div className=''><span></span><Icon name='cheveron-down' className='w-5 h-5'/></div>
                </div>
                <div className='w-full bg-white p-2 rounded flex justify-between shadow-sm my-2'>
                    <div><span className='font-semibold text-sm'>3. Commit to People and Relationships</span></div>
                    <div className=''><span></span><Icon name='cheveron-down' className='w-5 h-5'/></div>
                </div>
            </div>
            <div className='w-full flex-1 h-full bg-white p-6 overflow-auto relative'>
            <div
                    onClick={()=>setShowContent(!showContent)}
                    className='content-toggle'
                    >
                    <Icon  name='cheveron-left' className='w-5 -ml-0.5 fill-current' />
                </div>
            <video 
            ref={video}
            controls
            onEnded={() => console.log('Ended video')}
            //autoPlay
            className='w-full rounded'>
                <source src="/videos/1621626043674.mp4"
                        type="video/mp4"/>
                Sorry, your browser doesn't support embedded videos.
            </video>
            <div className='my-3'>
                <h1 className='title'>Leadership Mindsets</h1>
            </div>
            <div className='flex w-full justify-center px-2 font-semibold border-b'>
                <TabElement label="Overview" value={0} />
                <TabElement label="Contents" value={4} responsive/>
                <TabElement label="Q&A" value={1} />
                <TabElement label="Notebook" value={2} />
                <TabElement label="Transcript" value={3} />
            </div>
            <div>
                {
                    tab == 0 &&
                    <div className='w-full max-w-5xl mx-auto py-4 flex flex-wrap'>
                        <div className='w-full max-w-xl h-full p-4'>
                            <div>
                                <h2 className='text-lg font-bold'>Course details</h2>
                                <p className='description'>Mindset has a huge performance impact—but leaders rarely stop to see how they can intentionally change their mindsets to get better results. Discover the transformative power your mindset can have on your leadership style and find out how you can identify, grow, and put new mindsets into work. Together with Stanford University, organizational psychologist Sesil Pir has studied how frames of reference impact relationships and outcomes and how successful leaders adapt their thought patterns to improve employee engagement, drive meaning across the organization, and promote life-long learning. This short course can help you leverage new findings to transform your own mindset and experience—and inspire new mindsets in others while driving innovation and sustainable business development results.</p>
                                
                                <div className='mt-4'>
                                    <h2 className='font-bold text-lg'>Skills covered</h2>
                                </div>
                                <ul className='flex flex-wrap'>
                                    <li className='p-2 rounded-full border text-sm'>
                                        Transformational Leadership
                                    </li>
                                </ul>
                                <div className='mt-4'>
                                    <h2 className='font-bold text-lg'>Learner reviews</h2>
                                </div>
                                <div>
                                    <div className='border my-4'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 p-4 h-full md:border-l'>
                            <h2 className='font-bold mb-3'>Related courses</h2>
                            <div className='flex pb-4 border-b '>
                                <div className='w-32 relative'>
                                    <img src='/img/thumbnails/excel.jpeg' className='w-full'/>
                                    <span className='absolute bottom-0 right-0 bg-black bg-opacity-60 font-semibold text-white text-xs p-0.5'>1h 13 min</span>
                                </div>
                                <div className='p-2'>
                                    <p className='font-bold text-sm'>Excel 2022 Essential Training</p>
                                    <div className='flex justify-between'>
                                        <p className='text-xs text-gray-500'>8,612 learners</p>
                                    </div>
                                 </div>
                            </div>
                            <div className='flex pb-4 border-b '>
                                <div className='w-32 relative'>
                                    <img src='/img/thumbnails/excel.jpeg' className='w-full'/>
                                    <span className='absolute bottom-0 right-0 bg-black bg-opacity-60 font-semibold text-white text-xs p-0.5'>1h 13 min</span>
                                </div>                                <p className='p-2 font-bold'>Excel 2022 Essential Training</p>
                            </div>
                            <div className='flex pb-4 border-b'>
                                <div className='w-32 relative'>
                                    <img src='/img/thumbnails/excel.jpeg' className='w-full'/>
                                    <span className='absolute bottom-0 right-0 bg-black bg-opacity-60 font-semibold text-white text-xs p-0.5'>1h 13 min</span>
                                </div>
                                <p className='p-2 font-bold'>Excel 2022 Essential Training</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    tab == 1 &&
                    <div className='w-full py-4'>
                        <div className='max-w-3xl mx-auto'>
                            <div className='shadow  rounded p-4'>
                                <p>Ask here to share with learners, experts and others</p>
                                <div className='text-right'>
                                    <button className='bg-orange text-white p-1 px-4'>Ask</button>
                                </div>
                            </div>
                        <p className='text-xs mt-4'>Looking for technical assistance (e.g. downloading certificates)? Visit Learning Help</p>

                        </div>
                        <div className='max-w-3xl mx-auto'>
                            <div>

                            </div>
                            <div className='border my-4 bg-gray-100'>
                                <div className='flex px-4 py-2 bg-white'>
                                    <div className='w-8 h-8 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                                        <Icon name="user" className='w-full fill-current'/>
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                    <p className='text-sm text-black'>Alanna Jackson</p>
                                    <p className='text-xs'>Sales manager</p>
                                    <p className='text-xs'>1mo</p>
                                    </div>
                                </div>
                                <div className='border-b pb-1 bg-white px-4 py-2'>
                                    <p className='text-sm'>How can we sustain higher productivity in work environment where some colleagues have fixed mindset?</p>
                                    <p className='text-xs text-gray-500'>From the video: <span className='text-yellow'>Connect to improve consciousness in the work environment (00:32)</span></p>
                                    <p className='text-xs'>3 Likes &#8226; 2 Answers</p>
                                </div>
                                <div className='flex bg-white px-4 py-2 text-black'>
                                    <div className='flex items-center mr-2 cursor-pointer' onClick={() => setLike(!like)}>
                                        <Icon className='w-3.5 h-3.5 fill-current mr-1' name={`${like == true ? 'thumbs-up' : 'thumbs-up-fill'}`}/>
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
                                        <div className='flex px-4 py-2'>
                                            <div className='w-8 h-8 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                                                <Icon name="user" className='w-full fill-current'/>
                                            </div>
                                            <div className='flex-1'>
                                                <textarea  className='w-full'/>
                                            </div>
                                        </div>
                                    }
                                    <div className='flex px-4 py-2'>
                                        
                                        <div className='w-8 h-8 rounded-full p-2 bg-gray-200 mr-2 text-white'>
                                            <Icon name="user" className='w-full fill-current'/>
                                        </div>
                                        <div className='text-sm text-gray-500'>
                                        <p className='text-sm text-black'>Patricia Lanzon</p>
                                        <p className='text-xs'>Creative Director</p>
                                        <p className='text-xs'>3w</p>
                                        <p className='text-sm text-black'>integrate, pay attention to influence, be open to emerging opportunities which help to improve the productivity of fixed mindset</p>
                                        <div className='flex py-2 text-black'>
                                            <div className='flex items-center mr-2'>
                                                <Icon className='w-3.5 h-3.5 fill-current mr-1' name='thumbs-up'/>
                                                <span className='text-sm'>Like</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <Icon className='w-3.5 h-3.5 fill-current mr-1' name='comment'/>
                                                <span className='text-sm'>Answer</span>
                                            </div>
                                        </div>
                                        <p className='text-xs'>3 Likes</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <p className='description'>Questions.</p>
                    </div>
                }

                {
                    tab == 2 &&
                    <div className='max-w-3xl mx-auto py-4'>
                        <div>
                        <form onSubmit={submitQuote}>
                        <textarea
                        className='w-full border'
                        value={note} 
                        onChange={(e) => setNote(e.target.value)}
                        onKeyDown={(e) => keyDown(e)}
                        placeholder='Type your note here to save for later...'/>
                        </form>
                        </div>
                        <div className='flex justify-between'>
                            <p className='description'>{notes.length} Notes taken</p>
                            <p className='description'>Press Enter to save</p>
                        </div>
                        <div className='mt-4'>
                        <div className='font-bold bg-gray-200 p-1'>1. Leadership and the Power of Mindsets</div>
                            {notes.map((note, i) =>{
                                return(
                                    <div key={i}>
                                        <p className='font-bold pl-2'>Improve your mindset to shift your work experience (00:14)</p>
                                        <div className='flex '>
                                            <span>{note} </span>
                                        </div>
                                        <div className='w-full text-right'>
                                            <button className='px-2 text-orange'>Edit</button>
                                            |
                                            <button className='px-2 text-orange'>Delete</button>
                                        </div>
                                    </div>
                                )
                            })}
                            <div>
                                        <p className='font-bold pl-2 text-yellow hover:underline'>Improve your mindset to shift your work experience (00:14)</p>
                                        <div className='flex text-gray-600'>
                                            <span className='text-sm'>Here is my note content </span>
                                        </div>
                                        <div className='w-full text-right'>
                                            <button className='px-2 text-orange'>Edit</button>
                                            |
                                            <button className='px-2 text-orange'>Delete</button>
                                        </div>
                                    </div>
                        </div>
                    </div>
                }
                {
                    tab == 3 &&
                    <div className='w-full py-4'>
                        <div className='max-w-3xl mx-auto'>
                            <div className='leading-relaxed text-gray-500'>
                                <span  onClick={() => jump(0)} className='cursor-pointer mx-1 relative hover:underline group hover:text-black'>- Are you looking to launch a business <div className='absolute toptranscipt -top-8 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 text-white px-2 opacity-100 group-hover:opacity-100 group-hover:block hidden'><div>Jump to 0:00</div></div></span>
                                <span onClick={() => jump(2)} className='mx-1 relative cursor-pointer hover:underline'>but you don't know where to start? </span>
                                <span onClick={() => jump(4)} className='mx-1 cursor-pointer hover:underline'>Are you concerned about some of the risks you might face </span>
                                 in getting your business off the ground? How do you define your product or your service, and then sell it to customers in a way that they'll care about? How do you run the operations such that you can support that business, as well as managing a lot of the administrative functions of your organization? A business plan is a great way to plan for launching your business, as well as accounting for and planning for some of those risks you might face. I'm Mike Figliuolo. I'm the managing director at thoughtLEADERS. And I consult firms all around the world on how to do exactly this. I've also used this same exact process when I launched my business 10 years ago. Look, creating a business plan doesn't have to be an intimidating process. It's really straightforward with some clear-cut components that I'll walk you through step-by-step. So let's dive in.
                            </div>
                        </div>
                    </div>
                }

            </div>
            </div>
        </div>
        
    )
}

ShowCourse.layout = page => <Layout title="Course" children={page} />;


export default ShowCourse;