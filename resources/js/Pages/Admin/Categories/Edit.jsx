import React, { useRef, useState, Fragment } from 'react'
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/Auth'
import Icon from '@/Components/Icon'
import Modal from 'react-modal'
Modal.setAppElement('#app')

import TextInput from '@/Components/TextInput'



const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Topic = (props) => {
    const {i, deleteTopic, onClick} = props
    const {title, id} = props.topic
    
    return(
        <div
            //onClick={() => deleteTopic(id,i)}
            className='bg-white border border-gray-200 flex w-auto p-1 px-2 rounded-lg items-center group cursor-pointer hover:shadow' key={i}
        >
                <div className='rounded-full border border-orange text-orange p-1 mr-2'>
                <Icon name="close" className="w-1.5 h-1.5"/>
                </div>
                <span>{title}</span>
        </div>
    )
}

const Category = () =>{
    const { category, topics } = usePage().props
    const [modal, setModal] = useState(false)
    const [modalTopic, setModalTopic] = useState(false)
    const [topicSelected,setTopicSelected] = useState({
        description: '',
        id: 0,
        title:''
    })
    const [onDelete, setDelete] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const { data, setData, errors, post, put, processing } = useForm({
        category_id: category.id,
        title: '',
        description:''
    })

    
    
    function closeModal() {
        setModal(false)
    }

    function closeModalTopic(){
        setModalTopic(false)
        setTopicSelected({
            description: '',
            id: 0,
            title:''
        })
    }

    function closeDelete(){
        setDeleteId(null)
        setDelete(false)
    }

    function deleteTopic(id,i){
        /*
        axios.delete(route('topic.delete', id))
        .then(
            r=> {
                console.log(r.data)
                const prevTopics = [...dataTopics]
                prevTopics.splice(selectedId,1)
                setDataTopics(prevTopics)
                setDelete(false)
            }
        )
        .catch(err => console.error(err))
        */
       Inertia.delete(route('topic.delete', id),
       {
        onSuccess: ()=>{
            setDelete(false)
        }
       })
    }
    
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        post(route('topic.store'),{
            onSuccess: () => {
                setData({
                    category_id: category.id,
                    title: '',
                    description:''
                })
                
                setModal(false)
              }
        })
    }
    

    const onTopicChange = (e) => {
        //setTopicSelected(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);

        const key = e.target.name
        const value = e.target.value

            setTopicSelected(values => ({
            ...values,
            [key]: value
            }))
    }

    const onUpdate = (e) => {
        e.preventDefault()
        console.log(topicSelected)
        Inertia.put(route('topic.update', topicSelected.id), topicSelected)
        closeModalTopic()
        
    }

    function setDeleteTopic(id){
        setDeleteId(id)
        setDelete(true)
    }

    function topicEdition(topic)
    {
        setModalTopic(true)
        setTopicSelected(topic)
        console.log(topic)
    }
    console.log(topicSelected)
    return(
        <>
        <div className='w-full h-full p-2 md:p-8 overflow-y-auto'>
            <div className='mx-auto mb-4 w-full max-w-7xl rounded-lg'>
                <div className='flex flex-wrap justify-between items-center w-full'>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <h2 className='font-semibold text-xl'>{category.title}</h2>
                        <p>Manage topics of category here.</p>
                    </div>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <button onClick={() => setModal(true)} className='btn-orange'>Add Topic</button>
                    </div>
                    
                </div>
            </div>
            <div className='p-8 flex flex-wrap w-full mx-auto max-w-7xl'>
                <div className='w-full'>
                    <h2 className='font-semibold mb-2'>Topics</h2>
                </div>
                <div className='flex flex-wrap mb-2'>
                    {
                        topics.map((topic, i) => 
                        <div className='mr-2 mb-2' key={i} onClick={() => setDeleteTopic(topic.id)}>
                            <Topic key={i} topic={topic}/>
                        </div>
                        )
                    }
                </div>
                <div>
                    {
                        topics.map((topic, i) =>
                        <div className='rounded-lg bg-lightGray mb-4 p-4' key={i}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <h2 className='font-semibold mr-2'>{topic.title}</h2>
                                    <button onClick={() => topicEdition(topic,i)} className='flex group hover:bg-gray-200 p-2 rounded-lg items-center'>
                                        <Icon name="edit" className='w-3 mr-2'/>
                                        <span className='text-lightGray group-hover:text-black'>Edit</span>
                                    </button>
                                </div>
                                <button 
                                    className='rounded-full border border-orange text-orange mr-2 w-5 h-5 flex justify-center items-center'
                                    onClick={() => setDeleteTopic(topic.id, i)}
                                >
                                    <Icon name="close" className="w-2"/>
                                </button>
                            </div>
                            <div>
                                <p className='text-sm'>{topic.description}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
        <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            className="modal-category"
            overlayClassName="modal-category-overlay"
            contentLabel="New category"
            >
                <div className='p-4'>
                    <h1 className='text-xl font-semibold'>Create new topic</h1>
                    <form className='mt-4' onSubmit={onSubmit}>
                        <div className='text-left my-2'>
                            <InputLabel forInput="title" value="Title"/>
                            <TextInput
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.title} className="mt-2"/>
                        </div>
                        <div className='text-left my-2'>
                            <InputLabel forInput="description" value="Description"/>
                            <textarea cols={4}
                                type="text"
                                name="description"
                                value={data.description}
                                className="border-gray-300 focus:border-orange  focus:ring-orange focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
                                onChange={onHandleChange}
                            />
                            <InputError message={errors.description} className="mt-2"/>
                        </div>
                        <div className='text-right'>
                            <button className='btn-orange'>Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal
                isOpen={onDelete}
                onRequestClose={closeModal}
                className="modal-category"
                overlayClassName="modal-category-overlay"
                contentLabel="New category"
            >
                <div>
                    <p className='font-semibold my-2'>
                    This topic will be deleted
                    </p>
                    <div className='text-right'>
                    <button className='btn-orange mr-2' onClick={() => deleteTopic(deleteId)}>Delete</button>
                    <button onClick={closeDelete} className='btn-white'>Cancel</button>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalTopic}
                onRequestClose={closeModalTopic}
                className="modal-lesson"
                overlayClassName="modal-category-overlay"
                contentLabel="New category"
            >
                <div>
                    <div className='w-full bg-orange text-white p-3 flex justify-between items-center'>
                        <h2 className='text-lg font-semibold'>Edit topic</h2>
                        <button onClick={closeModalTopic} className='cursor-pointer mr-2'>
                            <Icon name='close' className='w-3 h-3 fill-white'/>
                        </button>
                    </div>
                     <form className='p-4' onSubmit={onUpdate}>
                        <div className='text-left my-2'>
                            <InputLabel forInput="title" value="Title"/>
                            <TextInput
                                type="text"
                                name="title"
                                value={topicSelected.title}
                                className="mt-1 block w-full"
                                handleChange={onTopicChange}
                            />
                            <InputError message={errors.title} className="mt-2"/>
                        </div>
                        <div className='text-left my-2'>
                            <InputLabel forInput="description" value="Description"/>
                            <textarea cols={4}
                                type="text"
                                name="description"
                                value={topicSelected.description}
                                className="border-gray-300 focus:border-orange  focus:ring-orange focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
                                onChange={onTopicChange}
                            />
                            <InputError message={errors.description} className="mt-2"/>
                        </div>
                        <div className='text-right'>
                            <button className='btn-white mr-2' onClick={closeModalTopic} type='button'>Cancel</button>
                            <button className='btn-orange'>Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

Category.layout = page => <Layout title="Category" children={page} />;


export default Category;