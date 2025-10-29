import { useState } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import Modal from '../common/Modal.jsx'

const EducationInput = ({isOpen, setIsOpen, setFormData}) => {

    const [educationData, setEducationData] = useState({
      school: "",
      degree: "",
      field_of_study: "",
      start_date: "",
      end_date: "",
      grade: "",
      activities_and_societies: "",
      description: "",
      skills: "",
    })
  
    const onChangeHandler = ({ key, value }) => {
      setEducationData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
    const onSubmit = async () => {
      console.log("-----ON SUBMIT-----", educationData)
      const updatedEducationData = { ...educationData, skills: educationData.skills.split(",") }
      setFormData((prevData) => ({
        ...prevData,
        education: [...prevData.education, updatedEducationData],
      }));
      setIsOpen(false)
    }
  
  
    return (
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} title='Add Education'>
        <TextInput label='school' 
          className='mb-4'
          placeholder='Enter school' 
          value={educationData.school} 
          onChange={(value)=>onChangeHandler({key:"school", value:value})} 
        />
        <TextInput label='degree' 
          className='mb-4'
          placeholder='Enter degree' 
          value={educationData.degree} 
          onChange={(value)=>onChangeHandler({key:"degree", value:value})} 
        />
        <TextInput label='field of study' 
          className='mb-4'
          placeholder='Enter field of study' 
          value={educationData.field_of_study} 
          onChange={(value)=>onChangeHandler({key:"field_of_study", value:value})} 
        />
        <TextInput label='start date' 
          className='mb-4'
          type='date'
          placeholder='Enter start date' 
          value={educationData.start_date} 
          onChange={(value)=>onChangeHandler({key:"start_date", value:value})} 
        />
        <TextInput label='end date' 
          className='mb-4'
          type='date'
          placeholder='Enter end date' 
          value={educationData.end_date} 
          onChange={(value)=>onChangeHandler({key:"end_date", value:value})} 
        />
        <TextInput label='grade' 
          className='mb-4'
          placeholder='Enter grade' 
          value={educationData.grade} 
          onChange={(value)=>onChangeHandler({key:"grade", value:value})} 
        />
        <TextInput multiline={true} rows={3} label='activities and societies' 
          className='mb-4'
          placeholder='Enter activities and societies' 
          value={educationData.activities_and_societies} 
          onChange={(value)=>onChangeHandler({key:"activities_and_societies", value:value})} 
        />
        <TextInput multiline={true} rows={3} label='description' 
          className='mb-4'
          placeholder='Enter description' 
          value={educationData.description} 
          onChange={(value)=>onChangeHandler({key:"description", value:value})} 
        />
        <TextInput label='skills' 
          className='mb-4'
          placeholder='Enter skills' 
          value={educationData.skills} 
          onChange={(value)=>onChangeHandler({key:"skills", value:value})} 
        />
        <Button onClick={onSubmit}>Add Education</Button>
      </Modal>
    )
   }

export default EducationInput