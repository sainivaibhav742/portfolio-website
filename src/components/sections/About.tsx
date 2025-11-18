'use client';

import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions.',
      icon: '🚀',
    },
    {
      title: 'Collaboration',
      description: 'Building strong partnerships and fostering team success.',
      icon: '🤝',
    },
    {
      title: 'Excellence',
      description: 'Delivering high-quality work that exceeds expectations.',
      icon: '⭐',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' },
  ];

  return (
    <section id="about" className="py-32">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that matter. From concept to deployment, I bring ideas to life with code and creativity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glow-card">
              <h3 className="text-2xl font-bold text-black mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a Co-Founder & CTO at SocialMoon, I lead technical innovation while building scalable solutions that drive business growth. My expertise spans full-stack development, AI integration, and cloud architecture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With a background in computer science and a passion for emerging technologies, I specialize in transforming complex problems into elegant, user-centric solutions. Whether it's crafting intuitive user interfaces or architecting robust backend systems, I thrive on challenges that push the boundaries of what's possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring the next generation of developers.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-4 rounded-xl text-center"
                >
                  <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glow-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2 group-hover:text-gradient transition-all">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glow-card text-center"
            >
              <h4 className="text-xl font-bold text-black mb-4">Let's Work Together</h4>
              <p className="text-gray-600 mb-6">
                Ready to bring your next project to life? I'm always excited to take on new challenges and collaborate on innovative solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
