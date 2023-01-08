import React, { useRef, useState } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import durationFormat from '@/lib/durationFormat'
import Icon from '@/Components/Icon'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 

export default (props) => {
    const { courses } = props
    const slider = useRef(null)
    var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        nextArrow: null,
        initialSlide: 0,
    }

    function next(){
        slider.current.slickNext()
    }

    function previous(){
        slider.current.slickPrev()
    }
    return (

    <div className='w-full relative'>
        <Slider {...settings} ref={slider}>
          {courses.map((course, i) => {
            return (
                <div key={i} className='w-full'>
                    <div className='w-full flex bg-gray-100 h-72 rounded-lg overflow-hidden'>
                        <div className='w-1/2 flex flex-col justify-center px-12'>
                            <div>
                                <h4 className='text-2xl text-orange font-semibold'>{course.title}</h4>
                            </div>
                            <div className='my-2'>
                                <p className='text-gray-500'>{durationFormat(course.time)}</p>
                            </div>
                            <InertiaLink href={route('course.show', course.slug)}>
                                <button className='btn-orange'>Go to course</button>
                            </InertiaLink>
                        </div>
                        <div className='w-1/2 relative'>
                            <div className='overlay-highlight'/>
                            <img src={course.thumbnail} className='object-cover w-full h-full'/>
                        </div>
                    </div>
                </div>
            );
          })}
        </Slider>
        <div className='bg-orange text-white rounded-full p-1 absolute top-1/2 left-2 -translate-y-1/2' onClick={previous}>
            <Icon name='cheveron-left'  className='fill-current w-5 h-5'/>
        </div>
        <div className='bg-orange text-white rounded-full absolute p-1 top-1/2 right-5 -translate-y-1/2' onClick={next}>
                <Icon name='cheveron-right'  className='fill-current w-5 h-5'/>
        </div>
      </div>

    )
}

