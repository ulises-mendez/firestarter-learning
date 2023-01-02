import React, { useState, useContext, Fragment } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import axios from 'axios'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput'
import { Context } from '@/Components/Curriculum/Context'
import Icon from '@/Components/Icon'
import AddEducation from '@/Components/Curriculum/AddEducation'
import Education from '@/Components/Curriculum/Education'

export default() => {
    const { addEducation, setAddEducation, education, setEducation } = useContext(Context)
    const getEducation = async () =>{
        const res = await axios.get(route('profile.education'))
        setEducation(res.data)
    }

    return(
        <>
        <div className='border-b border-orange py-2 my-4 flex justify-between items-center px-2'>
            <div>
                <p className='text-gray-500'>Education and training</p>
            </div>
            <div className='text-orange border border-orange rounded-full p-1'
            onClick={() => setAddEducation(!addEducation)}
            >
                <Icon name='plus' className='w-3 h-3 fill-current'/>
            </div>
        </div>
        {
            addEducation &&
            <AddEducation />
        }
        {
            education.map(({id,level, field, college, city, from_month, from_year, to_month, to_year, currently},i) => {
                return(
                    <Education
                    key={i}
                    id={id}
                    i={i}
                    level={level}
                    field={field}
                    from_month={from_month}
                    from_year={from_year}
                    to_year={to_year}
                    college={college}
                    city={city}
                    currently={currently}
                    to_month={to_month}/>
                )
            })
        }
        {
            education.length === 0 &&
            <>
            {
                !addEducation &&
                <div>
                <p className='text-sm text-gray-600 mb-4'>We recommend at least one education entry.</p>
                <button onClick={()=> setAddEducation(true)} className='flex bg-white hover:bg-gray-100 text-orange p-2 rounded-full items-center'>
                    <div className='border border-current rounded-full p-1 mr-2'
                    >
                        <Icon name='plus' className='w-3 h-3 fill-current'/>
                    </div>
                    <span>Add your education</span>
                </button>
            </div>
            }
            </>
        }
        </>
    )
}