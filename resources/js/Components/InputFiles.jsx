import React from "react"
import Icon from '@/Components/Icon'

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
            accept=".vtt"
            />
        </div>
        
        
        {source && (
            <>
                <div className="w-full bg-gray-200 p-2 rounded-lg flex justify-between">
                    <p>Transcript file:</p>
                    <p className="font-semibold">{source.name}</p>
                </div>
            </>
          
        )}
        {
            !source &&
            <div className="flex w-full justify-between items-center">
                <button type="button" onClick={handleChoose} className='bg-white rounded-lg flex p-2 px-4 border items-center'>
                    <Icon name='transcription' className='w-3 h-3 mr-2'/>
                    <span>Add Transciption File</span>
                </button>
                <p className="text-gray-400">No file selected</p>
            </div>
        }
        {source && (
            <div className="w-full flex justify-end my-2">
                <button type="button" onClick={handleChoose} className='bg-gray-100 rounded-lg flex p-2 px-4 border items-center text-gray-500'>
                    <Icon name='transcription' className='w-4 h-4 mr-2'/>
                    <span>Change File</span>
                </button>
            </div>
        )}
      </div>
    );
  }
