import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import './ChatScreen.css'

function ChatScreen() {

    const [input, setInput] = useState('');

    const [messages, setMessages] = useState([
        {
            "name": "Scarlett",
            "profilePic": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scarlett-johansson-attends-the-world-premiere-of-walt-news-photo-1627581874.jpg?crop=0.668xw:1.00xh;0.129xw,0&resize=640:*",
            "message": "How about a date?"
        },
        {
            "name": "Scarlett",
            "profilePic": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scarlett-johansson-attends-the-world-premiere-of-walt-news-photo-1627581874.jpg?crop=0.668xw:1.00xh;0.129xw,0&resize=640:*",
            "message": "Looking forward to it."
        },
        {
            "message": "Hey Scarlett. Sure would love to."
        },
        {
            "name": "Scarlett",
            "profilePic": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scarlett-johansson-attends-the-world-premiere-of-walt-news-photo-1627581874.jpg?crop=0.668xw:1.00xh;0.129xw,0&resize=640:*",
            "message": "Starbucks at 8 ?"
        },
        {
            "message": "Can't wait see you there ;)"
        }

    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH SCARLETT ON 07/02/2022</p>
            {messages.map((message) => (
                message.name ? (
                    <div className='chatScreen__message'>
                    <Avatar className='chatScreen__image' src={message.profilePic} />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )
            ))}
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    type="text" 
                    placeholder="Type a message" />
                    <button 
                    onClick={handleSend} 
                    type="submit"
                    className="chatScreen__inputBtn">SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen
