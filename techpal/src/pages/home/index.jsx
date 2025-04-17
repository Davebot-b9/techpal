import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Footer from './Footer'

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white flex flex-col">
            {/* Header */}
            <Header />
            {/* Hero Section */}
            <HeroSection />
            {/* Features Section */}
            <FeatureSection />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
