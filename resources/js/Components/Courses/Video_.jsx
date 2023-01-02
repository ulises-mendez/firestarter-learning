import React, { useEffect, useRef, useState } from 'react'
import Icon from '@/Components/Icon';
import { Player, ControlBar } from 'video-react';
import { useIdleTimer } from 'react-idle-timer'


function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  

const Video = (props) =>{
    const video = useRef(null)
    const videoContainer = useRef(null)
    const vol = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [rate,setRate] = useState(1)
    const [currentTime, setCurrentTime] = useState(0)
    const [viewRates,setViewRates] = useState(false)
    const [controlsVisible,setControlsVisible] = useState(true)
    const [videoTime, setVideoTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(0)
    const [isMouseDown, setMouseDown] = useState(false)
    const [fullScreen, setFullScreen] = useState(false)

    function logKey(e) {
        const clicked = e.clientX - vol.current.getBoundingClientRect().x
        const widthBar = 80
        const percent = clicked * 100 / widthBar
        const newVolume = percent / 100
        video.current.volume = newVolume
    }

    function mouseUp() {
        setMouseDown(false)
    }

    useInterval(()=>{
        window.addEventListener('mousedown', logKey)
        window.addEventListener('mouseup', mouseUp)
    }, isMouseDown ? 100 : null)

    const onMouseDown = () => {
        const clicked = e.clientX - vol.current.getBoundingClientRect().x
        const widthBar = 80
        const percent = clicked * 100 / widthBar
        const newVolume = percent / 100
        video.current.volume = newVolume
    }

    function play(){
        setPlaying(true)
        video.current.play()
    }
    function pause(){
        setPlaying(false)
        video.current.pause()
    }

    function toFullScreen(){
        //setFullScreen(true)
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
        
        //setFullScreen(false)
        if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
        
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

      function changeVolume(e){
        console.log(e.clientX)
        console.log(vol.current.getBoundingClientRect().x)
        console.log(e.clientX - vol.current.getBoundingClientRect().x)
        const clicked = e.clientX - vol.current.getBoundingClientRect().x
        const widthBar = 80
        const percent = clicked * 100 / widthBar
        const newVolume = percent / 100
        video.current.volume = newVolume
    }

    const dragVol = e => {
        
        setMouseDown(true)
    }
      
      const onIdle = () => {
        playing === true ? setControlsVisible(false) : null
        console.log('Inactive')
        
      }

      const onActive = () => {
        console.log('Active')
        setControlsVisible(true)
      }

      const mouseLeave = () => {
        playing === true ? setControlsVisible(false) : null
      }

      const getPos = (e) => {
        /*
        console.log(e.clientX, e.clientY)
        */
        console.log(vol.current.getBoundingClientRect().x)

      }

      const idle = useIdleTimer({
        onIdle,
        onActive,
        timeout: 1000 * 3,
        promptTimeout: 0,
        events: [
          'mousemove',
          'keydown',
          'wheel',
          'DOMMouseScroll',
          'mousewheel',
          'mousedown',
          'touchstart',
          'touchmove',
          'MSPointerDown',
          'MSPointerMove',
          'visibilitychange'
        ],
        immediateEvents: [],
        debounce: 0,
        throttle: 0,
        eventsThrottle: 200,
        element: document,
        startOnMount: true,
        startManually: false,
        stopOnIdle: false,
        crossTab: true,
        syncTimers: 0
      })



    window.setInterval(function () {
        setCurrentTime(video.current?.currentTime);
        setProgress((video.current?.currentTime / videoTime) * 100);
        }, 1000);

    useEffect(() => {
    

        document.addEventListener('fullscreenchange', () => {
            setFullScreen(!fullScreen)
        });
        document.addEventListener('mozfullscreenchange', () => {
            setFullScreen(!fullScreen)
        });
        document.addEventListener('webkitfullscreenchange', () => {
            setFullScreen(!fullScreen)
        });
        document.addEventListener('msfullscreenchange', () => {
            setFullScreen(!fullScreen)
        });
        
        setVideoTime(video.current?.duration)
        setVolume(video.current?.volume)
    })

    window.addEventListener('mouseup', () => {
        setMouseDown(false)
    })

    

    return(
        <div 
        className='relative flex items-center bg-black w-full rounded overflow-hidden'
        ref={videoContainer}
        onMouseEnter={() =>setControlsVisible(true)}
        onMouseLeave={mouseLeave}
        onMouseUp={()=> setMouseDown(false)}
        >
            <video 
            ref={video}
            //controls
            onEnded={() => console.log('Ended video')}
            //autoPlay
            preload="metadata"
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
                <track label="English" kind="subtitles" srcLang="en" src="/cc/sintel-en.vtt" default></track>
                Sorry, your browser doesn't support embedded videos.
            </video>
           {
            controlsVisible &&
            <div className='w-full h-full absolute left-0 top-0'>
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
            {
            playing ? (
                <>
                <div onClick={pause} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                    <Icon name="pause" className='w-12 h-12 fill-white opacity-80 drop-shadow-2xl' />
                </div>
                </>
            ) :
            (
                <>
                <div onClick={play} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Icon name="play" className='w-12 h-12  fill-white opacity-80 drop-shadow-2xl' />
                </div>
                </>
            )
            }
            </div>
           }
           {
            controlsVisible &&
            <div className='absolute select-none cursor-default bottom-0 left-0 w-full'>
                <div className="timecontrols">
                    <div className="time_progressbarContainer">
                        <div
                            style={{ width: `${progress}%` }}
                            className="time_progressBar"
                        ></div>
                    </div>
                </div>
                <div className='flex w-full justify-between text-white  p-2 items-center bg-black bg-opacity-30'>
                    <div className='flex items-center mr-2'>
                        <div className='pr-2'>
                            <p className="">
                            {Math.floor(currentTime / 60) +
                                ":" +
                                ("0" + Math.floor(currentTime % 60)).slice(-2)}
                            </p>
                        </div>
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
                        <div className='flex items-center mr-2'>
                            <div onClick={changeVolume}>
                                <Icon name="volume" className='w-4 h-4  fill-white mr-2' />
                            </div>
                            <div >
                                <div ref={vol} className='rounded-full w-20 mr-2 relative'>
                                    <div 
                                        onMouseDown={(e)=> dragVol(e)}
                                        onMouseUp={()=> setMouseDown(false)}
                                        className="time_progressbarContainer">
                                            <div  className="volume_indicator" 
                                            style={{left:`calc(${volume * 100}% - 6px)`}}/>
                                            <div
                                                onMouseDown={(e)=> dragVol(e)}
                                                onMouseUp={()=> setMouseDown(false)}
                                                style={{ width: `${volume * 100}%` }}
                                                className="time_progressBar"
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={revert}>
                            <Icon name="back" className='w-4 h-4  fill-white mr-2' />
                        </div>
                        
                        <div onClick={fastForward}>
                            <Icon name="ahead" className='w-4 h-4  fill-white mr-2' />
                        </div>
                        <Icon name="prev" className='w-4 h-4  fill-white mr-2' />
                        <Icon name="next" className='w-4 h-4  fill-white mr-2' />
                    </div>
                    
                    <div className='flex items-center mr-2'>
                        <div className='mr-2 relative'>
                            <div 
                                onClick={() => setViewRates(!viewRates)} 
                                className='text-sm w-8 select-none cursor-default'
                            >
                                {rate}x
                            </div>
                            {
                            viewRates &&
                            <div 
                            //onClick={() => setMenu(false)}
                            onMouseLeave={()=> setViewRates(false)}
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
                            }
                        </div>
                        
                        {
                            fullScreen &&
                                <div onClick={exitFullScreen}>
                                    <Icon name="compress" className='w-4 h-4  fill-white mr-2' />
                                </div>
                        }
                        {
                            !fullScreen &&
                                <div onClick={toFullScreen}>
                                    <Icon name="expand" className='w-4 h-4  fill-white mr-2' />
                                </div>
                        }
                        
                    </div>
                    
                </div>
            </div>
            }
            
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