import React from 'react';

function SuggestWindow({ onSelectSuggestion }) {
    const suggestions = [
        'problema con internet',
        'no funciona el servicio',
        'reportar un problema técnico',
        'reiniciar mi cuenta',
        'servicios',
        'horario',
    ];

    return (
        <div className="w-full md:w-64 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Preguntas Frecuentes</h2>
            <ul className="space-y-3">
                {suggestions.map((suggestion, index) => (
                    <li key={index}>
                        <button
                            onClick={() => onSelectSuggestion(suggestion)}
                            className="w-full text-left bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium p-3 rounded-lg shadow-md transition-all"
                        >
                            {suggestion}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SuggestWindow;