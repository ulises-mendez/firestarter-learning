import React, { useRef, useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import classNames from 'classnames';
import Section from '@/Components/Courses/Section'
import {saved} from '@/data/courses'
import Progress from '@/Components/Courses/Progress';

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

const Profile = () =>{
    const {menu, setMenu} = useState(false)

    return(
        <div className='w-full h-full flex items-stretch'>
            <div className='relative p-4 h-full bg-lightGray hidden w-1/4 lg:block'>
                <h1 className='font-bold text-xl'>My Library</h1>
                <Item text='In Progress' link='me' length={3}/>
                <Item text='Saved' link='me.saved' length={2}/>
                <Item text='My Collections' link='me.collections'/>

                <div className='my-4 font-semibold p-2 px-4 hover:bg-orange hover:bg-opacity-10 rounded select-none cursor-pointer'>
                    Learning History
                </div>
            </div>
            <div className='w-full flex-1 h-full bg-white p-6 overflow-auto relative'>
                {
                    saved.map(({title, thumbnail, released}, i) => {
                        return(
                            <Progress key={i} title={title} released={released} thumbnail={thumbnail}/>
                        )
                    })
                }
                
            </div>
        </div>
        
    )
}

Profile.layout = page => <Layout title="Course" children={page} />;


export default Profile;