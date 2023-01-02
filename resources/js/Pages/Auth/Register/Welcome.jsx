import React from 'react'
import { useForm, usePage, InertiaLink } from '@inertiajs/inertia-react';

import Layout from '@/Layouts/Registration'

import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'


const Welcome = ({ status }) =>{
    const { auth, name } = usePage().props
    console.log(auth)
    const { data, setData, errors, post, processing } = useForm({
        firstName: '',
        lastName: '',
    })
    
    const handlePinChange = pinCode => {
        setData('firstName',pinCode);
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        // post(route('login'));
    };

    return(
        <form onSubmit={submit}>
            <div className='max-w-lg mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Welcome, <span className='capitalize'>{name}</span>.</h1>
                <img src='/svg/welcome.svg' className='w-full'/>
                <p>Before we get started, tell us a bit about yourself to help us personalize your learning experience</p>
                <div className='mt-4'>
                    <InertiaLink href={route('profile.ubication')}>
                        <button
                            className='btn-orange'
                        >
                            Continue
                        </button>
                    </InertiaLink>
                </div>
            </div>
        </form>
    )
}

Welcome.layout = page => <Layout title="Welcome Email" children={page} />

export default Welcome