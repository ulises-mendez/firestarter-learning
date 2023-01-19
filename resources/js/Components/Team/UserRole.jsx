import React, { useContext, useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Context } from '@/Components/Team/Context'
import axios from 'axios'

import addedDate from '@/Components/Team/addedDate'

export default ({user}) => {
    const {id, created_at, email, name, roles} = user
    const { csrf } = usePage().props
    const { reset, prevTeam, setTeam, closeModal } = useContext(Context)
    const [role, setRole] = useState(roles || ['student'])

    function changeRole(e,id) {
        const value = e.target.value
        
        axios.put(route('user.role.update', id), {
            _token: csrf,
            roles: [value]
        })
        .then(res=>{
            setRole([value])
            const team = [...prevTeam]
            console.log(team.filter(e => e.id === user.id))
            if(team.filter(e => e.id === user.id).length > 0){
                const index = team.map(user => user.id).indexOf(user.id)
                team[index] = {...user, roles: [value]}
                setTeam(team)
                closeModal()
                reset()
                
            }else{
                setTeam(team.concat({...user, roles: [value]}))
            }
        })
        .catch(err=>console.log(err))
    }

    return(
        <tr className='border-t'>
            <td className='px-4 py-2'>
                <p className='font-semibold'>{name}</p>
                <p className='text-xs'>{email}</p>
            </td>
            <td className='px-4 py-2 text-sm'>{addedDate(created_at)}</td>
            <td className='text-right py-2 px-4'>
                <select value={role[0]} onChange={e => changeRole(e, id)} className='border border-gray-300 rounded'>
                    <option value='student'>Student</option>
                    <option value='instructor'>Instructor</option>
                    <option value='editor'>Editor</option>
                    <option value='admin'>Administrator</option>
                </select>
            </td>
        </tr>
    )
}