"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher,FaChessKnight,FaGuitar,FaHorseHead} from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hello there! I’m Youness, a Master's student in AI/Software Engineering with a passion for AI software . I’ve always been fascinated by the power of technology to solve complex problems, and I channel that curiosity into crafting innovative software with a strong dose of AI integration.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              After gaining hands-on experience in building projects and exploring financial markets, I decided to delve deeper into the world of software engineering and AI by pursuing my master’s. It was during this journey that I discovered the exciting synergy between programming and trading systems. This realization sparked my passion for creating innovative, AI-driven software solutions, especially for Algotrading and intelligent financial applications.
            </p>
            <p>
              When I&apos;m not crunching numbers or coding, you might find me:
              </p>
              <ul className="list-disc pl-5 space-y-2">
              <li><FaChessKnight className="inline-block mr-2" /> Strategizing every move on the chessboard like a grandmaster in the making</li>
              <li><FaGuitar className="inline-block mr-2" /> Channeling the soul of the blues through every bend and slide on my guitar</li>
              <li><FaHorseHead className="inline-block mr-2" /> Horse riding to feel the wind and freedom of the open trail</li>
            </ul>
            <p>
            Currently, I’m doing my internship at BMW, where I’m gaining hands-on experience in advanced software engineering for automated driving. Alongside this, I’m diving deeper into the fascinating world of deep learning and AI software, exploring its limitless potential. Whether it’s building innovative solutions or refining my expertise, I’m always excited to push the boundaries of what technology can achieve.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
