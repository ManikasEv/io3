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
            question: "What is energy healing?",
            answer: "Energy is the source of life. It exists within us and all around us, in humans, in nature, in animals, on Earth, and throughout the universe. It is everywhere and in everything. We perceive energy through our sensory systems (sight, hearing, taste, smell, touch, proprioception), and also through our intuitive abilities, such as empathy, perception, awareness, and inner knowing. When we choose to become observers of our own energy and the energy around us, we expand our consciousness. We allow ourselves to feel it, understand it, and move with it. Vitality — what we call 'life' — is energy in motion. And we are all part of this unified field. Healing is a safe field, aligned with universal laws, with the intention to restore, balance, and transform energy. It is a field of care and support and we all have access to. We need healing when there is imbalance in our emotions, thoughts, or experiences. When we become aware of dysfunction, symptoms, or disturbances within our body or mind, the healing field provides the space and the tools needed for the process of restoration to begin. Because we are holistic beings, true healing must also be holistic — addressing the person as a whole, along with everything that surrounds and influences them. Because we need the healing space as a container of safety, in order to approach and engage with our own energy consciously. The protection and intention held within the healing process is what gives us access to our energy gently, wisely, and effectively."
        },
        {
            question: "What is a blockage?",
            answer: "HEALTH IS OUR GREATEST WEALTH. When we give ourselves the space and time for healing, we activate a process of transformation, release, and restoration — naturally, painlessly, and often with surprising ease. This process supports the healing of: • Traumatic experiences • Emotional blockages • Repetitive patterns. At a deeper level, it allows us to free ourselves from energetic fields, unconscious roles, and inherited entanglements that we unknowingly carry — elements that keep us distant from the most authentic version of who we are. A blockage, no matter how limiting it seems, serves a fundamental purpose: to keep us safe. We may consciously desire something, yet our inner system — our belief system — might not support it. These beliefs are often shaped by deeper layers: emotional, ancestral, societal. They form the lens through which we perceive what is possible, acceptable, or safe. By bringing awareness and light to this internal system, we offer it the opportunity to decode, understand, and eventually release what no longer serves us. This opens space for the integration of new inner safety mechanisms that are aligned with our true desires and goals. We learn to move with clarity — both in our yes and in our no. A 'no' is not rejection — it's a sign that there is still something to be seen before we take the next meaningful leap. Both 'yes' and 'no' are part of the path. Both are opportunities for growth."
        },
        {
            question: "What Makes Us So Similar — Yet So Uniquely Ourselves?",
            answer: "What connects us all? Is our innate right to life, the right to experience it through the wise vehicle of our body. The body perceives experience through sensations, emotions, thoughts, and awareness. Everything we have ever lived and everything we wish to live, is stored in the subconscious, which is held within the body. It is here that all the elements shaping who we are today reside. In the present moment, we are potentially everything. The subconscious longs for our attention, our presence, it invites us to step into the role of the observer. This attention is often pulled into timelines called 'past' and 'future': the past as memories, and the future as desires, goals, or dreams. And yet, the most valuable insights we need right now often lie hidden in those very timelines, within the subconscious. What Makes Each of Us Unique? The way we color and experience the world. Research into the body's functioning shows that it is our eyes and our perception that give color to everything around us. We are the ones who give meaning and importance to what surrounds us. Things exist because we observe them. What makes us different is the way we each created our belief system, the inner architecture formed from experience, thought, and emotion. We all share the same core needs, but the way we learned to meet those needs is deeply personal. We all experience the same spectrum of emotions, yet we each choose, moment by moment, how to feel and express them. We all face challenges but the way we respond is shaped by our unique blend of beliefs and desires."
        },
        {
            question: "What Is the Role of Energy Healing?",
            answer: "Through energy healing and the techniques of complementary therapy we open a direct channel of communication between the subconscious and the conscious self. Everything that shows up in our lives as a dysfunctional pattern or experience is, in truth, a call for connection an invitation to unite what is hidden with what is aware. This inner dialogue brings powerful gifts: • Liberation • Restoration • Detachment from old identifications • Transmutation of stagnant energy • Reconnection with our truest self • and the awakening of the innate wisdom of the body. 'Awakening happens when the subconscious becomes conscious.' — IO"
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
                            className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${openQuestion === index ? 'bg-blue-50 border-blue-200 shadow-md' : 'hover:bg-gray-50'}`}
                        >
                            <button
                                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-sm md:text-base font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                <motion.span 
                                    animate={{ rotate: openQuestion === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="text-gray-600"
                                >
                                    ▲
                                </motion.span>
                            </button>
                            
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openQuestion === index ? "auto" : 0,
                                    opacity: openQuestion === index ? 1 : 0
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4">
                                    <div className="max-h-32 overflow-y-auto pr-4 text-sm md:text-base text-gray-800 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default FrequentlyAskedQuestions;