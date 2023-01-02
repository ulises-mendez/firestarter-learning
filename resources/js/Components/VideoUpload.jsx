import React from "react"
import Icon from '@/Components/Icon'
import VideoJS from '@/Components/Courses/Video'

export default ({handleFileChange, src}) => {

    const inputRef = React.useRef()
    const [dragActive, setDragActive] = React.useState(false)
    const [source, setSource] = React.useState()

    const handleFiles = (e) => {
      const file = e.target.files[0]
      const url = URL.createObjectURL(file)
      setSource(url)
      handleFileChange(file,url)
    }
    
    const handleClick = (e) => {
      inputRef.current.click()
    }

    const handleDrag = function(e) {
      e.preventDefault()
      e.stopPropagation()
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true)
      } else if (e.type === "dragleave") {
        setDragActive(false)
      }
    }

    const handleDrop = function(e) {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        // handleFiles(e.dataTransfer.files)
        console.log(e.dataTransfer.files)
        const file = e.dataTransfer.files[0]
        const url = URL.createObjectURL(file)
        setSource(url)
        handleFileChange(file,url)
      }
    }

    return (
      <>
      <div>
       <h2 className="block font-semibold text-sm text-gray-800 mb-2">Video Lesson</h2>
      </div>
      <label className="w-full" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
            <input
            ref={inputRef}
            className="hidden"
            type="file"
            onChange={handleFiles}
            accept=".mov,.mp4"
            />
        {
        src && (
          <div className="w-full">
            <div className='flex items-end mb-2'>
              <div className='bg-gray-100 rounded-t-lg px-3 text-center text-black'>Video</div>
              <div className='bg-gray-100 h-0.5 w-full'/>
            </div>
            <VideoJS options={{
                autoplay: false,
                controls: true,
                responsive: true,
                fluid: true,
                sources: [{
                    src: src,
                    type: 'video/mp4'
                }]
            }} 
            />
          </div>
        )
        }
        {
            !src &&
            <div className="w-full bg-gray-50 shadow-sm border border-dashed border-gray-300 rounded-lg p-4">
              <div className="w-full flex justify-center">
              <div onClick={handleClick} className="cursor-pointer p-4 text-gray-400 bg-white rounded-full">
                  <Icon className="fill-current w-6" name="upload-video"/>
              </div>
              </div>
              <p className="text-center text-gray-600 mt-4 select-none">Drag and drop a video, or <button type='button' className='text-orange cursor-pointer' onClick={handleClick}>Browse</button></p>                               
            </div>
        }
        {
          src && (
              <div className="w-full flex justify-end my-2">
                  <button type="button" onClick={handleClick} className='bg-gray-100 rounded-lg flex p-2 px-4 border items-center text-gray-500'>
                      <Icon name='upload-video' className='w-4 h-4 mr-2'/>
                      <span>Change Video</span>
                  </button>
              </div>
          )
        }
      </label>
      </>
    )
  }
