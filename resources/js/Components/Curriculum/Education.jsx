import React, { useContext, useState } from 'react'
import { Context } from '@/Components/Curriculum/Context'
import { usePage } from '@inertiajs/inertia-react'
import axios from 'axios'
import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput'
import SelectCountry from '@/Components/SelectCountry'
import SelectYear from '@/Components/SelectYear'

const getMonth = (m) => {
    const months = ['Junuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (<span>{months[Number(m)-1]}</span>)
}

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

export default(props) => {
    const { i, id, currently, level, field, college, city, from_month, from_year, to_month, to_year } = props;
    const { getWorks, education, setEducation } = useContext(Context)
    const { csrf } = usePage().props
    const [errorMsg, setErrorMsg] = useState({})
    const [edit, setEdit] = useState(false);
    const [changeCountry, setChangeCountry] = useState(false)
    const [data, setData] = useState({
        id: id,
        level: level || '',
        field: field || '',
        college: college || '',
        city: city || '',
        from_month: from_month || '',
        from_year: from_year || '',
        currently: currently == 1 ? true : false || false,
        to_month: to_month || '',
        to_year: to_year || '',
    })

    function submit(e){
        e.preventDefault()
        axios.put(route('education.update', id),{
            _token: csrf,
            level: data.level,
            field: data.field,
            college: data.college,
            city: data.city,
            from_month: data.from_month,
            from_year: data.from_year,
            currently: data.currently,
            to_month: data.to_month,
            to_year: data.to_year,
        })
            .then(
                res => {
                    console.log(i,id)
                    console.log(res.data)
                //getWorks()
                setEdit(false)
                const educationItem = res.data.education
                const educationItems = [...education]
                educationItems[i] = educationItem
                setEducation(educationItems)
                }
                )
            .catch(
                err => setErrorMsg(err.response.data.errors)
            )

    }
    function deleteWork(){
        axios.delete(route('education.destroy', id))
        .then(
           res => {
                const educationItems = [...education]
                educationItems.splice(i, 1)
                setEducation(educationItems)
                console.log(res.data)
           }
        )
        .catch(
            err => console.log(err)
        )
    }
    function cancel(){
        setEdit(false)
        setData({
            level: level || '',
            field: field || '',
            college: college || '',
            city: city || '',
            from_month: 1 || '',
            from_year: 2022 || '',
            currently: currently == 1 ? true : false || false,
            to_month: 1 || '',
            to_year: 2022 || '',
        })
    }

    function onHandleChange(e){
        const key = e.target.name
        const value = e.target.value

            setData(values => ({
            ...values,
            [key]: value
            }))
      }

      function checkedChange(){
        setData(values => ({
            ...values,
            currently: !data.currently
            }))
      }

    return(
        <div>
            {
                !edit && (
                    <div>
                        <div className='pt-2 my-4 flex justify-between items-center px-2'>
                            <div>
                                <p className='font-bold'>{level} in {field}</p>
                            </div>
                            <div className='flex justify-end text-orange rounded-full p-1'>
                                <div className='cursor-pointer' onClick={()=> setEdit(true)}>
                                    <Icon name='edit' className='w-4 h-4 fill-current' />
                                </div>
                                <div className='cursor-pointer' onClick={deleteWork}>
                                    <Icon name='trash' className='ml-3 w-4 h-4 fill-current'/>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <p>{college} - {city}</p>
                            <p className='text-sm text-gray-500'>{getMonth(from_month)} {from_year} to {currently == false ? <span>{getMonth(to_month)} {to_year}</span>  : 'Present'}</p>
                        </div>
                    </div>
                )
            }
            {
                edit && (
                    <form>
                        <SelectInput 
                            label='Level of education'
                            value={data.level}
                            name='level'
                            onChange={onHandleChange}
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
                        
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Field of study"
                        value={data.field}
                        onChange={onHandleChange}
                        name='field'
                        />
                            
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="College or University"
                        value={data.college}
                        onChange={onHandleChange}
                        name='college'
                        />
                            
                        {
                            !changeCountry &&
                            <div className='my-4'>
                                <p className='font-semibold'>college city - Canada (<span className='text-orange cursor-pointer' onClick={()=> setChangeCountry(!changeCountry)}>Change Country</span>)</p>
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
                            onChange={onHandleChange}
                            style={{ border: '1px solid #d1d5db' }}
                            />
                            
                        </div>
                        }
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="City and county/region"
                        value={data.city}
                        onChange={onHandleChange}
                        name='city'
                        />
                            

                        <h4 className='font-semibold my-4'>Time period</h4>
                        <div className="flex items-center mr-2" onClick={checkedChange}>
                            <Checkbox name='currently' checked={data.currently ? true : false}/>
                            <span className="ml-2">Currently enrolled</span>
                        </div>
                        <InputLabel forInput="from" value="From"/>
                        
                        <div className='flex items-start'>
                            <div>
                                <SelectInput
                                value={data.from_month}
                                onChange={onHandleChange}
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
                            </div>
                            <SelectYear
                            value={data.from_year}
                            className="w-28 ml-2"
                            onChange={onHandleChange}
                            name="from_year"
                            />
                        </div>
                        <div>
                            
                        </div>
                        {
                            !data.currently &&
                            <>
                            <InputLabel forInput="to" value="To"/>
                            <div className='flex items-start mt-2'>
                            <div>
                                <SelectInput
                                value={data.to_month}
                                onChange={onHandleChange}
                                className="w-40"
                                style={{ backgroundColor: '#fff' }}
                                name="to_month">
                                    <option value=""></option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </SelectInput>
                            </div>
                            <div>
                                <SelectYear
                                value={data.to_year}
                                className="w-28 ml-2"
                                onChange={onHandleChange}
                                name="to_year"
                                />
                            </div>
                            
                            </div>
                            
                            
                        </>
                        }
                        <div className='flex my-4'>
                            <button type='submit' onClick={submit} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                            <button type='button' onClick={cancel} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                        </div>
                        <div>
                                <InputError message={errorMsg.level} className="mt-2"/>
                                <InputError message={errorMsg.field} className="mt-2"/>
                                <InputError message={errorMsg.college} className="mt-2"/>
                                <InputError message={errorMsg.country} className="mt-2"/>
                                <InputError message={errorMsg.from_month} className="mt-2"/>
                                <InputError message={errorMsg.from_year} className="mt-2"/>
                                <InputError message={errorMsg.city} className="mt-2"/>
                                <InputError message={errorMsg.to_month} className="mt-2"/>
                                <InputError message={errorMsg.to_year} className="mt-2"/>
                        </div>
                    </form>
                )
            }
            <div>

            </div>
        </div>
    )
}