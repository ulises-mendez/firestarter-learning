import React, { useRef, useState } from 'react'
import CourseItem from '@/Components/Courses/Collections/CourseItem'
import {Context} from '@/Components/Courses/Collections/CollectionDataContext'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/Auth'
import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import classNames from 'classnames'
import Section from '@/Components/Courses/Section'
import releasedFormat from '@/lib/releasedFormat'
import Progress from '@/Components/Courses/Progress'
import TextInput from '@/Components/TextInput'
import Modal from 'react-modal'
import { Inertia } from '@inertiajs/inertia'
Modal.setAppElement('*')

const Item = ({link,text, length }) =>{
    const isActive = route().current(link);

    const Item = classNames('my-4 font-semibold p-2 px-4  rounded select-none cursor-pointer w-full',
    {
        'border-black border-l-4 bg-orange text-white': isActive,
        'hover:bg-orange hover:bg-opacity-10': !isActive
      })

    return(
        <InertiaLink href={route(link)} >
            <div className={Item}>
            {text} {length ? '(' + length + ')' : null}
            </div>
        </InertiaLink>
    )
}

const Collection = () =>{
    const {active_courses,collection, collections, courses,save_count} = usePage().props
    const [collectionData, setCollectionData] = useState( collection || [])
    const [ coursesData, setCoursesData ] = useState(courses || [])
    const {data,setData, errors, put} = useForm({
        title: collection.title || '',
        description: collection.description || '',
    })
    const [menu, setMenu] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    
    function closeEditModal() {
        setEditModal(false)
    }
    function closeDeleteModal() {
        setDeleteModal(false)
    }
    function deleteCollection(){
        Inertia.delete(route('me.collection.delete', collection.id))    
    }
    function handleChange(e){
        const target = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [target]: value
        })
    }
    function updateCollection(e)
    {
        e.preventDefault()
        put(route('me.collection.update', collection.id),{
            onSuccess: () => {setEditModal(false)}
        })
    }
    return(
        <Context.Provider
        value={{coursesData, setCoursesData}}
        >
        <div className='w-full h-full flex items-stretch'>
            <div className='relative p-4 h-full bg-lightGray hidden w-1/4 lg:block'>
                <h1 className='font-bold text-xl'>My Library</h1>
                <Item text='In Progress' link='me' length={active_courses}/>
                <Item text='Saved' link='me.saved' length={save_count}/>
                <Item text='My Collections' link='me.collections' length={collections}/>
                <Item text='Learning History' link='me.history'/>
            </div>
            <div className='w-full flex-1 h-full bg-white p-6 overflow-auto flex flex-col relative '>
                <div className='flex justify-between'>
                    <InertiaLink href={route('me.collections')} className='group hover:text-orange flex items-center'>
                        <div className='w-8 h-8 p-2 mr-2  group-hover:bg-gray-100 rounded-full'>
                            <Icon name='cheveron-left' className='fill-current' />
                        </div>
                        <h4>Back to collections</h4>
                    </InertiaLink>
                    <div className='flex'>
                        <button 
                        className='p-3 mr-2 hover:bg-gray-100 rounded-full'
                        onClick={()=>setEditModal(true)}>
                            <Icon name='edit' className='w-4 h-4'/>
                        </button>
                        <button 
                        className='p-3 hover:bg-gray-100 rounded-full'
                        onClick={() => setDeleteModal(true)}>
                        
                            <Icon name='trash' className='w-4 h-4'/>
                        </button>
                    </div>
                </div>
                
                
                <div className='w-full my-4'>
                    <h1 className='font-bold text-xl'>{collection.title}</h1>
                    <p>{collection.description}</p>
                </div>
                <div>
                    {
                        coursesData.map(
                            (course, i) =>
                            <CourseItem key={i} index={i} course={course}/>
                        )
                    }
                </div>
                <div>
                    {
                        coursesData.length === 0 &&
                        <div className='my-8 text-center'>
                            <h2 className="font-semibold text-2xl">This collection does not have any course.</h2>
                            <img src='/img/empty/collections.png' className='w-40 mx-auto'/>
                            <p className='mb-4'>Add content from your saved list or search.</p>
                            <InertiaLink href={route('me.saved')}>
                                <button className='bg-black p-4 text-white font-semibold rounded-lg'>
                                    Go to saved courses
                                </button>
                            </InertiaLink>
                        </div>
                    }
                </div>
            </div>
            <Modal
            isOpen={editModal}
            onRequestClose={closeEditModal}
            className="modal-collections"
            overlayClassName="modal-lesson-overlay"
            contentLabel="Edit Collection"
            >
                <div className='flex justify-between items-center w-full bg-orange text-white p-3'>
                    <div className='flex items-center'>
                        <h2 className='text-lg font-semibold'>Edit collection</h2>
                    </div>
                    <button onClick={closeEditModal} className='mr-2'>
                        <Icon name='close' className='w-3 h-3 fill-white'/>
                    </button>
                </div>
                <form onSubmit={updateCollection} className='p-4 bg-white'>
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
                    <div className='text-right'>
                        <button 
                        className='btn-white mr-2' 
                        type='button'
                        onClick={closeEditModal}>
                            Cancel
                        </button>
                        <button className='btn-orange'>
                            Save
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal
            isOpen={deleteModal}
            onRequestClose={closeDeleteModal}
            className="modal-collections"
            overlayClassName="modal-lesson-overlay"
            contentLabel="Edit Collection"
            >
                <div className='text-gray-500'>
                    <p className='text-lg font-semibold'>Are you sure you want to delete this collection?</p>
                    <p>This action is irreversible</p>
                </div>
                <div className='w-full flex justify-between'>
                    <button onClick={() => closeDeleteModal} className='btn-white mr-2'>Cancel</button>
                    <button type='button' onClick={deleteCollection} className='btn-delete'>Delete Lesson</button>
                </div>

            </Modal>
        </div>
        </Context.Provider>
    )
}

Collection.layout = page => <Layout title={`${page.props.title} - Collection`} children={page} />;


export default Collection;