import React, { useState, Fragment } from 'react'
import Icon from '@/Components/Icon'
import axios from 'axios'
import date from '@/Components/Date'
import { InertiaLink } from '@inertiajs/inertia-react'


export default(props) => {
    const { id, title, topics, created_at } = props
    const [ showTopics, setShowTopics] = useState(false)
    const [topicsItems, setTopicsItems] = useState(topics || [])
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
        <>
            <tr className='border-t'>
                <td className='p-2 flex'>
                    <button onClick={() => setShowTopics(!showTopics)}
                    className='hover:bg-gray-200 hover:cursor-pointer text-gray-400 hover:text-gray-700 rounded-full p-1 w-6 h-6'
                    tooltip={showTopics ? 'Hide Topics' : 'Show Topics'}
                    flow='right'
                    >
                        <Icon
                        className="w-full fill-current"
                        name={showTopics ? 'hide' : 'show'}
                        />
                    </button>
                    <InertiaLink href={route('category', id)}>{title}</InertiaLink>
                </td>
                <td className='p-2'>
                    <InertiaLink href={route('category', id)}>
                    {date(created_at)}
                    </InertiaLink>
                </td>
                <td className='p-2 px-4 text-right text-gray-500 font-semibold'>
                    <InertiaLink href={route('category', id)}>
                        {topicsItems.length}
                    </InertiaLink>
                </td>
                <td className='text-right text-gray-500 font-semibold'>
                    <InertiaLink href={route('category', id)}>
                        <Icon name='edit' className='w-3 fill-current'/>
                    </InertiaLink>
                </td>
            </tr>
            <tr>
                <td colSpan="4">
                <div className='p-2'>
                        {
                        showTopics &&
                        <div
                        className="roundexd-lg p-2 flex flex-wrap">
                        {
                            topicsItems.map((topic,i)=>
                            <div
                            //onClick={() => deleteTopic(topic.id,i)}
                            className='bg-white border border-gray-200 flex w-auto p-1 px-2 rounded-lg items-center group cursor-pointer hover:shadow mr-1 my-1' key={i}>
                                
                                <span>{topic.title}</span>
                            </div>)
                        }
                        </div>
                        }
                </div>
                </td>
            </tr>
        </>
    )
}