import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaFire } from 'react-icons/fa';
import { getImageUrl } from '../lib/supabase';

const ClientTransformations = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const filenames = [
            'client_1.jpg', 'client_2.jpg', 'client_3.jpg', 'client_4.jpg',
            'client_5.jpg', 'client_6.jpg', 'client_7.jpg', 'client_8.jpg',
            'client_9.jpg', 'client_10.jpg', 'client_11.jpg'
        ];

        const transformationImages = filenames.map((name, i) => ({
            id: i + 1,
            url: getImageUrl('trainer-portfolio', `transformation/${name}`),
            alt: `Client Transformation ${i + 1}`
        }));
        // Triple the images to ensure no gaps during the infinite scroll
        setImages([...transformationImages, ...transformationImages, ...transformationImages]);
    }, []);

    return (
        <section id="transformations" className="py-20 bg-dark-950 overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaFire className="text-5xl text-primary-500" />
                        <h2 className="section-title mb-0">Client Transformations</h2>
                    </div>
                    <p className="text-gray-400 text-lg">Real results from dedicated clients - Infinite progress</p>
                </motion.div>
            </div>

            {/* Horizontal Infinite Scroll Gallery */}
            <div className="relative group w-full overflow-hidden no-scrollbar py-10">
                <div className="animate-scroll-infinite pause-on-hover">
                    {images.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className="flex-shrink-0 w-[280px] md:w-[350px] px-4"
                        >
                            <motion.div
                                className="relative overflow-hidden rounded-2xl bg-dark-900 border-2 border-dark-800 hover:border-primary-500 transition-all duration-300 cursor-pointer group/card h-[400px] md:h-[500px]"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-primary-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-2">
                                    <FaFire />
                                    <span>Transformation</span>
                                </div>

                                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover/card:translate-y-0">
                                    <p className="font-bold text-lg">Click to Enlarge</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Gradient Shadows for smooth entry/exit */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-6 right-6 text-white text-4xl hover:text-primary-500 transition-colors z-[110]"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTimes />
                        </motion.button>
                        <motion.img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-primary-500/20"
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

export default ClientTransformations;

