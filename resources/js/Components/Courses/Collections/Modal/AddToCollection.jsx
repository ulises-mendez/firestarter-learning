import React, { useEffect, useState,  } from 'react'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import CollectionToggle from '@/Components/Courses/Collections/Modal/ToggleCollection'
import Icon from '@/Components/Icon'
import axios from 'axios'

export default({onRequestClose, course}) => {
    const [collections,setCollections] = useState([])
    const [ addForm, setForm ] = useState(false)
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
    }
    function addCollection(e)
    {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', collection.title)
        formData.append('description', collection.description)
        axios.post(route('collection.post'), formData)
        .then(res => {
            console.log(res.data.collection)
            getCollections()
            setForm(false)
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
    function back(){
        setForm(false)
        
    }
    function close(){
        setForm(false)
        reset()
        onRequestClose()
    }

    function getCollections(){
        axios.get(route('user.collection') + '?course=1')
        .then(
            res =>{
                console.log(res.data)
                setCollections(res.data)
            }
        )
        .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        console.log('useEffect')
        getCollections()
    }, [])
    return(
        <>
        {
            !addForm &&
            <div className='w-full h-full flex flex-col items-between justify-between'>
            <div className='w-full bg-orange text-white p-3 flex justify-between items-center'>
                <h2 className='text-lg font-semibold'>Add to collection</h2>
                <button onClick={close} className='cursor-pointer mr-2'>
                    <Icon name='close' className='w-3 h-3 fill-white'/>
                </button>
            </div>
            {
                collections.map((collection,i)=>{
                    return(
                        <CollectionToggle key={i} collection={collection} course={course}/>
                    )
                })
            }
            {
                collections.length === 0 &&
                <div className='w-full flex-1 h-full bg-white p-6 overflow-auto flex flex-col relative justify-center'>
                    <div className='flex flex-col flex-1 justify-center'>
                        <div className='w-full text-center'>
                            <h2 className='font-semibold text-xl'>You haven't created a collection yet</h2>
                            <img src='/img/empty/collections.png' className='w-28 my-8 mx-auto' />
                            <p className='my-2 text-sm'>Get started by clicking below.</p>
                        </div>
                    </div>
            </div>
            }
           
            <div className='w-full bg-white p-4 text-center border-t'>
                <button className='btn-white' onClick={() => setForm(true)}>Create Collection</button>
            </div>
            </div>
        }
        {
            addForm &&
            <>
                <div className='flex justify-between items-center w-full bg-orange text-white p-3'>
                    <div className='flex items-center'>
                        <button onClick={back} className='cursor-pointer hover:bg-white hover:bg-opacity-20 w-8 h-8 p-1 rounded-full mr-2'>
                            <Icon name='cheveron-left' className='w-full fill-white '/>
                        </button>
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
                        <button type='button' onClick={back} className='btn-white mr-2'>Cancel</button>
                        <button className='btn-orange'>Create</button>
                    </div>
                </form>
            </>

        }
        </>
    )
}