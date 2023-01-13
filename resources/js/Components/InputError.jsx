import React from 'react'
export default function InputError({ message, className = '' }) {
    return message ? <div className={'flex items-center text-red-500 ' + className}><div className='bg-red-500 text-current rounded-full mr-1 flex items-center justify-center border border-current w-4 h-4'><span className='text-xs text-white'>!</span></div><p className={'text-sm text-current'}>{message}</p></div> : null;
}
