'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, X, Filter } from 'lucide-react';
import { projects, projectCategories } from '@/data/project';
import { Project } from '@/types';
import Image from 'next/image';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory));

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <Image 
          src={project.image} 
          alt={project.title}
          width={400}
          height={256}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
            <div className="flex items-center mt-4 space-x-4">
              {project.video && (
                <Play className="w-5 h-5 text-white" />
              )}
              {project.link && (
                <ExternalLink className="w-5 h-5 text-white" />
              )}
            </div>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1">
          {project.categories.slice(0, 2).map((category) => {
            const categoryInfo = projectCategories.find(cat => cat.id === category);
            return (
              <span
                key={category}
                className="px-2 py-1 text-white text-xs font-medium rounded-full"
                style={{ backgroundColor: categoryInfo?.color || '#6B7280' }}
              >
                {categoryInfo?.name || category}
              </span>
            );
          })}
          {project.categories.length > 2 && (
            <span className="px-2 py-1 bg-gray-600 text-white text-xs font-medium rounded-full">
              +{project.categories.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = () => {
    if (!selectedProject) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.categories.map((category) => {
                  const categoryInfo = projectCategories.find(cat => cat.id === category);
                  return (
                    <span
                      key={category}
                      className="px-3 py-1 text-white text-sm rounded-full font-medium"
                      style={{ backgroundColor: categoryInfo?.color || '#6B7280' }}
                    >
                      {categoryInfo?.name || category}
                    </span>
                  );
                })}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`${selectedProject.title} ${index + 1}`}
                        width={200}
                        height={128}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {selectedProject.video && (
                  <a
                    href={selectedProject.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <Play size={20} />
                    <span>Watch Video</span>
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>View Project</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of my work spanning 3D animation, AI integration, educational content, and Blender addon development.
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
            All Projects
          </button>
          {projectCategories.map(category => (
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <ProjectModal />
    </section>
  );
};

export default PortfolioSection; 