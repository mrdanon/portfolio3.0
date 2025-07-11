'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { skills, skillCategories } from '@/data/skills';
import { Skill } from '@/types';
import Image from 'next/image';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.categories.includes(selectedCategory));

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <Image 
          src={skill.icon} 
          alt={skill.name}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {skill.proficiency}%
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Proficiency
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {skill.name}
      </h3>
      
      {/* Proficiency Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-2 rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-1 mb-2">
        {skill.categories.map((category) => {
          const categoryInfo = skillCategories.find(cat => cat.id === category);
          return (
            <span
              key={category}
              className="px-2 py-1 text-xs font-medium rounded-md text-white"
              style={{ backgroundColor: categoryInfo?.color || skill.color }}
            >
              {categoryInfo?.name.replace(' & ', ' ') || category}
            </span>
          );
        })}
      </div>
      
      <div className="flex items-center justify-end">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set spanning 3D animation, programming, AI integration, and educational technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            All Skills
          </button>
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? category.color : undefined
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${skill.categories.join('-')}`} skill={skill} index={index} />
          ))}
        </div>

        {/* Summary Stats - Justified Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {skillCategories.map(category => {
            const categorySkills = skills.filter(skill => skill.categories.includes(category.id));
            const avgProficiency = categorySkills.length > 0 ? Math.round(
              categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length
            ) : 0;
            
            return (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg min-w-[160px] flex-1 max-w-[200px]"
              >
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: category.color }}
                >
                  {avgProficiency}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">
                  {category.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {categorySkills.length} skill{categorySkills.length !== 1 ? 's' : ''}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 