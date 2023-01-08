import React, {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import Icon from '@/Components/Icon';
import { InertiaLink } from '@inertiajs/inertia-react';
import Modal from 'react-modal';
import Layout from '@/Layouts/Auth';


const ManagePremium = () =>{
    const [cancelModal, setCancelModal] = useState(false)
    function cancelSubscription()
    {
        Inertia.post(route('settings.cancel_now'))
    }
    function closeModal(){
        setCancelModal(false)
    }
    return(
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto w-full max-w-3xl rounded-lg'>
                <div className='border rounded-lg'>
                    <InertiaLink className='flex items-center p-4 text-gray-600' href={route('settings.manage_premium')}>
                        <Icon name='arrow-left' className='w-6 h-6 fill-current'/>
                        <h3 className='font-semibold ml-2 text-sm'>Back</h3>
                    </InertiaLink>
                    <div>
                        <h1 className='text-xl font-semibold px-4'>Manage Premium account</h1>
                    </div>
                    <div className='p-4 py-2'>
                        <p>You&#180;re currently subscribed to Learning Premium.</p>
                    </div>
                    <div className='p-4'>
                        <div className='py-2'>
                        <InertiaLink href={route('settings')} className='text-orange font-semibold'>
                            Keep Premium
                        </InertiaLink>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <div>

                        </div>
                    </div>
                    <div className='text-right p-4'>
                        <button className='btn-orange' onClick={()=> setCancelModal(true)}>Continue to cancel</button>
                    </div>
                </div>
            </div>
            <Modal
            isOpen={cancelModal}
            onRequestClose={closeModal}
            className="modal-collections bg-white"
            overlayClassName="modal-lesson-overlay"
            contentLabel="Cancel subscription"
            >
                <div className='flex justify-between items-center w-full bg-orange text-white p-3'>
                    <div className='flex items-center'>
                        <h2 className='text-sm font-semibold'>Premium benefits and credits that end with your subscription</h2>
                    </div>
                    <button onClick={closeModal} className='mr-2'>
                        <Icon name='close' className='w-3 h-3 fill-white'/>
                    </button>
                </div>
                <div className='grid md:grid-cols-2 gap-4 p-4'>
                    <div className='bg-gray-100 rounded-lg w-full p-4'>
                        <img src='/svg/learning.svg' className='w-8 my-4'/>
                        <h3 className='font-semibold text-xs'>Learning courses</h3>
                        <p>Learning courses that will develop your professional skills</p>
                    </div>
                    <div className='bg-gray-100 rounded-lg w-full p-4'>
                        <img src='/svg/unlock.svg' className='w-8 my-4'/>
                        <h3 className='font-semibold text-xs'>Unlimited Access</h3>
                        <p>You have unlimited access to a library personalized to your interests</p>
                    </div>
                </div>
                
                <div className='text-right p-4'>
                        <InertiaLink href={route('courses')}>
                            <button className='border p-4 rounded-md mr-2 text-gray-500 hover:text-gray-800' onClick={closeModal}>Keep Premium</button>
                        </InertiaLink>
                        <button onClick={cancelSubscription} className='bg-orange p-4 text-white rounded-md'>Cancel subscription</button>  
                </div>  
            </Modal>
        </div>        
    )
}

ManagePremium.layout = page => <Layout title="My curriculum" children={page} />;


export default ManagePremium;