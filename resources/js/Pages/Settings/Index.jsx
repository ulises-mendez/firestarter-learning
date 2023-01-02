import React, { useRef, useState, Fragment } from 'react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import classNames from 'classnames';
import { Head, Link, useForm, InertiaLink } from '@inertiajs/inertia-react';
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput';
import Section from '@/Components/Courses/Section'
import ToggleCheck from '@/Components/ToggleCheck';
const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Settings = () =>{
    const [autoPlay,setAutoPlay] = useState(true)

    function onChange()
    {
        setAutoPlay(!autoPlay)
    }
    console.log(autoPlay)
    return(
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto mb-4 w-full max-w-3xl rounded-lg'>
                <div className='border rounded-lg'>
                    <div className='px-4 py-2'>
                        <h2 className='font-semibold text-xl'>General preferences</h2>
                    </div>
                    <div>
                        <div className='flex justify-between p-4'>
                            <div>
                                <h3 className='font-semibold'>Autoplay</h3>
                                <p>Automatically play media when learning content is opened</p>
                            </div>
                            <div>
                            
                            </div>
                            <div>
                            <ToggleCheck value={autoPlay} onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='mx-auto w-full max-w-3xl rounded-lg'>
                <div className='border rounded-lg'>
                    <div className='px-4 py-2'>
                        <h2 className='font-semibold text-xl'>Subscriptions & payments</h2>
                    </div>
                    <InertiaLink href={route('settings.billing')}>
                        <div className='flex justify-between border-b p-4'>
                            <h3>Billing info</h3>
                            <Icon name='arrow-right' className='w-6 h-6'/>
                        </div>
                    </InertiaLink>
                    <InertiaLink href={route('settings.manage_premium')}>
                    <div className='flex justify-between border-b p-4'>
                        <h3>Manage Premium account</h3>
                        <Icon name='arrow-right' className='w-6 h-6'/>
                    </div>
                    </InertiaLink>
                    <div className='flex justify-between p-4'>
                        <h3>View purchase history</h3>
                        <Icon name='arrow-right' className='w-6 h-6'/>
                    </div>
                </div>
            </div>
            
        </div>        
    )
}

Settings.layout = page => <Layout title="My curriculum" children={page} />;


export default Settings;