import React from "react"
import Icon from '@/Components/Icon'
import VideoJS from '@/Components/Courses/Video'

export default ({handleFileChange, source}) => {

    const inputRef = React.useRef();
  
    //const [source, setSource] = React.useState();
    /*
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setSource(url);
    };
    */
    const handleChoose = (event) => {
      inputRef.current.click();
    };
  
    return (
      <div className="w-full">
        <div className="w-full">
            <input
            ref={inputRef}
            className="hidden"
            type="file"
            onChange={handleFileChange}
            accept=".mov,.mp4"
            />
        </div>
        {source && (
          <VideoJS options={{
              autoplay: false,
              controls: true,
              responsive: true,
              fluid: true,
              sources: [{
                  src: source,
                  type: 'video/mp4'
              }]
          }} 
          //onReady={handlePlayerReady} 
          />
        )}
        {
            !source &&
            <div className="flex w-full justify-between items-center">
                <button type="button" onClick={handleChoose} className='bg-white rounded-lg flex p-2 px-4 border items-center'>
                    <Icon name='upload-video' className='w-4 h-4 mr-2'/>
                    <span>Select Video</span>
                </button>
                <p className="text-gray-400">No video selected</p>
            </div>
        }
        {source && (
            <div className="w-full flex justify-end my-2">
                <button type="button" onClick={handleChoose} className='bg-gray-100 rounded-lg flex p-2 px-4 border items-center text-gray-500'>
                    <Icon name='upload-video' className='w-4 h-4 mr-2'/>
                    <span>Change Video</span>
                </button>
            </div>
        )}
      </div>
    );
  }
