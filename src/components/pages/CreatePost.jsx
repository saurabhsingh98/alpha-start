import Modal from '../common/Modal.jsx'
import { useState } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'

export const CreatePost = ()=>{
    const [isOpen, setIsOpen]= useState(true)
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        media_url:""
    })

    const onChangeHandler = ({ key, value }) => {
        setFormData((prevData) => ({
          ...prevData,
          [key]: value,
        }));
        console.log("-----FORM DATA---", formData)
      }

    const onSubmit = () => {
        console.log("-----FORM DATA TO SUBMIT---", formData)
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
                value={formData.description} 
                onChange={(value)=>onChangeHandler({key:"description", value:value})}
                label="Description"
                placeholder="Enter description"
            />
            <Button onClick={onSubmit}>Create Post</Button>
        </Modal>
    </>
    
}