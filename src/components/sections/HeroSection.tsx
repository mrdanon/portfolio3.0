'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Play } from 'lucide-react';
import Scene, { SceneFallback } from '@/components/3d/Scene';
import Gears from '@/components/3d/Gears';
import { HeroScrollAnimation } from '@/components/3d/ScrollAnimation';
import { personal } from '@/data/personal';
import Image from 'next/image';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create download link for CV
    const link = document.createElement('a');
    link.href = '/PD_Cv_en.pdf';
    link.download = 'PD_Cv_en.pdf';
    link.click();
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<SceneFallback />}>
          <Scene enableControls={false} cameraPosition={[0, 0, 10]} className="opacity-25 dark:opacity-35">
            <HeroScrollAnimation>
              <Gears />
            </HeroScrollAnimation>
          </Scene>
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-8 inline-block mt-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl mx-auto">
              <Image 
                src="/MyPhotosmall.jpg" 
                alt="Piotr Dankowiakowski"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white dark:border-gray-700 shadow-lg"></div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            {personal.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personal.about}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium shadow-lg transition-all duration-200"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-full font-medium transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.a>

            <motion.a
              href={personal.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium shadow-lg transition-all duration-200"
            >
              <Play size={20} />
              <span>Watch Showreel</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 p-8 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">200+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">4</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Blender Addons</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 dark:from-gray-900/50 dark:via-transparent dark:to-gray-900/30 pointer-events-none" />
    </section>
  );
};

export default HeroSection; 