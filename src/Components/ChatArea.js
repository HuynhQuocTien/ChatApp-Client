import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import withAuthentication from '../Utils/withAuthenticaton'

function ChatArea() {
    return (
        <div className='chat-area'>
            <div className='chat-header'></div>
            <div className='messages'>
                <Message text='Hello!' sent />
                <Message text='I am Tien' recieved />
            </div>
            <MessageInput />
        </div>
    )
}

export default ChatArea;
