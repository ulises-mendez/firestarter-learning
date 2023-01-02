import React, { useState } from 'react'
import classNames from 'classnames'
import Icon from '@/Components/Icon'
export default (props) => {
    const { index, title, collapse, lessons } = props
    const [showing, setShowing] = useState(collapse)

    const dropDownClassName = classNames('cursor-pointer select-none flex items-center justify-between font-semibold text-left p-2',{
        'bg-gradient-to-t from-gray-100 to-white' : showing,
        'border-b' : !showing,
    })
    const classes = classNames('my-2 w-full overflow-hidden border-b',{
        'max-h-full pb-8 ' : showing,
        'max-h-10 ' : !showing
    })

    const iconContainer = classNames('text-gray-500 hover:bg-gray-200 rounded-full',{
        ' ': showing,
        '' : !showing
    })

    const iconClassName = classNames('w-6 h-6 fill-current p-1',{
        'rotate-90' : showing,
        '' : !showing
    })
    return(
        <div className={classes}>
            <div className={dropDownClassName} onClick={() => setShowing(!showing)}>
                <div className='flex items-center'>
                    <div className='text-orange'>
                    <Icon name='chapters' className='w-4 h-4 fill-current mr-2'/>
                    </div>
                    <span>{title} <span className='text-gray-400'> - {lessons} lessons</span></span>
                    
                </div>
                <div className={iconContainer} >
                    <Icon name='cheveron-right' className={iconClassName}/>
                </div>
            </div>
            {props.children}
        </div>
    )
}