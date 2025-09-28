import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const NavigationBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isServicesPage = location.pathname === '/services';

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className={`relative md:absolute z-10 w-full px-4 md:px-12 py-3 md:py-4 ${isServicesPage ? 'bg-white' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center w-full">
                <motion.div 
                    className="flex items-center gap-2 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onClick={() => navigate('/')}
                >
                    <img src={logoImage} alt="logo123" className="w-6 h-6 rounded-full object-cover" />
                    <h1 className={`${isServicesPage ? 'text-black' : 'text-black'} text-base md:text-xl font-thin font-script`}>Inside Observation</h1>
                </motion.div>
                <motion.button 
                    className={`${
                        isServicesPage 
                            ? 'bg-primary-500 text-black border-black hover:bg-white hover:text-secondary-500' 
                            : 'bg-primary-500 text-black border-black hover:bg-white hover:text-secondary-500 hover:border-black'
                    } border-2 px-4 md:px-6 py-1.5 md:py-2 text-sm text-base md:font-semibold rounded transition-colors`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    onClick={() => navigate(isServicesPage ? '/' : '/services')}
                >
                    {isServicesPage ? 'Home' : 'Our Services'}
                </motion.button>
            </div>
        </nav>
    )
}

export default NavigationBar;