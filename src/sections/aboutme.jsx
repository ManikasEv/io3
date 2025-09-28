import portfolioImage from '../assets/portfolio.jpg';
import { motion } from 'framer-motion';
import textTables from '../textobjects/texttables';

const AboutMe = () => {
    return (
        <motion.section 
            className="w-full py-16 md:py-24 bg-[#FAFAFA] overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-semibold mb-2">
                        Meet the Mind Behind
                    </h2>
                    <h3 className="text-4xl font-semibold mb-4">
                        Inside Observation
                    </h3>
                    <p className="text-gray-600">
                        Merging science and soul to guide your holistic transformation.
                    </p>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-12">
                    {/* Image Container */}
                    <div className="w-48 md:w-1/3 relative md:-ml-28 md:-mt-12">
                        <div className="rounded-full overflow-hidden aspect-square bg-[#7FAE90] relative">
                            <img 
                                src={portfolioImage}
                                alt="Dr. Emily Parker"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-60 bottom-0 left-0 right-0 mx-auto w-[75%] bg-[#7FAE90]/70 backdrop-blur-sm text-white text-center py-2 rounded-[70px]">
                                <p className="font-medium text-sm">Dr. Gionianta Kylafi</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-2/3 space-y-6 text-center md:text-left">
                        <p style={{ whiteSpace: "pre-line" }}>
                            {textTables.aboutMe}
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default AboutMe; 