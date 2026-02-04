import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaBullseye, FaComment, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        goal: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const goals = [
        'Weight Loss',
        'Muscle Gain',
        'Competition Prep',
        'General Fitness',
        'Strength Training'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Save to Supabase
            const { data, error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        phone: formData.phone,
                        goal: formData.goal,
                        message: formData.message,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) {
                console.error('Supabase error:', error);
                setSubmitStatus('error');
            } else {
                setSubmitStatus('success');

                // Redirect to WhatsApp after a short delay
                setTimeout(() => {
                    const whatsappMessage = encodeURIComponent(
                        `Hi Kather Maideen,\nMy name is ${formData.name}.\nPhone: ${formData.phone}\nGoal: ${formData.goal}\nMessage: ${formData.message}`
                    );
                    window.open(`https://wa.me/9787037367?text=${whatsappMessage}`, '_blank');

                    // Reset form and status
                    setFormData({
                        name: '',
                        phone: '',
                        goal: '',
                        message: ''
                    });
                    setSubmitStatus(null);
                }, 1500);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-dark-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="text-gray-400 text-lg">Ready to transform your fitness journey? Let's talk!</p>
                </motion.div>

                <motion.div
                    className="bg-dark-900/80 backdrop-blur-sm border border-dark-800 rounded-2xl p-8 md:p-12 shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-300 font-semibold mb-2 flex items-center gap-2">
                                <FaUser className="text-primary-500" />
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-gray-300 font-semibold mb-2 flex items-center gap-2">
                                <FaPhone className="text-primary-500" />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                pattern="[0-9]{10}"
                                className="input-field"
                                placeholder="Enter your 10-digit phone number"
                            />
                        </div>

                        {/* Goal */}
                        <div>
                            <label className="block text-gray-300 font-semibold mb-2 flex items-center gap-2">
                                <FaBullseye className="text-primary-500" />
                                Fitness Goal
                            </label>
                            <select
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                required
                                className="input-field"
                            >
                                <option value="">Select your goal</option>
                                {goals.map((goal) => (
                                    <option key={goal} value={goal}>
                                        {goal}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-gray-300 font-semibold mb-2 flex items-center gap-2">
                                <FaComment className="text-primary-500" />
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="input-field resize-none"
                                placeholder="Tell me about your fitness goals and any specific requirements..."
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn-primary flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    <span>Submit & Continue to WhatsApp</span>
                                </>
                            )}
                        </motion.button>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg flex items-center gap-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>Success! Redirecting to WhatsApp...</span>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Error submitting form. Please try again or contact directly via WhatsApp.
                            </motion.div>
                        )}
                    </form>

                    {/* Direct Contact Info */}
                    <div className="mt-8 pt-8 border-t border-dark-700">
                        <p className="text-center text-gray-400 mb-4">Or reach out directly:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:9787037367"
                                className="flex items-center justify-center gap-2 bg-dark-800 hover:bg-dark-700 text-white px-6 py-3 rounded-lg transition-all duration-300 border border-dark-700 hover:border-primary-500"
                            >
                                <FaPhone />
                                <span>9787037367</span>
                            </a>
                            <a
                                href="https://wa.me/9787037367"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
