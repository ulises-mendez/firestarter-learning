import React, { useRef, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import durationFormat from '@/lib/durationFormat';
import Icon from '@/Components/Icon';
import releasedFormat from '@/lib/releasedFormat';
import AddToCollection from '@/Components/Courses/Collections//Modal/AddToCollection'

import Modal from 'react-modal'
Modal.setAppElement('*')
const Progress = ({course}) =>{
    const {id, title, thumbnail, released, saved, slug} = course
    const [menu, setMenu] = useState(false)
    const left = course.time - course.played
    const percent = (course.played / course.time * 100).toFixed(2)
    const [modal,setModal] = useState(false)

    function closeModal(){
        setModal(false)
    }

    function toggleSaves()
    {
        Inertia.post(route('course.save'), {
            course_id: id
        })
    }

    function deleteActiveCourse()
    {
        Inertia.post(route('me',{
            course: id
        }))
    }

    
    return(
        <div className='flex p-4 border rounded-lg w-full my-4'>
            <div>
                <InertiaLink href={route('course.show', slug)}>
                <img src={thumbnail} className='rounded w-full max-w-xs'/>
                </InertiaLink>
            </div>
            <div className='p-4 flex-1 flex flex-col justify-between'>
                <div>
                    <InertiaLink href={route('course.show',slug)}>
                        <h4 className='font-semibold my-2'>{title}</h4>
                    </InertiaLink>
                    <p className='text-sm text-gray-500'>{releasedFormat(released)}</p>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='w-full max-w-xs flex items-center'>
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5 ">
                            <div className="bg-orange h-1.5 rounded-full" style={{ width: `${percent}%`}}></div>
                        </div>
                        <span className='text-xs ml-3'>{durationFormat(left)} left</span>
                    </div>
                    <div className="relative">
                        <button 
                        onClick={() => setMenu(true)}>
                            <Icon name="dots" className='w-6'/>
                        </button>
                        <div>
                        <div 
                        onClick={() => setMenu(false)}
                        className={`origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${menu == true ? '' : 'hidden'}`}>
                            
                            <div className="w-full text-left">
                                <button 
                                onClick={toggleSaves}
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white">
                                    {saved ? 'Unsaved' : 'Save'}
                                </button>
                                <button
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"
                                onClick={() => setModal(true)}>
                                
                                    Add to Collection
                                </button>
                                <button
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white"
                                onClick={deleteActiveCourse}>
                                    Remove
                                </button>
                            </div>
                            
                        </div>
                        <div
                            onClick={() => {
                            setMenu(false);
                            }}
                            className={`fixed inset-0 z-10 ${menu == true ? '' : 'hidden'}`}
                        />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            className="modal-collections"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New category"
            >
                <AddToCollection onRequestClose={closeModal} course={id}/>
            </Modal>
        </div>
    )
}

export default Progress