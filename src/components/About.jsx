import { motion } from 'framer-motion';
import { FaUserCheck, FaAward, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image/Stats side */}
                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-dark-800 p-8 rounded-3xl border border-primary-500/20 flex flex-col items-center text-center">
                            <FaAward className="text-5xl text-primary-500 mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-2">ICREPS</h3>
                            <p className="text-gray-400">Certified International Trainer</p>
                        </div>
                        <div className="bg-dark-800 p-8 rounded-3xl border border-primary-500/20 flex flex-col items-center text-center">
                            <FaUserCheck className="text-5xl text-primary-500 mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                            <p className="text-gray-400">Years of Professional Experience</p>
                        </div>
                        <div className="bg-dark-800 p-8 rounded-3xl border border-primary-500/20 flex flex-col items-center text-center col-span-2">
                            <FaChalkboardTeacher className="text-5xl text-primary-500 mb-4" />
                            <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
                            <p className="text-gray-400">Lives Transformed Through Fitness</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:pl-8 text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 lg:mb-8 text-gradient text-left">About Kather Maideen</h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Kather Maideen is a professional fitness trainer and competition coach with a deep focus
                                on bodybuilding, powerlifting, and elite physique transformations.
                            </p>
                            <p>
                                With over a decade of experience in the fitness industry, he helps athletes and fitness
                                enthusiasts reach their peak potential through science-backed training protocols,
                                personalized nutrition plans, and unwavering motivation.
                            </p>
                            <p>
                                Whether you're looking to step on stage or just transform your life, Kather provides
                                the expertise and accountability needed to succeed. He believes that fitness is more
                                than just lifting weights—it's about building discipline that carries into every area of life.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[120px] rounded-full"></div>
        </section>
    );
};

export default About;
