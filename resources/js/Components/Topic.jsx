import React, { useState, Fragment } from 'react'
import Icon from '@/Components/Icon'
import axios from 'axios'
import date from '@/Components/Date'
import { InertiaLink } from '@inertiajs/inertia-react'

export default(props) => {
    const { id, title, created_at } = props
    const [ showTopics, setShowTopics] = useState(false)
    const [topicsItems, setTopicsItems] = useState([])
    function deleteTopic(id,i){
        axios.delete(route('topic.delete', id))
        .then(
            r=> {
                const topicsArray = [...topicsItems]
                topicsArray.splice(i,1)
                setTopicsItems(topicsArray)
                console.log(r.data)
            }
        )
        .catch(err => console.error(err))
    }
    return(
        <Fragment >
            <tr className='border-t'>
                <td className='p-4'>
                    <InertiaLink href={route('edit.topic', id)}>
                        {title}
                    </InertiaLink>
                </td>
                <td className='p-4'>
                    {date(created_at)}
                </td>
                <td className='p-4 flex justify-end'>
                    <Icon className='h-4 w-4' name='trash' />
                </td>
            </tr>
        </Fragment>
    )
}