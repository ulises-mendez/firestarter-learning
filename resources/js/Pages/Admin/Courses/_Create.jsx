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
    const { skills, csrf } = usePage().props
    const [files, setFiles] = useState([])
    const [images, setImages] = useState([])
    const maxNumber = 1;

    const { data, setData, errors, post, processing } = useForm({
        title: '',
        level: '',
        details: EditorState.createEmpty(),
        video:'',
        skills: [],
        category_id: 1,
        topic_id: 1,
        section: [],
    })

    const addSection = () => {
        const sections = [...data.section]

        setData('section', sections.concat({title:'', lessons: []}))
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    }



    const sectionTitle = (e,i) => {
        const value = e.target.value
        const sections = [...data.section]
        sections[i].title = value
        setData(`section` , sections)
    }

    const lessonTitle = (e,i,i2) => {
        const value = e.target.value
        const sections = [...data.section]
        sections[i].lessons[i2].title = value
        setData(`section` , sections)
    }

    const addLesson = (i) =>{
        const sections = [...data.section]
        const section = sections[i]
        const concat = section.lessons.concat({
            title:'',
            video: {
            file:'',
            url: '',
            },
            attachments: ''
        })

        sections[i].lessons = concat
        
        setData('section', sections)
    }

    const handleVideoChange = (e,i,i2) => {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        const sections = [...data.section]
        sections[i].lessons[i2].video.file = file
        sections[i].lessons[i2].video.url = url

        setData('section', sections)
    }

    const fileChange = (e,i,i2) => {
        const sections = [...data.section]
        const file = e.target.files[0]
        sections[i].lessons[i2].transcription = file

        setData('section', sections)
    }

    const handleFileEvent =  (e,i,i2) => {
        const sections = [...data.section]
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        sections[i].lessons[i2].attachments = chosenFiles

        setData('section', sections)
        return chosenFiles
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

    const [skillsSelected,setSkillsSelected] = useState([])


    function onAddTag(title){
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
        //const newSkill = 
        //setSkillsSelected(prev => [...prev, newSkill])
        console.log(title)
    }

    console.log(data)
    return(
        <>
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
            <div className='w-full'>
                <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>Content</h2>
                </div>
                {
                    data.section.map((section,i) => {
                        return(
                            <SectionDropdown key={i} index={i} title={section.title} collapse={true}>
                            <div key={i} className='mb-6 rounded-b-lg shadow-md p-4 text-right bg-gray-100'>
                                <div className='text-left my-2'>
                                    <div className='flex items-center mb-2'>
                                        <InputLabel forInput="title" value="Section title"/>
                                    </div>
                                    
                                    <TextInput
                                        type="text"
                                        name="title"
                                        value={section.title}
                                        className="mt-1 block w-full"
                                        handleChange={e => sectionTitle(e,i)}
                                    />
                                        <InputError message={errors.section} className="mt-2"/>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-black h-0.5 w-full'/>
                                    <div className='p-2 px-4 text-center text-white bg-black rounded-lg'>Lessons</div>
                                    <div className='bg-black h-0.5 w-full'/>
                                </div>
                                {
                                    section.lessons.map((lesson, i2)=>{
                                        return(
                                            <div key={i2} className='bg-white shadow-sm p-2 my-8 rounded-lg text-left'>
                                                <div className='text-left my-2'>
                                                    <InputLabel forInput="title" value="Lesson Title"/>
                                                    <TextInput
                                                        type="text"
                                                        name="title"
                                                        value={lesson.title}
                                                        className="mt-1 block w-full"
                                                        handleChange={(e)=>lessonTitle(e,i,i2)}
                                                    />
                                                    <InputError message={errors.lesson} className="mt-2"/>
                                                </div>
                                                <div className='flex items-end mb-2'>
                                                    <div className='bg-gray-100 rounded-t-lg px-3 text-center text-black'>Video</div>
                                                    <div className='bg-gray-100 h-0.5 w-full'/>
                                                </div>
                                                <div className='text-left my-2'>
                                                    <VideoUpload handleFileChange={(e) => handleVideoChange(e,i,i2)} source={lesson.video.url}/>
                                                </div>
                                                <div className='flex items-end my-2'>
                                                    <div className='bg-gray-100 rounded-t-lg px-3 text-center text-black'>Transcription</div>
                                                    <div className='bg-gray-100 h-0.5 w-full'/>
                                                </div>
                                                <div>
                                                    <FileInput handleFileChange={(e) => fileChange(e,i,i2)} source={lesson.transcription}/>
                                                </div>
                                                <div className='flex items-end my-2'>
                                                    <div className='bg-gray-100 rounded-t-lg px-3 text-center text-black'>Attatchments</div>
                                                    <div className='bg-gray-100 h-0.5 w-full'/>
                                                </div>
                                                <div>
                                                    <MultiFiles uploads={lesson.attachments} handleFileChange={(e) => handleFileEvent(e,i,i2)} i={i} i2={i2} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                                <button type='button' className='bg-black p-4 rounded-lg text-white' onClick={() => addLesson(i)}>Add Lesson</button>
                            </div>
                            <div>
                                Delete
                            </div>
                            </SectionDropdown>
                        )
                    })
                }
                {
                    data.section.length === 0 &&
                    <div className='bg-gray-100 p-4 text-center rounded-lg'>
                        No sections were added
                    </div>
                }

                <div className='my-4 py-2 text-right'>
                    <button type='button' className='bg-gray-100 p-4 rounded-lg' onClick={addSection}>Add Section</button>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex items-center mb-4'>
                    <div className="h-4 w-2 rounded-r bg-orange mr-2"/>
                    <h2 className='font-semibold'>What students will learn</h2>
                </div>
                <div>
                <CreatableReactSelect
                    onCreateOption={title => {
                    onAddTag(title)
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
                    <div className={`w-full rounded-xl bg-gray-100 border-gray-200 ${isDragging ? 'bg-gray-100' : 'bg-white'}`}>
                        <div className="w-full p-4" {...dragProps}>
                        {imageList.length == 0 ?
                            <div className="w-full">
                                <div className="w-full flex justify-center">
                                <div onClick={onImageUpload} className="cursor-pointer p-8 text-gray-400 bg-white rounded-full">
                                    <Icon className="fill-current w-8" name="image"/>
                                </div>
                                </div>
                                <p className="text-center text-gray-400 mt-4 select-none">Drag and drop an image, or <span className='text-orange cursor-pointer' onClick={onImageUpload}>Browse</span></p>
                                <p className="text-center">1200 x 675 or higher recommended. Max 2MB (png, jpg )</p>
                                
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
                                        <button type="button" onClick={() => onImageUpdate(index)} className="flex items-center py-2 px-4 mr-2 text-blue rounded-lg border bg-gray-50">
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
            <div>
                Attatchments
                <MultiFiles uploads={files} handleFileChange={(e) => handleFileEvent(e,i,i2)}/>
            </div>
            <div className='w-full max-w-lg mx-auto flex justify-center'>
                <button className='btn-orange w-full'>Save</button>
            </div>
        </div>
        
        </form>
        
        </>
    )
}

CreateCourse.layout = page => <Layout title="Create Course" children={page} />;


export default CreateCourse