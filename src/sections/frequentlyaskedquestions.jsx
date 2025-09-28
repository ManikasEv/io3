import { useState } from 'react';
import { motion } from 'framer-motion';

const FrequentlyAskedQuestions = () => {
    const [openQuestion, setOpenQuestion] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const faqs = [
        {
            question: "What services does Inside Observation offer?",
            answer: "Inside Observation provides a wide range of healthcare services, including primary care, specialized medical consultations, chronic disease management, wellness check-ups, mental health support, surgical procedures, physical therapy, and telemedicine options. We focus on personalized care for every patient."
        },
        {
            question: "How do I book an appointment?",
            answer: "You can book an appointment through our online booking system, by calling our office directly, or by sending us an email. Our staff will help you find the most convenient time slot and match you with the right healthcare provider for your needs."
        },
        {
            question: "Is Healora covered by insurance?",
            answer: "Yes, Healora is covered by most major insurance providers. We recommend contacting your insurance company to verify coverage details and any potential out-of-pocket expenses. Our billing department can also assist you with insurance-related questions."
        },
        {
            question: "Can I access virtual care services?",
            answer: "Yes, we offer comprehensive virtual care services through our secure telehealth platform. Virtual appointments are available for many types of consultations, follow-ups, and certain medical services. Contact us to learn if your healthcare needs can be addressed virtually."
        },
        {
            question: "What should I bring to my first appointment?",
            answer: "Please bring your government-issued ID, insurance card, a list of current medications, relevant medical records, and any recent test results. It's also helpful to prepare a list of questions or concerns you'd like to discuss with your healthcare provider."
        }
    ];

    return (
        <motion.section 
            className="w-full py-16 md:py-24 bg-[#FAFAFA]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
                duration: 0.9,
                ease: "easeOut"
            }}
        >
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Frequently Asked
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Questions
                    </h2>
                    <p className="text-gray-600">
                        Have another question? Please <a href="#contact" className="text-secondary-500 hover:underline">contact</a> our team!
                    </p>
                </div>

                <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className={`border border-gray-200 rounded-lg overflow-hidden ${openQuestion === index ? 'bg-[#C0DBED]' : ''}`}
                        >
                            <button
                                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                                className={`w-full px-6 py-4 text-left flex justify-between items-center ${openQuestion !== index ? 'hover:bg-gray-50' : ''}`}
                            >
                                <span className="text-sm md:text-base font-medium">
                                    {faq.question}
                                </span>
                                <span className="transform transition-transform duration-200">
                                    {openQuestion === index ? '▼' : '▲'}
                                </span>
                            </button>
                            
                            {openQuestion === index && (
                                <div className="px-6 pb-4">
                                    <div className="max-h-32 overflow-y-auto pr-4 text-sm md:text-base text-gray-600">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default FrequentlyAskedQuestions;