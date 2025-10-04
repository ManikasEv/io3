import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacyPolicy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <>
            {/* Mobile View */}
            <motion.section 
                id="contactform" 
                className="md:hidden w-full px-4 py-12"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                    duration: 0.7,
                    ease: "easeOut"
                }}
            >
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold">
                        Let's Connect & Begin
                    </h2>
                    <h2 className="text-2xl font-semibold mt-[-6px] mb-6">
                        Your Healing Journey
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="First Name Last Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 resize-none"
                        />
                    </div>
                    {/* Privacy Policy Checkbox - Commented out until policy is ready
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="privacyPolicy"
                            id="privacyPolicy"
                            checked={formData.privacyPolicy}
                            onChange={handleChange}
                            className="rounded border-gray-300 text-pink-500 focus:ring-pink-300"
                        />
                        <label htmlFor="privacyPolicy" className="text-sm text-gray-600">
                            I have read and accept the <a href="#" className="text-[#4C5B9B] hover:underline">privacy policy</a>
                        </label>
                    </div>
                    */}
                    <button
                        type="submit"
                        className="w-full bg-[#C0DBED] text-black font-medium py-3 rounded-lg hover:bg-[#C0DBED]/90 transition-colors"
                    >
                        Contact Us
                    </button>
                </form>

                {/* Contact Info for Mobile */}
                <div className="mt-12 space-y-6 flex flex-col items-center">
                    <div className="flex items-center gap-3">
                        <span>👤</span>
                        <p className="text-gray-600">GIOLANTA KYLAFI</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>📧</span>
                        <p className="text-gray-600">info@insideobservation.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>📞</span>
                        <p className="text-gray-600">+41 78 226 71 71</p>
                    </div>
                </div>
            </motion.section>

            {/* Desktop View */}
            <motion.section 
                id="contact" 
                className="w-full relative hidden md:block py-5 mb-15"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                    duration: 1,
                    ease: "easeInOut"
                }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
                    {/* Background Shape */}
                    <div className="absolute top-32 left-0 right-0 h-[90%] bg-[#2D3C66] rounded-3xl z-0"></div>
                    
                    {/* Content Grid */}
                    <div className="grid grid-cols-2 gap-12 relative z-10">
                        {/* Contact Info */}
                        <div className="pt-44 pl-16">
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                Let's Connect &
                            </h2>
                            <h2 className="text-2xl font-semibold text-white mb-6">
                                Begin Your Healing Journey
                            </h2>
                            <p className="text-white/90 mb-8 text-sm">
                                Services are available by appointment in Zurich, Wädenswil , online, or at your preferred location.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/80">👤</span>
                                    <p className="text-white/80">GIOLANTA KYLAFI</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white/80">📧</span>
                                    <p className="text-white/80">info@insideobservation.com</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white/80">📞</span>
                                    <p className="text-white/80">+41 78 226 71 71</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="pt-8 pr-12">
                            <div className="bg-white rounded-lg p-8 shadow-lg max-w-md ml-auto">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="First Name Last Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 resize-none"
                                        />
                                    </div>
                                    {/* Privacy Policy Checkbox - Commented out until policy is ready
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="privacyPolicy"
                                            id="privacyPolicyDesktop"
                                            checked={formData.privacyPolicy}
                                            onChange={handleChange}
                                            className="rounded border-gray-300 text-pink-500 focus:ring-pink-300"
                                        />
                                        <label htmlFor="privacyPolicyDesktop" className="text-sm text-gray-600">
                                            I have read and accept the <a href="#" className="text-[#4C5B9B] hover:underline">privacy policy</a>
                                        </label>
                                    </div>
                                    */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#C0DBED] text-black font-medium py-3 rounded-lg hover:bg-[#C0DBED]/90 transition-colors"
                                    >
                                        Contact Us
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default ContactForm;