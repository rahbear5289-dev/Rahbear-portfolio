import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll handle
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500 px-4 py-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, rotateX: -90 }}
        animate={{ y: 0, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-8 py-4 pointer-events-auto
          ${isScrolled
            ? 'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-transparent'}`}
        style={{ perspective: '1000px' }}
      >
        {/* Logo with 3D Pop */}
        <Link to="/">
          <motion.div
            whileHover={{
              rotateY: 180,
              rotateX: 10,
              scale: 1.1,
              z: 50,
              textShadow: "0px 0px 8px rgb(59, 130, 246)"
            }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer tracking-wider"
          >
            RAHBEAR
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
            >
              <motion.div
                className="relative px-4 py-2 rounded-lg group"
                whileHover={{ scale: 1.1, z: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className={`relative z-10 font-medium transition-colors ${location.pathname === link.href ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {link.name}
                </span>
                {/* 3D Hover Background */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-lg -z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Active Indicator */}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"
                  />
                )}
              </motion.div>
            </Link>
          ))}

          <div className="ml-6 pl-6 border-l border-white/10">
            <SignedOut>
              <SignInButton mode="modal">
                <motion.button
                  whileHover={{ scale: 1.05, rotateX: 10, y: -2 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer pointer-events-auto"
                >
                  Login
                </motion.button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10 border-2 border-blue-500 shadow-lg" } }} />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              {isOpen ? '✕' : '☰'}
            </motion.div>
          </button>
        </div>
      </motion.div>

      {/* Mobile Responsive Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, rotateX: -20 }}
            animate={{ opacity: 1, height: 'auto', rotateX: 0 }}
            exit={{ opacity: 0, height: 0, rotateX: -20 }}
            className="md:hidden mt-2 mx-4 bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 flex flex-col space-y-2 shadow-2xl border border-white/10 overflow-hidden pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl font-semibold transition-colors ${location.pathname === link.href ? 'bg-blue-600/20 text-blue-400' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full py-4 rounded-xl font-bold shadow-lg cursor-pointer">
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center p-2">
                  <UserButton appearance={{ elements: { userButtonAvatarBox: "w-12 h-12 border-2 border-blue-500" } }} showName />
                </div>
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;