import Modal from '../common/Modal.jsx'
import { FaFile } from 'react-icons/fa'
import { useState } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import { postApiHandler } from '../../helpers/apihandler.js'
import { alpha_api } from '../../constants/api.js'

export const CreatePost = ()=>{
    const [isOpen, setIsOpen]= useState(true)
    const [formData, setFormData] = useState({
        title:"",
        content:"",
        imageUrl:""
    })
    const [mediaUrl, setMediaUrl] = useState("")

    const onChangeHandler = ({ key, value }) => {
        setFormData((prevData) => ({
          ...prevData,
          [key]: value,
        }));
      }

    const onSubmit = async () => {

        const updatedFormData = {
            ...formData
        }

        try {
            const uploadFormData = new FormData()
            uploadFormData.append("file", mediaUrl)
            const response = await postApiHandler(alpha_api.MEDIA_UPLOAD, uploadFormData)
            
            
            if(response.success){
                const media_url = response.data.filepath
                updatedFormData.imageUrl = media_url
            }
        } catch (error) {
            console.log("-----ERROR IN MEDIA UPLOAD---", error)
            alert("Error in media upload")
            return
        }

        try {
            await postApiHandler(alpha_api.CREATE_POST, updatedFormData)
            setIsOpen(false)
        } catch (error) {
            console.log("-----ERROR IN CREATE POST---", error)
            alert("Error in create post")
            return
        }
            
    }

    return <>
        <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} title='Create Post'>
            <TextInput 
                className='mb-4'
                type='text' 
                value={formData.title} 
                onChange={(value)=>onChangeHandler({key:"title", value:value})}
                label="Title"
                placeholder="Enter title"
            />
            <TextInput 
                className='mb-4'
                type='text' 
                multiline={true} 
                rows={5} 
                value={formData.content} 
                onChange={(value)=>onChangeHandler({key:"content", value:value})}
                label="Content"
                placeholder="Enter content"
            />
            <div className='flex items-left'>
                
            <input type="file" onChange={(e)=>setMediaUrl(e.target.files[0])} />
            <FaFile className='w-6 h-6' />
            </div>
            <Button onClick={onSubmit}>Create Post</Button>
        </Modal>
    </>
    
}