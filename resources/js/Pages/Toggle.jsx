import React, { useState } from 'react'
import Toggle from '@/Components/Toggle'
export default ({value,onChange}) => {
    const [toggleValue,setToggleValue] = useState(value)

    function change(){
        setToggleValue(!toggleValue)
    }

    const [data, setData] = useState([true, true, false, false])


    return(
        <div>
            {
            data.map(item =>
                <Toggle value={item} onChange={() => console.log(item)}/>
 
            )
            }
        </div>
    )
}