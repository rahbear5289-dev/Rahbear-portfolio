import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Coffee, Rocket, BookOpen, Award, Heart } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Code2 className="w-8 h-8" />, title: "Development", desc: "Clean, modern code patterns" },
        { icon: <Rocket className="w-8 h-8" />, title: "Performance", desc: "Optimized for speed" },
        { icon: <Coffee className="w-8 h-8" />, title: "Dedication", desc: "Passionate about pixels" },
    ];

    const timeline = [
        { year: "2023 - Present", title: "Senior Full Stack Dev", company: "Tech Solutions Inc.", desc: "Leading a team of 5 developers building scalable SaaS products." },
        { year: "2021 - 2023", title: "Frontend Specialist", company: "Creative Agency", desc: "Built award-winning websites with heavy animation and interactivity." },
        { year: "2019 - 2021", title: "Junior Developer", company: "StartUp Hub", desc: "Started my journey with React and Node.js ecosystems." },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6">

                {/* --- Hero Section --- */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
                    {/* Image/3D Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative z-10 w-full aspect-square max-w-md mx-auto bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="w-full h-full bg-slate-800 rounded-3xl overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
                                    alt="Profile"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay" />
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500 rounded-2xl blur-xl opacity-50 z-0"
                        />
                    </motion.div>

                    {/* Content Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-1/2 space-y-8"
                    >
                        <h1 className="text-5xl font-black">About <span className="text-blue-500">Me</span></h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am a passionate Full Stack Developer with a knack for creating immersive digital experiences.
                            My journey started with a simple "Hello World" and has evolved into building complex, scalable applications.
                            I believe in the power of clean code and user-centric design.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {cards.map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-3 cursor-pointer"
                                >
                                    <div className="text-blue-400">{card.icon}</div>
                                    <h3 className="font-bold text-lg">{card.title}</h3>
                                    <p className="text-sm text-gray-400">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* --- Timeline Section --- */}
                <div className="mb-32">
                    <h2 className="text-4xl font-black text-center mb-16">My <span className="text-purple-500">Journey</span></h2>
                    <div className="space-y-8 max-w-4xl mx-auto">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row gap-6 bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors"
                            >
                                <div className="md:w-1/4">
                                    <span className="text-blue-400 font-bold text-xl">{item.year}</span>
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <h4 className="text-lg text-purple-400 mb-4">{item.company}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- Personal Philosophy --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-12 rounded-3xl border border-white/5">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Heart className="text-red-500" />
                            What Drives Me
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            I don't just write code; I solve problems. My philosophy is that technology should be invisible—it should just work, enhancing the human experience without getting in the way.
                            Whether I'm refactoring a database schema or tweaking a bezier curve animation, my goal is always excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 text-center">
                            <BookOpen className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                            <h4 className="font-bold">Continuous Learning</h4>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 text-center">
                            <Award className="w-8 h-8 text-green-500 mx-auto mb-3" />
                            <h4 className="font-bold">Best Practices</h4>
                        </div>
                    </div>
                </div>

            </div>

            {/* --- Hobbies & Interests --- */}
            <div className="mt-32">
                <h2 className="text-4xl font-black text-center mb-16">Beyond the <span className="text-blue-500">Code</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { icon: "🎮", title: "Gaming", desc: "RPG & Strategy games" },
                        { icon: "📸", title: "Photography", desc: "Capturing urban life" },
                        { icon: "📚", title: "Reading", desc: "Sci-Fi & Tech blogs" },
                        { icon: "✈️", title: "Travel", desc: "Exploring new cultures" }
                    ].map((hobby, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-center hover:border-blue-500/50 transition-colors"
                        >
                            <div className="text-4xl mb-4">{hobby.icon}</div>
                            <h3 className="font-bold text-xl mb-2">{hobby.title}</h3>
                            <p className="text-gray-400 text-sm">{hobby.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- A Day in the Life --- */}
            <div className="mt-32 pb-20">
                <h2 className="text-4xl font-black text-center mb-16">Day in the <span className="text-green-500">Life</span></h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {[
                        { time: "08:00 AM", activity: "Coffee & Code Review", color: "border-yellow-500" },
                        { time: "10:00 AM", activity: "Deep Work Block (Feature Dev)", color: "border-blue-500" },
                        { time: "01:00 PM", activity: "Team Sync & Planning", color: "border-purple-500" },
                        { time: "03:00 PM", activity: "Learning & Research", color: "border-green-500" },
                        { time: "06:00 PM", activity: "Gym & Personal Time", color: "border-red-500" }
                    ].map((slot, idx) => (
                        <div key={idx} className={`flex items-center gap-6 p-6 bg-slate-900 rounded-xl border-l-4 ${slot.color} shadow-lg`}>
                            <div className="font-mono text-gray-400 w-24 flex-shrink-0">{slot.time}</div>
                            <div className="font-bold text-lg">{slot.activity}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default About;
