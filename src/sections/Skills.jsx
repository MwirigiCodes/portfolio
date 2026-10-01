import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from 'motion/react';
import hand from '../assets/robot.png';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Skills = () => {
  const skills = [
    { name: 'Node', icon: FaNodeJs, level: 80 },
    { name: 'Express', icon: SiExpress, level: 92 },
    { name: 'MongoDB', icon: DiMongodb, level: 88 },
    { name: 'MySQL', icon: DiMysql, level: 86 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex justify-center items-center bg-gray-900 py-20 relative overflow-hidden"
    >
      <div className="absolute top-25 left-64 inset-x-0 flex justify-center items-start bg-gray-900">
        <div className="size-64 bg-linear-to-br from-[#0268b0] to-blue-500 blur-2xl opacity-40 rounded-full"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initia="hidden"
        animate="visible"
        viewport={{ once: false }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-end relative"
          >
            <div className="relative">
              <motion.img
                src={hand}
                alt="Robot hand"
                className="w-full max-w-sm relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* icons */}
              {skills.map((skill, index) => {
                const positions = [
                  { top: '5%', left: '10%' },
                  { top: '5%', right: '33%' },
                  { bottom: '90%', left: '20%' },
                  { bottom: '90%', right: '44%' },
                ];

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute z-20"
                    style={positions[index]}
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <motion.div
                      className="bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-blue-500/30"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                      }}
                    >
                      <skill.icon className="size-12 text-gray-300" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          {/* content */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 text-white"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                My
              </span>{' '}
              Skills
            </motion.h2>
            <motion.div variants={itemVariants}>
              <div className="space-y-4 mt-4">
                {skills.map((skill, index) => {
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="size-10 mr-4 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30">
                        <skill.icon className="size-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-cyan-300">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
