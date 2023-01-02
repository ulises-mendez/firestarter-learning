import React from 'react'
import { useForm, usePage } from '@inertiajs/inertia-react';

import Layout from '@/Layouts/Registration'

import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'


const Verify = () =>{
    const {auth} = usePage().props

    const { data, setData, errors, post, processing } = useForm({
        first_name: '',
        last_name: '',
    })
    


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('store.profile'));
    };

    return(
        <form onSubmit={submit}>
            <div className='max-w-lg mx-auto'>
                <h1 className='text-2xl font-bold text-left mb-4'>What is your name?</h1>
                <div className='text-left mb-2'>
                    <InputLabel forInput="first_name" value="First Name"/>
                    <TextInput
                        type="text"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.first_name} className="mt-2"/>
                </div>
                <div className='text-left mb-2'>
                    <InputLabel forInput="last_name" value="Last Name"/>
                    <TextInput
                        type="text"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.last_name} className="mt-2"/>
                </div>
                <div className='text-left mt-4'>
                    <button
                    type='submit'
                        className='btn-orange'
                    >
                        Continue
                    </button>
                </div>
            </div>
        </form>
    )
}

Verify.layout = page => <Layout title="Verify Email" children={page} />

export default Verify