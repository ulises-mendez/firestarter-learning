import React, { useRef, useState } from 'react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import classNames from 'classnames';
import Section from '@/Components/Courses/Section'
import Video from '@/Components/Courses/Video'
import { InertiaLink } from '@inertiajs/inertia-react';

const ShowCourse = () =>{
    const videoContainer = useRef(null);
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    const [progress, setProgress] = useState(0);

    const [showContent, setShowContent] = useState(true)
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState([])
    const [like, setLike] = useState(false)
    const [reply, setReply] = useState(false)
    const video = useRef(null)

    function jump(i){
        video.current.currentTime = i
    }
    const [tab, setTab] = useState(1)
    function tabClick(i){
        setTab(i)
    }
    function play(){
        setPlaying(true)
        video.current.play()
    }
    function pause(){
        setPlaying(false)
        video.current.pause()
    }

    function fullScreen(){
        if (videoContainer.current.requestFullscreen) {
            videoContainer.current.requestFullscreen();
          } else if (videoContainer.current.mozRequestFullScreen) {
            videoContainer.current.mozRequestFullScreen();
          } else if (videoContainer.current.webkitRequestFullscreen) {
            videoContainer.current.webkitRequestFullscreen(videoContainer.current.ALLOW_KEYBOARD_INPUT);
          } else if (videoContainer.current.msRequestFullscreen) {
            videoContainer.current.msRequestFullscreen();
          }
    }
    function exitFullScreen(){
        video.current.exitFullScreen()
    }
    function submitQuote(e){
        e.preventDefault()
        console.log(note)
        const keepNotes = [...notes]
        //keepNotes.push(note)
        setNote('')
        setNotes(keepNotes.concat(note))
    }
    function keyDown(e){
        if(e.key === 'Enter'){
            if(e.shiftKey) return
            submitQuote(e)
        }
    }

    const content = classNames('relative p-4 h-full bg-lightGray hidden ',{
        'w-1/3 lg:block' : showContent,
        'w-0': !showContent
    })

    const TabElement = ({label, value, responsive}) =>{
        const classses = classNames('p-2 mx-2 select-none cursor-pointer border-b-2 overflow-hidden',{
            'text-orange border-orange' : value == tab,
            'border-white' : value !== tab,
            'md:hidden' : responsive
        })
        return(
            <div className={classses} onClick={() => tabClick(value)}>{label}</div>
        )
    }


  const fastForward = () => {
    video.current.currentTime += 5
    const currentTime = video.current.currentTime
    const forwardTime = currentTime + 5
    //video.current.currentTime = 10
    //console.log('forward', forwardTime)

  };

  const revert = () => {
    video.current.currentTime -= 5
    //console.log(video.current.currentTime)
    //video.current.currentTime -= 5
    
  };    

  const playback = (x) => {
    video.current.playbackRate = x
  }

  const Course = () =>{
    return(
        <InertiaLink href={route('course')} className='bg-white rounded-lg flex p-2 shadow-sm'>
            <div className='w-20 mr-2'>
                <img src='/img/thumbnails/sales.jpeg' className='w-full rounded-lg'/>
            </div>
            <div>
            <h4 className='font-semibold text-sm'>Develop a High-Performance Mindset</h4>
            <p className='text-xs text-gray-500'>Released Sep 20,2022</p>
            </div>
        </InertiaLink>
    )
  }
    return(
        <div className='w-full h-full flex items-stretch'>
            <div className='w-full p-4 bg-lightGray'>
                <h1 className='font-bold text-xl'>Courses</h1>
                <p className='font-semibold'>All</p>
                <div className='flex'>
                    <div className='text-sm border rounded-lg mr-2 px-2 py-1'> Bussiness</div>
                </div>
                <div className='my-2 grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <Course />
                    <Course />
                    <Course />
                </div>
            </div>
            
        </div>
        
    )
}

ShowCourse.layout = page => <Layout title="Course" children={page} />;


export default ShowCourse;