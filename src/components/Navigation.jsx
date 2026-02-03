import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDumbbell, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Transformations', href: '#transformations' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled
                ? 'bg-white/15 shadow-lg border-b border-white/10'
                : 'bg-white/5 border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FaDumbbell className="text-3xl text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
                        <div>
                            <h1 className="text-xl font-bold text-white">Kather Maideen</h1>
                            <p className="text-xs text-gray-400">Certified Trainer</p>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-300 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons - Desktop (Sticky on Scroll) */}
                    <div className="hidden md:flex items-center gap-3">
                        <AnimatePresence>
                            {scrolled && (
                                <>
                                    <motion.a
                                        href="tel:9787037367"
                                        className="flex items-center gap-2 bg-dark-800 hover:bg-dark-700 text-white px-4 py-2 rounded-lg transition-all duration-300 border border-dark-700 hover:border-primary-500"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaPhone />
                                        <span className="text-sm">Call</span>
                                    </motion.a>
                                    <motion.a
                                        href="https://wa.me/9787037367"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-green-600/20"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ delay: 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaWhatsapp />
                                        <span className="text-sm">WhatsApp</span>
                                    </motion.a>
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center h-full">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white text-2xl p-2 hover:text-primary-500 transition-colors flex items-center justify-center translate-y-[-2px]"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-dark-950/98 backdrop-blur-lg border-t border-dark-800"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <div className="pt-4 space-y-3">
                                <a
                                    href="tel:9787037367"
                                    className="flex items-center justify-center gap-2 bg-dark-800 text-white px-4 py-3 rounded-lg w-full"
                                >
                                    <FaPhone />
                                    <span>Call: 9787037367</span>
                                </a>
                                <a
                                    href="https://wa.me/9787037367"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg w-full"
                                >
                                    <FaWhatsapp />
                                    <span>WhatsApp Me</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
