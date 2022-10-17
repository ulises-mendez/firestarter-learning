import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react'
//import MainMenu from '@/Shared/MainMenu';
//import FlashMessages from '@/Shared/FlashMessages';
//import TopHeader from '@/Shared/TopHeader';
//import BottomHeader from '@/Shared/BottomHeader';
import Icon from '@/Components/Icon'
import MenuItem from '@/Components/MenuItem'

export default function Layout({ title, children }) {
  return (
    <div className="h-screen w-full bg-darkGray  md:flex flex-wrap items-center overflow-hidden">
      <Helmet titleTemplate="%s | Firestarter Club" title={title} />
      <div className='p-2 font-semibold flex flex-wrap items-between md:h-full'
      style={{
        width: '100%',
        maxWidth: '90px'
      }}>
        <div className='text-center p-1 w-full'>
        <InertiaLink href='/'>
          <img src="/svg/logo.svg" className='w-10 mx-auto'/>
        </InertiaLink>
        </div>
        <div className='hidden md:flex flex-col w-full  items-start text-xs'>
          <MenuItem icon='courses' link='courses' text='Courses'/>
          <MenuItem icon='user' link='me' text='Me'/>
          <MenuItem icon='cv' link='curriculum' text='Curriculum'/>
          <MenuItem icon='settings' link='settings' text='Settings'/>

        </div>
        <div className='hidden md:flex w-full flex-wrap items-end'>
          <div className='w-full text-center'>
            <InertiaLink href='/' className='text-black'>
              <Icon name="log-out" className="w-4 mb-2 h-4 mx-auto fill-current"/>
              <p className='text-xs'>Log out</p>
            </InertiaLink>
          </div>
        </div>
        
      </div>
      <div className='h-full md:p-2 md:pl-0 flex-1 '>
        <div className='bg-white h-full w-full rounded-xl overflow-hidden'>
        {children}
        </div>
        
      </div>
    </div>
  );
}