import { createContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [messages, setMessages] = useState([]);
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const login = (userData, jwtToken) => {
        setUser(userData);
        setToken(jwtToken);
        localStorage.setItem('token', jwtToken);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        setMessages([]);
    };

    const handleLogin = async (username, password) => {
        if (!username || !password) {
            throw new Error('Todos los campos son obligatorios.');
        }
    
        try {
            const response = await axios.post('http://localhost:8000/login', {
                username,
                password,
            });
    
            if (response.status !== 200) {
                throw new Error('Credenciales incorrectas');
            }
    
            const { user, token } = response.data;
            login(user, token);
        } catch (error) {
            throw new Error(error.response?.data?.detail || 'Error al iniciar sesión');
        }
    };

    const sendMessage = async (text) => {
        if (!userId) {
            console.error('No se puede enviar un mensaje sin un userId.');
            return;
        }

        const userMessage = { sender: 'user', message: text };
        setMessages((prev) => [...prev, userMessage]);

        try {
            setIsBotTyping(true);
            const res = await axios.post(
                'http://localhost:8000/message',
                { user_id: userId, message: text },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const botMessage = { sender: 'bot', message: res.data.response };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsBotTyping(false);
        }
    };

    // Cargar historial de mensajes
    const loadHistory = useCallback(async () => {
        if (!userId) {
            console.error('No se puede cargar el historial sin un userId.');
            return;
        }

        try {
            const res = await axios.get(`http://localhost:8000/history/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Incluir token en el header
                },
            });
            setMessages(res.data);
        } catch (error) {
            console.error('Error loading history:', error);
        }
    }, [userId, token]);

    // Cambiar de usuario
    const switchUser = (newUserId) => {
        setUserId(newUserId);
        setMessages([]); // Limpiar mensajes mientras se carga el historial
    };

    useEffect(() => {
        if (userId) {
            loadHistory();
        }
    }, [userId, loadHistory]);

    return (
        <ChatContext.Provider
            value={{
                userId,
                messages,
                isBotTyping,
                user,
                token,
                login,
                logout,
                sendMessage,
                loadHistory,
                switchUser,
                handleLogin,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export { ChatContext };