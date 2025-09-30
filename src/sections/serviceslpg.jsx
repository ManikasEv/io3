import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import textTables from '../textobjects/texttables';
import earthImg from '../assets/earth.jpg';
import hypnosesImg from '../assets/hypnoses.jpg';
import rejuvanceImg from '../assets/rejuvance.jpg';
import mindfulnessImg from '../assets/mindfulness.jpg';
import thetaImg from '../assets/theta.jpg';
import quantumImg from '../assets/quantum.jpg';

const ServicesLpg = () => {
    const [selectedService, setSelectedService] = useState(0);
    const navigate = useNavigate();

    const services = [
        {
            id: "01",
            name: textTables.quantumBiofeedback.title,
            image: quantumImg,
        },
        {
            id: "02",
            name: textTables.energyTherapies.title,
            image: earthImg,
        },
        {
            id: "03",
            name: textTables.rejuvance.title,
            image: rejuvanceImg,
        },
        {
            id: "04",
            name: textTables.regressionTherapy.title,
            image: thetaImg,
        },
        {
            id: "05",
            name: textTables.hypnotherapy.title,
            image: hypnosesImg,
        },
        {
            id: "06",
            name: textTables.mindfulness.title,
            image: mindfulnessImg,
        }
    ];

    return (
        <motion.section 
            id="serviceslpg" 
            className="w-full bg-[#B3A9D2] py-10 overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* <div className="text-center mb-8">
                    <h2 className="text-4xl font-semibold mb-4 text-white">
                        We don't just treat we realign.
                    </h2>
                    <p className="text-xl text-white/90"> 
                        Explore our science-backed 🔬 energy-led therapies. 📸
                    </p>
                </div> */}

                {/* Mobile View */}
                <div className="md:hidden">
                    <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <style jsx>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <div className="flex space-x-4">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="flex-none w-[85%] first:pl-4 last:pr-4"
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    <motion.div 
                                        className="rounded-2xl overflow-hidden h-[400px] flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Image Container */}
                                        <div className="flex-1 bg-white/10 relative overflow-hidden">
                                            <img 
                                                src={service.image} 
                                                alt={service.name}
                                                className="w-full h-full object-contain object-center bg-white transition-transform duration-500 hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>
                                        {/* Text Content */}
                                        <div className="bg-[#8B5CF6] p-4 shadow-lg border-2 border-purple-300">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-white font-medium">{service.id}</span>
                                                <h3 className="text-sm font-semibold text-white">
                                                    {service.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex flex-row gap-12">
                    <div className="w-1/2 relative flex flex-col justify-center">
                        <div className="space-y-2">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    onClick={() => setSelectedService(index)}
                                    className={`
                                        flex items-center gap-4 p-4 rounded-lg cursor-pointer
                                        transition-all duration-300 hover:bg-[#7C3AED] hover:shadow-lg
                                        ${selectedService === index ? 'bg-[#8B5CF6] shadow-lg' : 'bg-[#8B5CF6]'}
                                        group border-2 border-purple-300
                                    `}
                                    whileHover={{ x: 8, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-2xl font-light w-12 text-white group-hover:text-white transition-colors">
                                        {service.id}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                                            {service.name}
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2">
                        <motion.div 
                            className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 relative shadow-2xl hover:shadow-3xl transition-all duration-500"
                            key={selectedService}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img 
                                src={services[selectedService].image} 
                                alt={services[selectedService].name}
                                className="w-full h-full object-contain object-center bg-white transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            <div className="absolute bottom-6 right-6">
                                <motion.div 
                                    className="bg-[#7FAE90] rounded-lg p-4 text-white max-w-[240px] shadow-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <p className="text-sm mb-3">Not sure what fits your journey? Let's discover together.</p>
                                    <motion.button 
                                        onClick={() => navigate(`/services?service=${services[selectedService].id}`)}
                                        className="bg-white text-[#7FAE90] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors w-full"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Our Services
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default ServicesLpg;