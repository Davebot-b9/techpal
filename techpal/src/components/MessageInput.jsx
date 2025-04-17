import { useState } from 'react';
import { useChat } from '../hooks/useChat';
import { IoSend } from "react-icons/io5";


export default function MessageInput() {
    const [text, setText] = useState('');
    const { sendMessage } = useChat();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return; //verificamos si el texto esta vacio o contiene espacios externos, si es asi devuelve null o cancela la ejecucion evitando envio de mensajes vacios
        await sendMessage(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 flex flex-col md:flex-row gap-2">
            <input
                className="flex-1 border p-2 rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe un mensaje..."
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                <IoSend />
            </button>
        </form>
    );
}

