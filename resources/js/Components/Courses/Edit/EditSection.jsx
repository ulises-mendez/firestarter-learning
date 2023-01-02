import React, {useState, useContext} from 'react'
import axios from 'axios'
import { Context } from '@/Components/Courses/EditContext'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import TextInput from '@/Components/TextInput'



export default(props) => {
    const {section, onRequestClose} = props
    const {indexSection,sections,setSections} = useContext(Context)
    const [title, setTitle] = useState(section.title || '')
    const [errors, setErrors] = useState({})

    function cancel()
    {

    }
    function editSection(e)
    {
        e.preventDefault()
        var formData = new FormData()
        formData.append("_method", "put")
        formData.append('title', title)
        axios.post(route('chapter.update', section.id),formData)
        .then(res => {
            console.log(indexSection)
            const sectionUpdate = res.data.chapter
            const prevSections = [...sections]
            prevSections[indexSection].title = sectionUpdate.title
            setSections(prevSections)
            onRequestClose()
        })
        .catch(err => console.error(err))
    }
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
    
        /*
        setValues(values => ({
          ...values,
          [key]: value
        }))
        */
       setTitle(value)
    }
    return(
        <form onSubmit={editSection}>
            <div className='w-full bg-orange text-white p-3'>
                <h2 className='text-lg font-semibold'>Edit course section</h2>
            </div>
            <div className='p-4'>
                <div className='text-left mb-2'>
                    <InputLabel forInput="title" value="Title"/>
                    <TextInput
                        type="text"
                        name="title"
                        value={title}
                        className="mt-1 block w-full"
                        handleChange={handleChange}
                    />
                    <InputError message={errors.title} className="mt-2"/>
                </div>
                <div className='flex my-4 justify-end'>
                    <button type='button' className='btn-white mr-2' onClick={onRequestClose}>Cancel</button>
                    <button type='submit' className='btn-orange'>Update section</button>
                </div>
            </div>
        </form>
    )
  }