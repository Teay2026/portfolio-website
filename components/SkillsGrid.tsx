// components/SkillsGrid.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaJs, FaGithub, FaCode} from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiCplusplus , SiAmazonaws } from 'react-icons/si';

const SkillsGrid = () => {
  const skills = useMemo(() => [
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <FaGithub />, name: 'Git' },
    { icon: <SiPytorch />, name: 'PyTorch' },
    { icon: <SiAmazonaws />, name: 'AWS' },
  ], []);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 -mx-2 sm:mx-0"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          custom={index}
          variants={skillVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-card text-card-foreground rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center"
        >
          <div className="text-2xl sm:text-3xl mb-1 text-primary">{skill.icon}</div>
          <p className="text-xs sm:text-sm font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
