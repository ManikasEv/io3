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

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false, message: '' });

        try {
            // Create FormData exactly like the Web3Forms documentation
            const formDataToSend = new FormData();
            formDataToSend.append('access_key', 'bded3bc6-fa25-485c-90dd-2bd98ab7edb1');
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('subject', 'New Contact Form Submission from Inside Observation');
            
            // Convert FormData to object, then to JSON (exactly like the docs)
            const object = Object.fromEntries(formDataToSend);
            const json = JSON.stringify(object);
            
            console.log('Sending JSON:', json);
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();
            console.log('Web3Forms response:', result);

            if (result.success) {
                setStatus({
                    loading: false,
                    success: true,
                    error: false,
                    message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    privacyPolicy: false
                });
            } else {
                throw new Error(result.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Oops! Something went wrong. Please try again or contact us directly via email.'
            });
        }
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
                    {/* Status Message */}
                    {status.message && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-lg ${
                                status.success 
                                    ? 'bg-green-50 text-green-800 border border-green-200' 
                                    : 'bg-red-50 text-red-800 border border-red-200'
                            }`}
                        >
                            {status.message}
                        </motion.div>
                    )}

                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            disabled={status.loading}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            disabled={status.loading}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            disabled={status.loading}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            required
                            disabled={status.loading}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        disabled={status.loading}
                        className="w-full bg-[#C0DBED] text-black font-medium py-3 rounded-lg hover:bg-[#C0DBED]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status.loading ? 'Sending...' : 'Contact Us'}
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
                                    {/* Status Message */}
                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-lg ${
                                                status.success 
                                                    ? 'bg-green-50 text-green-800 border border-green-200' 
                                                    : 'bg-red-50 text-red-800 border border-red-200'
                                            }`}
                                        >
                                            {status.message}
                                        </motion.div>
                                    )}

                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            required
                                            disabled={status.loading}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            required
                                            disabled={status.loading}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            disabled={status.loading}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            rows="4"
                                            required
                                            disabled={status.loading}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                                        disabled={status.loading}
                                        className="w-full bg-[#C0DBED] text-black font-medium py-3 rounded-lg hover:bg-[#C0DBED]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status.loading ? 'Sending...' : 'Contact Us'}
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