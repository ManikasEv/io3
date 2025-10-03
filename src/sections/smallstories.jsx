import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import card1Image from '../assets/card1.jpg';
import card2Image from '../assets/card2.jpg';
import card3Image from '../assets/card3.jpg';

const SmallStories = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showMobileText, setShowMobileText] = useState(false);

    const cards = [
        {
            id: 1,
            // statistic: "97%",
            // description: "Reported rate of release",
            title: "What connects us all?",
            longText: "The way we color and experience the world. Research into the body's functioning shows that it is our eyes and our perception that give color to everything around us. We are the ones who give meaning and importance to what surrounds us. Things exist because we observe them. What makes us different is the way we each created our belief system, the inner architecture formed from experience, thought, and emotion. We all share the same core needs, but the way we learned to meet those needs is deeply personal. We all experience the same spectrum of emotions, yet we each choose, moment by moment, how to feel and express them. We all face challenges, but the way we respond is shaped by our unique blend of beliefs and desires.",
            bgImage: card1Image
        },
        {
            id: 2,
            // statistic: "97%",
            // description: "Individual sessions completed",
            title: "What connects us all?",
            longText: "Ιs our innate right to life, the right to experience it through the wise vehicle of our body. The body perceives experience through sensations, emotions, thoughts, and awareness. Everything we have ever lived and everything we wish to live, is stored in the subconscious, which is held within the body. It is here that all the elements shaping who we are today reside. In the present moment, we are potentially everything. The subconscious longs for our attention, our presence; it invites us to step into the role of the observer. This attention is often pulled into timelines called 'past' and 'future': the past as memories, and the future as desires, goals, or dreams. And yet, the most valuable insights we need right now often lie hidden in those very timelines, within the subconscious.",
            bgImage: card2Image
        },
        {
            id: 3,
            // statistic: "100%",
            // description: "Tailored care per individual",
            title: "What Is the Role of Energy Healing?",
            longText: "Through energy healing and the techniques of complementary therapy we open a direct channel of communication between the subconscious and the conscious self. Everything that shows up in our lives as a dysfunctional pattern or experience is, in truth, a call for connection—an invitation to unite what is hidden with what is aware. This inner dialogue brings powerful gifts: Liberation; Restoration; Detachment from old identifications; Transmutation of stagnant energy; Reconnection with our truest self; and the awakening of the innate wisdom of the body. 'Awakening happens when the subconscious becomes conscious.' — IO",
            bgImage: card3Image
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

            <h1 className="text-center text-gray-700 mb-12 max-w-3xl mx-auto font-extrabold tracking-tight leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                HEALTH OUR NUMBER ONE WEALTH
            </h1>

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
                        className="w-full h-[500px] rounded-2xl overflow-hidden relative cursor-pointer"
                        style={{
                            backgroundImage: `url(${cards[currentCardIndex].bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
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
                        {/* Read more text */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                            <div className="flex items-center gap-3">
                                <motion.div 
                                    className="w-12 h-px bg-white"
                                    animate={{
                                        x: [-2, 2, -2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <span className="text-lg font-medium">Read</span>
                                <span className="text-lg font-medium">More</span>
                                <motion.div 
                                    className="w-12 h-px bg-white"
                                    animate={{
                                        x: [2, -2, 2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </div>
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
                        <div 
                            className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                            style={{
                                backgroundImage: `url(${card.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
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
                        
                        {/* Read more text */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center transition-opacity duration-300 group-hover:opacity-0">
                            <div className="flex items-center gap-3">
                                <motion.div 
                                    className="w-12 h-px bg-white"
                                    animate={{
                                        x: [-2, 2, -2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <span className="text-lg font-medium">Read</span>
                                <span className="text-lg font-medium">More</span>
                                <motion.div 
                                    className="w-12 h-px bg-white"
                                    animate={{
                                        x: [2, -2, 2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

export default SmallStories;