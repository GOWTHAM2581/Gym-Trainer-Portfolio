import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMedal } from 'react-icons/fa';
import { getImageUrl } from '../lib/supabase';

const CompetitionGuiding = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Generate image paths matching your Supabase filenames
        const filenames = [
            'comp_4.jpg',
            'comp_2.jpg',
            'comp_3.jpg',
            'comp_1.jpg',
        ];

        const guidingImages = filenames.map((name, i) => ({
            id: i + 1,
            url: getImageUrl('trainer-portfolio', `Competition_Guiding/${name}`),
            alt: `Competition Coaching ${i + 1}`
        }));
        setImages(guidingImages);
    }, []);

    return (
        <section id="competition-guiding" className="py-20 px-4 bg-dark-900">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaMedal className="text-5xl text-primary-500" />
                        <h2 className="section-title mb-0">Athletes Coached for Competition</h2>
                    </div>
                    <p className="text-gray-400 text-lg">Guiding champions to victory on the competitive stage</p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="relative group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-dark-950 border-2 border-dark-800 hover:border-primary-500 transition-all duration-300">
                                {/* Image */}
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Gradient Overlay - Darker at bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content - Positioned Bottom-Left */}
                                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 text-left">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                                                <FaMedal className="text-xl lg:text-2xl text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg lg:text-xl font-bold text-white leading-tight">Competition Prep</h3>
                                                <p className="text-primary-400 text-xs lg:text-sm font-semibold">Professional Coaching</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-[90%]">
                                            Expert guidance for bodybuilding and powerlifting competitions
                                        </p>
                                    </div>
                                </div>

                                {/* Corner Badge */}
                                <div className="absolute top-4 right-4 bg-primary-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl">
                                    Coach
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 -z-10" />
                        </motion.div>
                    ))}
                </div>

                {/* Info Cards */}
                <motion.div
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        {
                            title: 'Personalized Plans',
                            description: 'Custom training and nutrition tailored to your competition goals',
                            icon: '📋'
                        },
                        {
                            title: 'Posing Practice',
                            description: 'Perfect your stage presence and mandatory poses',
                            icon: '💪'
                        },
                        {
                            title: 'Peak Week Prep',
                            description: 'Strategic planning for optimal competition day condition',
                            icon: '🎯'
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="bg-dark-950 border border-dark-800 rounded-xl p-6 hover:border-primary-500 transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-gray-400">{card.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-4 right-4 text-white text-3xl hover:text-primary-500 transition-colors z-10"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTimes />
                        </motion.button>
                        <motion.img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CompetitionGuiding;
