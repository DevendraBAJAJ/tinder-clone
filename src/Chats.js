import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import './Chats.css'
import database from './firebase';
import { onSnapshot, collection, query } from "firebase/firestore";

export default function Chats() {

    const [chats, setChat] = useState([]);

    useEffect(() => {
        const q = query(collection(database, "chats"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            setChat(querySnapshot.docs.map(d => d.data()));
        });

        return () => {
            unsub();
        }
    }, [chats])

    return (
        <div className='chats'>
            {chats.map((chat) => (
                <Chat
                name={chat.name}
                message={chat.message}
                profilePic={chat.profilePic}
                timestamp={chat.timestamp} 
                />
            ))}
        </div>
    )
}
