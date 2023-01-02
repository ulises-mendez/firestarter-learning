import React, { useState, useContext } from 'react'
import { Context } from '@/Components/Curriculum/Context'
import Icon from '@/Components/Icon'
import InputError from '@/Components/InputError'
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput'

import axios from 'axios'
export default(props) =>{
    const { setSkills, skills, csrf } = useContext(Context)
    const [errorMsg, setErrorMsg] = useState({})

    const { i, id, name, years } = props
    const [edit, setEdit] = useState(false)
    const [data, setData] =useState({
        id: id || '',
        name: name || '',
        years: years || '',

    })
    function deleteSkill(id)
    {
        console.log(i,id)

        axios.delete(route('user_skill.update', id))
        .then(
           res => {
                const skillItems = [...skills]
                skillItems.splice(i, 1)
                setSkills(skillItems)
           }
        )
        .catch(
            err => console.log(err)
        )
    }

    function submit(e){
        e.preventDefault()
        axios.put(route('user_skill.update', id), {
            _token: csrf,
            name: data.name,
            years: data.years
        })
        .then(
            res =>{
                const skillItem = res.data.skill

                setEdit(false)
                const skillItems = [...skills]
                skillItems[i] = skillItem
                setSkills(skillItems)
                
            }
        )
        .catch(
            err => setErrorMsg(err)
        )
    }

    function cancel(){
        setEdit(false)
        setData({
            id: id || '',
            name: name || '',
            years: years || '',
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

    return(
        <div>
            <div className='pt-2 my-4 flex justify-between items-center px-2'>
                <div>
                    <p className='font-semibold'>{name}
                    { years === null ? '' : <>
                    <span className='text-gray-500'> - {years < 1 ? 'Less than 1 year' : years === 1 ? '1 year' : years + ' years'}</span>
                    </>
                    } 
                    </p>
                </div>
                <div className='flex justify-end text-orange rounded-full p-1'>
                    <div onClick={() => setEdit(!edit)}>
                        <Icon name='edit' className='w-4 h-4 fill-current'/>
                    </div>
                    <div onClick={() => deleteSkill(id)}>
                        <Icon name='trash' className='ml-3 w-4 h-4 fill-current'/>
                    </div>
                </div>
            </div>
            <div>
                {
                    edit &&
                    <form onSubmit={submit}>
                        <div className='px-4'>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Skill"
                        value={data.name}
                        onChange={onHandleChange}
                        />
                        <SelectInput
                            value={data.years}
                            label="Years of experience"
                            className="w-full"
                            onChange={onHandleChange}
                            name="years">
                            <option value=""></option>
                            <option value="0">Less than 1 year</option>
                            <option value="1">1 year</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="4">4 years</option>
                            <option value="5">5 years</option>
                            <option value="6">6 years</option>
                            <option value="7">7 years</option>
                            <option value="8">8 years</option>
                            <option value="9">9 years</option>
                            <option value="10">10+ years</option>
                            </SelectInput>
                            <div className='flex my-2 mt-4'>
                                <button type='submit' className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                                <button type='button' onClick={cancel} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                            </div>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}