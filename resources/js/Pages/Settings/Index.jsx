import React, { useRef, useState, Fragment } from 'react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import classNames from 'classnames';
import { Head, Link, useForm, InertiaLink } from '@inertiajs/inertia-react';
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput';
import Section from '@/Components/Courses/Section'

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Settings = () =>{
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
                            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" id="default-toggle" class="sr-only peer"/>
                                <div class="w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
                            </label>
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