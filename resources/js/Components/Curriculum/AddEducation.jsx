import React, { useContext, useState, Fragment } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput'
import axios from 'axios'
import { Context } from '@/Components/Curriculum/Context'
import SelectCountry from '@/Components/SelectCountry'
import SelectYear from '@/Components/SelectYear'
const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

export default() => {
    const { addEducation, setAddEducation, newEducation, setNewEducation, saveEducation } = useContext(Context)
    const [errorMsg, setErrorMsg] = useState({})
    function setDataEducation(name,value){
        setNewEducation(values => ({
          ...values,
          [name]: value
        })
        );
    }

    function CancelAddEducation(){
        setAddEducation(false)
        setNewEducation({
            level: '',
            field: '',
            college: '',
            city:'',
            from_month:'',
            from_year: '',
            currently: false,
            to_month:'',
            to_year: ''
        })
    }

    return(
    <div>
        <div className='px-4'>
        <SelectInput
            label='Level of education'
            value={newEducation.level}
            name='level'
            onChange={e => setDataEducation('level', e.target.value)}
            style={{ border: '1px solid #d1d5db' }}
        >
            <option value=''>Select an option</option>
            <option value="None">None</option>
            <option value="GCSE or equivalent">GCSE or equivalent</option>
            <option value="A-Level or equivalent">A-Level or equivalent</option>
            <option value="Certificate of Higher Education">Certificate of Higher Education</option>
            <option value="Diploma of Higher Education">Diploma of Higher Education</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
            <option value="OTHER_KEY">Custom</option>
        </SelectInput>
        <InputError message={errorMsg.level} className="mt-2"/>
        <Input
        className="text-gray-700 w-full my-2"
        type="text"
        label="Field of study"
        value={newEducation.field}
        onChange={e => setDataEducation('field', e.target.value)}
        />
        <InputError message={errorMsg.field} className="mt-2"/>
        <Input
        className="text-gray-700 w-full my-2"
        type="text"
        label="College"
        value={newEducation.college}
        onChange={e => setDataEducation('college', e.target.value)}
        />
            <InputError message={errorMsg.college} className="mt-2"/>
        <Input
        className="text-gray-700 w-full my-2"
        type="text"
        label="College city"
        value={newEducation.city}
        onChange={e => setDataEducation('city', e.target.value)}
        />
            <InputError message={errorMsg.city} className="mt-2"/>
        <h4 className='font-semibold my-4'>Time period</h4>
        <div className="flex items-center mr-2" onClick={() => setDataEducation('currently', !newEducation.currently)}>
            <Checkbox checked={newEducation.currently ? true : false}/><span className="ml-2">Currently enrolled</span>
        </div>
        <div className='flex items-end'>
        <SelectInput
        label="From"
        value={newEducation.from_month}
        onChange={(e) => setDataEducation('from_month', e.target.value)}
        className="w-40"
        style={{ backgroundColor: '#fff' }}
        name="from_month">
            <option value=""></option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </SelectInput>
        <SelectYear
        value={newEducation.from_year}
        className="w-28 ml-2"
        onChange={(e) => setDataEducation('from_year', e.target.value)}
        name="from_year" />
        </div>
        <div>
            <InputError message={errorMsg.from_month} className="mt-2"/>
            <InputError message={errorMsg.from_year} className="mt-2"/>
        </div>
        
        {
            !newEducation.currently &&
            <>
            <div className='flex items-end mt-2'>
            <SelectInput
            label="To"
            value={newEducation.to_month}
            onChange={(e) => setDataEducation('to_month', e.target.value)}
            className="w-40"
            style={{ backgroundColor: '#fff' }}
            name="to_month">
                <option value=""></option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </SelectInput>
            <SelectYear
                value={newEducation.to_year}
                className="w-28 ml-2"
                onChange={(e) => setDataEducation('to_year', e.target.value)}
                name="to_year"
            />
        </div>
        <div>
            <InputError message={errorMsg.to_month} className="mt-2"/>
            <InputError message={errorMsg.to_year} className="mt-2"/>
        </div>
        </>
        }
        <div className='flex my-4'>
            <button onClick={saveEducation} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
            <button onClick={CancelAddEducation} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
        </div>
        </div>       
    </div>
    )
}