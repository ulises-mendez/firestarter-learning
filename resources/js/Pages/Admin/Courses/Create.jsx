import React, { useState } from 'react'
import Layout from '@/Layouts/Auth'
import { useForm, usePage } from '@inertiajs/inertia-react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import VideoUpload from '@/Components/VideoUpload'
import FileInput from '@/Components/FileInput'
import MultiFiles from '@/Components/MultiFiles'
import SectionDropdown from '@/Components/Courses/SectionDropdown'
import classNames from 'classnames'
import ImageUploading from "react-images-uploading"
import Icon from '@/Components/Icon'
import fileSize from '@/lib/fileSize'
import CreatableReactSelect from "react-select/creatable"
import axios from 'axios'
import Modal from 'react-modal'
import CreateLesson from '@/Components/Courses/CreateLesson'
import CreateSection from '@/Components/Courses/CreateSection'
import { Context } from '@/Components/Courses/Context'
import EditSection from '@/Components/Courses/ModalEditSection'
import LessonCreated from '@/Components/Courses/LessonCreated'


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

const CreateCourse = () => {
    const container = React.useRef(null)
    const playerRef = React.useRef(null)
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
        src: '/videos/01_women_lead_differently.mp4',
        type: 'video/mp4'
        }]
    }
    const { skills, csrf, categories, topics } = usePage().props
    const [images, setImages] = useState([])
    const [step,setStep] = useState(0)
    const [details, setDetails] = useState(false)
    const [content, setContent] = useState(false)
    const [sections, setSections] = useState([])
    const [modalEditSection, setModalEditSection] = useState(false)

    const [modalDelete, setModalDelete] = useState(false)
    const [sectionDelete, setSectionDelete] = useState(null)
    const [indexDelete, setIndexDelete] = useState(null)
    const [editSection, setEditSection] = useState({
        title: ''
    })

    const [modalSection, setModalSection] = useState(false)

    const stepDetails= classNames('flex items-center w-full md:w-1/2 md:border-y ',{
        'border-b-2 md:border-b-[3px] border-b-orange text-orange' : step == 0,
        'font-semibold text-gray-500' : step == 1
    })

    const stepContent= classNames('flex items-center w-full md:w-1/2 border-l border-y p-3 md:px-6 ',{
        'border-b-2 md:border-b-[3px] border-b-orange text-orange' : step == 1,
        'text-gray-400' : step == 0
    })

    function closeModal() {
        setModalLesson(false)
        setModalSection(false)
        setModalEditSection(false)
    }

    const { data, setData, errors, post, processing } = useForm({
        title: '',
        level: '',
        details: '',
        video:'',
        skills: [],
        category_id: '',
        topics:[],
        topic_id: '',
        thumbnail: null,
        section: [],
        highlight: false
    })

    const addSection = () => {
        const sections = [...data.section]

        setData('section', sections.concat({title:'', lessons: []}))
    }

    function deleteSection(i,section)
    {
        setModalDelete(true)
        setSectionDelete(section)
        setIndexDelete(i)
    }

    function editThisSection(i,section){
        setIndexSection(i)
        console.log(i)
        setEditSection(section)
        setModalEditSection(true)
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

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
    }


    const onChange = (imageList, addUpdateIndex) => {
        const images = imageList
        setImages(images)
    
        const imagesFiles = images.map((i) => i.file)
    
        setData('thumbnail', imagesFiles)
        console.log(images)
    
    }
    
    const submit = (e) =>{
        e.preventDefault()
        post(route('course.store'))
    }

    // SELECT SKILLS
    const [skillsSelected,setSkillsSelected] = useState([])
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

    // SELECT CATEGORY
    const [category,setCategory] = useState(null)
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

    // SELECT TOPICS
    const [topicsSelected,setTopicsSelected] = useState([])
    const [addingTopic, setAddingTopic] = useState(false)
    const [topicError, setTopicError] = useState('')
    const [topic,setTopic] = useState({
        title: '',
        category_id : data.category_id,
        description: '',
    })
    console.log(data.topics)
    const changeTopic = (e) => {
        setTopic(values => ({
            ...values,
            [e.target.name]: e.target.value,
        }))
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

    const [course, setCourse] = useState({
        id: 0,
        category: 1,
        created_at: "2022-12-02T03:49:34.000000Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra finibus ex, ut ornare diam tristique at. Praesent finibus vestibulum odio in egestas. Mauris a ex faucibus, tincidunt sem id, vehicula velit.",
        details: null,
        highlight: "0",
        level: "Begginer",
        slug: "test01dec-2",
        thumbnail: {
            created_at: '2022-12-02T04:07:14.000000Z',
            created_by:5,
            filename:'phpE4P75I',
            id: 20,
            original_name: 'excel.jpeg',
            path: '/storage/thumbnails/juXoQ2ln98vwbmgAjN8wr16yir62RUZ0c31wsWfa.jpg',
            size: 15632
        },
        skills : [
            {
                id: 0,
                title: 'Skill',
            }
        ],
        topics : [
            {
                id: 0,
                title: 'Topics',
            }
        ],
        title: "Title",
        updated_at: "2022-12-02T03:49:34.000000Z"
    })
    // STEP 2
    function nextStep(){
       var formData = new FormData()
       formData.append('title', data.title)
       formData.append('description', data.description)
       formData.append('highlight', data.highlight == true ? 1: 0)
       formData.append('level', data.level)
       formData.append('category_id', data.category_id)
       formData.append('thumbnail[0]', data.thumbnail[0])
       data.topics.map((topic,i) =>
        formData.append(`topics[${i}]`, topic)
       )
       data.skills.map((skill,i) =>
       formData.append(`skills[${i}]`, skill)
       )
        axios.post(route('course.store'),formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=> {
            setStep(1)
            setCourse(res.data.course)
        })
        .catch(err => console.log(err))
    }



    const videoChange = (e) => {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setNewLesson({
            ...newLesson,
            video: {
                file: file,
                url: url
            }
        })
    }

    // NEW LESSON
    const [modalLesson, setModalLesson] = useState(false)
    const [indexSection, setIndexSection] = useState(null)
    const [sectionSelect, setSectionSelect] = useState(null)

    const addLesson = (i,id) =>{
        setIndexSection(i)
        setSectionSelect(id)
        setModalLesson(true)
    }

    return(
        <Context.Provider 
        value={{
            course,
            csrf,
            sections,
            setSections,
            setModalSection,
            setModalLesson,
            sectionSelect,
            setSectionSelect,
            indexSection,
            setIndexSection
        }}>
        <div ref={container} className='max-w-4xl sticky mx-auto  flex flex-wrap my-2'>
            <div className={stepDetails}>
                <div className='relative w-full flex items-center p-3'>
                    <div className='hidden md:block w-4 h-4 absolute bg-white border-r border-t top-1/2 -right-2 -translate-y-1/2 rotate-45'/>
                    <div className='mr-2'>
                        {
                            step == 0 ? 
                            <div className='bg-orange text-white rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center px-2 font-semibold'>
                            <p>1</p>
                            </div>
                            : 
                            <div className='bg-orange text-white rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center'>
                            <Icon name='check' className='fill-current w-4 h-4'/>
                            </div>
                        }
                    </div>
                    <div>
                        Course details
                    </div>
                </div>
            </div>
            <div className={stepContent}>
                <div className='mr-2'>
                    {
                        step == 1 ?
                        <div className='bg-orange text-white rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center'>
                            <p className='font-semibold'>2</p>
                        </div>
                        :
                        <div className='border border-gray-400 text-gray-400 rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center'>
                            <p className='font-semibold'>2</p>
                        </div>
                        }
                </div>
                <div>
                    Course content
                </div>
            </div>
        </div>
        {
        step === 0 &&
        <form className='p-4' onSubmit={submit}>
        <div className='max-w-4xl mx-auto'>
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
                    <InputError message={errors.title} className="mt-2 text-white"/>
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
                    placeholder="Type description here..."
                    value={data.description}
                />
            </div>
            <div>
                <InputError message={errors.description} className="mt-2"/>
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
            <div>
                <InputError message={errors.level} className="mt-2"/>
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
                            return topic.value
                        }))
                        }}
                        isMulti
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
                        return skill.value
                    }))
                    }}
                    isMulti
                />
                </div>
                <div>
                    <InputError message={errors.skills} className="mt-2"/>
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
                    maxNumber={1}
                    dataURLKey="data_url"
                >
                    {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                    }) => (
                    // write your building UI
                    <div className={`w-full rounded-xl  border-gray-200 ${isDragging ? 'bg-gray-100' : 'bg-white'}`}>
                        <div className="w-full p-4" {...dragProps}>
                        {imageList.length == 0 ?
                            <div className="w-full">
                                <div className="w-full flex justify-center">
                                <div onClick={onImageUpload} className="cursor-pointer p-8 text-gray-400 bg-white rounded-full">
                                    <Icon className="fill-current w-8" name="image"/>
                                </div>
                                </div>
                                <p className="text-center text-gray-600 mt-4 select-none">Drag and drop an image, or <button type='button' className='text-orange cursor-pointer' onClick={onImageUpload}>Browse</button></p>
                                <p className="text-center text-gray-400">1200 x 675 or higher recommended. Max 2MB (png, jpg )</p>
                                
                            </div>
                        : null}
                        {imageList.map((image, index) => (
                        <div key={index}>
                            <div className='flex flex-wrap justify-center items-end'>
                                    <div className='w-full md:w-80'>
                                        <img 
                                        src={image.data_url}/>
                                    </div>
                                    <div className='py-1 px-3 w-full md:w-auto'>
                                        <h4 className='font-semibold mb-2'>{image.file.name}</h4>
                                        <p className='text-gray-500 mb-4'>Size: {fileSize(image.file.size, true)}</p>
                                        <div className='flex'>
                                        <button type="button" onClick={() => onImageUpdate(index)} className="flex items-center py-2 px-4 mr-2 rounded-lg border bg-gray-50">
                                            <Icon className="fill-current w-4 h-4 mr-2" name="images" />
                                            <span>Change Image</span>
                                        </button>
                                        <button type="button" onClick={() => onImageRemove(index)} className="p-4 text-white rounded-lg border border-red-500 bg-red-600">
                                            <Icon className="fill-current w-2 h-2" name="close" />
                                        </button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ))}
                        </div>
                    </div>
                    )}
                </ImageUploading>
                </div>
                <div>
                <InputError message={errors.thumbnail} className="mt-2"/>
                </div>
            </div>

            <div className='w-full max-w-4xl mx-auto flex justify-end'>
                <button type='submit' className='p-2 px-4 bg-gray-50 hover:shadow-md mr-2'>Save as Draft</button>
                <button type='button' onClick={nextStep} className='btn-orange'>Continue</button>
            </div>
        </div>
        </form>
        }
        {
            step === 1 &&
            <div className='w-full max-w-4xl mx-auto px-2'>
                <div className='bg-orange bg-opacity-10 rounded-lg p-4'>
                    <h2>Course has been storage has draft</h2>
                </div>
                <div className='w-full'>
                    <div className='flex items-center mb-4'>
                        <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                        <h2 className='font-semibold'>Course Info</h2>
                    </div>
                    <div className='mb-6 rounded-lg p-4 text-right bg-gray-100 flex flex-wrap'>
                        <div className='w-full flex justify-end'>
                            <span className='mr-2'>Highlight</span>
                            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" checked={true} onChange={()=> null} id="default-toggle" className="sr-only peer"/>
                                <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
                            </label>
                        </div>
                        <div className='w-64'>
                            <img  src={course.thumbnail.path} />
                        </div>
                        <div className='px-4 text-left flex-1'>
                            <p className='text-xs text-gray-600 '>Title:</p>
                            <h3 className='font-semibold text-lg'>{course.title}</h3>
                            <p className='text-xs text-gray-600 '>Slug:</p>
                            <h3 className='font-semibold text-sm'>{course.slug}</h3>
                            <p className='text-xs text-gray-600 '>Category:</p>
                            <h3 className='font-semibold'>Training and skills</h3>
                            <p className='text-xs text-gray-600 '>Level:</p>
                            <h3 className='font-semibold'>{course.level}</h3>
                        </div>
                        <div className='w-full text-left'>
                        <p className='text-xs text-gray-600 '>Description:</p>
                            <h3 className='font-semibold text-sm'>{course.description}</h3>
                            <p className='text-xs text-gray-600 mb-1'>Topics:</p>
                            <div className='flex flex-wrap'>
                                {
                                    course.topics.map(topic => (
                                        <div key={topic.id} className='p-2 border rounded-lg bg-white font-semibold text-sm'>
                                            {topic.title}
                                        </div>
                                    ))
                                }
                            </div>
                            <p className='text-xs text-gray-600 mb-1'>Skills:</p>
                            <div className='flex flex-wrap'>
                                {
                                    course.skills.map(skill => (
                                        <div key={skill.id} className='p-2 border rounded-lg bg-white font-semibold text-sm'>
                                            {skill.title}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <button type='button' className='bg-black font-semibold px-4 p-2 rounded-lg text-white'>Edit Course Info</button>
                        </div>
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
                                <SectionDropdown key={i} index={i} title={section.title} collapse={true} lessons={section.lessons.length}>
                                <div key={i} className=' rounded-b-lg md:px-4 pb-4 text-right'>
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
                        <div className='bg-gray-100 p-4 text-center text-gray-400 rounded-lg'>
                            No sections were added
                        </div>
                    }
                    <div className='my-4 py-2 text-center'>
                        <button type='button' className='bg-black text-white font-semibold p-4 px-10 rounded-lg' onClick={() => setModalSection(true)}>Add Section</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        }
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
            isOpen={modalSection}
            onRequestClose={closeModal}
            className="modal-lesson"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New category"
            >
                <CreateSection />
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
            isOpen={modalEditSection}
            onRequestClose={closeModal}
            className="modal-lesson"
            overlayClassName="modal-lesson-overlay"
            contentLabel="Edit Section"
        >
            <EditSection section={editSection} onRequestClose={closeModal}/>
        </Modal>
        </Context.Provider>
    )
}

CreateCourse.layout = page => <Layout title="Create Course" children={page} />


export default CreateCourse