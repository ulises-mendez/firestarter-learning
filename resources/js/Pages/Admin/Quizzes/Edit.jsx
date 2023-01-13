import React, { useRef, useState, Fragment } from 'react'
import { Inertia } from '@inertiajs/inertia'
import Icon from '@/Components/Icon'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/Auth'
import Modal from 'react-modal'
import TextArea from '@/Components/TextArea'
Modal.setAppElement('#app')

const Category = () =>{
    const { questions, quiz } = usePage().props
    const {data, setData, errors, clearErrors, setError, post, put} = useForm({
        text: '',
        options: [
            {
                value: 0,
                text: '',
                message: ''
            }
        ]
    })
    const [deleteQuestionId, setDeleteQuestionId] = useState(null)
    const [edit,setEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [newQuestionError, setNewQuestionError] = useState([])
    const [newQuestionModal, setNewQuestionModal] = useState(false)
    function addNewQuestionOption()
    {
        const options = [...data.options]
        
        setData({
            ...data,
            options: options.concat({
                value: 0,
                text: '',
                message: ''
            })
        })
    }
    function addQuestion(){
        const options = data.options
        var answer = false
        var errors = []
        options.map((option, i) => {

            if(option.value == 1)
            {
                answer = true
            }
        })
        if(data.text == '')
        {
            errors.push('Question cannot be empty')
        }
        if(data.options.length <= 1)
        {
            errors.push('Questions must have at least 2 options.')
        }
        if(answer == false)
        {
            errors.push('Check the answer option.')
        }
        if(errors.length == 0)
        {
            setData(null)
        }
        setNewQuestionError(errors)
    }
    function cancelNewQuestion()
    {
        setData({
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
        setEdit(false)
    }
    function changeNewQuestion(e, i) {
        const key = e.target.name;
        const value = e.target.value;
        const options = [...data.options]
        const dataQuestion = data
        options[i][key] = value
        setData({...dataQuestion, options: options});
    }
    function changeoption(i){
        const options = [...data.options]
        options.map((v,i) => options[i].value = 0)
        const dataQuestion = data
        options[i].value = 1
        setData({...dataQuestion, options: options});
    }
    function closeDelete(){
        setModalDelete(false)
    }
    function closeNewQuestionModal(){
        setData({
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
        setEdit(false)
        setNewQuestionModal(false)
        clearErrors()
    }
    function deleteOption(id, i){
        if(id === undefined)
        {
            const options = [...data.options]
            options.splice(i,1)
            setData({
                ...data,
                options: options
            })
        }
        if(id !== undefined)
        {
            const options = [...data.options]
            options.splice(i,1)
            Inertia.delete(route('quiz.question.option.delete', id), {
                onSuccess: () => {
                    setData({
                        ...data,
                        options: options
                    })
                }
            })
        }
    }
    function deleteQuestion() {
        Inertia.delete(route('quiz.question.delete', deleteQuestionId), {
            onSuccess: () => {
                setModalDelete(false)
            }
        })
    }
    function deleteQuestionModal(id) {
        setDeleteQuestionId(id)
        setModalDelete(true)
    }
    function editQuestion(question){
        setEdit(true)
        setData(question)
        setNewQuestionModal(true)
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
    function updateQuestion(){
        put(route('quiz.question.update',data.id), {
            onSuccess: () => {
                cancelNewQuestion()
            }
        })
    }
    
    return(
        <>
        <div className='w-full h-full p-2 md:p-8 overflow-y-auto'>
            <div className='mx-auto mb-4 w-full max-w-7xl rounded-lg'>
                <div className='flex flex-wrap justify-between items-center w-full'>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <h2 className='text-xl'>
                            Quiz from course <span className='font-semibold'>{quiz.course.title}</span>
                        </h2>
                        {
                            quiz.chapter && 
                            <p>Chapter: {quiz.chapter.title}</p>
                        }
                        
                    </div>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        
                    </div>
                </div>
            </div>
            <div className='mx-auto mb-4 w-full max-w-2xl rounded-lg'>
            {
                questions.map(
                    (question, i) =>
                    <div key={i}className='border p-2 rounded-lg mb-2'>
                        <div className='flex justify-between'>
                            <h4 className='text-xs'>Question {i +1 } of {questions.length}</h4>
                            <div>
                                <button 
                                className='hover:bg-gray-100 mr-2 p-2 rounded-full'
                                onClick={() => editQuestion(question)}>
                                    <Icon name='edit' className='w-4 h-4' />
                                </button>
                                <button 
                                className='hover:bg-gray-100 hover:text-red-500 p-2 rounded-full' 
                                onClick={() => deleteQuestionModal(question.id)}>
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
                <button className='btn-orange' onClick={() => setNewQuestionModal(true)}>Add Question</button>
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
                <h2 className='text-lg font-semibold'>{edit ? 'Edit' : 'Add New'} Question</h2>
                <button 
                onClick={closeNewQuestionModal} 
                className='cursor-pointer mr-2'>
                    <Icon name='close' className='w-3 h-3 fill-white'/>
                </button>
            </div>
            <div className='w-full bg-white p-2'>
                    <div className='p-2 w-full'>
                        <TextArea className='w-full' placeholder='Type your question here...' handleChange={(e)=> setData({...data, text: e.target.value})} value={data.text} />
                        <InputError className='text-xs py-2' message={errors.text}/>
                        <p className='text-xs text-gray-500 my-2 uppercase'>OPTIONS</p>
                        <div className=' rounded-lg'>
                        {
                            data.options.map(
                                (option, i) =>
                                <div key={i} className='flex items-start w-full mb-2'>
                                    <div>
                                        <input
                                            checked={option.value}
                                            type='radio'
                                            name='val'
                                            //value={i}
                                            onChange={(e) =>changeoption(i)}
                                            className='checked:bg-orange focus-checked: active:bg-orange hover:bg-orange focus:bg-orange focus-visible:bg-orange w-6 h-6 rounded-full border border-gray-200 mr-2 focus:ring-orange'
                                            tooltip='Check correct option'
                                            flow='right'
                                        />
                                        <div className='mt-3 w-full pl-1'>
                                            <button className='hover:bg-gray-100 hover:text-orange text-gray-400  rounded-full' onClick={() => deleteOption(option.id, i)} tooltip='Delete option' flow='right'>
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
                                        <InputError className='text-xs py-2' message={errors[`options.${i}.text`]}/>
                                        <TextArea
                                        className='w-full'
                                        handleChange={(e) => changeNewQuestion(e,i)}
                                        name='message'
                                        placeholder='Message'
                                        value={option.message}/>
                                        <InputError className='text-xs py-2' message={errors[`options.${i}.message`]}/>
                                    </div>
                                </div>
                            )
                        }
                        <div>
                        <InputError className='text-xs py-2' message={errors.answer}/>
                        <InputError className='text-xs py-2' message={errors.options}/>
                        </div>
                        <div className='flex justify-between my-2 text-left w-full'>
                            <button 
                            onClick={addNewQuestionOption} 
                            className='border border-orange font-semibold p-4 text-orange rounded-lg text-xs hover:bg-orange hover:text-white'
                            >
                                Add Option
                            </button>
                            <div>
                                <button 
                                className='border border-white hover:border-gray-100 font-semibold p-4 text-orange rounded-lg text-xs hover:bg-gray-100 mr-2'
                                onClick={cancelNewQuestion}>
                                    Cancel
                                </button>
                                {
                                    edit ?
                                    <button
                                    className='border border-orange bg-orange font-semibold p-4 rounded-lg text-white text-xs'
                                    onClick={updateQuestion}
                                    >
                                        Update Question
                                    </button>
                                    :
                                    <button
                                    className='border border-orange bg-orange font-semibold p-4 rounded-lg text-white text-xs'
                                    onClick={submitQuestion}
                                    >
                                        Add Question
                                    </button>
                                }
                            </div>
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