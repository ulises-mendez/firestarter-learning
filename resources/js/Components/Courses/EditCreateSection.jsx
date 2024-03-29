import React, { useState, useContext } from 'react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import axios from 'axios'
import { Context } from '@/Components/Courses/EditContext'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

export default() => {
    const { course } = usePage().props
    const { csrf, sections, setSections, setModalSection } = useContext(Context)
    console.log(sections)
    const [errors, setErrors] = useState(null)
    const [section, setSection] = useState({
        course_id:course.id,
        order: Number(sections.length) + 1,
        title: '',
    })

    function cancel() {
        setModalSection(false)
    }

    function createSection(e){
        e.preventDefault()
        Inertia.post(route('course.section'),{
            //_token: csrf,
            ...section
        }, {
            onSuccess: () => {
                console.log(course.chapters)
                setSections(course.chapters)
                setModalSection(false)
            }
            
        })
        /*.then(res => {
            const newSection = res.data.section
            console.log(newSection)
            const sectionsArray = [...sections]
            setSections(sectionsArray.concat({...newSection, lessons: []}))
            setErrors(null)
            setModalSection(false)
            
        })
        .catch(err => setErrors(err.response?.data.message))
        */
    }

    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setSection({
            ...section,
            [target]: value
        })
    }
    return(
        <form onSubmit={createSection}>
        <div className='w-full bg-orange text-white p-3'>
            <h2 className='text-lg font-semibold'>New Section or chapter</h2>
        </div>
        <div className='p-4'>
            <div className='text-left mb-2'>
                <InputLabel forInput="title" value="Title"/>
                <TextInput
                    type="text"
                    name="title"
                    value={section.title}
                    className="mt-1 block w-full"
                    handleChange={handleChange}
                />
                <InputError message={errors} className="mt-2"/>
            </div>
            <div className='flex my-4 justify-end'>
                <button type='button' className='btn-white mr-2' onClick={cancel}>Cancel</button>
                <button type='submit' className='btn-orange'>Create section</button>
            </div>
        </div>
        </form>
    )
}