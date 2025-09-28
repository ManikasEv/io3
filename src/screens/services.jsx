import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import ContactForm from '../sections/contactform';
import Footer from '../sections/footer';
import NavigationBar from '../sections/navigationbar';
import textTables from '../textobjects/texttables';

const services = [
    {
        id: '01',
        title: 'Energy Therapies',
        displayTitle: textTables.energyTherapies.title,
        subtitle: textTables.energyTherapies.subtitle,
        description: textTables.energyTherapies.description,
        sections: textTables.energyTherapies.sections
    },
    {
        id: '02',
        title: 'Regression Therapy',
        displayTitle: textTables.regressionTherapy.title,
        subtitle: textTables.regressionTherapy.subtitle,
        certification: textTables.regressionTherapy.certification,
        description: textTables.regressionTherapy.description,
        content: textTables.regressionTherapy.content,
        methods: textTables.regressionTherapy.methods,
        sections: textTables.regressionTherapy.sections
    },
    {
        id: '03',
        title: 'Hypnotherapy',
        displayTitle: textTables.hypnotherapy.title,
        subtitle: textTables.hypnotherapy.subtitle,
        certification: textTables.hypnotherapy.certification,
        description: textTables.hypnotherapy.description,
        content: textTables.hypnotherapy.content,
        applications: textTables.hypnotherapy.applications,
        sections: textTables.hypnotherapy.sections
    },
    {
        id: '04',
        title: 'Rejuvance Face',
        displayTitle: textTables.rejuvance.title,
        subtitle: textTables.rejuvance.subtitle,
        tagline: textTables.rejuvance.tagline,
        description: textTables.rejuvance.description,
        sections: textTables.rejuvance.sections
    },
    {
        id: '05',
        title: 'Mindfulness & Meditation',
        displayTitle: textTables.mindfulness.title,
        certification: textTables.mindfulness.certification,
        description: textTables.mindfulness.description,
        content: textTables.mindfulness.content,
        sections: textTables.mindfulness.sections
    }
];

const Services = () => {
    const [searchParams] = useSearchParams();
    const [selectedService, setSelectedService] = useState(services[0]);
    const [showContactForm, setShowContactForm] = useState(false);

    useEffect(() => {
        const serviceId = searchParams.get('service');
        if (serviceId) {
            const service = services.find(s => s.id === serviceId);
            if (service) {
                setSelectedService(service);
                // Scroll to top when service changes
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [searchParams]);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            setShowContactForm(true);
        }
    };

    const renderServiceContent = (service) => {
        return (
            <div className="space-y-6">
                {/* Title and Subtitle */}
                <div>
                    <h2 className="text-3xl font-medium mb-2">{service.displayTitle}</h2>
                    {service.subtitle && (
                        <h3 className="text-xl text-gray-600 mb-1">{service.subtitle}</h3>
                    )}
                    {service.certification && (
                        <p className="text-sm text-gray-500 mb-4">{service.certification}</p>
                    )}
                    {service.tagline && (
                        <p className="text-lg text-gray-600 italic mb-4">{service.tagline}</p>
                    )}
                </div>

                {/* Description */}
                {service.description && (
                    <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">{service.description}</h4>
                    </div>
                )}

                {/* Main Content */}
                {service.content && (
                    <p className="text-gray-700 leading-7">{service.content}</p>
                )}

                {/* Methods/Applications */}
                {service.methods && (
                    <div>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {service.methods.map((method, index) => (
                                <li key={index}>{method}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {service.applications && (
                    <div>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {service.applications.map((app, index) => (
                                <li key={index}>{app}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Sections */}
                {service.sections && service.sections.map((section, index) => (
                    <div key={index} className="space-y-3">
                        {section.heading && (
                            <h4 className="text-lg font-medium text-gray-800">{section.heading}</h4>
                        )}
                        {section.content && (
                            <p className="text-gray-700 leading-7">{section.content}</p>
                        )}
                        {section.points && (
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {section.points.map((point, pointIndex) => (
                                    <li key={pointIndex}>{point}</li>
                                ))}
                            </ul>
                        )}
                        {section.note && (
                            <p className="text-gray-600 italic text-sm">{section.note}</p>
                        )}
                        {section.quote && (
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                                <blockquote className="text-gray-700 italic">"{section.quote}"</blockquote>
                                {section.author && (
                                    <p className="text-sm text-gray-500 mt-2">— {section.author}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white">
            <NavigationBar />
            {/* Desktop Layout */}
            <div className="hidden md:flex w-full bg-secondary-500">
                <div className="w-2/5 bg-[#C5B9D6] min-h-screen p-12 pt-32">
                    <h2 className="text-4xl mb-12 ">Our Services</h2>
                    <div className="flex flex-col gap-8">
                        {services.map((service) => (
                            <motion.button
                                key={service.id}
                                onClick={() => setSelectedService(service)}
                                className={`text-left transition-all ${
                                    selectedService.id === service.id
                                        ? 'opacity-100'
                                        : 'opacity-50 hover:opacity-75'
                                }`}
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-xl">{service.id}</span>
                                        <div>
                                            <h3 className="text-xl font-medium">{service.title}</h3>
                                        </div>
                                    </div>
                                    <div className="h-[1px] bg-black w-full"></div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
                <div 
                    className="w-3/5 p-12 pt-32 overflow-y-auto h-screen"
                    onScroll={handleScroll}
                >
                    <motion.div
                        key={selectedService.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        {renderServiceContent(selectedService)}
                    </motion.div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden bg-secondary-500">
                <div className="pt-20 px-4">
                    <h2 className="text-3xl mb-8">Our Services</h2>
                </div>
                
                {/* Horizontal Scrollable Cards */}
                <div className="overflow-x-auto pb-6 hide-scrollbar">
                    <div className="inline-flex gap-4 px-4" style={{ width: 'max-content' }}>
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                className={`bg-[#8B5CF6] rounded-lg p-6 w-[75vw] flex-shrink-0 cursor-pointer transition-all relative ${
                                    selectedService.id === service.id
                                        ? 'opacity-100 scale-[1.02] shadow-lg'
                                        : 'opacity-80 hover:opacity-90 hover:bg-[#7C3AED]'
                                }`}
                                onClick={() => setSelectedService(service)}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center justify-center gap-3 h-full">
                                    <span className="text-sm text-white opacity-70">{service.id}</span>
                                    <h3 className="text-sm font-medium text-white">{service.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Selected Service Content */}
                <div className="px-4 py-8">
                    <motion.div
                        key={selectedService.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {renderServiceContent(selectedService)}
                    </motion.div>
                </div>
            </div>

            <div className="mt-12">
                <ContactForm />
            </div>

            <Footer />
        </div>
    );
};

export default Services;


