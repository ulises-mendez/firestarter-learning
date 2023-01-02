import React, { useState } from 'react'
import { Context } from '@/Components/Courses/Collections/CollectionsContext'
import CreateCollectionModal from '@/Components/Courses/Collections/CreateCollectionModal'
import CollectionItem from '@/Components/Courses/Collections/CollectionItem';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import Layout from '@/Layouts/Auth'
import Icon from '@/Components/Icon'
import classNames from 'classnames'
import Modal from 'react-modal'
import axios from 'axios';
Modal.setAppElement('*')

const Item = ({link,text, length }) =>{
    const isActive = route().current(link);

    const Item = classNames('my-4 font-semibold p-2 px-4  rounded select-none cursor-pointer w-full',
    {
        'border-black border-l-4 bg-orange text-white': isActive,
        'hover:bg-orange hover:bg-opacity-10': !isActive
      })

    return(
        <InertiaLink href={route(link)} >
            <div className={Item}>
            {text} {length ? '(' + length + ')' : null}
            </div>
        </InertiaLink>
    )
}

const Collections = () =>{
    const {collections, save_count, active_courses,} = usePage().props
    const [collectionsData, setCollectionsData] = useState( collections || [])
    const [createModal, setCreateModal] = useState(false)
    
    function onRequestClose() {
        setCreateModal(false)
    }

    function goto(e){
        const value = e.target.value
        Inertia.get(route(value))
    }
    console.log(collectionsData)
    return(
        <Context.Provider 
        value={{
            collectionsData, setCollectionsData , onRequestClose
        }}>
        <div className='w-full h-full flex items-stretch'>
            <div className='relative p-4 h-full bg-lightGray hidden w-1/4 lg:block'>
                <h1 className='font-bold text-xl'>My Library</h1>
                <Item text='In Progress' link='me' length={active_courses}/>
                <Item text='Saved' link='me.saved' length={save_count}/>
                <Item text='My Collections' link='me.collections' length={collectionsData.length}/>
                <Item text='Learning History' link='me.history'/>

            </div>
            <div className='w-full flex-1 h-full bg-white p-6 overflow-auto flex flex-col relative '>
                <div className='lg:hidden'>
                <h1 className='font-bold text-xl mb-2'>Collections</h1>
                <select onChange={goto} className='w-full border-gray-200 rounded-lg focus:border-orange focus:ring-orange focus:ring-2' value='me.collections'>
                    <option value="me">In progress ({active_courses})</option>
                    <option value="me.saved">Saved ({save_count})</option>
                    <option value="me.collections">My Collections ({collectionsData.length})</option>
                    <option value="me.history">Learning History</option>
                </select>
                </div>
                <div className='w-full text-right my-4'>
                    <button onClick={() => setCreateModal(true)} className='btn-white'>Create New Collection</button>
                </div>
                <div>
                {
                    collectionsData.map(
                        (collection, i) =>
                        <CollectionItem key={i} collection={collection} index={i}/>
                        )
                }
                </div>
                {
                    collectionsData.length === 0 &&

                <div className='flex flex-col flex-1 justify-center'>
                    <div className='w-full text-center'>
                        <h2 className='font-semibold text-2xl'>You don’t have any collections.</h2>
                        <img src='/img/empty/collections.png' className='w-48 my-8 mx-auto' />
                        <p className='my-2'>When you create a collection you can find it here.</p>
                    </div>
                    <div className='w-full text-center'>
                        <InertiaLink href={route('courses')}>
                            <button className='bg-black p-4 text-white font-semibold rounded-lg'>
                                Go to courses
                            </button>
                        </InertiaLink>
                    </div>
                </div>
                }
            </div>
            <Modal
            isOpen={createModal}
            onRequestClose={onRequestClose}
            className="modal-collections"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New Collection"
            >
                <CreateCollectionModal
                onRequestClose={onRequestClose}
                />
            </Modal>
        </div>
        </Context.Provider>
    )
}

Collections.layout = page => <Layout title="Course" children={page} />;


export default Collections;