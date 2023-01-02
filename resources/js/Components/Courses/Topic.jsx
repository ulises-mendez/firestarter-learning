import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
const Topic = ({text, id}) => {
    return(
        <InertiaLink
        href={id && route('topic', id)}
        className='p-3 bg-orange text-white rounded-full mr-2 my-1 w-auto hover:shadow-sm'>
            <span >{text}</span>
        </InertiaLink>
    )
}

export default Topic