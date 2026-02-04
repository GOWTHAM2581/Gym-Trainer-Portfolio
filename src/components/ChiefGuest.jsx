import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { getImageUrl } from '../lib/supabase';

const ChiefGuest = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Generate image paths matching your Supabase filenames
        const filenames = [
            'chief_1.jpg',
            'chief_2.jpg',
            'chief_3.jpg',
            'chief_4.jpeg'
        ];

        const chiefGuestImages = filenames.map((name, i) => ({
            id: i + 1,
            url: getImageUrl('trainer-portfolio', `chief_guest/${name}`),
            alt: `Chief Guest Appearance ${i + 1}`
        }));
        setImages(chiefGuestImages);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="chief-guest" className="py-20 px-4 bg-dark-900">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaStar className="text-5xl text-primary-500" />
                        <h2 className="section-title mb-0">Chief Guest Appearances</h2>
                    </div>
                    <p className="text-gray-400 text-lg">Honored to be invited as chief guest at prestigious events</p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-dark-950">
                        <AnimatePresence mode="wait">
                            {images.length > 0 && (
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]?.url}
                                    alt={images[currentIndex]?.alt}
                                    className="w-full h-full object-cover cursor-pointer"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => setSelectedImage(images[currentIndex])}
                                />
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-900/80 hover:bg-primary-600 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm group"
                        >
                            <FaChevronLeft className="text-xl group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-900/80 hover:bg-primary-600 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm group"
                        >
                            <FaChevronRight className="text-xl group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-primary-500 w-8'
                                        : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-4 gap-4 mt-6">
                        {images.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className={`aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${index === currentIndex
                                    ? 'border-primary-500 scale-105'
                                    : 'border-dark-700 hover:border-primary-400'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
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

export default ChiefGuest;
