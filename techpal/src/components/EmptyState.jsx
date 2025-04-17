import React from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';

export default function EmptyState() {
    return (
        <div className="flex flex-col justify-center items-center h-full text-center px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white rounded-lg shadow-lg">
            <div className="mb-6">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                    <IoChatbubblesOutline className="text-blue-900 text-5xl" />
                </div>
            </div>
            <h2 className="text-2xl font-bold">¡Bienvenido a TechPal!</h2>
            <p className="text-lg font-medium mt-2">
                Selecciona una conversación para comenzar.
            </p>
            <p className="text-sm text-gray-300 mt-4">
                Estamos aquí para ayudarte con tus problemas técnicos de manera rápida y eficiente.
            </p>
        </div>
    );
}