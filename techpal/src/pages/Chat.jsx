import React from 'react'
import Navbar from '../components/Navbar';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import SuggestWindow from '../components/SuggestWindow';
import { useChat } from '../hooks/useChat';

function Chat() {
    const { sendMessage } = useChat();
    
        const handleSelectSuggestion = (suggestion) => {
            sendMessage(suggestion);
        };
    return (
        <div className="flex h-screen">
            <Navbar />
            <ChatList />
            <div className="flex flex-1">
                <div className="flex flex-col flex-1">
                    <ChatWindow />
                    {/* <MessageInput /> */}
                </div>
                <SuggestWindow onSelectSuggestion={handleSelectSuggestion} />
            </div>
        </div>
    )
}

export default Chat
