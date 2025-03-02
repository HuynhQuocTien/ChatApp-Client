import React from 'react'
import Message from './Message'

export default function ChatArea() {
  return (
    <div className='chat-area'>
        <div className='chat-header'>
            <div className='messages'>
                <Message text='Hello!' sent/>
                <Message text='I am Tien' recieved />
            </div>
        </div>
    </div>
  )
}
