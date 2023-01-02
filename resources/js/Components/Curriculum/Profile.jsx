import React, { useState, useContext } from 'react'
import { usePage, useForm } from '@inertiajs/inertia-react'
import axios from 'axios'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput'
import { Context } from '@/Components/Curriculum/Context'
import SelectCountry from '@/Components/SelectCountry'
export default() => {
    const { setUserProfile, setChangeProfile } = useContext(Context)
    const { profile, csrf } = usePage().props
    const { id } = profile
    const [changeCountry, setChangeCountry] = useState(false)
    const [ errors, setErrors ] = useState({})
    const [ data, setData ] = useState({
        city: profile.city || '',
        country: profile.country || '',
        description: profile.description || '',
        first_name: profile.first_name || '',
        headline: profile.headline || '',
        last_name: profile.last_name || '',
        street: profile.street || '',
        postal_code: profile.postal_code || '',
    })
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setData(values => ({
            ...values,
            [key]: value,
        }))
      }
    function submit(e) {
        console.log(data)
        e.preventDefault()
        axios.put(route('profile.update', id), {
            _token: csrf,
            first_name: data.first_name,
            last_name: data.last_name,
            country: data.country,
            city: data.city,
            street: data.street,
            postal_code: data.postal_code,
            description: data.description
        })
        .then((res)=> {
            const saved = res.data
            console.log(res.data)
            setUserProfile({
                ...profile,
                first_name: saved.first_name,
                last_name: saved.last_name,
                country: saved.country,
                city: saved.city,
                street: saved.street,
                postal_code: saved.postal_code,
                description: saved.description
            })
            setChangeProfile(false)
            setErrors({})
        })
        .catch(err => {
            setErrors(err.response?.data.errors)
        })
    }
    return(
        <form onSubmit={submit}>
            <div>
                <Input
                    className="text-gray-700 w-full my-2"
                    type="text"
                    label="First Name - required"
                    value={data.first_name}
                    onChange={handleChange}
                    name="first_name"
                />

                <Input
                    className="text-gray-700 w-full my-2"
                    type="text"
                    label="Last Name - required"
                    value={data.last_name}
                    onChange={handleChange}
                    name="last_name"
                />
                <Input
                    className="text-gray-700 w-full my-2"
                    type="text"
                    label="Headline"
                    value={data.headline}
                    onChange={handleChange}
                    name="headline"
                />
                {
                            !changeCountry &&
                            <div className='my-4'>
                                <p className='font-semibold'>City - {data.country} (<span className='text-orange cursor-pointer' onClick={()=> setChangeCountry(!changeCountry)}>Change Country</span>)</p>
                                <p className='text-xs'>e.g. Toronto, ON</p>
                            </div>
                        }
                        {
                            changeCountry &&
                            <div className='text-left mb-4'>
                            <SelectCountry 
                            label='Country'
                            value={data.country}
                            name='country'
                            onChange={handleChange}
                            style={{ border: '1px solid #d1d5db' }}
                            />
                        </div>
                        }
                <Input
                    className="text-gray-700 w-full my-2"
                    type="text"
                    value={data.city}
                    onChange={handleChange}
                    name="city"
                />
                <Input
                    className="text-gray-700 w-full my-2"
                    label="Post Code"
                    type="text"
                    value={data.postal_code}
                    onChange={handleChange}
                    name="postal_code"
                />
                <hr className='w-full h-0.5 bg-gray-200 my-4' />
                <InputLabel
                forInput="description"
                value="About me"/>
                <textarea
                id='description'
                name='description'
                className='form-input text-gray-700 w-full my-2'
                value={data.description}
                onChange={handleChange}
                />
                <InputError message={errors.postal_code} className="mt-2"/>
                <InputError message={errors.city} className="mt-2"/>
                <InputError message={errors.first_name} className="mt-2"/>
                <InputError message={errors.last_name} className="mt-2"/>

            </div>
            <div className='flex'>
                <button type='submit' onClick={submit} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                <button type='button' onClick={() => setChangeProfile(false)} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
            </div>
        </form>
    )
}