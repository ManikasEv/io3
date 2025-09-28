import { motion } from 'framer-motion';

const Articles = () => {
    return (
        <motion.section 
            className="w-full py-16 bg-[#FAFAFA]"
            initial={{ opacity: 0, rotate: -2, y: 50 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <h1>Articles</h1>
        </motion.section>
    )
}

export default Articles;    