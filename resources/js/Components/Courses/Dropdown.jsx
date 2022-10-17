import React, { useState } from 'react'
import Icon from '@/Components/Icon'



const Dropdown = ({item, index}) =>{
    const [open, setOpen] = useState(false)
    
    return(
        <div className={`${index == true ? '' : 'border-b'}`}>
        <button onClick={() => setOpen(!open)} className='w-full h-full flex p-2 justify-between'>
            <div className='flex-1 text-left'>
                <span className='font-semibold text-sm'>{item.title}</span>
            </div>
            <Icon name='cheveron-down' className='w-6'/>
        </button>
        {
        open &&
        <div>
                {
                    item.content.map((item, i)=>{
                        return(
                            <div key={i} className='flex items-start p-2  border-gray-900 hover:bg-gray-200'>
                            <button  className='py-2 mr-2'>
                                <Icon name='play-linear' className='w-2 h-2'/>
                            </button>
                                <div>
                                    <p className='text-sm'>{item.title}</p>
                                    <p className='text-xs text-gray-500'>{item.duration}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
        }
        </div>
    )
}

export default Dropdown