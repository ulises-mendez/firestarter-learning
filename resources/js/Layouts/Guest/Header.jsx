import React, { useState, useEffect } from 'react'
import Logo from '@/Components/Logo'
import Icon from '@/Components/Icon'
import MainMenu from '@/Layouts/Guest/MainMenu'
import { Inertia } from '@inertiajs/inertia'
import { usePage, useForm } from '@inertiajs/inertia-react'
import { InertiaLink } from '@inertiajs/inertia-react'


const Category = ({text,onMouseEnter}) =>{
    return(
        <div onMouseEnter={onMouseEnter} className='flex hover:bg-black hover:text-white px-2'>
            <p
            className="w-full text-left px-4 py-2 text-sm select-none ">
                {text}
            </p>
            <Icon name='cheveron-right' className='w-4 fill-current'/>
        </div>
    )
}

const Header = () =>{
    const {categories, filters } = usePage().props
    const [menu, setMenu] = useState(false)
    const [menuOpened, setMenuOpened] = useState(false)
    const [toooltip, setTooltip] = useState(false)
    const [selectCategory, setSelectCategory] = useState(null)
    const {data, setData, errors, post, processing} = useForm({
        keywords: filters?.keywords || ''
    })

    function changeSearch(e){
        setData('keywords', e.target.value)
    }

    function search(e){
        e.preventDefault()
        post(`/search?keywords=${data.keywords}`)
    }

    return(
        <nav className='p-4 max-w-7xl mx-auto flex items-center justify-between'>
            <div>
                <InertiaLink href='/'>
                    <Logo className='w-56'/>
                </InertiaLink>
            </div>
            <div className='p-2 relative hidden md:block'>
                <div onMouseEnter={() => setMenu(!menu)}>
                    <Icon name='categories' className='ml-2 w-4 h-4'/>
                </div>
                <div
                onMouseLeave={() => setMenu(false)}
                className={` origin-top-left z-20 absolute top-full left-0 mt-2 py-1  ${menu == true ? '' : 'hidden'}`}>
                    <div className='flex'>
                    <div className="w-[15rem] bg-white relative text-left border-r">
                        {
                            categories.map((cat, i)=>(
                                <Category key={i} text={cat.title} onMouseEnter={()=> setSelectCategory(i)}/>
                            ))
                        }
                    </div>
                    {
                        selectCategory !== null &&
                        <div className="w-[20rem] relative text-left">
                            {
                                categories[selectCategory].topics.map((topic,i)=>{
                                    return(
                                        <InertiaLink
                                        key={i}
                                        href={route('topic',topic.id)}
                                        >
                                            <div className="w-full text-left px-4 py-2 text-sm text-black
                                            border-b
                                            border-gray-200
                                            select-none 
                                            bg-white hover:bg-black hover:text-white">
                                            {topic.title}
                                            </div>
                                        </InertiaLink>
                                    )
                                })
                            }
                            
                        </div>
                    }
                    </div>
                </div>
            </div>
            <form onSubmit={search} className='hidden md:block p-2 flex-1'>
                <input
                value={data.keywords}
                className='bg-lightGray rounded-full p-2 px-4 w-full'
                placeholder='Search for anything'
                onChange={changeSearch}
                />
            </form>
            <div className='hidden md:block'>
                <MainMenu />
                
            </div>
            
            
            
    <div className={`fixed flex flex-col z-30 inset-0 w-full sm:w-80 overflow-auto bg-white p-4 transition duration-300 ${menuOpened ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between mb-8">
        <InertiaLink href='/'>
                    <Logo className='w-40'/>
        </InertiaLink>
          <button onClick={() => setMenuOpened(!menuOpened)} type="button" className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-orange focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
              <svg x-show="movilMenu" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
         </button>
        </div>
        <div className="flex flex-col mb-auto"
        onClick={() => setMenuOpened(!menuOpened)}
        >
            <h3 className='font-semibold text-gray-600'>Most Popular</h3>
            {
                categories.map((cat, i)=>(
                    <Category key={i} text={cat.title} onMouseEnter={()=> setSelectCategory(i)}/>
                ))
            }
        </div>
        <div className="mt-4">
          <InertiaLink
            href={route('login')}
            as="button"
            className="w-full rounded-xl bg-orange p-4 text-white text-center"
            >
            Login
          </InertiaLink>
        </div>
        
      </div>
        <div className='text-gray-400 relative flex justify-end'>
            {
                toooltip &&
                <div className='bg-black absolute text-white text-xs mr-2 rounded p-1 right-full w-24'>
                    <div className='px-2'>Help Center</div>
                    <div className='bg-black absolute -right-1 top-1 rounded-sm z-10 w-4 h-4 rotate-45'></div>
                </div>
            }
            <div className='hidden md:block'>
            <InertiaLink href={route('help.index')} onMouseEnter={()=>setTooltip(true)} onMouseLeave={()=>setTooltip(false)}>
                <Icon name='question' className='w-5 ml-2 fill-current cursor-pointer'/>
            </InertiaLink>
            </div>
            
        </div>
        <div onClick={() => setMenuOpened(!menuOpened)} className='md:hidden text-orange'>
                <Icon name='hamburger' className='w-6 current-fill'/>
        </div>
        </nav>
    )
}

export default Header