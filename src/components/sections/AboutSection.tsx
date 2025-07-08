'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Target } from 'lucide-react';
import { personal } from '@/data/personal';
import { achievements, education } from '@/data/experience';
import Image from 'next/image';

const AboutSection = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "5+",
      label: "Years Experience",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Award,
      value: "200+",
      label: "Projects Completed",
      color: "text-purple-600 dark:text-purple-400"
    },
    // {
    //   icon: Users,
    //   value: "50+",
    //   label: "Satisfied Clients",
    //   color: "text-green-600 dark:text-green-400"
    // },
    {
      icon: Target,
      value: "4",
      label: "Blender Addons",
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  const highlights = [
    {
      title: "3D Artist & Animator",
      description: "Specialized in Blender, creating stunning 3D visualizations and animations for educational and commercial projects.",
      icon: "🎨"
    },
    {
      title: "AI Integration Specialist",
      description: "Expert in implementing AI-powered solutions, including interactive avatars and automated workflows.",
      icon: "🤖"
    },
    {
      title: "Educator & Teacher",
      description: "Passionate about sharing knowledge through teaching mathematics, physics, and computer science.",
      icon: "📚"
    },
    {
      title: "Addon Developer",
      description: "Created multiple successful Blender addons used by 3D artists worldwide for workflow optimization.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate 3D artist and educator with expertise in animation, AI integration, and educational technology.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <Image 
                  src="/MyPhoto.jpg" 
                  alt="Piotr Dankowiakowski"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {personal.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personal.about}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> {personal.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Phone:</strong> {personal.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Location:</strong> {personal.location}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Website:</strong> {personal.website}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20 justify-center"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-200"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-purple-600" />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                    {achievement.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 