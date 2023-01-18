import React, { useContext, useState } from 'react'
import { Context } from '@/Components/Courses/EditContext'
import axios from 'axios'
import Icon from '@/Components/Icon'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import TextInput from '@/Components/TextInput'
import ToggleCheck from '@/Components/ToggleCheck'
import TranscriptionFile from '@/Components/TranscriptionFile'
import VideoUpload from '@/Components/VideoUpload'
import { Inertia } from '@inertiajs/inertia'

export default() => {
    const {selection, csrf, course, data, sections, setSections, indexSection, setModalLesson} = useContext(Context)
    console.log(data)
    const order = course.chapters[indexSection].lessons.length + 1 
    const [errors, setErrors] = useState({})
    const [premium, setPremium] = useState(1)
    const [newLesson, setNewLesson] = useState({
        course_id: course.id,
        chapter_id: selection,
        order: order,
        title: '',
        transcription: null,
        transcription_url: '',
        url:'',
        video: '',

    })

    function changePremium() {
        setPremium(premium == 1 ? 0 : 1)
    }

    function close(){
        setModalLesson(false)
    }
    
    function videoChange (file,url){
        setNewLesson({
            ...newLesson,
            video: file,
            url: url
        })
    }

    function fileChange(file,url) {
        setNewLesson({
            ...newLesson,
            transcription:file,
            transcription_url: url
        })
    }

    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setNewLesson({
            ...newLesson,
            [target]: value
        })
    }

    function submit(e){
        e.preventDefault()



        Inertia.post(route('lesson.store'), {
            ...newLesson,
            premium: premium,
        }, {
            onSuccess: () => {
                setModalLesson(false)
            }
        })
        /*
        var formData = new FormData();
        formData.append('course_id', data.id)
        formData.append('chapter_id', selection)
        formData.append('order', newLesson.order)
        formData.append('title', newLesson.title)
        formData.append('video', newLesson.video)
        formData.append('premium', premium)
        newLesson.transcription !== null ? formData.append('transcription', newLesson.transcription) : null
        axios.post(route('lesson.store'),formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=>{
            setErrors({})
            const prevSections = [...sections]
            const prevLessons =  prevSections[indexSection].lessons
            const newLesson = res.data.lesson
            console.log('new',newLesson)
            prevSections[indexSection].lessons = prevLessons.concat(newLesson)
            console.log(prevLessons)
            setSections(prevSections)
            setModalLesson(false)
            
            })
        .catch(
            err=>{
                console.log(err)
                setErrors(err.response.data.errors)
            }
        )
        */
    }

    return(
        <>
        <div className='w-full bg-orange text-white p-3 flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Add to collection</h2>
            <button onClick={close} className='cursor-pointer mr-2'>
                <Icon name='close' className='w-3 h-3 fill-white'/>
            </button>
        </div>
        <form className='p-4' onSubmit={submit}>
            <div className='text-left mb-2'>
                <InputLabel forInput="title" value="Lesson Title"/>
                <TextInput
                    type="text"
                    name="title"
                    value={newLesson.title}
                    className="mt-1 block w-full"
                    handleChange={handleChange}
                />
                <InputError message={errors.title} className="mt-2"/>
            </div>
            <div className='text-left my-2'>
                <VideoUpload handleFileChange={videoChange} src={newLesson.url}/>
            </div>
            <div>
                <InputError message={errors.video} className="mt-2"/>
            </div>
            <div className='text-left my-2'>
            </div>
            <div>
                <TranscriptionFile handleFileChange={fileChange} src={newLesson.transcription}/>
            </div>
            <div className='my-4 flex items-center'>
                <div>
                    <h4 className='font-semibold text-sm mb-2 mr-2'>Premium lesson:</h4>
                </div>
                <ToggleCheck value={premium} onChange={changePremium}/>
            </div>
            <div className='flex my-4 justify-end'>
                <button type='button' onClick={() => setModalLesson(false)} className='btn-white mr-2'>Cancel</button>
                <button type='submit' className='btn-orange'>Add Lesson</button>
            </div>

        </form>
        </>
    )
}