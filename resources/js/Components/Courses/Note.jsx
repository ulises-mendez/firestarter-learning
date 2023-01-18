import React, { useState, useContext } from 'react'
import Icon from '@/Components/Icon'
import timeFormat from '@/Components/TimeFormat'
import { Inertia } from '@inertiajs/inertia'
import { useForm, usePage } from '@inertiajs/inertia-react'
import { Context } from '@/Components/Courses/Context'
import axios from 'axios'
export default({index, note, noteLesson}) => {
    const {course,lesson} = usePage().props
    const { notes, setNotes, jump } = useContext(Context)
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(note.content || '')
    const {data, setData, put, delete: destroy } = useForm({
        note: note.id,
        content: note.content,
    })
    function goTo(){
        if(lesson.id == noteLesson.id) {
            jump(note.time)
        }
        if(lesson.id !== noteLesson.id) {
            Inertia.get(route('course.lesson',[course.slug, noteLesson.slug]) + `?time=${note.time}`)
        }
    }
    function edition(){
        setEdit(true)
    }
    function cancelEdit(){
        setContent(note.content)
        setEdit(false)
    }

    function updateNote(e)
    {
        e.preventDefault()

        put(route('note.update'), {
            onSuccess: () => {
                setEdit(false)
                getNotes()
            }
        })
    }

    function deleteNote()
    {
        destroy(route('note.delete'), {
            onSuccess: () => {
                setEdit(false)
                getNotes()
            }
        })
    }
    const getNotes = async () =>{
        const res = await axios.get(route('notes',course.slug))
        setNotes(res.data)
    }

    console.log(index)
    return(
        <div>
            <button className='flex text-yellow items-center pl-2' onClick={goTo}>
                <Icon name='play' className='w-3 h-3 fill-current'/>
                <p className='font-semibold pl-2 text-sm hover:underline'>{note.lesson.title} ({timeFormat(note.time)})</p>
            </button>
            <form onSubmit={updateNote}>
            {
                !edit ?
                <div className='w-full'>
                    <span className='text-sm text-gray-700'>{note.content}</span>
                </div>
                :
                <div className='w-full'>
                    <textarea
                     value={data.content}
                     onChange={e => setData('content',e.target.value)}
                     className='w-full border border-gray-300 rounded-lg text-sm'
                    />
                </div>
            }
            <div className='w-full text-right'>
                {
                    !edit ?
                    <>
                        <button onClick={edition} className='px-2 text-gray-600'>Edit</button>
                        <button className='px-2 text-orange' onClick={deleteNote} type='button'>Delete</button>
                    </>
                    :
                    <>
                        <button
                        onClick={cancelEdit}
                        className='px-2 text-gray-600'
                        type='button'>
                            Cancel
                        </button>
                        <button
                        className='px-2 text-gray-600'>
                            Update
                        </button>
                    </>
                }
            </div>
            </form>
        </div>
    )
}