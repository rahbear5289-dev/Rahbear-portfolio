import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Database, Globe, Briefcase, Star, User } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px]" />

            {/* --- Hero Section --- */}
            <header className="max-w-7xl mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-between z-10 relative">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold"
                    >
                        Full Stack Developer & UI/UX Designer
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital</span> <br />
                        Experiences
                    </h1>

                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        I craft stunning, high-performance web applications with modern technologies.
                        From interactive frontends to robust backends, I bring ideas to life.
                    </p>

                    <div className="flex space-x-4">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 shadow-lg hover:shadow-blue-500/50 transition-all"
                            >
                                <span>Let's Talk</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                        <Link to="/about">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                View Work
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* 3D Graphic Area */}
                <div className="md:w-1/2 relative h-[500px] flex items-center justify-center mt-12 md:mt-0 perspective-[1000px]">
                    <motion.div
                        animate={{
                            rotateY: [0, 10, 0, -10, 0],
                            rotateX: [0, 5, 0, -5, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center transform preserve-3d"
                    >
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl translate-z-10" />
                        <Code className="w-32 h-32 text-white drop-shadow-lg z-20" />

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="absolute -top-12 -right-12 p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl"
                        >
                            <Database className="text-green-400 w-8 h-8" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            className="absolute -bottom-8 -left-12 p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl"
                        >
                            <Server className="text-orange-400 w-8 h-8" />
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                            className="absolute top-1/2 -right-20 p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl"
                        >
                            <Globe className="text-cyan-400 w-8 h-8" />
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* --- About Preview Section --- */}
            <section className="py-24 bg-slate-900 relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-6">Who I <span className="text-blue-500">Am</span></h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            I am a passionate developer who loves to solve complex problems with simple, elegant solutions.
                            My journey consists of building scalable backends, intuitive frontends, and everything in between.
                        </p>
                        <Link to="/about" className="text-blue-400 font-bold hover:underline">Read More about me &rarr;</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                            <h3 className="text-3xl font-bold text-white mb-2">3+</h3>
                            <p className="text-gray-400">Years Exp.</p>
                        </div>
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                            <p className="text-gray-400">Projects</p>
                        </div>
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                            <h3 className="text-3xl font-bold text-white mb-2">20k</h3>
                            <p className="text-gray-400">Lines of Code</p>
                        </div>
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                            <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                            <p className="text-gray-400">Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Featured Projects Preview --- */}
            <section className="py-24 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Featured <span className="text-purple-500">Work</span></h2>
                        <p className="text-gray-400">Some of my recent experiments and productions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -10 }}
                                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-colors group"
                            >
                                <div className="h-48 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                                    <Briefcase className="w-12 h-12 text-white/20 group-hover:text-white/50 transition-colors" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-3">Project Title {item}</h3>
                                    <p className="text-gray-400 mb-4">A brief description of what this project does and the tech stack used.</p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">React</span>
                                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Node</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services">
                            <button className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-semibold">View All Services</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10" />
                <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <h2 className="text-5xl font-black mb-8">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-300 mb-10">Let's collaborate and build something that matters.</p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
                        >
                            Get in Touch
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* --- Testimonials Section --- */}
            <section className="py-24 bg-slate-900 relative">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-black text-center mb-16">Client <span className="text-blue-500">Stories</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Johnson", role: "CEO, TechStart", text: "Rahbear transformed our outdated site into a modern masterpiece. Traffic increased by 200%!" },
                            { name: "Mike Chen", role: "Founder, DevHub", text: "The attention to detail and 3D animations are simply stunning. Highly recommended." },
                            { name: "Emily Davis", role: "Product Manager", text: "Professional, timely, and incredibly skilled. The backend architecture is rock solid." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 relative"
                            >
                                <div className="text-4xl text-blue-500 font-serif absolute top-4 right-6 opacity-30">"</div>
                                <p className="text-gray-300 mb-6 italic">{item.text}</p>
                                <div>
                                    <h4 className="font-bold text-white">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Newsletter Section --- */}
            <section className="py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-black mb-4">Stay Updated</h2>
                    <p className="text-gray-400 mb-8">Get the latest tech news, tips, and project updates directly to your inbox. No spam, just value.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl w-full md:w-96 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold transition-colors">Subscribe</button>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center text-gray-500">
                <div className="flex justify-center space-x-6 mb-8">
                    <Globe className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                    <Briefcase className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                    <User className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                </div>
                <p>&copy; 2026 RahBear Portfolio. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default Home;
