'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'Scalable B2B platform serving 10,000+ users with real-time collaboration, advanced analytics, and seamless integrations. Built for performance and reliability.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      gradient: 'from-[#667EEA] to-[#764BA2]',
    },
    {
      title: 'AI-Powered E-Commerce',
      description: 'Next-gen shopping experience with AI product recommendations, smart search, and personalized user journeys. Increased conversion rates by 45%.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      tags: ['React', 'Node.js', 'OpenAI', 'Stripe'],
      gradient: 'from-[#F093FB] to-[#F5576C]',
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Comprehensive data visualization platform processing millions of events daily. Interactive charts, custom reports, and predictive insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'D3.js', 'Python', 'Redis'],
      gradient: 'from-[#4FACFE] to-[#00F2FE]',
    },
    {
      title: 'Intelligent Automation Suite',
      description: 'AI-driven workflow automation reducing manual tasks by 80%. Natural language processing, smart routing, and seamless third-party integrations.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      tags: ['GPT-4', 'Node.js', 'WebSocket', 'Docker'],
      gradient: 'from-[#FA709A] to-[#FEE140]',
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Portfolio <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through innovative solutions. Each project represents a unique challenge solved with cutting-edge technology and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glow-card overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-multiply`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full glass text-black/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
