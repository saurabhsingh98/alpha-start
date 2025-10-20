import React, { useState } from 'react';
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import { Radio } from '../common/RadioInput.jsx'
import { postApiHandler } from '../../helpers/apihandler.js';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    policy: false,
  });

  const onChangeHandler = ({ key, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    console.log("-----FORM DATA---", formData)
  }

  const onSubmit = async () => {
    console.log("-----FORM DATA TO SUBMIT---", formData)
    try {

      // if register
      if(isLogin){
          await postApiHandler('/auth/login', formData)
          console.log("---------REGISTRATION SUCCESSFULL-----")
      }else{
        await postApiHandler('/auth/register', formData)
        console.log("------LOGIN SUCCESSFULL-----")
      }
      
    } catch (error) {
      console.log("-----ERROR---", error)
    }
  };


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className='w-1/2 mx-auto align-items-center bg-white p-8 rounded-lg shadow-md'>
        {
          !isLogin &&
          <TextInput label="Name" placeholder="abc" className='mb-4' onChange={(value) => onChangeHandler({ key: 'name', value: value })} />
        }
        <TextInput label="Email" placeholder="abc@gmail.com" className='mb-4' onChange={(value) => onChangeHandler({ key: 'email', value: value })} />
        <TextInput className='mb-4' label="Password" type='password' onChange={(value) => onChangeHandler({ key: 'password', value: value })} />

        {!isLogin &&
          <div className='mb-4'>
            {/* POLICY */}
            <Radio label='Accept License'
              options={[
                { label: "Accept", value: "accept" },
                { label: "Reject", value: "reject" },
              ]}
              value={formData.license}
              onChange={(value) => onChangeHandler({ key: 'license', value: value })} />
          </div>
        }
        <p className='cursor-pointer mb-4' onClick={() => setIsLogin(!isLogin)}>
          {!isLogin ? 'Already have account? Login' : 'New here like us? Register'}
        </p>

        <Button fullWidth={true} onClick={onSubmit} >Submit</Button>

      </div>
      </div>
    </>
  );
};

export default Login;
