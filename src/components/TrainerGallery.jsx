import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { getImageUrl } from '../lib/supabase';

const TrainerGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Generate image paths matching the specific filenames in your Supabase
        const filenames = [
            'Trainer1.jpg',
            'Trainer_2.jpg',
            'Trainer_3.jpg',
            'Trainer_4.jpg',
            'Trainer_5.jpg',
            'Trainer_6.jpg',
            //'Trainer_7.jpg'
        ];

        const trainerImages = filenames.map((name, i) => ({
            id: i + 1,
            url: getImageUrl('trainer-portfolio', `Trainer_pic/${name}`),
            alt: `Trainer Photo ${i + 1}`
        }));
        setImages(trainerImages);
    }, []);

    return (
        <section id="gallery" className="py-20 px-4 bg-dark-900">
            <div className="container mx-auto max-w-7xl">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Trainer Gallery
                </motion.h2>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

export default TrainerGallery;
