import React, { useState } from 'react'

export default ({value,onChange}) => {
    const [toggleValue,setToggleValue] = useState(value)

    function change(){
        setToggleValue(!toggleValue)
        onChange()
    }
    return(
        <div>
            <label className="inline-flex relative items-center cursor-pointer" >
                <input type="checkbox" value={toggleValue}  className="sr-only peer" checked={toggleValue} onChange={change}/>
                <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
            </label>
        </div>
    )
}