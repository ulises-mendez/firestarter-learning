import React, { useEffect, useState, Fragment } from 'react'
import Layout from '@/Layouts/Auth'
import Icon from '@/Components/Icon'
import classNames from 'classnames'
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react'
import fileSize from '@/lib/fileSize'
import ImageUploading from "react-images-uploading"
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput'
import Section from '@/Components/Courses/Section'
import axios from 'axios'
import WorkExperience from '@/Components/Curriculum/WorkExperience'
import { Context } from '@/Components/Curriculum/Context'
import Profile from '@/Components/Curriculum/Profile'
import UserEducation from '@/Components/Curriculum/UserEducation'
import SelectYear from '@/Components/SelectYear'
import SelectCountry from '@/Components/SelectCountry'
import UserSkill from '@/Components/Curriculum/UserSkill'
import Modal from 'react-modal'

Modal.setAppElement('*')
const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Curriculum = () =>{
    const { avatar, profile, user_works, csrf, user_skills, user_education } = usePage().props
    const {data, setData, errors, post} = useForm({
        avatar: '' 
    })
    const [avatarModal,setAvatarModal] = useState(false)
    const [education, setEducation] = useState(user_education || [])
    const [images, setImages] = useState([])
    const [errorMsg, setErrorMsg] = useState({})
    const {menu, setMenu} = useState(false)
    const [userProfile, setUserProfile] = useState(profile || {})
    const [changeProfile, setChangeProfile] = useState(false)
    const [works, setWorks] = useState(user_works || [])
    const [addEducation, setAddEducation] = useState(false)
    const [newEducation, setNewEducation] = useState({
        level: '',
        field: '',
        school: '',
        location:'',
        from_month:'',
        from_year: '',
        currently: false,
        to_month:'',
        to_year: '',
    })

    const onChange = (imageList, addUpdateIndex) => {
        const images = imageList
        setImages(images)
    
        const imagesFiles = images.map((i) => i.file)
    
        setData('avatar', imagesFiles)
        console.log(images)
    
    }

    function saveEducation(){
        axios.post(route('education.store'),{
            _token: csrf,
            level: newEducation.level,
            field: newEducation.field,
            college: newEducation.college,
            city: newEducation.city,
            from_month: newEducation.from_month,
            from_year:  newEducation.from_year,
            currently: newEducation.currently,
            to_month: newEducation.to_month,
            to_year: newEducation.to_year
        })
        .then(
            res => {
                const educationArray = [...education]
                setEducation(
                    educationArray.concat(newEducation)
                )
                console.log(res)
                setAddEducation(false)
                setNewEducation({
                    level: '',
                    field: '',
                    college: '',
                    city:'',
                    from_month:'',
                    from_year: '',
                    currently: false,
                    to_month:'',
                    to_year: ''
                })
                setErrorMsg({})
            }
        )
        .catch(err => setErrorMsg(err.response.data.errors))
    }
    function CancelAddEducation(){
        setAddEducation(false)
        setNewEducation({
            level: '',
            field: '',
            school: '',
            location:'',
            fromMonth:'',
            fromYear: '',
            currently: false,
            toMonth:'',
            toYear: ''
        })
    }


    // SKILLS
    const [skills, setSkills] = useState(user_skills || [])
    const [addSkill, setAddSkill] = useState(false)
    const [newSkill, setNewSkill] = useState({
        name: '',
        years: '',
    })
    function saveSkill(){
        //const skillsArray = [...skills]
        //setSkills(skills.concat(newSkill))
        //setAddSkill(false)
        
        axios.post(route('users_kill.store'),{
            name: newSkill.name,
            years: newSkill.years
        })
        .then( res =>{
            const skillsArray = [...skills]
            const skillAdded = res.data.skill
            skillsArray.concat(skillAdded)
            setSkills(skillsArray)

            setNewSkill({
                name: '',
                years: '',
            })
            })
        .catch(res => console.log(res))

        /*
        setNewSkill({
            skill: '',
            experience: '',
        })
        */
    }
    function CancelAddSkill(){
        setAddSkill(false)
        setNewSkill({
            skill: '',
            experience: '',
        })
    }
    const [changeCountryWork, setChangeCountryWork] = useState(false)
    const [addWork, setAddWork] = useState(false)
    const [newWork, setNewWork] = useState({
        title: '',
        company: '',
        country: userProfile.country || '',
        city:'',
        from_month:'',
        from_year: '',
        currently: false,
        to_month:'',
        to_year: '',
        description: ''
    })

    function saveWork(){   
        axios.post(route('work.store'),{
            _token: csrf,
            user_id: newWork.id,
            title: newWork.title,
            company: newWork.company,
            country: newWork.country,
            city: newWork.city,
            from_month: newWork.from_month,
            from_year: newWork.from_year,
            currently: newWork.currently,
            to_month: newWork.to_month,
            to_year: newWork.to_year,
            description : newWork.description
        }).then(
            res => {
                    const workItems = [...works]
                    const workItem = res.data.work
                    setWorks(workItems.concat(workItem))
                    setErrorMsg({})
                    setAddWork(false)
                    setNewWork({
                        title: '',
                        company: '',
                        country: '',
                        city:'',
                        fromMonth:'',
                        fromYear: '',
                        currently: false,
                        toMonth:'',
                        toYear: '',
                        description: ''
                    })
                }
        ).catch(err => setErrorMsg(err.response.data.errors))
    }

    function CancelAdd(){
        setAddWork(false)
        setNewWork({
            title: '',
            company: '',
            country: '',
            city:'',
            fromMonth:'',
            fromYear: '',
            currently: false,
            toMonth:'',
            toYear: '',
            description: ''
        })
    }
    function setNewWorkValue(name,value){
        setNewWork(values => ({
          ...values,
          [name]: value
        })
        );
    }
    function setDataEducation(name,value){
        setNewEducation(values => ({
          ...values,
          [name]: value
        })
        );
    }
    function setDataSkill(name,value){
        setNewSkill(values => ({
          ...values,
          [name]: value
        })
        );
    }

    const getWorks = async () =>{
        const res = await axios.get(route('user.works'))
        setWorks(res.data)
    }

    function onAvatarChange(e){
        e.preventDefault()
        post(route('avatar'), {
            onSuccess: () =>{
                setAvatarModal(false)
            }
        })
    }

    useEffect(() => {
        const {id,name,path,size} = avatar
        setImages([{
          data_url: path,
          file:{
            id: id,
            name: name,
            size: size
          }
        }])
      }, [])

    return(
        <Context.Provider 
        value={{
            csrf,
            works,
            setWorks,
            getWorks,
            setUserProfile,
            setChangeProfile,
            addEducation,
            setAddEducation,
            education, 
            setEducation,
            newEducation,
            setNewEducation,
            saveEducation,
            skills,
            setSkills,
        }}>
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto w-full max-w-4xl  p-10 border rounded-lg'>
                {
                    !changeProfile &&
                    <div>
                        <div className='flex justify-between'>
                            <div>
                                <div className='relative rounded-full w-16 group cursor-pointer overflow-hidden' onClick={()=> setAvatarModal(true)}>
                                    <img src={avatar.path} className='w-full'/>
                                    <div className='bg-white bg-opacity-60 bottom-1 w-full absolute text-xs text-center select-none text-gray-500 opacity-0 group-hover:opacity-100'>Change Avatar</div>
                                </div>
                                <h1 className='text-xl font-semibold'>{userProfile.name}</h1>
                            </div>
                            <div className='flex'>
                                <div onClick={() => setChangeProfile(true)} className='cursor-pointer hover:bg-gray-100 rounded-full w-8 h-8 p-2'>
                                    <Icon name="edit" className='w-full'/>
                                </div>
                                <div className='cursor-pointer hover:bg-gray-100 rounded-full w-8 h-8 p-2'>
                                    <a href='/download'>
                                        <Icon name="download" className='w-full'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-semibold text-xs uppercase'>{userProfile.headline}</p>
                            <p>{userProfile.street}, {userProfile.city}. {userProfile.postal_code}</p>
                        </div>
                        <div>
                            <h2 className='font-semibold my-2'>About Me</h2>
                            <p>{userProfile.description}</p>
                        </div>
                    </div>
                }
                {
                    changeProfile &&
                    <div>
                        <Profile/>
                    </div>
                }
                <div>
                    <div>
                        
                    </div>
                    <div className='border-b border-orange py-2 my-4 flex justify-between items-center px-2'>
                        <div>
                            <p className='text-gray-500'>Work Experience</p>
                        </div>
                        <div 
                            className='text-orange border border-orange cursor-pointer rounded-full p-1 hover:bg-gray-100'
                            onClick={() => setAddWork(!addWork)}>
                            <Icon name='plus' className='w-3 h-3 fill-current'/>
                        </div>
                    </div>
                    {
                        addWork &&
                        <div className='px-4'>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Job title - required"
                        value={newWork.title}
                        onChange={e => setNewWorkValue('title', e.target.value)}
                        />
                        <InputError message={errorMsg.title} className="mt-2"/>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Company"
                        value={newWork.company}
                        onChange={e => setNewWorkValue('company', e.target.value)}
                        />
                            <InputError message={errorMsg.company} className="mt-2"/>
                            {
                            !changeCountryWork &&
                            <div className='my-4'>
                                <p className='font-semibold'>City - {newWork.country} (<span className='text-orange cursor-pointer' onClick={()=> setChangeCountryWork(!changeCountryWork)}>Change Country</span>)</p>
                                <p className='text-xs'>e.g. Toronto, ON</p>
                            </div>
                        }
                            {
                            changeCountryWork &&
                            <div className='text-left mb-4'>
                            <SelectCountry 
                            label='Country'
                            value={newWork.country}
                            name='country'
                            errors={errorMsg.country}
                            onChange={e => setNewWorkValue('country', e.target.value)}
                            style={{ border: '1px solid #d1d5db' }}
                            />
                        </div>
                        }
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="City"
                        value={newWork.city}
                        onChange={e => setNewWorkValue('city', e.target.value)}
                        />
                            <InputError message={errorMsg.city} className="mt-2"/>

                        <h4 className='font-semibold my-4'>Time period</h4>
                        <div className="flex items-center mr-2" onClick={() => setNewWorkValue('currently', !newWork.currently)}>
                            <Checkbox checked={newWork.currently ? true : false}/><span className="ml-2">I currently work here</span>
                        </div>
                        <InputLabel forInput="from" value="From"/>
                        
                        <div className='flex items-start'>
                                <SelectInput
                                value={newWork.from_month}
                                onChange={(e) => setNewWorkValue('from_month', e.target.value)}
                                className="w-40"
                                style={{ backgroundColor: '#fff' }}
                                name="from_month">
                                    <option value=""></option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </SelectInput>
                            <SelectYear
                                value={newWork.from_year}
                                className="w-28 ml-2"
                                onChange={(e) => setNewWorkValue('from_year', e.target.value)}
                                name="from_year"
                            />
                        </div>
                        <div>
                            <InputError message={errorMsg.from_month} className="mt-2"/>
                            <InputError message={errorMsg.from_year} className="mt-2"/>
                        </div>
                        {
                            !newWork.currently &&
                            <>
                            <InputLabel forInput="to" value="To"/>
                            <div className='flex items-start mt-2'>
                            <SelectInput
                            value={newWork.to_month}
                            onChange={(e) => setNewWorkValue('to_month', e.target.value)}
                            className="w-40"
                            style={{ backgroundColor: '#fff' }}
                            name="to_month">
                                <option value=""></option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </SelectInput>
                            <SelectYear
                                value={newWork.to_year}
                                className="w-28 ml-2"
                                onChange={(e) => setNewWorkValue('to_year', e.target.value)}
                                name="to_year" 
                            />
                            </div>
                            <InputError message={errorMsg.to_month} className="mt-2"/>
                            <InputError message={errorMsg.to_year} className="mt-2"/>
                        </>
                        }
                        <div>
                            <p className='mt-2 font-semibold'>Description</p>
                            <textarea className='w-full border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange' 
                            value={newWork.description}
                            onChange={(e) => setNewWorkValue('description', e.target.value)} />
                                <InputError message={errorMsg.description} className="my-2"/>

                        </div>
                        <div className='flex my-2'>
                            <button onClick={saveWork} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                            <button onClick={CancelAdd} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                        </div>
                    </div>
                    } 
                    <div>
                        {
                            works.map(({id, title, company_name, country, city, currently, description, from_month, from_year, to, to_month, to_year}, i) => {
                                return(
                                    <WorkExperience
                                        i={i}
                                        key={i}
                                        id={id}
                                        company_name={company_name}
                                        country={country}
                                        city={city}
                                        title={title}
                                        currently={currently}
                                        description={description}
                                        from_month={from_month}
                                        from_year={from_year}
                                        to_month={to_month}
                                        to_year={to_year}
                                        />
                                )
                            })
                        }
                    </div>
                    <div>
                        {
                            works.length == 0 &&
                            <>
                            {
                                !addWork &&
                                <div>
                                <p className='text-gray-600 text-sm'>Adding as much detail as possible here can help your resume stand out from other candidates. The more information, the better!</p>
                                <button type='button' className='flex bg-white hover:bg-gray-100 text-orange p-2 rounded-full items-center' onClick={() => setAddWork(!addWork)}>
                                    <div className='border border-current rounded-full p-1 mr-2'
                                    >
                                        <Icon name='plus' className='w-3 h-3 fill-current'/>
                                    </div>
                                    <p>Add your work experience</p>
                                </button>
                                </div>
                            }
                            </>
                        }
                    </div>
                </div>
                <UserEducation />
                <div>
                    <div className='border-b border-orange py-2 my-4 flex justify-between items-center px-2'>
                        <div>
                            <p className='text-gray-500'>Skills</p>
                        </div>
                        <div className='text-orange border border-orange rounded-full p-1'
                            onClick={() => setAddSkill(!addSkill)}>
                            <Icon name='plus' className='w-3 h-3 fill-current'/>
                        </div>
                        
                    </div>
                    {
                        addSkill &&
                        <div className='px-4'>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Skill"
                        value={newSkill.name}
                        onChange={e => setDataSkill('name', e.target.value)}
                        />
                        <SelectInput
                            value={newSkill.years}
                            label="Years of experience"
                            className="w-full"
                            onChange={(e) => setDataSkill('years', e.target.value)}
                            name="years">
                            <option value=""></option>
                            <option value="0">Less than 1 year</option>
                            <option value="1">1 year</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="4">4 years</option>
                            <option value="5">5 years</option>
                            <option value="6">6 years</option>
                            <option value="7">7 years</option>
                            <option value="8">8 years</option>
                            <option value="9">9 years</option>
                            <option value="10">10+ years</option>
                            </SelectInput>
                            <div className='flex my-2 mt-4'>
                                <button onClick={saveSkill} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                                <button onClick={CancelAddSkill} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                            </div>
                        </div>
                        }
                        {
                            skills.map(({id, name, years}, i) => {
                                return(
                                    <UserSkill
                                        i={i}
                                        id={id}
                                        key={i}
                                        name={name}
                                        years={years}
                                    />
                                )
                            })
                        }
                </div>
            </div>
        </div>
        <Modal
        isOpen={avatarModal}
        onRequestClose={() => setAvatarModal(false)}
        className="modal-collections"
        overlayClassName="modal-lesson-overlay"
        contentLabel="Change avatar"
        >
            <div className='w-full max-w-2xl bg-orange text-white p-3 flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Avatar image</h2>
                    <button onClick={() => setAvatarModal(false)} className='cursor-pointer mr-2'>
                        <Icon name='close' className='w-3 h-3 fill-white'/>
                    </button>
            </div>
            <div className='w-full p-4 bg-white'>
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
                            <div className='flex flex-wrap justify-center items-end w-full'>
                                    <div className='w-full md:w-40'>
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
                
                <form onSubmit={onAvatarChange}>
                <div>
                <InputError message={errors.avatar} className="mt-2"/>
                </div>
                <div className='text-right'>
                    <button type='button' className='btn-white mr-2' onClick={()=>setAvatarModal(false)}>Cancel</button>
                    <button type='submit' className='btn-orange'>Upload Avatar</button>
                </div>
                </form>
            </div>
        </Modal>
        </Context.Provider>    
    )
}

Curriculum.layout = page => <Layout title="My Resume" children={page} />;


export default Curriculum;