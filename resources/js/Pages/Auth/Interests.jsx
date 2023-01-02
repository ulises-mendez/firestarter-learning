import React from 'react'
import { useForm, usePage } from '@inertiajs/inertia-react';

import Layout from '@/Layouts/Registration'

import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'

import Topic from '@/Components/Registration/Topic'


const Interests = () =>{
    const { categories } = usePage().props
    const { data, setData, errors, post, processing } = useForm({
        interests:[]
    })


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('store.interests'));
    };

    const handleChecked = (e) => {
        let id = e.target.value;
        if (e.target.checked) {
            setData("interests", [...data.interests, id]);
        } else {
            setData(
                "interests",
                data.interests.filter((item) => {
                    return item !== id;
                })
            );
        }
};

    console.log(data)

    return(
        <form onSubmit={submit}>
            <div className='max-w-4xl mx-auto'>
                <div className='mb-4 text-left'>
                    <h1 className='text-2xl font-bold text-left mb-4'>First, tell us what you're interested in.</h1>
                    <p>We'll show you content for the topics you select</p>
                </div>
                <div>
                    {
                        categories.map((cat, i) => 
                            cat.topics.length > 0 &&
                            <div key={i}>
                                <div className='text-left'>
                                <h2 className='text-lg font-semibold text-left mb-4'>{cat.title}</h2>
                                </div>
                                {
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4'>
                                        {
                                            cat.topics.map((topic, i) =>
                                                <Topic key={i} className='bg-white p-4' value={topic.id} label={topic.title} name='interests' handleChecked={handleChecked}/>
                                            )
                                        }
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
                <div>
                </div>
                <div className='my-2'>
                    <p>We recommend following 3 skills to find courses that you care about.</p>
                </div>
                <div className='text-left mt-4'>
                    <button
                        className='btn-orange'
                    >
                        Continue
                    </button>
                </div>
            </div>
        </form>
    )
}

Interests.layout = page => <Layout title="Interests" children={page} />

const page = {
    topics: [
        'Diversity & Inclusion',
        'Marketing',
        'Personal Development',
        'Sales',
        'Leadership',
        'Project Management',
        'Management',
        'Business Analysis',
        'Entrepreneurship',
        'Human Resources (HR)',
        'Career Development',
        'Finance',
        'Accounting',
        'Customer Service',
        'Training & Development'
    ]
}

export default Interests