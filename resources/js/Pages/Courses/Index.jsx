import React, { useRef, useState } from 'react'
import Layout from '@/Layouts/Auth'
import Carousel from '@/Components/Courses/Carousel'
import Instructors from '@/Components/Courses/Index/Instructors'
import Item from '@/Components/Courses/Index/Item'
//import Carousel, { Controller } from "@jjunyjjuny/react-carousel";

// WELCOME CAROUSEL
import Featured from '@/Components/Courses/Featured'
import useMediaQuery from '@/Components/useMediaQuery'
import { courses } from '@/data/courses'
import Icon from '@/Components/Icon'
import { usePage } from '@inertiajs/inertia-react'
// END WELCOME 

const Index = () =>{
    const {all, highlights, topics} = usePage().props
    // WELCOME CAROUSEL
    const Desktop = useMediaQuery(768)
    const Tablet = useMediaQuery(1200)
    const Slides = [0, 1, 2]
    const SlidesTablet = [0, 1]
    const [index, setIndex] = useState(0)
    //console.log('item', courses[0])
    const maxSlide = courses.length - 3
    const previous = () => setIndex(Math.max(0, index - 1))
    const next = () => setIndex(Math.min(maxSlide, index + 1))
    // END WELCOME 
    const sampleArray = [1, 2, 3, 4, 6, 7, 8];

    return(
        
        <div className='w-full mx-auto'>
            <div className='w-full max-w-8xl'>
            <div className='w-full p-4 bg-white'>
                {
                    /*
                    <h1 className='font-bold text-xl'>Courses</h1>
                    <div className='flex mb-2'>
                        <div className='text-sm border rounded-lg mr-2 px-2 py-1'> Bussiness</div>
                    </div>
                    */
                }
                <div className='mt-4'>
                    <h2 className='font-bold text-lg'>Top recommended</h2>
                </div>
                <div className='px-4'>
                    <Carousel courses={highlights}/>
                </div>
                <div className='mt-4'>
                    <h2 className='font-bold text-lg'>New Releases</h2>
                </div>
                <div className='px-4'>
                    <Carousel courses={all}/>
                </div>
                <div className='mt-4'>
                    <h2 className='font-bold text-lg'>This week&#180;s top courses</h2>
                </div>
                <div className='px-4'>
                    <Carousel courses={all}/>
                </div>
                {
                    topics.map(
                        (topic, i) =>
                        topic.courses.length > 0 &&
                        <div key={i}>
                            <div className='mt-4'>
                                <h2 className='font-bold text-lg'>Because you follow {topic.title} Topic</h2>
                            </div>
                            <div className='px-4'>
                                <Carousel courses={topic.courses}/>
                            </div>
                        </div>
                    )
                }
                <div className='mt-4'>
                    <h2 className='font-bold text-lg'>Featured instructors</h2>
                </div>
                <div className='px-4'>
                    <Instructors/>
                </div>
            </div>
            
            </div>
        </div>
        
    )
}

Index.layout = page => <Layout title="Courses" children={page} />;


export default Index;