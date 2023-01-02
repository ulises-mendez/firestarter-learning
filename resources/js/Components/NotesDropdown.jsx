import React, { useState } from 'react'
import classNames from 'classnames'
import Icon from '@/Components/Icon'
export default({title, children, notes}) => {
    const [showing, setShowing] = useState(true)
    const hide = classNames('my-2 rounded-lg w-full overflow-hidden ',{
        'block' : showing,
        'hidden' : !showing
    })
    const icon = classNames('w-4 h-4 current-fill',{
        '' : showing,
        'rotate-180' : !showing
    })
    return(
        <>
        {
            notes.length > 0 &&
        <div className='my-2'>
            
                <div onClick={() => setShowing(!showing)} className='font-bold bg-gray-200 p-2 flex justify-between cursor-pointer text-gray-600'>
                    <p className='text-sm'>{title}</p>
                    <Icon name='cheveron-down' className='w-4 h-4 current-fill'/>
                </div>
            
            
            <div className={hide}>
                {children}
            </div>
        </div>
        }
        </>
    )
}