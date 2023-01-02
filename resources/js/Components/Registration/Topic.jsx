import React, { useState } from 'react'
import classNames from 'classnames'
export default ({name, className, handleChecked, label,value}) =>{
    const [select, setSelect] = useState(false)
    
    const toggle = classNames(`border ${className} `, {

    })

    return(
        <div className='w-full flex'>
            <input type="checkbox" className='hidden' name='interests' id={value} value={value} onChange={handleChecked} />
            <label className="topic" htmlFor={value}>
                {label}
            </label>
        </div>
    )
}