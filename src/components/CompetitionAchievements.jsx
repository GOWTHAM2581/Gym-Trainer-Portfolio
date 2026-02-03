import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaTrophy } from 'react-icons/fa';
import { getImageUrl } from '../lib/supabase';

const CompetitionAchievements = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Generate image paths matching your Supabase filenames
        const filenames = [
            'contest_2.jpg',
            'contest_3.jpg',
            'contest_4.jpg',
            'contest_5.jpg',
            'contest_6.jpg',
            //'contest_7.jpg'
            'contest_1.jpg',
        ];

        const competitionImages = filenames.map((name, i) => ({
            id: i + 1,
            url: getImageUrl('trainer-portfolio', `competition/${name}`),
            alt: `Competition Achievement ${i + 1}`
        }));
        setImages(competitionImages);
    }, []);

    return (
        <section id="achievements" className="py-20 px-4 bg-dark-950">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaTrophy className="text-5xl text-primary-500" />
                        <h2 className="section-title mb-0">Competition Highlights</h2>
                    </div>
                    <p className="text-gray-400 text-lg">Achievements and victories on the competitive stage</p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="relative group cursor-pointer overflow-hidden rounded-xl bg-dark-900 border border-dark-800 hover:border-primary-500 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 text-primary-400">
                                        <FaTrophy />
                                        <span className="font-semibold">View Achievement</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
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

export default CompetitionAchievements;
