import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { handleLogin } = useContext(ChatContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            await handleLogin(username, password);
            navigate('/chat');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
            <div className="auth-container p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Bienvenido a TechPal</h1>
                <p className="text-gray-600 text-center mb-6">
                    Inicia sesión para acceder a tu asistente de soporte técnico.
                </p>

                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Usuario</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nombre de usuario"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-1">Contraseña</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                    />
                </div>

                <button
                    className="w-full bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition-all"
                    onClick={onSubmit}
                >
                    Iniciar Sesión
                </button>
            </div>
        </div>
    );
};

export default Login;