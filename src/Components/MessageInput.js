import React from 'react'

export default function MessageInput() {
    const [inputValue, setInputValue] = React.useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSendClick = () => {
        console.log(inputValue);
        setInputValue('');
    }
  return (
    <div className='message-input'>
        <textarea 
            placeholder='Type a message...'
            value={inputValue}
            onChange={handleInputChange}      
        />
        <button onClick={handleSendClick}>Send</button>
        
    </div>
  )
}
