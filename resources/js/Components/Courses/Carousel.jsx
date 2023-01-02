import React, { useRef, useState } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
//import { courses } from '@/data/courses'
import Icon from '@/Components/Icon'
import releasedFormat from '@/lib/releasedFormat'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";

const Course = ({item}) => {
    const {category, title, released, thumbnail, slug} = item
    return (
        <div className='p-4 bg-white rounded-lg'>
        <div className=' p-4'>
            <InertiaLink href={route('course.show', slug)} className='relative'>
                <img src={thumbnail} className='rounded' />
            </InertiaLink>
            <div className=' mt-2'>
                <div className='rounded-full w-auto'><span className='text-orange text-sm font-semibold'>{category}</span></div>
            </div>
            <InertiaLink  href={route('course.show', slug)} className='font-semibold my-2'>
            {title}
            </InertiaLink>
            <p className='text-sm text-gray-500'>{releasedFormat(released)}</p>
        </div>
        </div>
    );
  };



export default ({courses}) => {
    const slider = useRef(null)
    var settings = {
        className:'course-slide',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
          {courses.map((item, i) => {
            return (
                <div key={i}>
                    <Course key={i} item={item}/>
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

