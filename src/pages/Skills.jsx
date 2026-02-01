import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Users, Lightbulb, MessageSquare, Clock, Award } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: "React", level: 90, color: "bg-blue-400" },
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "MongoDB", level: 80, color: "bg-green-600" },
        { name: "Express", level: 85, color: "bg-gray-400" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-400" },
        { name: "Three.js", level: 70, color: "bg-white" },
    ];

    const softSkills = [
        { icon: <MessageSquare />, name: "Communication" },
        { icon: <Users />, name: "Teamwork" },
        { icon: <Lightbulb />, name: "Problem Solving" },
        { icon: <Clock />, name: "Time Management" },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-24 px-6 pb-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-slate-900 to-indigo-900/20 z-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* --- Header --- */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Skills</span></h1>
                    <p className="text-gray-400">My coding arsenal and professional capabilities.</p>
                </div>

                {/* --- Main Stack --- */}
                <div className="space-y-8 mb-24">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-lg">{skill.name}</span>
                                <span className="text-gray-400">{skill.level}%</span>
                            </div>
                            {/* 3D Progress Bar Container */}
                            <div className="h-6 bg-slate-800 rounded-full shadow-inner border border-slate-700 overflow-hidden relative perspective-[500px]">
                                {/* Fill */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className={`h-full ${skill.color} relative shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
                                >
                                    <div className="absolute top-0 right-0 w-full h-1/2 bg-white/30 rounded-t-full" />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Tools Badge Cloud --- */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                        <Terminal className="text-orange-400" /> Tools & Workflow
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {['Git', 'Docker', 'AWS', 'Figma', 'Redux', 'TypeScript', 'VS Code', 'Postman', 'Vercel', 'Netlify'].map((badge, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.1, rotateZ: 5, rotateX: 10 }}
                                className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-semibold shadow-lg cursor-default hover:bg-white/10 transition-colors"
                            >
                                {badge}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- Soft Skills --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {softSkills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center flex flex-col items-center gap-3"
                        >
                            <div className="text-purple-400 p-3 bg-purple-500/10 rounded-full">
                                {skill.icon}
                            </div>
                            <h4 className="font-bold">{skill.name}</h4>
                        </motion.div>
                    ))}
                </div>



            </div>

            {/* --- Learning Roadmap --- */}
            <div className="mt-20 text-center p-8 bg-slate-800/30 rounded-3xl border border-slate-700/50 mb-20">
                <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Always Evolving</h3>
                <p className="text-gray-400 max-w-lg mx-auto mb-8">
                    Technology never stands still, and neither do I. Here is what I am currently exploring.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex-1">
                        <h4 className="text-blue-400 font-bold mb-2">Current Focus</h4>
                        <p className="text-white font-bold text-lg">Rust & WebAssembly</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex-1 opacity-70">
                        <h4 className="text-purple-400 font-bold mb-2">Up Next</h4>
                        <p className="text-white font-bold text-lg">AI Integration (LLMs)</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex-1 opacity-50">
                        <h4 className="text-green-400 font-bold mb-2">Future Goal</h4>
                        <p className="text-white font-bold text-lg">Blockchain Arch.</p>
                    </div>
                </div>
            </div>

            {/* --- Certifications --- */}
            <div className="mb-20">
                <h2 className="text-3xl font-black text-center mb-12">Certifications & <span className="text-yellow-500">Awards</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                        <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-500">
                            <Award className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">AWS Certified Developer</h4>
                            <p className="text-gray-400 text-sm">Amazon Web Services - 2024</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                        <div className="p-3 bg-blue-500/20 rounded-full text-blue-500">
                            <Award className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Meta Frontend Professional</h4>
                            <p className="text-gray-400 text-sm">Coursera - 2023</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;
