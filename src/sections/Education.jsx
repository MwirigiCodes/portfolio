import { BiBookOpen, BiTrophy } from 'react-icons/bi';
import { motion } from 'motion/react';
import { FaClock, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { FcLibrary } from 'react-icons/fc';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Information Technology',
      period: '2023 - 2025',
      institution: 'The Meru National Polytechnic',
      icon: BiBookOpen,
    },
  ];

  const certifications = [
    {
      name: 'Diploma in Information Technology',
      issuer: 'The National Meru Polytechnic',
      year: 2026,
      icon: BiTrophy,
    },
    {
      name: 'Web Development',
      issuer: 'Freecodecamp',
      year: 2025,
      icon: BiTrophy,
    },
  ];
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-gray-900 relative"
    >
      <div className="absolute top-25 left-64 inset-x-0 flex items-center justify-center">
        <div className="size-96 bg-linear-to-br from-[#0268b0] to-blue-500 blur-2xl rounded-full opacity-40"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, margin: '-50px' }}
        className="container mx-auto px-6 relative z-10 max-w-4xl"
      >
        {/* title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaGraduationCap className="size-12 text-cyan-400" />
            </motion.div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Education
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            My learning journey and certifications
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center flex items-center justify-center gap-2">
              <BiBookOpen className="size-6" />
              Education
            </h3>
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/40 transition-all duartion-300 group"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="p-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg group:hover:scale-110 transition-transform duartion-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <edu.icon className="size-5 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-cyan-300">{edu.institution}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <FaClock className="size-3 text-gray-400" />
                      <span className="text-gray-400 text-xs bg-gray-700/50 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* cerfications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center flex items-center justify-center gap-2">
              <FaTrophy className="size-6" /> Cetifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="p-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg group:hover:scale-110  transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <cert.icon className="size-5 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-cyan-300">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs bg-gray-700/50 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-cyan-500/20 text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <FcLibrary className="text-cyan-400 size-5" />
                <p className="text-sm text-cyan-300">
                  Always learning and growing.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
