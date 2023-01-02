import React, {useState} from 'react'
import Layout from '@/Layouts/Auth'
import Modal from 'react-modal'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import Icon from '@/Components/Icon'
TextInput
const Topic = () => {
    const { topic } = usePage().props
    const [modal, setModal] = useState(false)
    const { data, setData, errors, put, processing } = useForm({
        title: topic.title || '',
        description: topic.description || '',
      })
    
    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [target]: value
        })
    }
    function editTopic(e){
        e.preventDefault()
        put(route('topic.update',topic.id))
        console.log('edit')
    }
    return(
        <div className='w-full h-full p-2 md:p-8 overflow-y-auto'>
            <InertiaLink href={route('admin.topics')} >
                <button className='p-1 hover:bg-gray-100 rounded-lg'>
                    <Icon name='cheveron-left' className='w-6 h-6' />
                </button>
            </InertiaLink>
            <div className='mx-auto mb-4 w-full max-w-2xl rounded-lg'>
                <form onSubmit={editTopic}>
                    <div className='text-left mb-2'>
                        <InputLabel forInput="title" value="Topic Title"/>
                        <TextInput
                            type='text'
                            name='title'
                            value={data.title}
                            className='w-full'
                            handleChange={handleChange}
                        />
                        <InputError message={errors.title} className="mt-2"/>
                    </div>
                    <div className='text-left mb-2'>
                        <InputLabel forInput="title" value="Topic Description"/>
                        <textarea
                            className='form-textarea'
                            name='description'
                            rows="3"
                            onChange={handleChange}
                            value={data.description}
                        />
                    </div>
                    <div className='text-right'>
                        <button className='btn-orange'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Topic.layout = page => <Layout title="Topic" children={page} />

export default Topic;