import { useState } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import Modal from '../common/Modal.jsx'

const ExperienceInput = ({isOpen, setIsOpen, setFormData}) => {
    const [experienceData, setExperienceData] = useState({
      title: "",
      company: "",
      start_date: "",
      end_date: "",
      description: "",
    })
  
    const onChangeHandler = ({ key, value }) => {
      setExperienceData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  
    const onSubmit = async () => {
      console.log("-----ON SUBMIT-----", experienceData)
      const updatedExperienceData = { ...experienceData }
      setFormData((prevData) => ({
        ...prevData,
        experience: [...prevData.experience, updatedExperienceData],
      }));
      setIsOpen(false)
    }
    return (
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} title='Add Experience'>
        <TextInput 
          label='title'
          className='mb-4'
          placeholder='Enter title' 
          value={experienceData.title} 
          onChange={(value)=>onChangeHandler({key:"title", value:value})} 
          />
        <TextInput 
          label='company' 
          className='mb-4'
          placeholder='Enter company' 
          value={experienceData.company} 
          onChange={(value)=>onChangeHandler({key:"company", value:value})} 
          />
        <TextInput 
          type='date' 
          label='start date' 
          className='mb-4'
          placeholder='Enter start date' 
          value={experienceData.start_date} 
          onChange={(value)=>onChangeHandler({key:"start_date", value:value})} 
          />
        <TextInput 
          type='date' 
          label='end date' 
          className='mb-4'
          placeholder='Enter end date' 
          value={experienceData.end_date} 
          onChange={(value)=>onChangeHandler({key:"end_date", value:value})} 
          />
        <TextInput 
          multiline={true} 
          rows={3} 
          label='description' 
          className='mb-4'
          placeholder='Enter description' 
          value={experienceData.description} 
          onChange={(value)=>onChangeHandler({key:"description", value:value})} 
          />
        <Button onClick={onSubmit}>Add Experience</Button>
      </Modal>
    )
   }
  
  
export default ExperienceInput