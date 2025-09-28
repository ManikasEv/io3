import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Attributes = () => {
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

    const planets = [
        { 
            id: 1, 
            title: "Quantum Biofeedback",
            color: "from-primary-500/90 to-primary-500",
            position: "ml-[5%]",
            marginTop: "",
            animation: { range: 20, duration: 3.2 }
        },
        { 
            id: 2, 
            title: "Theta Healing",
            color: "from-primary-500/90 to-primary-500",
            position: "ml-[65%]",
            marginTop: "-mt-64",
            animation: { range: 20, duration: 3.2 }
        },
        { 
            id: 3, 
            title: "Regression Therapy",
            color: "from-primary-700/90 to-primary-700",
            position: "ml-[35%]",
            marginTop: "-mt-20",
            animation: { range: 25, duration: 2.7 }
        },
        { 
            id: 4, 
            title: "Hypnotherapy",
            color: "from-secondary-500/90 to-secondary-500",
            position: "ml-[65%]",
            marginTop: "-mt-20",
            animation: { range: 30, duration: 3.5 }
        },
        { 
            id: 5, 
            title: "Rejuvance",
            color: "from-secondary-500/90 to-secondary-500",
            position: "ml-[5%]",
            marginTop: "-mt-64",
            animation: { range: 30, duration: 3.5 }
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPlanetIndex((prev) => (prev + 1) % planets.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const createFloatingAnimation = (range, duration) => ({
        y: [-range, range],
        transition: {
            duration: duration,
            repeatType: "reverse",
            repeat: Infinity,
            ease: "easeInOut"
        }
    });

    return (
        <motion.section 
            className="w-full py-16 md:py-24"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
                duration: 0.9,
                ease: "easeOut"
            }}
        >
            {/* Mobile Layout */}
            <div className="md:hidden w-full flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={planets[currentPlanetIndex].id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className={`
                            w-64 h-64 rounded-full flex items-center justify-center
                            bg-gradient-to-br ${planets[currentPlanetIndex].color}
                            relative overflow-hidden
                            before:content-[''] before:absolute before:w-full before:h-full 
                            before:bg-white/10 before:rounded-full before:-top-1/2
                            after:content-[''] after:absolute after:w-1/4 after:h-1/4 
                            after:bg-white/20 after:rounded-full after:top-1/4 after:left-1/4
                        `}
                    >
                        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                        <span className="text-white text-xl relative z-10">{planets[currentPlanetIndex].title}</span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Desktop Layout */}
            {planets.map((planet) => (
                <motion.div 
                    key={planet.id}
                    animate={createFloatingAnimation(planet.animation.range, planet.animation.duration)}
                    className={`
                        hidden md:flex w-64 h-64 rounded-full items-center justify-center 
                        ${planet.position} ${planet.marginTop}
                        bg-gradient-to-br ${planet.color}
                        relative overflow-hidden
                        before:content-[''] before:absolute before:w-full before:h-full 
                        before:bg-white/10 before:rounded-full before:-top-1/2
                        after:content-[''] after:absolute after:w-1/4 after:h-1/4 
                        after:bg-white/20 after:rounded-full after:top-1/4 after:left-1/4
                    `}
                >
                    <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                    <span className="text-white text-xl relative z-10">{planet.title}</span>
                </motion.div>
            ))}
        </motion.section>
    )
}

export default Attributes;