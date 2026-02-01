import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Linkedin, Github, Twitter, Facebook, HelpCircle } from 'lucide-react';

const Contact = () => {
    const [faqOpen, setFaqOpen] = useState(null);

    const faqs = [
        { q: "What is your typical turnaround time?", a: "For standard websites, it takes about 1-2 weeks. Complex apps may take 4+ weeks." },
        { q: "Do you offer maintenance?", a: "Yes! I offer monthly maintenance packages to keep your site secure and updated." },
        { q: "What is your pricing model?", a: "I usually charge per project, but I am open to hourly rates for consulting." },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-28 px-6 pb-20 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 mb-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/3 space-y-8"
                    >
                        <h1 className="text-5xl font-black">Get in <span className="text-blue-500">Touch</span></h1>
                        <p className="text-gray-400 leading-relaxed">
                            Have a project in mind? Let's build something amazing together.
                            I am currently **available** for freelance work.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Phone</h3>
                                    <p className="text-gray-400">+1 234 567 890</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p className="text-gray-400">hello@rahbear.dev</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Location</h3>
                                    <p className="text-gray-400">New York, USA</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="pt-6 border-t border-slate-800">
                            <h3 className="font-bold mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                <div className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"><Linkedin className="w-5 h-5" /></div>
                                <div className="p-3 bg-slate-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"><Github className="w-5 h-5" /></div>
                                <div className="p-3 bg-slate-800 rounded-lg hover:bg-blue-400 transition-colors cursor-pointer"><Twitter className="w-5 h-5" /></div>
                                <div className="p-3 bg-slate-800 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"><Facebook className="w-5 h-5" /></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-2/3"
                    >
                        <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600 resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* --- FAQ Section --- */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-center mb-8 flex items-center justify-center gap-2">
                        <HelpCircle className="text-purple-400" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                            >
                                <div className="p-6 flex justify-between items-center bg-slate-800 hover:bg-slate-700 transition-colors">
                                    <h3 className="font-bold text-lg">{item.q}</h3>
                                    <span className="text-2xl">{faqOpen === idx ? '-' : '+'}</span>
                                </div>
                                {faqOpen === idx && (
                                    <div className="p-6 text-gray-300 border-t border-slate-700 bg-slate-900/50">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                {/* --- Location & Availability --- */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Fake Map Visual */}
                    <div className="rounded-3xl overflow-hidden h-80 relative border border-slate-700 bg-slate-800 group">
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                            alt="Map"
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-slate-900/90 p-4 rounded-xl flex items-center gap-3 border border-white/10 shadow-2xl backdrop-blur-md">
                                <div className="p-2 bg-red-500 rounded-full animate-pulse">
                                    <MapPin className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Based in New York</h4>
                                    <p className="text-xs text-gray-400">Available for Remote Work</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Availability Calendar (Static) */}
                    <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                            Availability
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                                <span className="text-gray-300">Current Status</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Accepting New Projects
                                </span>
                            </div>
                            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-400 mt-4">
                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (<div key={i}>{d}</div>))}
                                {Array.from({ length: 31 }).map((_, i) => (
                                    <div key={i} className={`p-2 rounded-lg ${i > 20 ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/30'}`}>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-center text-gray-500 mt-4">highlighted dates are open for booking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;