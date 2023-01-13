import React, { useRef, useState, Fragment } from 'react'
import CouseFilter from '@/Components/Courses/CouseFilter'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react'
import Category from '@/Components/Category'
import Layout from '@/Layouts/Auth';
import Pagination from '@/Components/Pagination'
import Icon from '@/Components/Icon';
import Modal from "react-modal";
import QuizzesFilter from '@/Components/Quizzes/QuizzesFilter'
Modal.setAppElement('#app')

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Quizzes = () =>{
    const [modal, setModal] = useState(false)
    const { quizzes } = usePage().props

    const {
        meta: { links }
      } = quizzes


    
    const { data, setData, errors, post, processing } = useForm({
        title: '',
    })
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    }
    function closeModal() {
        setModal(false)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        post(route('category.store'),{
            onSuccess: () => {
                setData({
                    title: '',
                })
                setModal(false)
              }
        })
    }

    return(
        <>
        <div className='w-full h-full p-2 md:p-8 overflow-y-auto'>
            <div className='mx-auto mb-4 w-full max-w-7xl rounded-lg'>
                <div className='flex flex-wrap justify-between items-center w-full'>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <h2 className='font-semibold text-xl'>Quizzes</h2>
                        <p>Manage quizzes here.</p>
                    </div>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <InertiaLink href={route('quiz.create')}>
                            <button className='btn-orange'>Add Quiz</button>
                        </InertiaLink>
                    </div>
                </div>
                <div className='px-4 py-2 w-full md:w-auto'>
                    <QuizzesFilter />
                </div>
            </div>
            <div className='p-1 md:p-8 flex flex-wrap w-full max-w-7xl mx-auto'>
                <div className='w-full'>
                    <table className='w-full bg-gray-50 rounded-lg overflow-hidden'>
                        <thead className='bg-gray-700 rounded-t-lg text-white'>
                            <tr>
                                <th className='text-left p-4 font-semibold'>Id</th>
                                <th className='text-left p-4 font-semibold'>Course</th>
                                <th className='text-left p-4 font-semibold'>Chapter</th>
                                <th className='text-left p-4 font-semibold'>Questions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                quizzes.data.map(
                                    ({id, course, chapter, questions}, i)=>
                                    <tr className='border-t' key={i}>
                                        <td className='p-2'>
                                            <InertiaLink href={route('quiz.edit', id)} className='text-sm'>
                                                {id}
                                            </InertiaLink>
                                        </td>
                                        <td className='p-2'>
                                            <InertiaLink href={route('quiz.edit', id)} className='text-sm'>
                                                {course}
                                            </InertiaLink>
                                        </td>
                                        <td className='p-2'>
                                            <InertiaLink href={route('quiz.edit', id)} className='text-sm'>
                                                {chapter}
                                            </InertiaLink>
                                        </td>
                                        <td className='p-2'>
                                            <InertiaLink href={route('quiz.edit', id)} className='text-sm'>
                                                {questions}
                                            </InertiaLink>
                                        </td>
                                    </tr>
                                )
                            }
                            {
                                /*
                                courses.data.map(({id, category, category_id, highlight, level, title, chapters, lessons, released, status}, i) =>
                                <tr className='border-t' key={i}>
                                    <td className='p-2'>
                                        <InertiaLink href={route('quiz.edit', id)} className='text-sm flex items-center'>
                                            {title}
                                            {
                                            !status &&
                                            <span className='bg-orange bg-opacity-20 p-1 rounded ml-2 text-orange'>Draft</span>
                                            }
                                            {
                                                released &&
                                                <span className='bg-green-300 p-1 px-2 rounded ml-2 text-green-800'>Released</span>
                                            }
                                        </InertiaLink>
                                    </td>
                                    <td className='p-2 flex justify-center'>
                                        {highlight == true ? <div className='flex justify-center items-center bg-orange text-white rounded-full w-5 h-5 p-1'><Icon name='check' className='fill-current w-full' /></div> : ''}
                                    </td>
                                    <td className='px-4'>
                                        <span>{category}</span>
                                    </td>
                                    <td className='px-4'>
                                        <span>{level}</span>
                                    </td>
                                    <td className='px-4'>
                                        <span>{chapters}</span>
                                    </td>
                                    <td className='px-4'>
                                        <span>{lessons}</span>
                                    </td>
                                    <td className='px-4 text-right'>
                                        <span>Draft</span>
                                    </td>
                                </tr>
                                )
                                */
                            }
                            {
                                quizzes.data.length === 0 &&
                                <tr>
                                    <td className="px-6 py-4 border-t border-gray-100" colSpan="4">
                                        No quizzes were added
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                {
                    <Pagination links={links} />
                }
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
                    <h1 className='text-xl font-semibold'>Create new category</h1>
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
                        <div className='text-right'>
                            <button className='btn-orange'>Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}



Quizzes.layout = page => <Layout title="Quizzes" children={page} />;


export default Quizzes;