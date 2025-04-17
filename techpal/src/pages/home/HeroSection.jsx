import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
    const navigate = useNavigate();

    
    const onSubmit = () =>{
        navigate('/login')
    }
    return (
        <section className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 p-6">
            <div className="text-center md:text-left max-w-lg">
                <h2 className="text-3xl md:text-4xl font-semibold">¿Problemas técnicos?</h2>
                <p className="mt-4 text-lg">
                    TechPal está aquí para ayudarte a resolver tus problemas técnicos de manera rápida y eficiente.
                    Desde configuraciones hasta soluciones avanzadas, ¡nosotros te respaldamos!
                </p>
                <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300" onClick={onSubmit}>
                    Comienza Ahora
                </button>
            </div>
            <div className="w-full max-w-md">
                <img
                    src="/public/support.jpg"
                    alt="TechPal Support"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    )
}

export default HeroSection
