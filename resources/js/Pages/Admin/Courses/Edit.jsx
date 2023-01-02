import React, { useState, useEffect } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale, setDefaultLocale } from  "react-datepicker";
import Layout from '@/Layouts/Auth'
import { useForm, usePage } from '@inertiajs/inertia-react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import VideoUpload from '@/Components/VideoUpload'
import FileInput from '@/Components/FileInput'
import MultiFiles from '@/Components/MultiFiles'
import SectionDropdown from '@/Components/Courses/SectionDropdown'
import Icon from '@/Components/Icon'
import ImageUploading from "react-images-uploading";
import fileSize from '@/lib/fileSize'

import classNames from 'classnames'
import CreatableReactSelect from "react-select/creatable"
import Select, { createFilter } from 'react-select'
import axios from 'axios'
import { Context } from '@/Components/Courses/EditContext'
import LessonCreated from '@/Components/Courses/EditLesson'
import CreateLesson from '@/Components/Courses/Edit/EditCreateLesson'
import CreateSection from '@/Components/Courses/EditCreateSection'
import EditSection from '@/Components/Courses/Edit/EditSection'
import Modal from 'react-modal'
import { Inertia } from '@inertiajs/inertia'
Modal.setAppElement('*')
const Checkbox = (props) => {
    const {text, checked, onClick} = props
    const button = classNames('w-full p-2 px-4 rounded-lg border focus:ring-orange focus:ring-opacity-10',{
        'bg-orange text-white': checked,
        'bg-white': !checked
    })

    return (
        <div className='w-full md:w-48 md:mr-2 p-1'>
            <button
                type='button'
                className={button}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
  }

  const colorSelect = {
    option: (styles, {  isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? '#eb6100'
          : isFocused
          ? '#eb6100'
          : undefined,
          color: isDisabled
            ? 'black'
            : isSelected
            ? 'white'
            : isFocused
            ? 'white'
            : 'black',
        };
      },    
    multiValue: (styles) => {
        return {
          ...styles,
          backgroundColor: '#eb6100',
          borderRadius: '4px',
        };
      },
      multiValueLabel: (styles) => ({
        ...styles,
        color: '#fff',
      }),
      multiValueRemove: (styles) => ({
        ...styles,
        color: '#fff',
        ':hover': {
          backgroundColor: '#c93900',
          color: 'white',
          borderRadius: '4px',
        },
      }),
  }

const EditCourse = () => {
    const { course, courseStatus, instructors, skills, csrf, categories, select_instructors, topics } = usePage().props  
    const { title, level, description } = course
    const [files, setFiles] = useState([])
    const [images, setImages] = useState([])
    const [modalEditSection, setModalEditSection] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [modalLesson, setModalLesson] = useState(false)
    const [modalPublish,setModalPublish] = useState(false)
    const [modalSection, setModalSection] = useState(false)
    const [modalSettings, setModalSettings] = useState(false)
    const [selection, setSelection] = useState(null)
    const [selectedList, setSelectedList] = useState(null)
    const [sectionDelete, setSectionDelete] = useState(null)
    const [indexDelete, setIndexDelete] = useState(null)
    const [editSection, setEditSection] = useState({
        title: ''
    })
    const maxNumber = 1;
    const datePublished = course.released ? new Date(course.released) : ''
    const { data, setData, errors, processing } = useForm({
        category_id: course.category.id || '',
        description: description || '',
        details: '',
        highlight: false,
        level: level || '',
        section: course.chapters || [],
        skills: course.skills || [],
        status: course.status || '',
        title: title || '',
        thumbnail: '',
        topics: course.topics || [],
        publish: datePublished || '',
        video:'',
    })

    const filterConfig = {
        ignoreCase: true,
        ignoreAccents: true,
        matchFrom: 'any',
        stringify: option => `${option.label} ${option.value}`,
      }


    function addInstructor(id){
        //e.preventDefault()
        Inertia.post(route('course.instructor'), {
            course: course.id,
            instructor: id
        },
         {
            onSuccess: () => {
                modalSettings(false)
            }
        })
    }


    function afterPublish(){
        
        const now = course.released ? new Date(course.released) : new Date()
        setData('publish', now)
    }

    function closeSettings(){
        setModalSettings(false)
    }
    function editThisSection(i,section){
        setIndexSection(i)
        console.log(i)
        setEditSection(section)
        setModalEditSection(true)
    }

    function deleteInstructor(id){
        Inertia.delete(route('course.instructor.delete', id))
    }

    const [sections, setSections] = useState(course.chapters || [])

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    }

    // NEW LESSON
    const [indexSection, setIndexSection] = useState(null)

    const addLesson = (i, id) =>{
        setIndexSection(i)
        setSelection(id)
        setModalLesson(true)
    }

    const handleFileEvent =  (e,i,i2) => {
        const sections = [...data.section]
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        sections[i].lessons[i2].attachments = chosenFiles

        setData('section', sections)
        return chosenFiles
    }


    const submit = (e) =>{
       e.preventDefault()
       Inertia.post(route('course.update', course.id),{
            ...data,
            _method: 'put',
            publish: data.publish !== '' ? data.publish.toISOString().slice(0, 19).replace('T', ' ') : null
       })
    }

    // SELECT CATEGORY
    const [category,setCategory] = useState({
        label: course.category.title || '',
        id: course.category.id || '',
    })
    function onAddCategory(title){
        axios.post(route('category.store'),{
            _token: csrf,
            title: title
        })
        .then(
            res => {
                console.log(res.data)
                const created = res.data
                const newCategory = { 
                    label: created.title, id: created.id
                }
                setCategory(newCategory)
                setData('category', newCategory.id)
            }
        )
        .catch(
            err => console.log(err)
        )
    }

    function closeModal() {
        setModalLesson(false)
        setModalSection(false)
        setModalEditSection(false)
    }

    const onChange = (imageList, addUpdateIndex) => {
        const images = imageList
        setImages(images)
    
        const imagesFiles = images.map((i) => i.file)
    
        setData('thumbnail', imagesFiles)
        console.log(images)
    
      };
      

    const [skillsSelected,setSkillsSelected] = useState( 
        course.skills.map(skill => {
        return { label: skill.title, id: skill.id }
        })
        ||
        [])

    function onAddSkill(title){
        axios.post(route('skill.store'),{
            _token: csrf,
            title: title
        })
        .then(
            res => {
                console.log(res.data)
                const created = res.data
                const newSkill = { 
                    label: created.title, id: created.id
                }
                setSkillsSelected(prev => [...prev, newSkill])
                const skillsArray = skillsSelected.map(skill =>  skill.value)
                setData('skills', [...skillsArray, newSkill.id])
            }
        )
        .catch(
            err => console.log(err)
        )
    }

    function deleteSection(i,section)
    {
        setModalDelete(true)
        setSectionDelete(section)
        setIndexDelete(i)
    }

    function deleteConfirmation()
    {
        axios.delete(route('chapter.delete', sectionDelete))
        .then(res => {
            const prevSections = [...sections]
            prevSections.splice(indexDelete, 1)
            setSections(prevSections)
            setModalDelete(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        const thumb = course.thumbnail
        const {file_name,id,original_name,path,size} = thumb
        setImages([{
          data_url: path,
          file:{
            id: id,
            name: original_name,
            size: size
          }
        }])
      }, [])
    // SELECT TOPICS
    const [topicsSelected,setTopicsSelected] = useState(course.topics.map(topic => {
        return { label: topic.title, id: topic.id }
        })||[])
    const [addingTopic, setAddingTopic] = useState(false)
    const [topicError, setTopicError] = useState('')
    const [topic,setTopic] = useState({
        title: '',
        category_id : data.category_id,
        description: '',
    })
    const changeTopic = (e) => {
        setTopic(values => ({
            ...values,
            [e.target.name]: e.target.value,
        }))
    }

    const [search, setSearch] = useState('')
    const [filterInstructors, setFilterInstructors] = useState([...select_instructors])
    function searchFilter(value){
        setSearch(value)
        if (value)
        {
            const filtered = select_instructors.filter(instructor => {
                const val = value.toLowerCase()
                const name = instructor.name.toLowerCase()
                const email = instructor.email.toLowerCase()
                return name.includes(val) || email.includes(val)
            })
            console.log(filtered)
            setFilterInstructors(filtered)
        }
        if (!value) setFilterInstructors(select_instructors)
    }

    function addTopic(title){
        setAddingTopic(true)
        setTopic({
            title: title,
            category_id: data.category_id,
            description: ''
        })
    }
    function onAddTopic(){
        axios.post(route('topic.store'),{
            _token: csrf,
            title: topic.title,
            category_id: data.category_id,
            description: topic.description
        })
        .then(
            res => {
                const created = res.data
                const newTopic = {
                    label: created.title, id: created.id
                }
                const topicsArray = topicsSelected.map(topic => topic.value)
                setAddingTopic(false)
                setTopicsSelected(prev => [...prev, newTopic])
                setData('topics', [...topicsArray, newTopic.id])
                setTopic({
                    title: '',
                    category_id : '',
                    description: '',
                })
                setTopicError('')
            }
        )
        .catch(
            err => setTopicError(err.response?.data.message)
        )
    }

    function cancelPublish(){
        setData('publish', course.released ? new Date(course.released) : '')
        setModalPublish(false)
    }
    
    function publish(){
        setModalPublish(false)
        submit(document.createEvent('Event'))
    }

    function toDraft(){
        setData('publish','')
        submit(document.createEvent('Event'))
    }


    return(
        <Context.Provider 
        value={{
            selection,
            setSelection,
            course,
            csrf,
            sections,
            setSections,
            setModalSection,
            setModalLesson,
            indexSection,
            setIndexSection
        }}>
        
        <form className='' onSubmit={submit}>
        <div className='w-full bg-gray-100 sticky top-0 flex justify-end p-2 border-b border-gray-200 z-10'>
            {
                !data.publish ?
                <>
                    <button type='submit'
                    className='p-4 bg-white rounded-lg mr-2'
                    disabled={processing}
                    >
                    Save draft
                    </button>
                    <button
                    className='btn-orange'
                    disabled={processing}
                    onClick={()=>setModalPublish(true)}
                    type='button'
                    >
                        Publish
                    </button>
                </>
                :
                <>
                    <button 
                    className='p-4 bg-white rounded-lg mr-2'
                    disabled={processing}
                    onClick={toDraft} 
                    type='button'>
                        Switch to draft
                    </button>
                    <button
                    className={`btn-orange mr-2 ${
                        processing && 'opacity-25'
                    }`}
                    disabled={processing}
                    onClick={submit}
                    type='submit'>
                        Update
                    </button>
                    <button
                    className='p-4 border border-gray-200 hover:bg-gray-200 rounded-lg' 
                    onClick={()=>setModalSettings(true)}
                    type='button'>
                        <Icon className='w-4 h-6' name='settings'/>
                    </button>
                </>
            }
        </div>
        <div className='max-w-4xl mx-auto p-4'>
            <div className='text-left mb-2 bg-orange rounded-lg p-3'>
                    <TextInput
                    type="text"
                    name="title"
                    value={data.title}
                    className="text-white text-2xl p-2 bg-orange border-none w-full focus:border-none placeholder-white focus:ring-0 shadow-none"
                    isFocused={true}
                    handleChange={onHandleChange}
                    placeholder="Your course title goes here..."
                    />
                    <InputError message={errors.title} className="mt-2"/>
            </div>

            
            <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>Description</h2>
            </div>
            <div className='text-left my-4 bg-gray-100 rounded-lg p-3'>
                <textarea
                    className='w-full bg-gray-100 focus:ring-0 border-none'
                    onChange={onHandleChange}
                    name='description'
                    rows={8}
                    value={data.description}
                />
            </div>
            <div className='w-full'>
                <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>Level</h2>
                </div>
                <div className='flex flex-wrap mb-4 bg-gray-100 rounded-lg p-2'>
                    <Checkbox 
                    checked={data.level == 'All level'} text='All level'
                    onClick={()=> setData('level', 'All level')}
                    />
                    <Checkbox
                    checked={data.level == 'Begginer'} text='Begginer'
                    onClick={()=> setData('level', 'Begginer')}
                    />
                    <Checkbox
                    checked={data.level == 'Intermediate'} text='Intermediate'
                    onClick={()=> setData('level', 'Intermediate')}
                    />
                    <Checkbox 
                    checked={data.level == 'Expert'} text='Expert'
                    onClick={()=> setData('level', 'Expert')}
                    />
                </div>
            </div>
            <div className='w-full mb-4'>
                <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>Category</h2>
                </div>
                <div className='bg-gray-100 rounded-lg p-4'>
                <CreatableReactSelect
                    onCreateOption={title => {
                    onAddCategory(title)
                    }}
                    value={category}
                    options={categories.map(skill => {
                    return { label: skill.title, value: skill.id }
                    })}
                    onChange={category => {
                        setCategory(category)
                        setData('category_id', category.value)
                        setTopic(topic => ({
                            ...topic,
                            category_id: category.value
                        }))
                    }}
                    isMulti={false}
                    styles={colorSelect}
                />
                </div>
                <div>
                    <InputError message={errors.category} className="mt-2"/>
                </div>
            </div>
            
            {
                !addingTopic &&
                <div className='w-full mb-4'>
                    <div className='flex items-center mb-4'>
                        <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                        <h2 className='font-semibold'>Topics related to course</h2>
                    </div>
                    <div className='bg-gray-100 rounded-lg p-4'>
                    <CreatableReactSelect
                        onCreateOption={title => {
                        addTopic(title)
                        }}
                        value={topicsSelected.map(topic => {
                        return { label: topic.label, value: topic.id }
                        })}
                        options={topics.map(topic => {
                        return { label: topic.title, value: topic.id }
                        })}
                        onChange={topic => {
                        setTopicsSelected(
                            topic.map(topic => {
                            return { label: topic.label, id: topic.value }
                            })
                        )
                        setData('topics', topic.map(topic => {
                            return { id: topic.value, title: topic.label }
                        }))
                        }}
                        isMulti
                        styles={colorSelect}
                    />
                    </div>
                    <div>
                        <InputError message={errors.topics} className="mt-2"/>
                    </div>
                </div>
            }

            {
                addingTopic &&
                <div className='w-full mb-4'>
                    <div className='flex items-center mb-4'>
                        <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                        <h2 className='font-semibold'>Create new topic</h2>
                    </div>
                    <div className='bg-gray-100 p-4 mb-4 rounded-lg'>
                        <TextInput
                            type="text"
                            name="title"
                            value={topic.title}
                            className="mt-1 block w-full"
                            handleChange={changeTopic}
                            placeholder="Topic Title"
                        />
                        <textarea
                        name='description'
                        value={topic.description}
                        className="mt-2 block w-full border border-gray-300 focus:border-orange  focus:ring-orange focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={changeTopic}
                        placeholder="Topic description"
                        rows={6}
                        />
                    </div>
                    <div>
                        <InputError message={topicError} className="mt-2"/>
                    </div>
                    <div className='flex justify-end'>
                        <button 
                        type='button'
                        className='btn-orange mr-2'
                        onClick={onAddTopic}>Save</button>
                        <button
                        type='button' className='btn-white'>Cancel</button>
                    </div>
                </div>
            }
            <div className='w-full'>
                <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>Skills that students will learn</h2>
                </div>
                <div className='bg-gray-100 rounded-lg p-4'>
                <CreatableReactSelect
                    onCreateOption={title => {
                    onAddSkill(title)
                    }}
                    value={skillsSelected.map(skill => {
                    return { label: skill.label, value: skill.id }
                    })}
                    options={skills.map(skill => {
                    return { label: skill.title, value: skill.id }
                    })}
                    onChange={skill => {
                    setSkillsSelected(
                        skill.map(skill => {
                        return { label: skill.label, id: skill.value }
                        })
                    )
                    setData('skills', skill.map(skill => {
                        return { id: skill.value, title: skill.label }
                    }))
                    }}
                    isMulti
                    styles={colorSelect}
                />
                </div>
            </div>
            <div className='w-full my-4'>
                <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>Cover Image</h2>
                </div>
                <div>
                <ImageUploading
                    multiple={false}
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                    }) => (
                    // write your building UI
                    <div className="w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                        <div className="w-full p-4 flex justify-between items-center">
                        <div className="">
                            <h2 >Image</h2>
                        </div>
                        <div className="w-full flex justify-end">
                            <button type="button" onClick={onImageUpdate} className="p-4 mr-2 bg-white text-orange rounded-full border border-blue">
                            <Icon className="fill-current w-3 h-3" name="images" />
                            </button>
                            <button type="button" onClick={onImageRemoveAll} className="bg-white p-4 text-orange rounded-full border border-red">
                            <Icon className="fill-current w-3 h-3" name="close" />
                            </button>
                        </div>
                        </div>

                        <div className="w-full bg-white p-4 border-t" {...dragProps}>
                        {imageList.length == 0 ?
                        <div className="w-full">
                            <div className="w-full flex justify-center">
                            <div onClick={onImageUpload} className="p-8 text-gray-400 bg-gray-100 rounded-full">
                                <Icon className="fill-current w-8" name="image"/>
                            </div>
                            </div>
                            <p className="text-center text-gray-400 mt-4 select-none">Drag and drop an image, or <span className='text-orange' onClick={onImageUpload}>Browse</span></p>
                            <p className="text-center">1200 x 675 or higher recommended. Max 2MB (png, jpg )</p>
                        </div>
                        : null}
                        {imageList.map((image, index) => (
                        <div key={index} className="w-full flex items-center justify-between flex-wrap mb-2">
                            <div className="w-full md:w-1/3 flex items-center">
                            <img src={image.data_url} alt="" width="100" />
                            <div className="p-2">
                            <p className="font-semibold">{image.file.name}</p>
                            </div>
                            </div>
                            <div className="w-full md:w-1/3 flex items-center justify-center">
                            <div className="bg-blue p-2 px-6 rounded-lg">
                                <p className="text-white">{fileSize(image.file.size, true)}</p>
                            </div>
                            </div>
                            <div className="w-full md:w-1/3 flex items-center justify-end">
                            <button type="button" onClick={() => onImageUpdate(index)} className="p-4 mr-2 text-blue rounded-full border border-blue">
                                <Icon className="fill-current w-3 h-3" name="images" />
                            </button>
                            <button type="button" onClick={() => onImageRemove(index)} className="p-4 text-red rounded-full border border-red">
                                <Icon className="fill-current w-3 h-3" name="close" />
                            </button>
                            </div>
                        </div>
                        ))}
                        </div>
                    </div>
                    )}
                </ImageUploading>
                </div>
            </div>
            
            <div className='w-full'>
                <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>Content</h2>
                </div>
                {
                    sections.map((section,i) => {
                        return(
                            <SectionDropdown key={i} index={i} title={section.title} collapse={i > course.chapters.length ? true : false} lessons={section.lessons.length}>
                            <div key={i} className='mb-6 p-4 '>
                                {
                                    section.lessons.map((lesson, i2)=>{
                                        return(
                                            <LessonCreated key={i2} section={i} index={i2} lesson={lesson}/>
                                        )
                                    })
                                }
                                <div className='flex items-center justify-between mt-6'>
                                <button
                                    type='button' 
                                    className='bg-white p-4 hover:text-orange text-gray-600 hover:bg-gray-100 rounded-lg flex items-center'
                                    onClick={() => deleteSection(i,section.id)}
                                >
                                    <Icon name='trash' className='w-4 h-4 fill-current mr-2'/>
                                    <span>Delete Section</span>
                                </button>
                                <div className='flex'>
                                    <button
                                    typeof='button'
                                    className='bg-gray-100 p-4 rounded-lg mr-2'
                                    onClick={() => editThisSection(i,section)}
                                    >
                                        Edit Section
                                    </button>
                                    <button 
                                    type='button' 
                                    className='bg-black p-4 rounded-lg text-white' 
                                    onClick={() => addLesson(i, section.id)}>
                                        Add Lesson
                                    </button>
                                </div>
                                </div>
                            </div>
                            </SectionDropdown>
                        )
                    })
                }
                {
                    sections.length === 0 &&
                    <div className='bg-gray-100 p-4 text-center rounded-lg'>
                        No sections were added
                    </div>
                }

                <div className='my-4 py-2 text-right'>
                    <button 
                    type='button' 
                    className='bg-gray-100 p-4 rounded-lg'
                    onClick={() => setModalSection(true)}
                    >Add Section</button>
                </div>
            </div>

            <div>
                Attatchments
                <MultiFiles uploads={files} handleFileChange={(e) => handleFileEvent(e,i,i2)}/>
            </div>
        </div>
        </form>
        <Modal
            isOpen={modalSection}
            onRequestClose={closeModal}
            className="modal-lesson"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New Section"
        >
            <CreateSection />
        </Modal>
        <Modal
            isOpen={modalLesson}
            onRequestClose={closeModal}
            className="modal-lesson"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New Lesson"
        >
            <CreateLesson />
        </Modal>
        <Modal
            isOpen={modalEditSection}
            onRequestClose={closeModal}
            className="modal-lesson"
            overlayClassName="modal-lesson-overlay"
            contentLabel="Edit Section"
        >
            <EditSection section={editSection} onRequestClose={closeModal}/>
        </Modal>
        <Modal
            isOpen={modalDelete}
            onRequestClose={() => setModalDelete(false)}
            className="modal-lesson"
            overlayClassName="modal-lesson-overlay"
            contentLabel="Delete Section"
        >
            <div className='w-full p-4'>
                <div className='text-gray-500'>
                    <p className='text-lg font-semibold'>Are you sure you want to delete this section?</p>
                    <p>This action is irreversible</p>
                </div>
                <div className='w-full flex justify-end'>
                    <button
                    className='btn-white mr-2'
                    onClick={()=>setModalDelete(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className='btn-red'
                        onClick={deleteConfirmation}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
        <Modal
        isOpen={modalPublish}
        onAfterOpen={afterPublish}
        onRequestClose={cancelPublish}
        className="modal-publish"
        overlayClassName="modal-publish-overlay"
        contentLabel="Publish"
        >
            <div className='flex'>
                <div className='p-2 w-1/2'>
                    <button onClick={publish} className='bg-orange p-2 text-white w-full rounded-md'>Publish</button>
                </div>
                <div className='p-2 w-1/2'>
                    <button className='border p-2 w-full rounded-md' onClick={cancelPublish}>Cancel</button>
                </div>
            </div>
            <div className='p-2'>
                <h4 className='font-semibold'>Are you ready to publish?</h4>
                <p className='text-sm'>Double-check your settings before publishing.</p>
            </div>
            <div className='p-2'>
                <div>
                    <h4 className='font-semibold text-sm'>Publish:</h4>
                </div>
                    <div>
                    <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={data.publish}
                    minDate={new Date(2000, 1, 1)}
                    onChange={(date) => setData('publish', date)}
                    placeholderText="Select a date"
                    className="w-full border-gray-200 rounded-md"
                    />
                </div>
            </div>
        </Modal>
        <Modal
        isOpen={modalSettings}
        //onAfterOpen={afterPublish}
        onRequestClose={closeSettings}
        className="modal-publish"
        overlayClassName="modal-publish-overlay"
        contentLabel="Settings"
        >
            <div className='flex'>
                <div className='p-2 w-1/2'>
                    <button onClick={publish} className='bg-orange p-2 text-white w-full rounded-md'>Publish</button>
                </div>
                <div className='p-2 w-1/2'>
                    <button className='border p-2 w-full rounded-md' onClick={closeSettings}>Cancel</button>
                </div>
            </div>
            <div className='flex items-center p-2'>
                <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                <h2 className='font-semibold'>Publish date</h2>
            </div>
            <div className='p-2'>
                    <div>
                    <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={data.publish}
                    minDate={new Date(2000, 1, 1)}
                    onChange={(date) => setData('publish', date)}
                    placeholderText="Select a date"
                    className="w-full border-gray-200 rounded-md"
                    />
                </div>
            </div>
            <div className='flex items-center p-2'>
                <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                <h2 className='font-semibold'>Instructors</h2>
            </div>
            <div className='p-2'>
                <div className='relative p-2 h-10'>
                    {
                        selectedList &&
                    <div className='fixed flex h-full w-full top-0 left-0'>
                        <div className='h-full flex-1'
                        onClick={()=> {
                            setModalSettings(false)
                            setSelectedList(false)
                            }}
                            />
                        <div className='w-full h-full max-w-[400px]' 
                        onClick={()=> {setSelectedList(false)}}/>
                    </div>
                    }
                    <input
                    className='absolute top-0 left-0 w-full border border-gray-200 rounded-md p-2 z-1'
                    placeholder='Search instructor'
                    value={search} 
                    onClick={()=> {setSelectedList(true)}}
                    onChange={(e) => searchFilter(e.target.value)} />
                    
                    {
                        selectedList &&
                        <div className='direction-left absolute bg-white z-10 border rounded w-full top-14 left-0 max-h-72 overflow-hidden overflow-y-auto'>
                        {
                            filterInstructors.map(({avatar, email, name, value},i) =>
                            <div key={i} className='flex p-2 w-full hover:bg-lightGray'>
                                <div>
                                    <img src={avatar} className='rounded-full w-12'/>
                                </div>
                                <div className='p-2 flex-1'>
                                    <h3 className='font-semibold'>{name}</h3>
                                    <p className='text-xs'>{email}</p>
                                </div>
                                <div>
                                    <button
                                    className='border p-2 px-4 rounded-lg hover:bg-orange hover:text-white'
                                    type='button'
                                    onClick={() => addInstructor(value)}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        )
                        }
                        </div>
                    }
                    
                </div>
                
            </div>
            <div className='p-2'>
                <h4>{instructors.length} instructors in this course</h4>
                {
                    instructors.map(
                        (instructor,i) =>
                        <div key={i} className='flex my-4'>
                            <div>
                            <img src={instructor.avatar} className='rounded-full w-12'/>
                        </div>
                        <div className='p-2 flex-1'>
                            <h3 className='font-semibold'>{instructor.name}</h3>
                            <p className='text-xs'>{instructor.email}</p>
                        </div>
                        <div>
                            <button
                            className='border hover:bg-orange hover:text-white p-2 rounded-lg'
                            onClick={() => deleteInstructor(instructor.id)}
                            type='button'>
                                Remove
                            </button>
                        </div>
                        </div>
                    )
                }
            </div>
            <button 
            className='p-4 bg-white rounded-lg mr-2'
            disabled={processing}
            onClick={toDraft} 
            type='button'>
                Switch to draft
            </button>
            
        </Modal>
        </Context.Provider> 
    )
}

EditCourse.layout = page => <Layout title="Edit Course" children={page} />;


export default EditCourse