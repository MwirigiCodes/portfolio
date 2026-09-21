import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import profile from '../assets/profile.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Node Developer',
    'Backend Developer',
    'DevOps Engineer',
    'Passionate Coder',
  ];
  const currentText = texts[currentIndex];

  // Typing animation
  useEffect(() => {
    const isAtEnd = !isDeleting && displayText === currentText;
    const isAtStart = isDeleting && displayText === '';
    const delay = isAtEnd ? 1000 : isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isAtEnd) {
        setIsDeleting(true);
      } else if (isAtStart) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, texts.length]);

  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* img */}
        <motion.div whileHover={{ scale: 1.05 }} className="size-56 mx-auto">
          <img
            src={profile}
            alt="Profile"
            className="size-54 object-cover rounded-full shadow-2xl shadow-blue-500 hover:shadow-cyan-500/30 transition-all duration-300"
          />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-semibold text-white mb-6"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
            Mwirigi
          </span>
        </motion.h1>
        {/* Animated text */}
        <motion.div variants={itemVariants} className="mb-6 h-16">
          <h2 className="text-3xl text-gray-200 font-light">
            I am{' '}
            <span className="text-cyan-300 border-r-2 border-cyan-300">
              {displayText}
            </span>
          </h2>
        </motion.div>
        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          I build reliable, scalable, and secure backend systems that power
          modern web applications. I enjoy working with APIs, databases,
          authentication, and infrastructure to turn ideas into production-ready
          software.
        </motion.p>
        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToSkills}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={scrollToSkills}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-400/30 text-white rounded-full font-semibold text-lg hover:bg-gray-800/50"
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
