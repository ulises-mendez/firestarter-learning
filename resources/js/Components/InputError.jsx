import React from 'react'
export default function InputError({ message, className = '' }) {
    return message ? <div className={'flex items-center text-red-600 ' + className}><div className='text-current rounded-full mr-1 flex items-center justify-center border border-current w-4 h-4'><span className='text-xs'>!</span></div><p className={'text-sm text-current'}>{message}</p></div> : null;
}
