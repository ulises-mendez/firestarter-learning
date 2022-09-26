import React from 'react';
import Helmet from 'react-helmet';
//import MainMenu from '@/Shared/MainMenu';
//import FlashMessages from '@/Shared/FlashMessages';
//import TopHeader from '@/Shared/TopHeader';
//import BottomHeader from '@/Shared/BottomHeader';
import Icon from '@/Components/Icon'
export default function Layout({ title, children }) {
  return (
    <div className="h-screen w-full bg-darkGray md:p-2 md:flex flex-wrap items-center overflow-hidden">
      <Helmet titleTemplate="%s | Firestarter Club" title={title} />
      <div className='p-2 font-semibold flex flex-wrap items-between md:h-full'
      style={{
        width: '100%',
        maxWidth: '80px'
      }}>
        <div className='text-center p-1 w-full'>
          <img src="/svg/logo.svg" className='w-10 mx-auto'/>
        </div>
        <div className='hidden md:flex w-full flex-wrap items-start text-xs'>
          <div className='w-full text-center'>
            <div className='text-orange'>
              <Icon name="courses" className="w-4 h-4 mx-auto fill-current"/>
              <p>Courses</p>
            </div>
          </div>
          <div className='w-full text-center'>
            <div className='text-black'>
              <Icon name="user" className="w-4 h-4 mx-auto fill-current"/>
              <p>Profile</p>
            </div>
          </div>
          <div className='w-full text-center'>
            <div className='text-black'>
              <Icon name="cv" className="w-4 h-4 mx-auto fill-current"/>
              <p>Curriculum</p>
            </div>
          </div>

        </div>
        <div className='hidden md:flex w-full flex-wrap items-end'>
          <div className='w-full'>
            <div className='text-black'>
              <Icon name="log-out" className="w-4 h-4 mx-auto fill-current"/>
              <p>Log out</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className='bg-white h-full rounded-xl flex-1 overflow-hidden'>
        {children}
      </div>
    </div>
  );
}