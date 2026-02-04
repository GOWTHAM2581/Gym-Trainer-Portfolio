import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const handleCall = () => {
        window.location.href = 'tel:9787037367';
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hi Kather Maideen, I would like to know more about your training programs.');
        window.open(`https://wa.me/9787037367?text=${message}`, '_blank');
    };

    const socialLinks = [
        { icon: <FaInstagram />, url: 'https://www.instagram.com/coach_kather?igsh=MWo1MjNyeDRidG05bg==', label: 'Instagram' },
        { icon: <FaFacebook />, url: 'https://www.facebook.com/share/1G1NmrXtr7/', label: 'Facebook' },
        { icon: <FaYoutube />, url: 'https://youtube.com/@arokiyaabdul?si=bnbel2ZnkHvaM_iI', label: 'YouTube' },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            // style={{ backgroundImage: "url('/hero-bg.svg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 lg:py-20 relative z-10 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center w-full">

                    {/* Right side (Image) - On top on mobile */}
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center items-end relative h-[50vh] sm:h-[60vh] lg:h-[700px] w-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="relative w-full h-full flex justify-center items-end group/img">
                            {/* Blend Gradients - Seamless transition */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent z-20 pointer-events-none lg:bg-gradient-to-t lg:from-dark-950 lg:via-transparent lg:to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-transparent z-20 hidden lg:block pointer-events-none"></div>

                            <motion.img
                                src="/hero.svg"
                                alt="Trainer Kather Maideen"
                                className="relative z-10 w-full h-full object-contain object-top"
                                loading="eager"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </motion.div>

                    {/* Left side (Content) - Overlays at bottom on mobile */}
                    <motion.div
                        className="text-center lg:text-left order-2 lg:order-1 relative lg:static mt-[-60px] sm:mt-[-100px] lg:mt-0 pb-12 lg:pb-0 z-30 px-6 sm:px-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Name */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-2 lg:mb-4 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent leading-[1.1] sm:leading-tight"
                        >
                            KATHER MAIDEEN
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-base sm:text-lg md:text-2xl text-gray-300 font-semibold mb-3 sm:mb-4 lg:mb-6 px-4 sm:px-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1 sm:gap-0"
                        >
                            <span>ICREPS Certified Trainer</span>
                            <span className="mx-2 hidden sm:inline">|</span>
                            <span>Royals Multi Gym</span>
                        </motion.p>

                        {/* About Text */}
                        <motion.p
                            className="text-gray-400 text-sm md:text-xl mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Professional fitness trainer specializing in elite physique transformations
                            <span className="hidden sm:inline"> and competition coaching for serious athletes</span>.
                        </motion.p>

                        {/* Typing Animation */}
                        <div className="text-xl md:text-3xl font-bold text-primary-500 mb-8 lg:mb-10 h-8 lg:h-10 flex justify-center lg:justify-start">
                            <Typewriter
                                words={[
                                    'Bodybuilder',
                                    'Powerlifter',
                                    'Nutritionist',
                                    'Personal Trainer',
                                    'Competition Coaching'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </div>

                        {/* Social Icons - Mobile Only */}
                        <div className="flex lg:hidden justify-center gap-8 mb-8 mt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-gray-400 hover:text-primary-500 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center px-4 sm:px-0">
                            <motion.button
                                onClick={handleWhatsApp}
                                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-4 lg:py-5 rounded-2xl shadow-2xl hover:shadow-green-500/40 transition-all duration-300 group w-full lg:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                                <span className="text-lg lg:text-xl">WhatsApp Me</span>
                            </motion.button>

                            <motion.button
                                onClick={handleCall}
                                className="flex items-center justify-center gap-3 bg-dark-800/80 hover:bg-dark-700 text-gray-200 border border-gray-700 hover:border-gray-500 font-bold px-8 py-4 rounded-2xl transition-all duration-300 group w-full lg:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPhone className="text-lg group-hover:rotate-12 transition-transform" />
                                <span className="text-lg">Call Trainer</span>
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
