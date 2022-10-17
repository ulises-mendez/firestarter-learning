import React, { useRef, useState } from 'react'
import Icon from '@/Components/Icon';
import { Player, ControlBar } from 'video-react';

const Video = (props) =>{
    const video = useRef(null)
    const videoContainer = useRef(null);
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [rate,setRate] = useState(1);
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

    function jump(i){
        video.current.currentTime = i
    }

    function exitFullScreen(){
        video.current.exitFullScreen()
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
        setRate(x)
      }
      
    return(
        <div 
        className='relative flex items-center bg-black w-full rounded overflow-hidden'
        ref={videoContainer}
        >
            <video 
            ref={video}
            //controls
            onEnded={() => console.log('Ended video')}
            //autoPlay
            className='w-full rounded  video relative'>
                {
                    props.src.map((src, i)=>{
                        return(
                            <source key={i}
                            src={src.src}
                            type={src.type}/>
                        )
                    })
                }
                Sorry, your browser doesn't support embedded videos.
            </video>
            <div className='w-full h-full absolute left-0 top-0'>
                {
                playing ? (
                    <>
                    <div onClick={pause} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Icon name="pause" className='w-8 h-8  fill-white' />
                    </div>
                    </>
                ) :
                (
                    <>
                    <div className='flex w-full justify-between text-white border-b p-2 items-center bg-black bg-opacity-30'>
                        <div>
                            <h2 className='font-semibold text-sm'>Main Section</h2>
                            <h3 className='text-xs'>Subtitle</h3>
                        </div>
                        <div className='flex'>
                            <div className='flex items-center mr-2'>
                                <Icon name="thumbs-up" className='w-4 h-4  fill-white mr-2' />
                                
                            </div>
                            <div className='flex items-center mr-2'>
                                <Icon name="bookmark" className='w-4 h-4  fill-white mr-2' />
                                
                            </div>
                        </div>
                    </div>
                    <div onClick={play} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Icon name="play" className='w-14 h-14  fill-orange' />
                    </div>
                    </>
                )
                }
            </div>
            <div className='absolute border-t bottom-0 left-0 w-full'>
                <div className='flex w-full justify-between text-white  p-2 items-center bg-black bg-opacity-30'>
                    <div className='flex items-center mr-2'>
                        {
                            playing ? (
                                <div onClick={pause}>
                                    <Icon name="pause" className='w-4 h-4  fill-white mr-2' />
                                </div>
                            ) : (
                                <div onClick={play}>
                                    <Icon name="play" className='w-4 h-4  fill-white mr-2' />
                                </div>
                            )
                        }
                        <div onClick={revert}>
                            <Icon name="back" className='w-4 h-4  fill-white mr-2' />
                        </div>
                        <div onClick={fastForward}>
                            <Icon name="ahead" className='w-4 h-4  fill-white mr-2' />
                        </div>
                        <Icon name="prev" className='w-4 h-4  fill-white mr-2' />
                        <Icon name="next" className='w-4 h-4  fill-white mr-2' />
                    </div>
                    <div className=' items-center mr-2'>
                        
                    </div>
                    <div className='flex items-center mr-2'>
                        <div className='mr-2 relative'>
                            <div>{rate}x</div>
                            <div 
                    //onClick={() => setMenu(false)}
                    className={`z-20 absolute -left-2 bottom-9 rounded-md shadow-lg py-1 bg-black ring-1 ring-black ring-opacity-5 focus:outline-none ${//menu == true ? '' : 'hidden' 
                        ''}`}>
                        <div className="w-full">
                            <div onClick={() => playback(1)} className='flex items-center  p-2 hover:bg-orange'>
                                <div className='text-white mr-1 w-2'>
                                    {/*<Icon className=" fill-current" name='check' />*/}
                                </div>
                                <p
                                className='w-full text-left text-sm text-white select-none hover:bg-orange'>
                                    1x
                                </p>
                            </div>
                            <div onClick={() => playback(1.25)} className='flex items-center  p-2 hover:bg-orange'>
                                <div className='text-white mr-1 w-2'>
                                    
                                </div >
                                <p
                                className='w-full text-left text-sm text-white select-none hover:bg-orange'>
                                    1.25x
                                </p>
                            </div>
                            <div onClick={() => playback(1.5)} className='flex items-center  p-2 hover:bg-orange'>
                                <div className='text-white mr-1 w-2'>
                                    
                                </div>
                                <p
                                className='w-full text-left text-sm text-white select-none hover:bg-orange'>
                                    1.5x
                                </p>
                            </div>

                            <p onClick={() => playback(1.75)}
                            className="w-full text-left p-2 text-sm text-white select-none hover:bg-orange hover:text-white">
                                1.75x
                            </p>
                            <p onClick={() => playback(2)}
                            className="w-full text-left p-2 text-sm text-white select-none hover:bg-orange hover:text-white">
                                2x
                            </p>
                            
                            
                        </div>
                        
                    </div>
                        </div>
                        
                        <div>
                        <Icon name="volume" className='w-4 h-4  fill-white mr-2' />
                        </div>
                        <div onClick={fullScreen}>
                        <Icon name="expand" className='w-4 h-4  fill-white mr-2' />
                        </div>
                    </div>
                    
                </div>
            </div>
            <p className="controlsTime">
            
            </p>
        </div>
    )
    

    function changeCurrentTime(seconds) {

         console.log(video.current.getState().player)
         //console.log(video.current.getState().player.currentTime)
         //const { player } = video.current.getState().player;
         //player.seek(player.currentTime + seconds)
         video.current.seek(2)
      }
      /*
   return(
    <Player
    ref={video}
          
        >
          <source src='/videos/1621626043674.mp4' />
          <div onClick={changeCurrentTime} className='bg-orange'>
            currentTime -= 10
          </div>
    </Player>
    
   )
   */
}

export default Video