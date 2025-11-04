import React, { useState, useEffect } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import { useParams } from 'react-router-dom'
import { getApiHandler } from '../../helpers/apihandler.js'
import { alpha_api } from '../../constants/api.js'


// create message component
const CreateMessage = () => {
    const [message, setMessage] = useState('')
    // const onSubmit = async () => {
    //     try {
    //         const response = await postApiHandler(alpha_api.CREATE_MESSAGE(targetUserId), { message })
    //         setConversation(response)
    //     } catch (error) {
    //         console.log("-----ERROR IN CREATING MESSAGE-----", error)
    //     }
    // }
    return (
        <div className='flex gap-4 items-center justify-center w-1/2 m-10'>
            <TextInput
                className='w-full'
                placeholder="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={() => {}} variant='secondary' size='lg' className='w-1/4 mb-0'>Send</Button>
        </div>
    )
}
const Conversation = () => {
    const { targetUserId } = useParams();
    const [conversation, setConversation] = useState([
        {
            id: 1,
            content: 'Hello, how are you?',
            sender: 'sender',
            receiver: 'admin',
            createdAt: new Date(),
        },
        {
            id: 2,
            content: 'I\'m good! How about you?',
            sender: 'sender',
            receiver: 'admin',
            createdAt: new Date(),
        },
        {
            id: 3,
            content: 'Great to hear! I\'m doing well too.',
            sender: 'admin',
            receiver: 'sender',
            createdAt: new Date(),
        },
    ]);
    
    const currentUser = 'sender';

    return (
        <div className='flex flex-col h-screen bg-gray-100 w-full p-20 m-20 rounded-lg'>
            <div className='flex-1 overflow-y-auto p-10'>
                {conversation.map((message) => (
                    <div key={message.id} className={`${message.sender === currentUser ? 'flex justify-end' : 'flex justify-start'}`}>
                        <div className={`${message.sender === currentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} p-2 rounded-lg max-w-1/2`}>
                            <p className='text-sm whitespace-pre-wrap'>{message.content}</p>
                            <p className='text-xs text-gray-500'>{message.sender} - {message.createdAt.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='sticky bottom-0 left-0 right-0 bg-gray-100 shadow-md'>
                <CreateMessage />
            </div>
        </div>
    );
}

export default Conversation