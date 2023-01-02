import React, {useState} from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import Logo from '@/Components/Logo'
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react'
//import MainMenu from '@/Shared/MainMenu';
//import FlashMessages from '@/Shared/FlashMessages';
//import TopHeader from '@/Shared/TopHeader';
//import BottomHeader from '@/Shared/BottomHeader';
import Icon from '@/Components/Icon'
import MenuItem from '@/Components/MenuItem'
import FlashMessages from '@/Components/FlashMessages'

export default function Layout({ title, children }) {
  const { menu } = usePage().props
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="h-screen w-full bg-darkGray md:flex flex-row items-center overflow-hidden">
      <FlashMessages />
      <Helmet titleTemplate="%s | Firestarter Club" title={title} />
      <div className='p-2 font-semibold flex flex-wrap justify-between items-center md:items-stretch overflow-y-auto overflow-x-hidden w-full md:w-20 md:h-full'>
        <div className='text-center p-1 md:w-full'>
        <InertiaLink href='/'>
          <img src="/svg/logo.svg" className='w-10 mx-auto'/>
        </InertiaLink>
        </div>
        <div onClick={() => setMenuOpened(!menuOpened)} className='md:hidden text-orange'>
                <Icon name='hamburger' className='w-6 current-fill'/>
        </div>
        <div className='hidden md:flex flex-col items-start text-xs w-full'>
          {
            menu.map(
              ({icon, link, text},i) => <MenuItem key={i} icon={icon} link={link} text={text}/>
              )
          }
        </div>
        <div className='hidden md:flex w-full flex-wrap items-end'>
          <div className='w-full text-center'>
            <Link href={route('logout')} method="post" as="button">
              <Icon name="log-out" className="w-4 mb-2 h-4 mx-auto fill-current"/>
              <p className='text-xs'>Log out</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='h-full md:p-2 md:pl-0 flex-1 overflow-hidden '>
        <div className='bg-white h-full w-full rounded-xl overflow-hidden overflow-y-auto'>
          {children}
        </div>
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
          {
            menu.map(
              ({icon, link, text},i) => {
              const isActive = route().current(link + '*');

              const Item = classNames('w-full flex font-semibold my-2 p-2 rounded-lg',{
                'text-orange hover:bg-black hover:text-white': isActive,
                'text-black hover:bg-orange hover:text-white': !isActive
              })
              return(
              <InertiaLink key={i} href={route(link)} className={Item}>
                <Icon name={icon} className="w-4 h-4 fill-current mr-2"/>
                <p className='text-xs'>{text}</p>
              </InertiaLink>
              )
              })
          }
        </div>
        <div className="mt-4">
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="w-full rounded-xl bg-orange p-4 text-white text-center"
            >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}