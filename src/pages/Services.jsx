import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Smartphone, Database, Layout, Shield, Search, Zap, CheckCircle } from 'lucide-react';
import { useRazorpay } from 'react-razorpay';
import { toast } from 'react-toastify';

const Services = () => {
    const { Razorpay, isLoading } = useRazorpay();

    const handlePayment = (plan) => {
        // Check for Razorpay constructor from hook or global window object
        const RazorpayConstructor = Razorpay || window.Razorpay;

        if (!RazorpayConstructor) {
            // Only show loading if we genuinely don't have the SDK yet
            if (isLoading) {
                toast.info("Payment system is loading, please wait...");
                return;
            }
            toast.error("Failed to load payment system. Please refresh the page.");
            return;
        }

        const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY || "rzp_test_1234567890";

        // BLOCKING: Check for dummy key
        if (razorpayKey === "rzp_test_1234567890") {
            toast.error("CONFIGURATION ERROR: You are using a dummy Razorpay Key.");
            toast.warn("Please update .env with your real Key ID from Razorpay Dashboard.", { autoClose: 8000 });
            return;
        }

        console.log("Initializing Razorpay with Key:", razorpayKey);

        const options = {
            key: razorpayKey,
            amount: Math.round(plan.conversionPrice * 100), // Ensure integer
            currency: "INR",
            name: "Rahbear Portfolio",
            description: `Payment for ${plan.title} Plan`,
            handler: function (response) {
                toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: "Rahbear User",
                email: "user@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#a855f7",
            },
            modal: {
                ondismiss: function () {
                    toast.info("Payment cancelled.");
                }
            }
        };

        try {
            const rzp1 = new RazorpayConstructor(options);
            rzp1.on("payment.failed", function (response) {
                console.error("Payment Failed Details:", response.error);
                toast.error(`Payment Failed: ${response.error.description || "Something went wrong"}`);
            });
            rzp1.open();
        } catch (err) {
            console.error("Razorpay Modal Error:", err);
            toast.error("Failed to open payment modal. Please check your network connection.");
        }
    };
    const services = [
        { icon: <Layout className="w-10 h-10" />, title: "Frontend Development", desc: "Pixel-perfect, responsive websites using React & Tailwind." },
        { icon: <Server className="w-10 h-10" />, title: "Backend Systems", desc: "Robust APIs and server-side logic with Node.js & Express." },
        { icon: <Database className="w-10 h-10" />, title: "Database Design", desc: "Scalable data architecture with MongoDB." },
        { icon: <Smartphone className="w-10 h-10" />, title: "Responsive Design", desc: "Seamless experience across all devices and screen sizes." },
        { icon: <Shield className="w-10 h-10" />, title: "Authentication", desc: "Secure user login and data protection mechanisms." },
        { icon: <Globe className="w-10 h-10" />, title: "SEO Optimization", desc: "Ranking your website higher in search results." },
    ];

    const process = [
        { step: "01", title: "Discovery", desc: "Understanding your vision, goals, and target audience." },
        { step: "02", title: "Design", desc: "Creating wireframes and high-fidelity mockups for approval." },
        { step: "03", title: "Development", desc: "Writing clean, efficient code and integrating systems." },
        { step: "04", title: "Launch", desc: "Deploying to production and ensuring everything runs smoothly." },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-28 pb-20 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl font-black mb-4">My <span className="text-purple-500">Services</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Transforming ideas into reality with a comprehensive suite of digital services.
                    </p>
                </motion.div>

                {/* --- Services Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, rotateY: 10, z: 50, transition: { duration: 0.2 } }}
                            className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-purple-500/10 transition-all group perspective-[1000px]"
                        >
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* --- Workflow Section --- */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">How I <span className="text-green-400">Work</span></h2>
                        <p className="text-gray-400">A streamlined process to ensure project success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((item, idx) => (
                            <div key={idx} className="relative p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center hover:border-green-500/50 transition-colors">
                                <div className="text-6xl font-black text-slate-800 absolute top-2 right-4 select-none">{item.step}</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- FAQ / Why Me --- */}
                <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 rounded-3xl p-12 border border-white/10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <Zap className="w-16 h-16 text-yellow-400 mb-6" />
                        <h2 className="text-3xl font-black mb-4">Why Choose Me?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            It's not just about writing code. It's about writing the <b>right</b> code. I prioritize performance, accessibility, and scalability in every project.
                            Plus, communication is key—you'll be updated every step of the way.
                        </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        {["Clean & Modern Code", "On-Time Delivery", "Post-Launch Support", "SEO Friendly Structure"].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3 bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <CheckCircle className="text-green-500" />
                                <span className="font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* --- Pricing Packages --- */}
            <div className="mb-32 max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-black text-center mb-16">Flexible <span className="text-purple-500">Pricing</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Starter", price: "$999", conversionPrice: 80000, features: ["5 Page Website", "Mobile Responsive", "Contact Form", "Basic SEO"], color: "border-blue-500" },
                        { title: "Business", price: "$2499", conversionPrice: 200000, features: ["10 Page Website", "CMS Integration", "Analytics Setup", "Speed Optimization", "1 Month Support"], color: "border-purple-500", popular: true },
                        { title: "Enterprise", price: "Custom", conversionPrice: 500000, features: ["Full Web App", "Database Integration", "User Auth", "Custom API", "Priority Support"], color: "border-green-500" }
                    ].map((plan, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`bg-slate-800/50 p-8 rounded-3xl border ${plan.popular ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]' : 'border-slate-700'} relative`}
                        >
                            {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>}
                            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                            <div className="text-4xl font-black mb-6">{plan.price}</div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-400" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handlePayment(plan)}
                                className={`w-full py-4 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-purple-600 hover:bg-purple-500' : 'bg-slate-700 hover:bg-slate-600'}`}>
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- Case Studies --- */}
            <div className="mb-20">
                <h2 className="text-4xl font-black text-center mb-16">Recent <span className="text-indigo-400">Success</span> Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-slate-800 rounded-3xl overflow-hidden group cursor-pointer border border-slate-700 hover:border-blue-500 transition-colors">
                        <div className="h-64 bg-blue-900/30 flex items-center justify-center">
                            <Layout className="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">E-Commerce Redesign</h3>
                            <p className="text-gray-400 mb-4">Increased conversion rate by 45% through intuitive UX and faster checkout flows.</p>
                            <span className="text-blue-400 font-bold flex items-center gap-2">View Case Study <Globe className="w-4 h-4" /></span>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-3xl overflow-hidden group cursor-pointer border border-slate-700 hover:border-purple-500 transition-colors">
                        <div className="h-64 bg-purple-900/30 flex items-center justify-center">
                            <Server className="w-20 h-20 text-purple-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">SaaS Dashboard</h3>
                            <p className="text-gray-400 mb-4">Built a real-time analytics dashboard processing 1M+ events per day.</p>
                            <span className="text-purple-400 font-bold flex items-center gap-2">View Case Study <Globe className="w-4 h-4" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
