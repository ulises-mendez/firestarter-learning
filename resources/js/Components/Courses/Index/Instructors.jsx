import React, { useRef, useState } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

import Icon from '@/Components/Icon'

import { instructors } from '@/data/instructor'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";

const Instructor = ({name, pic, title}) => {
    return (
        <div className='p-4 '>
        <div className='bg-white rounded-lg p-4'>
            <InertiaLink href={route('instructor.show')} className='relative'>
                <img src={pic} className='w-20 rounded mx-auto mb-4' />
            </InertiaLink>
            <InertiaLink  href={route('instructor.show')} className='text-sm font-semibold my-2'>
                {name}
            </InertiaLink>
            <p className='text-xs text-gray-500'>{title}</p>
        </div>
        </div>
    );
  };



export default (props) => {
    const slider = useRef(null)
    var settings = {
        className: 'instructors',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        accessibility: false,
        nextArrow: null,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            },
            
          ]
    }

    function next(){
        slider.current.slickNext()
    }

    function previous(){
        slider.current.slickPrev()
    }

    return (
    <>
    <div className='w-full'>
    <Slider {...settings} ref={slider}>
          {instructors.map((item, i) => {
            return (
                <div key={i}>
                    <Instructor key={i} title={item.title} name={item.name} pic={item.pic}/>
                </div>
            );
          })}
        </Slider>
        <div className='w-full max-w-8xl mx-auto flex justify-end py-2'>
            <div className='bg-white rounded-full p-2' onClick={previous}>
                <Icon name='cheveron-left'  className='w-6 h-6'/>
            </div>
            <div className='bg-white rounded-full p-2 ml-2' onClick={next}>
                <Icon name='cheveron-right'  className='w-6 h-6'/>
            </div>
        </div>
      </div>
    </>
    )
}

