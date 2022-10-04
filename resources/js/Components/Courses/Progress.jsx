import React, { useRef, useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Components/Icon';
const Progress = ({title, date, thumbnail, duration, details, contents, released}) =>{
    const [menu, setMenu] = useState(false)
    console.log(menu)
    return(
        <div href='/course' className='flex p-4 border rounded-lg w-full my-4'>
            <div>
                <InertiaLink href='/course'>
                <img src={thumbnail} className='rounded w-full max-w-xs'/>
                </InertiaLink>
            </div>
            <div className='p-4 flex-1 flex flex-col justify-between'>
                <div>
                    <InertiaLink href='/course'>
                        <h4 className='font-semibold my-2'>{title}</h4>
                    </InertiaLink>
                    <p className='text-sm text-gray-500'>{released}</p>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='w-full max-w-xs flex items-center'>
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5 ">
                            <div className="bg-orange h-1.5 rounded-full" style={{ width: '5%'}}></div>
                        </div>
                        <span className='text-xs ml-3'>54m 16s left</span>
                    </div>
                    <div className="relative">
                        <button 
                        onClick={() => setMenu(true)}>
                            <Icon name="dots" className='w-6'/>
                        </button>
                        <div>
                        <div 
                        onClick={() => setMenu(false)}
                        className={`origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${menu == true ? '' : 'hidden'}`}>
                            
                            <div className="w-full text-left">
                                <p
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white">
                                    Save
                                </p>
                                <p
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white">
                                    Add to Collection
                                </p>
                                <p
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white">
                                    Move to History
                                </p>
                                <p
                                className="w-full text-left px-4 py-2 text-sm text-black select-none hover:bg-orange hover:text-white">
                                    Remove
                                </p>
                            </div>
                            
                        </div>
                        <div
                            onClick={() => {
                            setMenu(false);
                            }}
                            className={`fixed inset-0 z-10 ${menu == true ? '' : 'hidden'}`}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress