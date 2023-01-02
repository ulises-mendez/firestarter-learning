import React, { useRef, useState, Fragment } from 'react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react'
import Category from '@/Components/Category'
import Layout from '@/Layouts/Auth';
import Pagination from '@/Components/Pagination'
import Icon from '@/Components/Icon';
import Modal from "react-modal";
Modal.setAppElement('#app')

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Categories = () =>{
    const [modal, setModal] = useState(false)
    const { categories } = usePage().props;
    const {
        meta: { links }
      } = categories;
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
                        <h2 className='font-semibold text-xl'>Categories</h2>
                        <p>Manage course categories here.</p>
                    </div>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <button onClick={() => setModal(true)} className='btn-orange'>Add category</button>
                    </div>
                    
                </div>
            </div>
            <div className='p-1 md:p-8 flex flex-wrap w-full max-w-7xl mx-auto'>
                <div className='w-full'>
                    <table className='w-full bg-gray-50 rounded-lg'>
                        <thead className='text-gray-600 '>
                            <tr>
                                <th className='text-left p-4 font-semibold'>Name</th>
                                <th className='text-left p-4 font-semibold'>Date added</th>
                                <th className='text-right p-4 font-semibold'>Topics</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.data.map(({id, title, topics, created_at}, i) =>
                                <Category key={i} id={id} title={title} topics={topics} created_at={created_at}/>
                                )
                            }
                            {
                                categories.data.length === 0 &&
                                <tr>
                                    <td className="px-6 py-4 border-t border-gray-100" colSpan="4">
                                        No categories were added
                                    </td>
                                </tr>
                            }
                            
                        </tbody>
                    </table>
                </div>
                <Pagination links={links} />
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

Categories.layout = page => <Layout title="Categories" children={page} />;


export default Categories;