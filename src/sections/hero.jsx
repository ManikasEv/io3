import heroImg from '../assets/hero1.jpg';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [currentTagIndex, setCurrentTagIndex] = useState(0);
    const floatingTags = [
        "Grow & Thrive Together",
        "Strengthen Your Inner Health",
        "Science Meets Intuitive Care",
        "Healing Through Presence"
    ];

    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        const headerOffset = 100;
        const targetPosition = element.offsetTop - headerOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const animation = (currentTime) => {
            if (!start) start = currentTime;
            const progress = currentTime - start;
            const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            
            window.scrollTo(0, startPosition + distance * easeInOutQuad(Math.min(progress / duration, 1)));

            if (progress < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagIndex((prevIndex) => (prevIndex + 1) % floatingTags.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section 
            id="hero" 
            className="relative w-full h-[50vh] md:h-[80vh] bg-[#7FAE90]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
                duration: 1,
                ease: "easeOut"
            }}
        >
            {/* Mobile View */}
            <div className="block md:hidden relative h-full">
                <img 
                    src={heroImg} 
                    alt="Healing through presence" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0">
                    <div className="absolute top-[45%] right-8">
                        <div className="bg-black/30 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm">
                            {floatingTags[currentTagIndex]}
                        </div>
                    </div>
                    <div className="absolute bottom-[20%] left-8">
                        <div className="bg-black/30 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm">
                            {floatingTags[(currentTagIndex + 2) % floatingTags.length]}
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-2 h-full">
                {/* Left Content */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24">
                    <div className="max-w-2xl">
                        <div className="mb-2 mt-4">
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="bg-black text-white rounded-full text-[13px] md:text-sm h-[36px] md:h-[42px] px-4 md:px-5 flex items-center gap-3 md:gap-4 group hover:opacity-80 transition-opacity"
                            >
                                <div className="bg-white rounded-full w-4 md:w-5 h-4 md:h-5"></div>
                                <span>contact us</span>
                                <svg width="12" height="12" className="md:w-[14px] md:h-[14px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <h1 className="font-script font-regular text-2xl md:text-3xl text-black mb-3 md:mb-4">
                            Awaken healing through conscious inner balance
                        </h1>
                        <p className="text-gray-800 text-xs md:text-sm font-semibold">
                            Blending science and intuition to release emotional blocks, restore clarity, and realign with your true self.
                        </p>

                        <div className="mb-12 md:mb-16 mt-3 md:mt-4">
                            <button 
                                onClick={() => scrollToSection('serviceslpg')}
                                className="bg-primary-500 p-1.5 md:p-2 border-2 text-sm md:text-base font-semibold rounded text-black hover:bg-secondary-500 hover:text-white hover:border-white transition-all hover:duration-300 hover:opacity-90"
                            >
                                Our Services
                            </button>
                        </div>

                        <p className="text-gray-800 text-xs md:text-sm font-semibold">
                            Supporting thousands on their path to emotional, physical, and spiritual balance.
                        </p>
                        
                        <div className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-3 md:gap-y-4 mt-8 md:mt-12">
                            <span className="text-black font-bold text-base md:text-lg">Energy Therapy</span>
                            <span className="text-black font-bold text-base md:text-lg">Inner Awareness</span>
                            <span className="text-black font-bold text-base md:text-lg">Biofeedback</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-full overflow-hidden">
                    <img 
                        src={heroImg} 
                        alt="Healing through presence" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        {/* Right side tags */}
                        <div className="absolute top-[45%] right-8">
                            <div className="bg-black/30 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm">
                                Grow & Thrive Together
                            </div>
                        </div>
                        <div className="absolute bottom-1/4 right-12">
                            <div className="bg-black/30 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm">
                                Strengthen Your Inner Health
                            </div>
                        </div>
                        
                        {/* Left side tags */}
                        <div className="absolute top-[60%] left-8">
                            <div className="bg-black/30 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm">
                                Science Meets Intuitive Care
                            </div>
                        </div>
                        <div className="absolute bottom-[20%] left-12">
                            <div className="bg-black/30 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm">
                                Healing Through Presence
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Hero;