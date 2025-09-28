import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SmallStories = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showMobileText, setShowMobileText] = useState(false);

    const cards = [
        {
            id: 1,
            statistic: "97%",
            description: "Reported rate of release",
            title: "Emotional Release Journey",
            longText: "Our success rate speaks volumes about the effectiveness of our approach. Through carefully designed sessions and personalized attention, clients experience profound emotional release. This process involves understanding deep-seated patterns, addressing core issues, and implementing proven techniques for lasting relief. Many report significant improvements in their daily lives, relationships, and overall well-being.",
            bgImage: "bg-[url('/src/assets/release-image.jpg')]"
        },
        {
            id: 2,
            statistic: "1200+",
            description: "Individual sessions completed",
            title: "Experience & Expertise",
            longText: "Each session represents a unique journey of healing and growth. Our extensive experience has allowed us to refine our methods and adapt to individual needs. We've witnessed countless breakthroughs, helped clients overcome various challenges, and continuously evolved our approach based on real-world results and feedback. This wealth of experience ensures that every new client benefits from proven, tested methods.",
            bgImage: "bg-[url('/src/assets/sessions-image.jpg')]"
        },
        {
            id: 3,
            statistic: "100%",
            description: "Tailored care per individual",
            title: "Personalized Healing Approach",
            longText: "We believe that no two healing journeys are identical. Our commitment to personalized care means that every treatment plan is uniquely crafted. We take into account your personal history, specific needs, goals, and preferences. This individualized approach ensures that you receive the most effective and relevant support for your situation, leading to better outcomes and lasting positive changes.",
            bgImage: "bg-[url('/src/assets/care-image.jpg')]"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (!showMobileText) {
                setCurrentCardIndex((prev) => (prev + 1) % cards.length);
            }
        }, 4000);
        return () => clearInterval(timer);
    }, [showMobileText]);

    return (
        <motion.section 
            className="w-full py-16 md:py-24"
            initial={{ 
                opacity: 0,
                y: 50,
                rotateX: 5,
                perspective: 1000
            }}
            whileInView={{ 
                opacity: 1,
                y: 0,
                rotateX: 0,
                perspective: 1000
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
                duration: 1,
                ease: "easeOut"
            }}
        >
            <h2 className="text-4xl font-semibold text-center mb-4">
                Every Number Holds
            </h2>
            <h2 className="text-4xl font-semibold text-center mb-8">
                a Healing Story
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Our numbers reflect more than progress — they show how energy, care, and clarity change lives.
            </p>

            {/* Mobile Layout */}
            <div className="md:hidden w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={cards[currentCardIndex].id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => setShowMobileText(!showMobileText)}
                        className={`
                            w-full h-[500px] rounded-2xl overflow-hidden relative
                            ${cards[currentCardIndex].bgImage} bg-cover bg-center
                            cursor-pointer
                        `}
                    >
                        <div className="absolute inset-0 bg-black/30" />
                        <AnimatePresence>
                            {showMobileText ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="absolute inset-0 bg-black/90 p-6 overflow-y-auto"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {cards[currentCardIndex].title}
                                    </h3>
                                    <p className="text-white/90 text-lg">
                                        {cards[currentCardIndex].longText}
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="absolute bottom-8 left-8 text-white">
                                    <div className="text-5xl font-bold mb-2">
                                        {cards[currentCardIndex].statistic}
                                    </div>
                                    <div className="text-xl">
                                        {cards[currentCardIndex].description}
                                    </div>
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="h-[600px] rounded-2xl overflow-hidden relative group"
                    >
                        <div className={`
                            absolute inset-0 ${card.bgImage} bg-cover bg-center
                            transition-transform duration-300 group-hover:scale-105
                        `} />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition-colors duration-300" />
                        
                        {/* Default Content */}
                        <div className="absolute bottom-8 left-8 text-white transition-opacity duration-300 group-hover:opacity-0">
                            <div className="text-5xl font-bold mb-2">
                                {card.statistic}
                            </div>
                            <div className="text-xl">
                                {card.description}
                            </div>
                        </div>

                        {/* Hover Content */}
                        <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-white/90 text-lg">
                                    {card.longText}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

export default SmallStories;