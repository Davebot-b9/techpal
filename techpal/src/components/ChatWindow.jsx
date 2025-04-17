import React, { useEffect, useRef } from 'react';
import { useChat } from "../hooks/useChat";
import EmptyState from './EmptyState';
import { Spinner } from '@heroui/spinner';
import MessageInput from './MessageInput';

export default function ChatWindow() {
    const { userId, messages, isBotTyping } = useChat();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isBotTyping]);

    return (
        <div className="flex flex-col h-full bg-white shadow-lg rounded-lg">
            {/* Área de mensajes */}
            <div className="flex-1 p-4 overflow-y-auto md:p-6 lg:p-8">
                {messages && messages.length > 0 ? (
                    <>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className="max-w-xs md:max-w-md">
                                    <p
                                        className={`text-sm font-semibold mb-1 ${
                                            msg.sender === 'user' ? 'text-blue-500 text-right' : 'text-gray-500 text-left'
                                        }`}
                                    >
                                        {msg.sender === 'user' ? `Usuario (${userId})` : 'Bot'}
                                    </p>
                                    <span
                                        className={`inline-block px-4 py-2 rounded-lg break-words ${
                                            msg.sender === 'user'
                                                ? 'bg-blue-500 text-white text-right'
                                                : 'bg-gray-200 text-black text-left'
                                        }`}
                                    >
                                        {msg.message}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isBotTyping && (
                            <div className="flex justify-start items-center mt-4">
                                <Spinner classNames={{ label: "text-foreground mt-4" }} label="dots" variant="dots" />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </>
                ) : (
                    <EmptyState />
                )}
            </div>

            {/* Input de mensajes */}
            {userId ? (
                <MessageInput />
            ) : (
                <div className="p-4 bg-gray-100 text-center text-gray-500">
                    Selecciona una conversación para comenzar a chatear.
                </div>
            )}
        </div>
    );
}