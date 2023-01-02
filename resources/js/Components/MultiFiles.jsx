import React, {useState} from 'react'
import Icon from '@/Components/Icon'

const MAX_COUNT = 5;

const MultiFilesInput = ({ handleFileChange, i, i2, uploads = [] }) => {
    //console.log(uploads)
	const [uploadedFiles, setUploadedFiles] = useState(uploads || [] )
    const [fileLimit, setFileLimit] = useState(false);


    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)
    }


    /*
    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }
    */
   const fileEvent = (e) =>{
        handleUploadFiles(handleFileChange(e,i,i2))
        //console.log(handleFileChange(e))
        //handleFileChange()
        console.log(i,i2)
   }

    return (
		<div className='w-full'>
			<input id='fileUpload' type='file' multiple
					accept='application/pdf, image/png, .vtt, .zip'
                    onChange={(e) => fileEvent(e)}
                    disabled={fileLimit}
                    className='hidden'
			/>
            <div className='bg-white rounded-lg flex p-2 px-4 border items-center'>
                <label htmlFor='fileUpload' className='w-full '>
                    <a  className={`btn btn-primary ${!fileLimit ? '' : 'disabled' } `}>Add Files</a>
                </label>
            </div>
			<div className="uploaded-files-list">
				{uploadedFiles.map((file,i) => (
                    <div className="hover:bg-white p-2 rounded-lg flex justify-between my-2 items-center" key={i}>
                        <div className='flex items-center'>
                            <Icon name='attachment' className='w-4 h-4 mr-2'/>
                            <p>{file.name}</p>
                        </div>
                        <div>
                            <Icon name='trash' className='w-4 h-4'/>
                        </div>
                    </div>
                ))}
			</div>
		</div>
	);
}

export default MultiFilesInput;