import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaDumbbell } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaInstagram />, url: 'https://www.instagram.com/coach_kather?igsh=MWo1MjNyeDRidG05bg==', label: 'Instagram' },
        { icon: <FaFacebook />, url: 'https://www.facebook.com/share/1G1NmrXtr7/', label: 'Facebook' },
        { icon: <FaYoutube />, url: 'https://youtube.com/@arokiyaabdul?si=bnbel2ZnkHvaM_iI', label: 'YouTube' },
    ];

    const quickLinks = [
        // { name: 'Gallery', href: '#gallery' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Transformations', href: '#transformations' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-dark-950 border-t border-dark-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FaDumbbell className="text-3xl text-primary-500" />
                            <h3 className="text-2xl font-bold text-white">Kather Maideen</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            ICREPS Certified Trainer dedicated to transforming lives through fitness, nutrition, and competition coaching.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-400">
                                <FaPhone className="text-primary-500 mt-1 flex-shrink-0" />
                                <a href="tel:9787037367" className="hover:text-primary-500 transition-colors">
                                    +91 9787037367
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <FaEnvelope className="text-primary-500 mt-1 flex-shrink-0" />
                                <a href="mailto:kather@example.com" className="hover:text-primary-500 transition-colors">
                                    kather@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                                <span>Royals Multi Gym</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-dark-800 text-center px-3">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        © {currentYear} . Developed by <span className="text-primary-500 font-bold">Gowtham</span>. All rights reserved.
                    </p>
                    <p className="text-xs sm:text-sm mt-2 text-primary-500">
                        Built with passion for fitness.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
