import React from 'react'

function FeatureSection() {
    return (
        <section className="bg-white text-blue-900 py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold">¿Por qué elegir TechPal?</h2>
                <p className="mt-4 text-lg">Descubre cómo podemos hacer tu vida más fácil.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Soporte Instantáneo</h3>
                        <p className="mt-2">Obtén respuestas rápidas a tus problemas técnicos con nuestro chatbot inteligente.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Disponible 24/7</h3>
                        <p className="mt-2">Estamos aquí para ayudarte en cualquier momento, sin importar la hora.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Soluciones Personalizadas</h3>
                        <p className="mt-2">Recibe recomendaciones adaptadas a tus necesidades específicas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
