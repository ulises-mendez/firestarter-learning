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
import { usePage, Head, InertiaLink } from '@inertiajs/inertia-react'
import timeFormat from '@/Components/TimeFormat'
import NotesDropdown from '@/Components/NotesDropdown'
import { Context } from '@/Components/Courses/Context'
import AddCollectionModal from '@/Components/Courses/Collections/AddCollectionModal'
import useTimeout from '@/Components/useTimeout'
import Modal from 'react-modal'
Modal.setAppElement('*')

const Lesson = () =>{
    const { transcription, course, lesson, csrf, questions, user_notes, related, reviews, time } = usePage().props
    const { chapters } = course
    const [abortTimeout, setAbortTimeout] = React.useState(true);
    const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
    const [like, setLike] = useState(course.like ? 1 == true : false || false)
    const [likes, setLikes] = useState(course.likes || 0)
    const [save, setSave] = useState(course.save ? 1 == true : false || false)
    const [saves, setSaves] = useState(course.saves || 0)
    const [reviewsData, setReviewsData] = useState(reviews || [])
    const [modal,setModal] = useState(false)
    const [showContent, setShowContent] = useState(true)
    const [question, setQuestion] = useState('')
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState(user_notes || {chapters: [], count:0})
    const [quotes, setQuotes] = useState( questions.data || [])
    const [asking, setAsking] = useState(false)

    const video = useRef(null)

    function closeModal(){
        setModal(false)
    }

    const getNotes = async () =>{
        const res = await axios.get(route('notes',course.slug))
        setNotes(res.data)
    }
    
    const [tab, setTab] = useState(0)
    function tabClick(i){
        setTab(i)
    }

    function submitNote(e){
        e.preventDefault()
        console.log(note)
        console.log(notes)
        const time = playerRef.current.currentTime()
        const chapters = [...notes.chapters]
        //keepNotes.push(note)
        /* SUCCESS
        setNote('')
        setNotes(keepNotes.concat(note))
        */
        axios.post(route('note.store'),{
            _token: csrf,
            course_id: lesson.course_id,
            chapter_id: lesson.chapter_id,
            lesson_id: lesson.id,
            content:note,
            time: time,
        })
        .then(res=>{
            //console.log(res.data)
            setNote('')
            //setNotes({chapters})
            
            console.log(res.data)
            getNotes()
        })
        .catch(function(error){
            console.log(error.response.data.errors)
            
        });
    }
    function submitQuote(e){
        e.preventDefault()
        const time = playerRef.current.currentTime()
        const keepQuotes = [...quotes]
        //keepNotes.push(note)
        /* SUCCESS
        setNote('')
        setNotes(keepNotes.concat(note))
        */
       
        axios.post(route('quote.store'),{
            _token: csrf,
            course_id: course.id,
            chapter_id: lesson.chapter_id,
            lesson_id: lesson.id,
            content:question,
            time:time
        })
        .then(res=>{
            console.log(res.data)
            const newQuote = res.data.quote
            setQuestion('')
            setAsking(false)
            setQuotes([newQuote].concat(keepQuotes))
        })
        .catch(function(error){
            console.log(error.response.data.errors)
        });
        
    }
    function keyDown(e){
        if(e.key === 'Enter'){
            if(e.shiftKey) return
            console.log(playerRef.current.currentTime())
            submitNote(e)
        }
    }

    const content = classNames('relative p-4 h-full bg-lightGray hidden overflow-y-auto',{
        'w-1/3 lg:block' : showContent,
        'w-0': !showContent
    })

    const TabElement = ({label, value, responsive}) =>{
        const classses = classNames('p-2 mx-2 select-none cursor-pointer border-b-2 overflow-hidden text-xs sm:text-sm',{
            'text-orange border-orange' : value == tab,
            'border-white' : value !== tab,
            'md:hidden' : responsive
        })
        return(
            <div className={classses} onClick={() => tabClick(value)}>{label}</div>
        )
    }

    function savePlayed(finished)
    {
        /*
        var formData = new FormData()
        formData.append('time', finished ? 0 : playerRef.current.currentTime())
        formData.append('lesson', lesson.id)
        formData.append('course', course.id)
        if (finished) formData.append('completed', true)
        axios.post(route('lesson.played'), formData)
        */
        Inertia.post(route('lesson.played'), {
            time: finished ? 0 : playerRef.current.currentTime(),
            lesson: lesson.id,
            course: course.id,
            completed: finished ? true : false
        }, {
        onSucess: () => {
            console.log('Saved played lesson')
        }
        })
    }


/// VIDEOJS
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        sources: [{
        src: lesson.video.path,
        }],

    };

    const handlePlayerReady = (player) => {
    playerRef.current = player;
    if(time !== null)
    {
        player.currentTime(time);
        console.log(player.currentTime())

    }
    player.on('ended', function() {
        /*
        axios.post(route('learning.store'),{
            model_type: `App\\Models\\Lesson`,
            model_id: lesson.id
        })
        .then(res => console.log(res.data))
        */
        savePlayed(true)
      });
      player.on('play', function() {
            console.log('play');
            setAbortTimeout(false)
      });
      player.on('pause', function() {
        console.log('pause');
        savePlayed()
        setAbortTimeout(true)
      });
    };

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

    function jump(i){
        playerRef.current.currentTime(i)
    }

    useTimeout(() => {
        //setHasTimeElapsed(true);
        console.log('second')
        savePlayed()

      }, abortTimeout ? null : 5000);


    return(
        <Context.Provider
        value={{ quotes, setQuotes, video, jump, reviewsData, setReviewsData }}
        >
        <div className='w-full h-full flex items-stretch'>
            <Head title={lesson.title} />
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
            <div className='bg-black text-white rounded'>
                <div className='w-full flex justify-between items-center p-2'>
                    <div>
                        <p className='font-semibold text-sm'>{course.title}</p>
                        <p className='text-xs'>{lesson.title}</p>
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
                            <button tooltip='Add to...' flow='down' onClick={()=> setModal(true)} className='p-2 hover:bg-gray-800 rounded-full mr-2'>
                                <Icon name='plus' className='w-3 h-3 fill-white'/>
                            </button>
                        </div>
                    </div>
                </div>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} title={lesson.title}>
                    {
                        lesson.transcription &&
                        <track
                            src={lesson.transcription.path}
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                            default
                        />
                    }
                </VideoJS>
            </div>
            <div className='my-3'>
                <h1 className='title'>{lesson.title}</h1>
            </div>
            <div className='inline-flex w-full justify-center px-2 font-semibold border-b overflow-x-auto'>
                <TabElement label="Overview" value={0} />
                <TabElement label="Contents" value={4} responsive/>
                <TabElement label="Q&A" value={1} />
                <TabElement label="Notebook" value={2} />
                <TabElement label="Transcript" value={3} />
            </div>
            <div>
                {
                    tab == 0 &&
                    <div className='w-full py-4 flex flex-wrap flex-row items-stretch justify-center'>
                        <div className='w-full md:w-3/5 lg:w-2/3 h-full p-4'>
                                <h2 className='text-lg font-bold'>Course details</h2>
                                <p className='description'>{course.description}</p>
                                
                                <div className='mt-4'>
                                    <h2 className='font-bold text-lg'>Skills covered</h2>
                                </div>
                                <ul className='flex flex-wrap'>
                                    {
                                        course.skills.map((skill, i)=>
                                            <InertiaLink href={`/search?keywords=${skill.title}`} key={i} className='p-2 px-4 mr-2 my-1 rounded-full border text-sm hover:bg-gray-100'>
                                                {skill.title}
                                            </InertiaLink>
                                        )
                                    }
                                </ul>

                                {
                                    reviewsData.length > 0 &&
                                    <div className='mt-4'>
                                        <h2 className='font-bold text-lg'>Learner reviews</h2>
                                    </div>
                                }
                                
                                <div>
                                    <div className='w-full my-4'>
                                        {
                                            reviewsData.map((review, i) => 
                                                    <Review key={i} index={i} review={review}/>
                                            )
                                        }
                                    </div>
                                </div>
                        </div>
                        <div className='flex-1 p-2'>
                            <h2 className='font-bold my-3'>Related courses</h2>
                            {
                                related.map((course, i)=>(
                                    <InertiaLink href={route('course.show', course.slug)} key={i} className='flex py-4 border-b '>
                                        <div className='w-32 relative'>
                                            <img src={course.thumbnail} className='w-full'/>
                                            <span className='absolute bottom-0 right-0 bg-black bg-opacity-60 font-semibold text-white text-xs p-0.5'>{durationFormat(course.time)}</span>
                                        </div>
                                        <div className='p-2'>
                                            <p className='font-bold text-sm'>{course.title}</p>
                                            <p>{releasedFormat(course.released)}</p>
                                        </div>
                                    </InertiaLink>
                                ))
                            }
                        </div>
                    </div>
                }
                {
                    tab == 1 &&
                    <div className='w-full py-4'>
                        <div className='max-w-3xl mx-auto'>
                            {
                                !asking &&
                                <div className='shadow  rounded p-4'>
                                    <p>Ask here to share with learners, experts and others</p>
                                    <div className='text-right'>
                                        <button onClick={() => setAsking(true)} className='bg-orange text-white p-1 px-4'>Ask</button>
                                    </div>
                                </div>
                            }
                            {
                                asking &&
                                <form onSubmit={submitQuote}>
                                <textarea
                                className='w-full border border-gray-300 rounded-lg text-sm'
                                value={question} 
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder='Type your question here...'
                                />
                                <div className='text-right'>
                                    <button type='submit' className='btn-orange my-2'>
                                        Post
                                    </button>
                                </div>
                                </form>
                            }
                        <p className='text-xs mt-4'>Looking for technical assistance (e.g. downloading certificates)? <InertiaLink className='text-orange' href={route('help.index')}>Visit Learning Help</InertiaLink></p>

                        </div>
                        <div className='max-w-3xl mx-auto'>
                            <div>
                            {
                                quotes.map((quote,i)=>
                                <Question key={i} index={i} data={quote} slug={course.slug}/>
                                )
                            }
                            </div>

                        </div>
                    </div>
                }

                {
                    tab == 2 &&
                    <div className='max-w-3xl mx-auto py-4'>
                        <div>
                        <form onSubmit={submitNote}>
                        <textarea
                        className='w-full border border-gray-300 rounded-lg text-sm'
                        value={note} 
                        onChange={(e) => setNote(e.target.value)}
                        onKeyDown={(e) => keyDown(e)}
                        placeholder='Type your note here to save for later...'/>
                        </form>
                        </div>
                        <div className='flex justify-between'>
                            <p className='description'>{notes.count} Notes taken</p>
                            <p className='description'>Press Enter to save</p>
                        </div>
                        <div className='mt-4'>
                            {
                                notes.chapters.map((chapter,i) => 
                                        <NotesDropdown key={i} title={chapter.title} notes={chapter.notes}>
                                        {
                                        chapter.notes.map((note, n) =>{
                                            return(
                                                <Note key={n} note={note} noteLesson={note.lesson}/>
                                            )
                                        })
                                        }
                                        </NotesDropdown>
                                )
                            }
                            {
                                course.notes.length === 0 &&
                                <div className='text-center'>
                                    <img className='w-28 mx-auto' src='/img/empty/notes.png'/>
                                    <p className='text-sm font-semibold'>No notes saved yet</p>
                                    <p className='text-xs'>Take notes to remember what you learned!</p>
                                </div>
                            }

                        </div>
                    </div>
                }
                {
                    tab == 3 &&
                    <div className='w-full py-4'>
                        <div className='max-w-3xl mx-auto'>
                            <div className='leading-relaxed text-gray-500'>
                                {
                                    transcription.map((cue, i) => {
                                        return (
                                            <span key={i} onClick={() => jump(cue.start)} className='cursor-pointer mx-1 relative hover:underline group hover:text-black'>{cue.text}<div className='absolute w-36 toptranscipt -top-8 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 text-white text-center px-2 opacity-100 group-hover:opacity-100 group-hover:block hidden'><div>Jump to {timeFormat(cue.start)}</div></div></span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
                {
                    tab == 4 &&
                    <div className='w-full bg-lightGray p-4'>
                        {
                            chapters.map((chapter, i)=> <Section key={i} data={chapter} slug={course.slug}/>)
                        }
                    </div>
                }
            </div>
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
        </Context.Provider>
    )
}

Lesson.layout = page => <Layout children={page} />;


export default Lesson;