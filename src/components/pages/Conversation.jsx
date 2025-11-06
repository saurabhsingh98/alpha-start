import React, { useState, useEffect, useRef } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { getApiHandler } from '../../helpers/apihandler.js'
// eslint-disable-next-line no-unused-vars
import { alpha_api } from '../../constants/api.js'

// Helper function to format time like LinkedIn
const formatMessageTime = (date) => {
    const messageDate = new Date(date);
    return messageDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
};

// Helper function to format date separator
const formatDateSeparator = (date) => {
    const messageDate = new Date(date);
    return messageDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Helper function to check if date separator should be shown
const shouldShowDateSeparator = (currentDate, previousDate) => {
    if (!previousDate) return true;
    const current = new Date(currentDate);
    const previous = new Date(previousDate);
    return current.toDateString() !== previous.toDateString();
};

// create message component
const CreateMessage = ({ onSendMessage, currentUser, receiver }) => {
    const [message, setMessage] = useState('')
    const [isExpanded, setIsExpanded] = useState(false)
    
    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // const onSubmit = async () => {
    //     try {
    //         const response = await postApiHandler(alpha_api.CREATE_MESSAGE(targetUserId), { message })
    //         setConversation(response)
    //     } catch (error) {
    //         console.log("-----ERROR IN CREATING MESSAGE-----", error)
    //     }
    // }
    return (
        <div className='bg-white border-t border-gray-200'>
            <div className='px-4 pt-3 pb-2'>
                <div className='relative'>
                    <TextInput
                        className='w-full'
                        placeholder="Write a message..."
                        value={message}
                        onChange={(value) => setMessage(value)}
                        onKeyDown={handleKeyPress}
                        multiline={true}
                        rows={isExpanded ? 4 : 1}
                    />
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className='absolute right-3 top-3 text-gray-500 hover:text-gray-700'
                    >
                        <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-between px-4 pb-3'>
                <div className='flex items-center gap-4'>
                    {/* Image Gallery Icon */}
                    <button className='text-gray-600 hover:text-gray-900' onClick={() => setSelectedMedia(true)}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                    </button>
                    {/* Attachment Icon */}
                    <button className='text-gray-600 hover:text-gray-900' onClick={() => setSelectedMedia(true)}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13' />
                        </svg>
                    </button>
                    {/* GIF */}
                    <button className='text-gray-600 hover:text-gray-900 text-sm font-medium' onClick={() => setSelectedGif(true)}>
                        GIF
                    </button>
                    {/* Emoji Icon */}
                    <button className='text-gray-600 hover:text-gray-900' onClick={() => setSelectedEmoji(true)}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </button>
                </div>
                <div className='flex items-center gap-2'>
                    {/* Send Button */}
                    <button
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            message.trim() 
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        Send
                    </button>
                    {/* More Options */}
                    <button className='text-gray-600 hover:text-gray-900'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z' />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Conversation = () => {
    const { targetUserId } = useParams();
    const [conversation, setConversation] = useState([
        {
            id: 1,
            content: 'Hii User\nAre you searching opportunity for part time full time work',
            sender: 'admin',
            receiver: 'User',
            createdAt: new Date('2023-11-13T17:40:00'),
        },
        {
            id: 2,
            content: 'Hello, how are you?',
            sender: 'User',
            receiver: 'admin',
            createdAt: new Date(),
        },
        {
            id: 3,
            content: 'I\'m good! How about you?',
            sender: 'User',
            receiver: 'admin',
            createdAt: new Date(),
        },
        {
            id: 4,
            content: 'Great to hear! I\'m doing well too.',
            sender: 'admin',
            receiver: 'User',
            createdAt: new Date(),
        },
    ]);
    
    const currentUser = 'User'; // Current user is 'User'
    const messagesEndRef = useRef(null);

    // Admin is the sender (the person we're messaging with)
    const senderName = 'admin'; // This is the person we're messaging (admin)
    const senderNameUpper = 'ADMIN'; // For header display
    const senderBio = "MINDSET MOTIVATION U.S.A BASED PROJECTS 🌐HELP\nDREAMERS GOALS ORIENTED 🎯 DEVELOP LEADERSHIP SKILLS🎀";

    // Auto-scroll to bottom when new messages are added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [conversation]);

    // Handle sending a new message
    const handleSendMessage = (messageContent) => {
        const newMessage = {
            id: conversation.length > 0 ? Math.max(...conversation.map(m => m.id)) + 1 : 1,
            content: messageContent,
            sender: currentUser, // 'User' sends the message
            receiver: 'admin', // Message is sent to admin
            createdAt: new Date(),
        };
        
        setConversation(prev => [...prev, newMessage]);
        
        // TODO: Uncomment when API is ready
        // try {
        //     const response = await postApiHandler(alpha_api.CREATE_MESSAGE(targetUserId), { message: messageContent })
        //     setConversation(response)
        // } catch (error) {
        //     console.log("-----ERROR IN CREATING MESSAGE-----", error)
        // }
    };

    // Group messages and determine when to show timestamps
    const shouldShowTimestamp = (currentIndex) => {
        if (currentIndex === 0) return true;
        
        const currentMessage = conversation[currentIndex];
        const previousMessage = conversation[currentIndex - 1];
        
        // Show timestamp if different sender
        return currentMessage.sender !== previousMessage.sender;
    };

    return (
        <div className='flex justify-center h-screen bg-gray-100 w-full'>
            <div className='flex h-full bg-white w-3/4'>
                {/* Profile Card - Left Side (Sender/Admin) */}
                <div className='bg-white border-r border-gray-200 px-4 py-4 w-64 flex-shrink-0'>
                    <div className='flex flex-col items-center'>
                        <div className='relative mb-3'>
                            <div className='w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-white text-2xl font-semibold'>
                                {senderName.charAt(0).toUpperCase()}
                            </div>
                            <div className='absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white'></div>
                        </div>
                        <div className='flex items-center gap-1 mb-1'>
                            <span className='font-semibold text-gray-900'>{senderNameUpper}</span>
                            <svg className='w-4 h-4 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                            </svg>
                            <span className='text-xs text-gray-600'>• 1st</span>
                        </div>
                        <div className='text-xs text-gray-600 text-center whitespace-pre-line'>
                            {senderBio}
                        </div>
                    </div>
                </div>

                {/* Chat Area - Right Side */}
                <div className='flex flex-col flex-1 h-full'>
                    {/* Top Header - Sender (Admin) */}
                    <div className='bg-white border-b border-gray-200 px-4 py-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='font-semibold text-gray-900 text-sm'>{senderNameUpper}</span>
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                <span className='text-xs text-gray-600'>Available on mobile</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <button className='text-gray-600 hover:text-gray-900'>
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z' />
                                    </svg>
                                </button>
                                <button className='text-gray-600 hover:text-gray-900'>
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages Container */}
                    <div className='flex-1 overflow-y-auto px-4 py-4 bg-gray-50'>
                        <div className='space-y-4'>
                            {conversation.map((message, index) => {
                                const isCurrentUser = message.sender === currentUser;
                                const showTimestamp = shouldShowTimestamp(index);
                                const showDateSeparator = index === 0 || shouldShowDateSeparator(
                                    message.createdAt,
                                    conversation[index - 1]?.createdAt
                                );
                                
                                return (
                                    <React.Fragment key={message.id}>
                                        {/* Date Separator */}
                                        {showDateSeparator && (
                                            <div className='flex items-center my-6'>
                                                <div className='flex-1 border-t border-gray-300'></div>
                                                <span className='px-4 text-xs text-gray-500 font-medium'>
                                                    {formatDateSeparator(message.createdAt)}
                                                </span>
                                                <div className='flex-1 border-t border-gray-300'></div>
                                            </div>
                                        )}
                                        
                                        {/* Message */}
                                        {!isCurrentUser && (
                                            <div className='flex items-start gap-3'>
                                                {/* Avatar */}
                                                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm font-semibold'>
                                                    {message.sender.charAt(0).toUpperCase()}
                                                </div>
                                                
                                                {/* Message Content */}
                                                <div className='max-w-[40%]'>
                                                    {/* Sender Name and Timestamp */}
                                                    {showTimestamp && (
                                                        <div className='flex items-center gap-1 mb-1'>
                                                            <span className='font-semibold text-sm text-gray-900'>
                                                                {message.sender.toUpperCase()}
                                                            </span>
                                                            <svg className='w-3 h-3 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                                                                <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                                                            </svg>
                                                            <span className='text-xs text-gray-500'>• {formatMessageTime(message.createdAt)}</span>
                                                        </div>
                                                    )}
                                                    
                                                    {/* Message Bubble */}
                                                    <div className='bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200'>
                                                        <p className='text-sm text-gray-900 leading-relaxed whitespace-pre-wrap break-words'>
                                                            {message.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Current User's Message */}
                                        {isCurrentUser && (
                                            <div className='flex items-start gap-3 justify-end'>
                                                {/* Message Content */}
                                                <div className='max-w-[40%]'>
                                                    {/* Message Bubble */}
                                                    <div className='bg-blue-600 rounded-lg px-4 py-3'>
                                                        <p className='text-sm text-white leading-relaxed whitespace-pre-wrap break-words'>
                                                            {message.content}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                {/* Avatar */}
                                                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold'>
                                                    {message.sender.charAt(0).toUpperCase()}
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className='sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200'>
                        <CreateMessage 
                            onSendMessage={handleSendMessage}
                            currentUser={currentUser}
                            receiver={senderName}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Conversation