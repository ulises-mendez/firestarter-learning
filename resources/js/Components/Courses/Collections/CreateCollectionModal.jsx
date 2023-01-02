import React, { useState, useContext } from 'react'
import { Context } from '@/Components/Courses/Collections/CollectionsContext'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import CollectionToggle from '@/Components/Courses/Collections/CollectionToggle'
import Icon from '@/Components/Icon'
import axios from 'axios'

export default() => {
    const {collectionsData, setCollectionsData, onRequestClose} = useContext(Context)
    const [errors, setErrors] = useState({})
    const [collection, setCollection] = useState({
        title: '',
        description: ''
    })
    function reset() {
        setCollection({
            title: '',
            description: ''
        })
        onRequestClose()
    }
    function addCollection(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', collection.title)
        formData.append('description', collection.description)
        axios.post(route('collection.post'), formData)
        .then(res => {
            const prevCollections = [...collectionsData]
            const newCollection = [res.data.collection]

            setCollectionsData(newCollection.concat(prevCollections))
            reset()
        })
        .catch(err => console.log(err))
    }

    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setCollection({
            ...collection,
            [target]: value
        })
    }

    function close(){
        reset()
        onRequestClose()
    }

    return(
        <>
            <div className='flex justify-between items-center w-full bg-orange text-white p-3'>
                <div className='flex items-center'>
                    <h2 className='text-lg font-semibold'>Create a new collection</h2>
                </div>
                <button onClick={close} className='mr-2'>
                    <Icon name='close' className='w-3 h-3 fill-white'/>
                </button>
            </div>
            <form onSubmit={addCollection} className='bg-white'>
                <div className='p-4'>
                    <InputLabel forInput="title" value="Title"/>
                    <TextInput
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        value={collection.title}
                        className="mt-1 block w-full"
                        handleChange={handleChange}
                    />
                    <InputError message={errors.title} className="mt-2"/>
                    <InputLabel className='mt-2' forInput="description" value="Description"/>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Describe your what's in your collection"
                        value={collection.description}
                        className='my-2 w-full border border-gray-300 rounded-lg text-sm'
                        onChange={handleChange}
                    />
                    <InputError message={errors.description} className="mt-2"/>
                </div>
                <div className='w-full bg-white p-2 text-center border-t flex justify-end'>
                    <button type='button' onClick={close} className='btn-white mr-2'>Cancel</button>
                    <button className='btn-orange'>Create</button>
                </div>
            </form>
        </>
    )
}