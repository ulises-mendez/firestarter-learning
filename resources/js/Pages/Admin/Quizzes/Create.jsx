import React, { useRef, useState, Fragment } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react'
import axios from 'axios'
import Icon from '@/Components/Icon'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import Layout from '@/Layouts/Auth'
import Modal from 'react-modal'
import TextArea from '@/Components/TextArea'
import TextareaAutosize from 'react-textarea-autosize'
import Select from 'react-select'
Modal.setAppElement('#app')

const Category = () =>{
    const {courses, } = usePage().props
    const [chapters, setChapters] = useState(null)
    const [chapterSelected, setChapterSelected] = useState(null)
    const [courseSelected, setCourseSelected] = useState(null) 

    const {data, setData, errors, clearErrors, setError, post, put} = useForm({
        source: 'create',
        course: null,
        chapter: null,
        text: '',
        newQuiz: [

        ],
    })
    const [deleteQuestionId, setDeleteQuestionId] = useState(null)
    const [edit,setEdit] = useState(null)
    const [modalDelete, setModalDelete] = useState(false)
    const [newQuestion, setNewQuestion] = useState({
        text: '',
        section: '',
        options: [
            {
                value: 0,
                text: '',
                message: ''
            }
        ]
    })
    const [newQuestionError, setNewQuestionError] = useState([])
    const [newQuestionModal, setNewQuestionModal] = useState(false)
    function addNewQuestionOption()
    {
        const options = [...newQuestion.options]
        
        setNewQuestion({
            ...newQuestion,
            options: options.concat({
                value: 0,
                text: '',
                message: ''
            })
        })
    }
    function addQuestion(){
        const quiz = [...data.newQuiz]
        const options = newQuestion.options
        var answer = false
        var errors = []

        options.map((option, i) => {
            if(option.text == '')
            {
                errors.push(`Add text to option #${i + 1}.`)
            }
            if(option.message == '')
            {
                errors.push(`Add message to option #${i + 1}.`)
            }
            if(option.value == 1)
            {
                answer = true
            }
        })
        if(newQuestion.text == '')
        {
            errors.push('Question cannot be empty')
        }
        if(newQuestion.options.length <= 1)
        {
            errors.push('Questions must have at least two options.')
        }
        if(answer == false)
        {
            errors.push('Check the answer option.')
        }
        if(errors.length == 0)
        {
            setData('newQuiz',quiz.concat(newQuestion))
            setNewQuestion({
                text: '',
                section: '',
                options: [
                    {
                        value: 0,
                        text: '',
                        message: ''
                    }
                ]
            })
            setNewQuestionModal(false)
        }
        setNewQuestionError(errors)
    }
    function cancelNewQuestion()
    {
        setNewQuestion({
            text: '',
            section: '',
            options: [
                {
                    value: 0,
                    text: '',
                    message: ''
                }
            ]
        })
        setNewQuestionError([])
        setNewQuestionModal(false)
        //setEdit(false)
    }
    function changeNewQuestion(e, i) {
        const key = e.target.name;
        const value = e.target.value;
        const options = [...newQuestion.options]
        const data = newQuestion
        options[i][key] = value
        setNewQuestion({...data, options: options});
    }
    function changeoption(e,i){
        const value = e.target.value
        const options = [...newQuestion.options]
        options.map((v,i) => options[i].value = 0)
        const data = newQuestion
        options[i].value = 1
        setNewQuestion({...data, options: options});
    }
    function closeDelete(){
        setModalDelete(false)
    }
    function closeNewQuestionModal(){
        setNewQuestion({
            text: '',
            section: '',
            options: [
                {
                    value: 0,
                    text: '',
                    message: ''
                }
            ]
        })
        setDeleteQuestionId(null)
        setEdit(null)
        setNewQuestionModal(false)
        clearErrors()
    }
    function deleteOption(i)
    {
        const options = [...newQuestion.options]
        options.splice(i,1)
        setNewQuestion({
            ...newQuestion,
            options: options
        })
    }
    function deleteQuestion() {
       const questions = [...data.newQuiz]
       questions.splice(deleteQuestionId,1)
       setData('newQuiz', questions)
       setDeleteQuestionId(null)
       setModalDelete(false)
    }
    function deleteQuestionModal(i) {
        setDeleteQuestionId(i)
        setModalDelete(true)
    }
    function editQuestion(question,i){
        setEdit(i)
        setNewQuestion(question)
        setNewQuestionModal(true)
    }
    function selectChapter(e)
    {
        setChapterSelected(e)
        setData('chapter', e.value)
    }
    function selectCourse(e)
    {
        setCourseSelected(e)
        setData('course', e.value)
        axios.get(route('course.chapters', e.value))
        .then(
            res => {
                // const chaptersArray = res.data
                // chaptersArray.concat()
                setChapters(res.data)
            }
        )
        .catch(err => console.log(err))
    }
    function submitQuestion(){
        const options = data.options
        var answer = false
        options.map((option, i) => {
            if(option.value == 1)
            {
                answer = true
            }
        })

        if(answer == false)
        {
            setError('answer','Check the answer option.')
            return
        }

        post(route('quiz.question.store',quiz.id), {
            onSuccess: () => {
                cancelNewQuestion()
            }
        })
    }
    function submitQuiz()
    {
        post(route('quiz.store'))
    }
    function updateQuestion(){
        const quiz = [...data.newQuiz]
        console.log(quiz)
        console.log(edit)
        quiz[Number(edit)] = newQuestion
        setData('newQuiz',quiz)
        setNewQuestion({
                text: '',
                section: '',
                options: [
                    {
                        value: 0,
                        text: '',
                        message: ''
                    }
                ]
        })
        setEdit(null)
    }
    
    return(
        <>
        <div className='w-full h-full p-2 md:p-8 overflow-y-auto'>
            <div className='mx-auto mb-4 w-full max-w-7xl rounded-lg'>
                <div className='flex flex-wrap justify-between items-center w-full'>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <h2 className='text-xl'>
                            Add New Quiz 
                        </h2>
                    </div>

                </div>
            </div>
            
            <div className='mx-auto mb-4 w-full max-w-2xl rounded-lg'>
            <div className='w-full flex flex-wrap'>
            <div className='py-2 w-full md:w-1/2 md:pr-2'>
                <InputLabel value='Select Course'/>
                <Select
                    placeholder="Course Title"
                    value={courseSelected}
                    options={courses}
                    onChange={selectCourse}
                    /*
                    theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                        ...theme.colors,
                        primary25: '#2e319121',
                        primary: '#2E3191',
                        neutral20: '#2E3191',
                        neutral90: '#2E3191',
                    },
                    })}
                    */
                />
                <InputError message={errors.course} />
            </div>
           {
            courseSelected &&
             <div className='py-2 w-full md:w-1/2 md:pl-2'>
             <InputLabel value='Select Chapter'/>
             <Select
                 placeholder="Chapter Title"
                 value={chapterSelected}
                 options={chapters}
                 onChange={selectChapter}
                 /*
                 theme={(theme) => ({
                 ...theme,
                 borderRadius: 4,
                 colors: {
                     ...theme.colors,
                     primary25: '#2e319121',
                     primary: '#2E3191',
                     neutral20: '#2E3191',
                     neutral90: '#2E3191',
                 },
                 })}
                 */
             />
            </div>
           }
           </div>
           {
                data.newQuiz.length === 0 &&
                <div className='text-center p-8'>
                    <h3 className={`font-semibold text-sm mb-4 ${errors.newQuiz ? 'text-red-600' : ''}`}>Quiz is empty, start creating a new question</h3>
                </div>
            }
            {
                data.newQuiz.map(
                    (question, i) =>
                    <div key={i}className='border p-2 rounded-lg mb-2'>
                        <div className='flex justify-between'>
                            <h4 className='text-xs'>Question {i +1 } of {data.newQuiz.length}</h4>
                            <div>
                                <button 
                                className='hover:bg-gray-100 mr-2 p-2 rounded-full'
                                onClick={() => editQuestion(question, i)}>
                                    <Icon name='edit' className='w-4 h-4' />
                                </button>
                                <button 
                                className='hover:bg-gray-100 hover:text-red-500 p-2 rounded-full' 
                                onClick={() => deleteQuestionModal(i)}>
                                    <Icon name='trash' className='w-4 h-4 fill-current'/>
                                </button>
                            </div>
                        </div>
                        <h3 className='font-semibold text-sm mb-2'>{question.text}</h3>
                        <div>
                            {
                                question.options.map(
                                    (option, i) =>
                                    <div key={i}>
                                        <div className='flex items-start mb-2'>
                                            <div className={`w-5 h-5  rounded-full mr-1 ${option.value == true ? 'bg-white border-4 border-orange' : 'border bg-gray-100' }`}/>
                                            <div className='flex-1'>
                                                <p className={`text-sm ${option.value == true ? 'text-black font-semibold' : 'text-gray-600'}`}>{option.text}</p>
                                                <p className='text-xs text-gray-500'>{option.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
            <div className='w-full text-right'>
                <button className='btn-black' onClick={() => setNewQuestionModal(true)}>Create New Question</button>
            </div>
            <div className='text-center'>
                <button onClick={submitQuiz} className='btn-orange'>Save Quiz</button>
            </div>
            </div>
        </div>
        <Modal
            isOpen={newQuestionModal}
            onRequestClose={closeNewQuestionModal}
            className="modal-lesson"
            overlayClassName="modal-lesson-overlay"
            contentLabel="Quiz Info"
        >
            <div className='w-full bg-orange text-white p-3 flex justify-between items-center'>
                <h2 className='text-lg font-semibold'>{edit ? 'Edit' : 'Create New'} Question</h2>
                <button 
                onClick={closeNewQuestionModal} 
                className='cursor-pointer mr-2'>
                    <Icon name='close' className='w-3 h-3 fill-white'/>
                </button>
            </div>
            <div className='p-4 w-full'>
                        <InputLabel className='mb-1 text-sm' forInput='question'  value='New Question'/>
                        <TextArea className='w-full' placeholder='Type your question here...' handleChange={(e)=> setNewQuestion({...newQuestion, text: e.target.value})} value={newQuestion.text} />
                        <p className='text-xs text-gray-500 my-2 uppercase'>OPTIONS</p>
                        <div className=' rounded-lg'>
                        {
                            newQuestion.options.map(
                                (option, i) =>
                                <div key={i} className='flex items-start w-full mb-2'>
                                    <div>
                                        <input
                                            checked={option.value}
                                            type='radio'
                                            name='val'
                                            //value={i}
                                            onChange={(e) =>changeoption(e,i)}
                                            className='checked:bg-orange focus-checked: active:bg-orange hover:bg-orange focus:bg-orange focus-visible:bg-orange w-6 h-6 rounded-full border border-gray-200 mr-2 focus:ring-orange'
                                            tooltip='Check correct option'
                                            flow='right'
                                        />
                                        <div className='mt-3 w-full pl-1'>
                                            <button className='hover:bg-gray-100 hover:text-orange text-gray-400  rounded-full' onClick={() => deleteOption(i)} tooltip='Delete option' flow='right'>
                                            <Icon className='w-4 h-4 fill-current' name='trash'/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <TextArea
                                        className='w-full mb-2'
                                        handleChange={(e) => changeNewQuestion(e,i)}
                                        name='text'
                                        placeholder='Text'
                                        value={option.text}/>
                                        <TextArea
                                        className='w-full'
                                        handleChange={(e) => changeNewQuestion(e,i)}
                                        name='message'
                                        placeholder='Message'
                                        value={option.message}/>
                                    </div>
                                </div>
                            )
                        }
                        <div className='w-full text-right'>
                                {newQuestionError.length > 0 && <p className='text-red-600'>Check the following errors</p>}
                                <ul className='list-disc text-red-600'>
                                    {
                                        newQuestionError.map(
                                            (error, i) =>
                                                <li key={i} className='text-red-600 text-sm'>{error}</li>
                                            )
                                    }
                                </ul>
                        </div>
                        <div className='flex justify-between my-2 text-left w-full'>
                            <button 
                            onClick={addNewQuestionOption} 
                            className='border border-orange font-semibold p-2 text-orange rounded-lg text-xs hover:bg-orange hover:text-white'
                            >
                                Add Option
                            </button>
                            <div>
                                <button 
                                className='border border-orange font-semibold p-4 text-orange rounded-lg text-xs hover:bg-orange hover:text-white mr-2'
                                onClick={cancelNewQuestion}>
                                    Cancel
                                </button>

                                {
                                    edit == null ?
                                    <button
                                    className='border border-orange bg-orange font-semibold p-4 rounded-lg text-white text-xs'
                                    onClick={addQuestion}
                                    >
                                        Add Question
                                    </button>
                                    :
                                    <button
                                    className='border border-orange bg-orange font-semibold p-4 rounded-lg text-white text-xs'
                                    onClick={updateQuestion}
                                    >
                                        Update Question
                                    </button>
                                    
                                    
                                }
                            </div>
                        </div>
                        </div>
                    </div>
        </Modal>
        <Modal
                isOpen={modalDelete}
                onRequestClose={closeDelete}
                className="modal-lesson"
                overlayClassName="modal-lesson-overlay"
                contentLabel="Delete Lesson"
            >
                <div className='w-full p-4'>
                <div className='text-gray-500'>
                    <p className='text-lg font-semibold'>Are you sure you want to delete this question?</p>
                    <p>This action is irreversible</p>
                </div>
                <div className='w-full flex justify-between'>
                    <button onClick={() => setModalDelete(false)} className='btn-white mr-2'>Cancel</button>
                    <button type='button' onClick={deleteQuestion} className='btn-delete'>Delete Question</button>
                </div>
                </div>
            </Modal>
        </>
    )
}

Category.layout = page => <Layout title="Quiz edition" children={page} />;


export default Category;