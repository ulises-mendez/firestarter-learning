import React, {useState,useContext} from 'react'
import { Context } from '@/Components/Courses/Collections/CollectionsContext'
import Icon from '@/Components/Icon'
import { InertiaLink } from '@inertiajs/inertia-react'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from 'react-modal'
import TextInput from '@/Components/TextInput'
import axios from 'axios'


export default({collection, index}) =>                       
{    
    const {id,description,title,thumbnail} = collection
    const {collectionsData, setCollectionsData, onRequestClose} = useContext(Context)
    const [data,setData]= useState({
        title:title,
        description:description,
    })
    
    const [editModal, setEditModal] = useState(false)
    const [errors, setErrors] = useState({})
    const [menu, setMenu] = useState(false)
    function close(){
        setEditModal(false)
        setData({
            title:title,
            description:description,
        })
    }
    function deleteCollection(){
        axios.delete(route('me.collection.delete', id))
        .then(
            res =>
            {
            const prevCollections = [...collectionsData]
            prevCollections.splice(index,1)
            setCollectionsData(prevCollections)
        })
        .catch(err=>console.log(err))
    }
    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setData({
            ...collection,
            [target]: value
        })
    }
    function editCollection(){
        setData({
            title: title,
            description: description
        })
        setEditModal(true)
    }
    function updateCollection()
    {
        var formData = new FormData()
        formData.append("_method", "put")
        formData.append('title', data.title)
        formData.append('description', data.description)
        axios.post(route('me.collection.update', id), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=>{
            const prevCollections = [...collectionsData]
            prevCollections[index].title = res.data.collection.title
            prevCollections[index].description = res.data.collection.description
            setCollectionsData(prevCollections)
            setEditModal(false)
        })
        .catch(err=>console.log(err))
    }
    
    return(
    <div className='bg-white border-b p-4 flex-1 flex items-center justify-between'>
        <div className='flex'>
            <div className='w-40'>
                <InertiaLink href={route('me.collection', id)}>
                    <img src={thumbnail} className='w-full object-cover'/>
                </InertiaLink>
            </div>
            <div className='px-4 flex-1'>
                <p className='text-xs'>MY COLLECTION</p>
                <p className='font-semibold'>{title}</p>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
        <div className="relative">
            <button 
            onClick={() => setMenu(true)}>
                <Icon name="dots" className='w-6'/>
            </button>
            <div>
            <div 
            onClick={() => setMenu(false)}
            className={`origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${menu == true ? '' : 'hidden'}`}>
                <div className="w-full text-left">
                    <button
                    className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"
                    onClick={editCollection}
                    >
                        Edit collection
                    </button>
                    <button
                    className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"
                    onClick={() => deleteCollection()}
                    >
                        Delete collection
                    </button>
                </div>
            </div>
            <div
                onClick={() => {
                setMenu(false);
                }}
                className={`fixed inset-0 z-10 ${menu == true ? '' : 'hidden'}`}
            />
            </div>
        </div>
        <Modal
        isOpen={editModal}
        onRequestClose={() => {
            setEditModal(false)
        }}
        className="modal-collections"
        overlayClassName="modal-lesson-overlay"
        contentLabel="Edit Collection"
        >
            <div className='flex justify-between items-center w-full bg-orange text-white p-3'>
                <div className='flex items-center'>
                    <h2 className='text-lg font-semibold'>Edit collection</h2>
                </div>
                <button onClick={close} className='mr-2'>
                    <Icon name='close' className='w-3 h-3 fill-white'/>
                </button>
            </div>
            <div className='p-4 bg-white'>
                <InputLabel forInput="title" value="Title"/>
                <TextInput
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        value={data.title}
                        className="mt-1 block w-full"
                        handleChange={handleChange}
                />
                <InputError message={errors.title} className="mt-2"/>
                <InputLabel className='mt-2' forInput="description" value="Description"/>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Describe your what's in your collection"
                        value={data.description}
                        className='my-2 w-full border border-gray-300 rounded-lg text-sm'
                        onChange={handleChange}
                        rows={5}
                    />
                    <InputError message={errors.description} className="mt-2"/>
            </div>
            <div className='w-full bg-white p-2 text-center border-t flex justify-end'>
                    <button type='button' onClick={close} className='btn-white mr-2'>Cancel</button>
                    <button
                    className='btn-orange'
                    onClick={updateCollection}
                    >Update</button>
            </div>
        </Modal>
    </div>
    )
}