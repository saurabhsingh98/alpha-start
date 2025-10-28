import Modal from '../common/Modal.jsx'
import { useState } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import { postApiHandler } from '../../helpers/apihandler.js'
import { alpha_api } from '../../constants/api.js'

import ExperienceInput from './Experience.jsx'
import EducationInput from './Education.jsx'

const Profile = ({isOpen, setIsOpen}) => {
  const [isExperienceInputOpen, setIsExperienceInputOpen] = useState(false)
  const [isEducationInputOpen, setIsEducationInputOpen] = useState(false)
  const [profilePicture, setProfilePicture] = useState(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profilePicture: null,
    headline: "",
    location: "",
    industry: "",
    summary: "",
    experience: [],
    education: [],
    skills: "",
  })
  const onChangeHandler = ({ key, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }
  const onSubmit = async () => {
    console.log("-----ON SUBMIT-----", formData)
    const updatedFormData = { ...formData, skills: formData.skills.split(",") }
    try {
      // uploadprfile
      const uploadFormData = new FormData()
      uploadFormData.append("file", profilePicture)
      // const response = await postApiHandler(alpha_api.MEDIA_UPLOAD, uploadFormData)
      // if(response.success){
        // console.log("-----PROFILE PICTURE UPLOADED-----", response)
        // updatedFormData.profilePicture = response.data.filepath
      // }
      
    } catch (error) {
      console.log("-----ERROR IN UPLOADING PROFILE PICTURE-----", error)
      alert("Error in uploading profile picture")
      return
    }
    try {
      // const response = await postApiHandler(alpha_api.ADD_PROFILE, updatedFormData)
      // console.log("-----PROFILE ADDED-----", response)
      alert("Profile added successfully")
      // setIsOpen(false)
    } catch (error) {
      console.log("-----ERROR IN ADDING PROFILE-----", error)
      alert("Error in adding profile")
      return
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} title='Add Profile'>
        <TextInput 
        label='first name' 
        placeholder='Enter first name' 
        value={formData.firstName} 
        onChange={(value)=>onChangeHandler({key:"firstName", value:value})} 
        />
        <TextInput 
        label='last name' 
        placeholder='Enter last name' 
        value={formData.lastName} 
        onChange={(value)=>onChangeHandler({key:"lastName", value:value})} 
        />
        {/* <TextInput label='profile picture' placeholder='Enter profile picture' /> */}
        <div className='flex items-center gap-2 mt-4'>
          <input type='file' onChange={(e)=>setProfilePicture(e.target.files[0])} />
          {profilePicture && <img className=' max-w-20 max-h-20' src={URL.createObjectURL(profilePicture)} alt='profile picture' />}
          <Button onClick={()=>setProfilePicture(null)}>Remove</Button>
        </div>
        <TextInput 
        label='headline' 
        placeholder='e.g. Senior Software Engineer' 
        value={formData.headline} 
        onChange={(value)=>onChangeHandler({key:"headline", value:value})} 
        />
        <TextInput 
        label='location' 
        placeholder='e.g. San Francisco, CA' 
        value={formData.location} 
        onChange={(value)=>onChangeHandler({key:"location", value:value})} 
        />
        <TextInput 
        label='industry' 
        placeholder='e.g. Technology' 
        value={formData.industry} 
        onChange={(value)=>onChangeHandler({key:"industry", value:value})} 
        />
        <TextInput 
        label='summary' 
        placeholder='e.g. A short career journey' 
        value={formData.summary} 
        onChange={(value)=>onChangeHandler({key:"summary", value:value})} 
        />
        <Button className='mb-4' onClick={()=>setIsExperienceInputOpen(true)}>Add Experience</Button>
        <ExperienceInput isOpen={isExperienceInputOpen} setIsOpen={setIsExperienceInputOpen} setFormData={setFormData} />
        <TextInput 
        className='mb-4'
        label='skills' 
        placeholder='e.g. JavaScript, React, Node.js' 
        value={formData.skills} 
        onChange={(value)=>onChangeHandler({key:"skills", value:value})} 
        />
        <Button className='mb-4' onClick={()=>setIsEducationInputOpen(true)}>Add Education</Button>
        <EducationInput isOpen={isEducationInputOpen} setIsOpen={setIsEducationInputOpen} setFormData={setFormData} />
        <Button className='mb-4' onClick={onSubmit}>Add Profile</Button>
      </Modal>
    </div>
  )
}

export default Profile