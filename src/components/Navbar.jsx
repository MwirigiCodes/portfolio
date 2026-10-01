import { useEffect, useState } from 'react';
import { FaFolder, FaGraduationCap, FaHome, FaTools } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { motion } from 'motion/react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoverd, setHoverd] = useState(false);

  const navlinks = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'skills', icon: FaTools, label: 'Skills' },
    { id: 'education', icon: FaGraduationCap, label: 'Education' },
    { id: 'projects', icon: FaFolder, label: 'Projects' },
    { id: 'contact', icon: FiMail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navlinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section &&
          scrollPos >=
            section.offsetTop <
            section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-4 lg:left-20 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        onMouseEnter={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
      >
        <motion.div
          animate={{
            boxShadow: hoverd
              ? [
                  '0 0 20px rgba(59, 130, 246, 0.6)',
                  '0 0 40px rgba(6, 182, 212, 0.4)',
                  '0 0 60px rgba(59, 130, 246, 0.3)',
                ].join(', ')
              : `0 0 20px rgba(59, 130, 246, 0.4), 0 0 50px rgba(6, 182, 212, 0.2)`,
          }}
          transition={{ duration: 0.4 }}
          className="bg-gray-800/90 backdrop-blur-xl rounded-full p-3 lg:p-4 border border-blue-500/20 relative"
        >
          <motion.div
            animate={{ opacity: hoverd ? 0.8 : 0.4 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500/30 to-cyan-500/20 blur-lg -z-10"
          ></motion.div>
          <div className="flex flex-col space-y-3 lg:space-y-4">
            {navlinks.map((link, index) => {
              return (
                <motion.button
                  key={link.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative group p-2 lg:p-3 rounded-full transition-all duration-300 ${activeSection === link.id ? `bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-500/50` : `text-gray-400 hover:text-white hover:bg-gray-700/60`}`}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="size-5 lg:size-6 relative z-10" />
                  {activeSection === link.id && (
                    <motion.div className="absolute inset-0 rounded-full bg-blue-500/30"></motion.div>
                  )}
                  <div className="absolute left-full ml-3 px-2 py-1 lg:px-3 lg:py-2 bg-gray-900/95 text-white text-xs lg:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700 shadow-lg">
                    {link.label}
                    <div className="absolute -left-1 transform -translate-y-1/2 size-2 bg-gray-900 rotate-45"></div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Bottom Menu */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:hidden w-max"
      >
        <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl p-2 border border-blue-500/20 shadow-lg shadow-blue-500/30">
          <div className="flex space-x-1">
            {navlinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 
                  ${
                    activeSection === link.id
                      ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/60'
                  }`}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="size-5" />
                {activeSection === link.id && (
                  <motion.div
                    animate={{ boxShadow: '0 0 10px rgba(59,130,246,0.8)' }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-xl bg-blue-500/30"
                  ></motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
