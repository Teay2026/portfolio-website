// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaCogs, FaCode, FaBug } from 'react-icons/fa';
import { SiTestinglibrary } from 'react-icons/si';
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "BMW Group",
    position: "Software Engineer Intern",
    duration: "Sept 2024 - Now",
    year: 2024,
    description: [
      "Developed and maintained internal BMW programs for ECU programming tests and analysis using Python.",
      "Implemented new features and enhanced testing setups to improve performance and reliability.",
      "Operated and maintained prototype testbenches, assisting in testing development software on prototype hardware.",
      "Analyzed bugs, refined features, and supported the development team in creating more robust solutions."
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Testing and Debugging", icon: FaBug },
      { name: "Software Development", icon: FaCode },
      { name: "System Optimization", icon: FaCogs },
    ],
    logo: "/logos/bmw.png" // Add the BMW logo path
  },
  {
    company: "Synergie CPE Lyon",
    position: "Fullstack Developer",
    duration: "Jul 2024 - Sep 2024",
    year: 2024,
    description: [
      "Led the development and design of Elements-Terre.org, an educational project for Sorbonne Paris, INSA Lyon, Centrale Lyon, and CPE Lyon.",
      "Collaborated with multiple academic institutions to create shared resources utilized by professors and students.",
      "Ensured the platform's scalability, usability, and performance through full-stack development best practices."
    ],
    skills: [
      { name: "Fullstack Development", icon: FaCode },
      { name: "Collaboration", icon: FaBriefcase },
      { name: "Web Development", icon: FaCode },
    ],
    logo: "/logos/synergie.png" // Add the Synergie logo path
  },
  {
    company: "ALT MEDICAL",
    position: "Software Engineer Intern",
    duration: "Jul 2022 - Sep 2022",
    year: 2022,
    description: [
      "Provided technical support using Python scripts for quick issue resolution and task automation.",
      "Utilized SQL queries to analyze data from support databases, improving decision-making processes.",
      "Bridged technical complexities and end-user understanding, creating clear communications to convey complex information effectively."
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase },
      { name: "Technical Support", icon: FaBriefcase },
    ],
    logo: "/logos/alt-medical.png" // Add the ALT MEDICAL logo path
  }
];
