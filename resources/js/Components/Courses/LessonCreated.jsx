import React from 'react'
import axios from 'axios'
import Icon from '@/Components/Icon'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import { Context } from '@/Components/Courses/Context'
import timeFormat from '@/Components/TimeFormat'
import Modal from 'react-modal'
import ToggleCheck from '@/Components/ToggleCheck'

export default({index,lesson, section}) => {
    const {sections, setSections, course} = React.useContext(Context)
    const [modalDelete, setModalDelete] = React.useState(false)
    const [dropdown, setDropdown] = React.useState(false)
    const inputRef = React.useRef();
    const fileRef = React.useRef();
    const [edit,setEdit] = React.useState(false)
    const [videoAdded, setVideoAdded] = React.useState(false)
    const [transcriptionAdded, setTranscriptionAdded] = React.useState(false)
    const [premium, setPremium] = React.useState(Number(lesson.premium) || 0)
    console.log(lesson.title,lesson.premium)
    const [data, setData] = React.useState({
        id: lesson.id,
        course_id: course.id,
        chapter_id: 0,
        order: index,
        title: lesson.title || '',
        time: lesson.time || '',
        video: lesson.video || '',
        transcription: lesson.transcription || '',
        videofile: '',
        transcriptionfile: ''
    })

    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [target]: value
        })
    }

    function changePremium() {
        setPremium(premium == 1 ? 0 : 1)
    }

    const [source, setSource] = React.useState(data.video.path || '');

    const handleFiles = (event) => {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setSource(url);
      setData({
        ...data,
        videofile: file,
      })
      setVideoAdded(true);
    }

    const handleClick = (e) => {
        inputRef.current.click();
    }

    const handleTranscription = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // handleFileChange(e.target.files);
            console.log(e.target.files)
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);

            setData({
                ...data,
                transcription: url,
                transcriptionfile: file
            })
            setTranscriptionAdded(true)
        }
      }

    const handleClickFile = (e) => {
        fileRef.current.click();
    }

    function editLesson(e)
    {
        e.preventDefault();
        
        var formData = new FormData();
        formData.append('title', data.title)
        formData.append("_method", "put")
        formData.append('premium', premium)
        videoAdded == true ? formData.append('video', data.videofile) : null
        transcriptionAdded == true ? formData.append('transcription', data.transcriptionfile) : null

        axios.post(route('lesson.update', lesson.id),formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res)=> {
            console.log(res)
            const prevSections = [...sections]
            console.log(prevSections)
            console.log('section',prevSections[section])
            const lessonUpdated = res.data.lesson
            prevSections[section].lessons[index] = lessonUpdated
            setSections(prevSections)
            setEdit(false)
        })
        .catch((err)=>{console.log(err)})
    }
    function closeDelete(){
        setModalDelete(false)
    }
    function deleteLesson()
    {
        axios.delete(route('lesson.delete', lesson.id))
        .then((res) =>
        {
            console.log(res)
            const prevSections = [...sections]
            console.log(prevSections)
            console.log('section',prevSections[section])
            prevSections[section].lessons.splice(index, 1)
            setSections(prevSections)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='w-full p-4 border-b'>
            <div onClick={() => setDropdown(!dropdown)} className='cursor-pointer w-full text-left flex items-center justify-between'>
                <div className='flex items-center'>
                    <Icon name='play' className='w-3 h-3 mr-2 fill-orange'/>
                    <h4>{lesson.title} <span className='text-xs text-gray-400'>{lesson.premium == 1 ? 'Premium Lesson' : ''}</span></h4>
                </div>
                <div className='text-gray-400'>
                    {timeFormat(lesson.video.time)}
                </div>
            </div>
            {
                dropdown &&
            <div className='flex flex-wrap items-start md:p-6'>
            <div className='w-full md:w-1/2 pt-4'>
                
                <div className='w-full'>
                    <div 
                    style={{
                    boxShadow: '0px -1px 13px 1px rgba(0,0,0,0.05),',
                    WebkitBoxShadow: '0px -1px 13px 1px rgba(0,0,0,0.05)',
                    MozBoxShadow: '0px -1px 13px 1px rgba(0,0,0,0.05)',
                    width: 'auto'
                    }}>
                    <video 
                        className='w-full'
                        controls
                        src={source}
                    >
                        <track
                            src={data.transcription.path}
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                            default
                        />
                    </video>
                    </div>
                </div>
                <div className='my-4 flex justify-center'>
                    <button type='button' onClick={() => setModalDelete(true)} className='btn-delete'>Delete Lesson</button>
                </div>
            </div>
            <div className='w-full md:w-1/2 pt-4 md:pt-0 md:px-6 text-left relative'>
                {
                    !edit &&
                <>
                <div className='absolute right-0'>
                    <div className='cursor-pointer p-2 rounded-full bg-gray-50' onClick={()=> setEdit(true)}>
                        <Icon name='edit' className='w-4 h-4 fill-orange'/>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400'>Title:</p>
                    <h4>{lesson.title}</h4>
                    <p className='text-gray-400'>Video:</p>
                    <h4>{lesson.title}</h4>
                    <p className='text-gray-400'>Type:</p>
                    <h4>mp4</h4>
                    <p className='text-gray-400'>Transcription:</p>
                    <h4>{data.transcription.filename}</h4>
                </div>
                </>
                }
                {
                    edit &&
                <div >
                    <InputLabel forInput="title" value="Title"/>
                    <TextInput
                        type="text"
                        name="title"
                        value={data.title}
                        className="mt-1 block w-full"
                        handleChange={handleChange}
                    />
                    <div>
                        <label>
                        <input
                        ref={inputRef}
                        className="hidden"
                        type="file"
                        onChange={handleFiles}
                        accept=".mov,.mp4"
                        />
                        <div className="w-full flex justify-end my-2">
                            <button type="button" onClick={handleClick} className='w-full bg-gray-100 rounded-lg flex p-2 px-4 border items-center justify-center text-gray-700'>
                                <Icon name='upload-video' className='w-4 h-4 mr-2 fill-current'/>
                                <span>Change Video</span>
                            </button>
                        </div>
                        </label>
                    </div>
                    <div>
                        <label>
                        <input
                        ref={fileRef}
                        className="hidden"
                        type="file"
                        onChange={handleTranscription}
                        accept=".vtt"
                        />
                        <div className="w-full flex justify-end my-2">
                            <button type="button" onClick={handleClickFile} className='bg-gray-100 rounded-lg flex justify-center p-2 px-4 border items-center text-gray-700 w-full'>
                                <Icon name='transcription' className='w-4 h-4 mr-2 fill-current'/>
                                <span>Change Transcription</span>
                            </button>
                        </div>
                        </label>
                    </div>
                    <div className='my-4 flex items-center'>
                        <div>
                            <h4 className='font-semibold text-sm mb-2 mr-2'>Premium lesson:</h4>
                        </div>
                        <ToggleCheck value={premium} onChange={changePremium}/>
                    </div>
                    <div className='text-right'>
                        <button onClick={() => setEdit(false)} className='btn-white mr-2'>Cancel</button>
                        <button className='btn-orange' onClick={editLesson}>Save</button>
                    </div>
                </div>
                }
            </div>
            </div>
            }
            <Modal
                isOpen={modalDelete}
                onRequestClose={closeDelete}
                className="modal-lesson"
                overlayClassName="modal-lesson-overlay"
                contentLabel="Delete Lesson"
            >
                <div className='w-full p-4'>
                <div className='text-gray-500'>
                    <p className='text-lg font-semibold'>Are you sure you want to delete this lesson?</p>
                    <p>This action is irreversible</p>
                </div>
                <div className='w-full flex justify-between'>
                    <button onClick={() => setModalDelete(false)} className='btn-white mr-2'>Cancel</button>
                    <button type='button' onClick={deleteLesson} className='btn-delete'>Delete Lesson</button>
                </div>
                </div>
            </Modal>
        </div>
    )
}