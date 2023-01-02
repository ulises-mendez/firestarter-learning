import React, { useContext, useState } from 'react'
import { Context } from '@/Components/Curriculum/Context'
import { usePage } from '@inertiajs/inertia-react'
import axios from 'axios'
import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput'
import SelectYear from '@/Components/SelectYear'
import SelectCountry from '@/Components/SelectCountry'


const dateWork = (date) => {
    const dateString = new Date(date)
    const m = dateString.getMonth()
    const y = dateString.getFullYear()

    const months = ['Junuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (<span>{months[m]}'{m}' {y}</span>)
}
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
    const { works, getWorks, setWorks } = useContext(Context)
    const { csrf, profile } = usePage().props
    const { i, id, title, city, company_name, from_month, from_year, description, country, currently, to_month, to_year } = props;
    const [errorMsg, setErrorMsg] = useState({})
    const [edit, setEdit] = useState(false);
    const [changeCountry, setChangeCountry] = useState(false)
    const [data, setData] = useState({
        title: title || '',
        company_name: company_name || '',
        country: country || '',
        city: city || '',
        description: description || '',
        from_month: from_month || '',
        from_year: from_year || '',
        currently: currently == 1 ? true : false || false,
        to_month: to_month || '',
        to_year: to_year || '',
    })

    function submit(e){
        e.preventDefault()
        axios.put(route('work.update', id),{
            _token: csrf,
            currently: data.currently,
            title: data.title,
            company: data.company_name,
            country: data.country,
            city: data.city,
            description: data.description,
            from_month: data.from_month,
            from_year: data.from_year,
            to_month: data.to_month,
            to_year: data.to_year,
        })
            .then(
                res => {
                const workItems = [...works]
                const workItem = res.data.work
                workItems[i] = workItem
                setWorks(workItems)
                setEdit(false)
                }
                )
            .catch(
                err => setErrorMsg(err.response.data.errors)
            )

    }
    function deleteWork(id){
        axios.delete(route('work.delete', id))
        .then(
            () => getWorks()
        )
        .catch(
            err => console.log(err)
        )
    }
    function cancel(){
        setEdit(false)
        setData({
            title: title || '',
            company_name: company_name || '',
            country: country || '',
            city: city || '',
            description: description || '',
            from_month: from_month || '',
            from_year: from_year || '',
            currently: currently || '',
            to_month: to_month || '',
            to_year: to_year || '',
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
                                <p className='font-bold'>{title}</p>
                            </div>
                            <div className='flex justify-end text-orange rounded-full p-1'>
                                <div className='cursor-pointer' onClick={()=> setEdit(true)}>
                                    <Icon name='edit' className='w-4 h-4 fill-current' />
                                </div>
                                <div className='cursor-pointer' onClick={() => deleteWork(id)}>
                                    <Icon name='trash' className='ml-3 w-4 h-4 fill-current'/>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <p>{company_name} - {city}, {country}</p>
                            <p className='text-sm text-gray-500'>{getMonth(from_month)} {from_year} to  {data.currently == false ? <span>{getMonth(to_month)} {to_year}</span>  : 'Present'}</p>
                        </div>
                        <div>
                            <p className='px-2'>{description}</p>
                        </div>
                    </div>
                )
            }
            {
                edit && (
                    <form>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Job title - required"
                        value={data.title}
                        onChange={onHandleChange}
                        name="title"
                        />
                        <InputError message={errorMsg.title} className="mt-2"/>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Company"
                        value={data.company_name}
                        onChange={onHandleChange}
                        name='company_name'
                        />
                            <InputError message={errorMsg.company_name} className="mt-2"/>
                        {
                            !changeCountry &&
                            <div className='my-4'>
                                <p className='font-semibold'>City - Canada (<span className='text-orange cursor-pointer' onClick={()=> setChangeCountry(!changeCountry)}>Change Country</span>)</p>
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
                            <InputError message={errorMsg.country} className="mt-2"/>
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
                            <InputError message={errorMsg.city} className="mt-2"/>

                        <h4 className='font-semibold my-4'>Time period</h4>
                        <div className="flex items-center mr-2" onClick={checkedChange}>
                            <Checkbox name='currently' checked={data.currently ? true : false}/>
                            <span className="ml-2">I currently work here</span>
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
                            name="from_year" />
                            
                        </div>
                        <div>
                            <InputError message={errorMsg.from_month} className="mt-2"/>
                            <InputError message={errorMsg.from_year} className="mt-2"/>
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
                                name="to_year" />
                            </div>
                            </div>
                            <div>
                                <InputError message={errorMsg.to_month} className="mt-2"/>
                                <InputError message={errorMsg.to_year} className="mt-2"/>
                            </div>
                            
                        </>
                        }
                        <div>
                            <p className='mt-2 font-semibold'>Description</p>
                            <textarea
                            className='w-full border border-gray-300 mb-2 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange' 
                            value={data.description}
                            onChange={onHandleChange}
                            name='description'
                            />
                                <InputError message={errorMsg.description} className="mt-2"/>

                        </div>
                        <div className='flex my-4'>
                            <button type='submit' onClick={submit} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                            <button type='button' onClick={cancel} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                        </div>
                    </form>
                )
            }
            <div>

            </div>
        </div>
    )
}