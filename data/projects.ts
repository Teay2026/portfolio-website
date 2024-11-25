// data/projects.ts
import { FaPython, FaJava, FaGamepad } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Car Detection for Autonomous Driving",
    description: "Implemented the YOLO v2 algorithm for real-time car detection in videos and images, enhancing computer vision for autonomous driving systems.",
    icon: SiTensorflow,
    technologies: ["Python", "TensorFlow", "Jupyter Notebook"],
    githubLink: "https://github.com/Teay2026/Car-Detection-for-autonomous-driving-",
    skills: [
      { name: "Machine Learning" },
      { name: "Computer Vision" },
      { name: "Deep Learning" },
    ],
  },
  {
    id: 2,
    title: "Apiculture 'Game Of Life' Simulation",
    description: "Created a model replicating the nuanced dynamics of the bee world, showcasing advanced proficiency in Java and a deep understanding of object-oriented programming concepts.",
    icon: FaJava,
    technologies: ["Java", "Object-Oriented Programming"],
    githubLink: "https://github.com/Teay2026/Apiculture-Game-of-life-simulation",
    skills: [
      { name: "Simulation Development" },
      { name: "Object-Oriented Programming" },
      { name: "Modeling Dynamics" },
    ],
  },
  {
    id: 3,
    title: "Space Invaders Game",
    description: "Recreated the classic arcade game Space Invaders in close collaboration with two partners, emphasizing teamwork and proficient coding skills.",
    icon: FaGamepad,
    technologies: ["Python", "Tkinter"],
    githubLink: "https://github.com/Teay2026/Space_Invaders_Game",
    skills: [
      { name: "Game Development" },
      { name: "Collaborative Programming" },
      { name: "GUI Design" },
    ],
  },
];
