'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React / Next.js', level: 95, color: '#61DAFB' },
        { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
        { name: 'Framer Motion', level: 85, color: '#F093FB' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 88, color: '#68A063' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'APIs & REST', level: 92, color: '#667EEA' },
        { name: 'Database Design', level: 80, color: '#4FACFE' },
      ],
    },
    {
      category: 'AI & Tools',
      items: [
        { name: 'OpenAI API', level: 90, color: '#00E5A0' },
        { name: 'Machine Learning', level: 75, color: '#764BA2' },
        { name: 'Git & GitHub', level: 95, color: '#F05032' },
        { name: 'SEO Optimization', level: 88, color: '#FFB84D' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32">
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
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="glow-card"
            >
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.2 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-black font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: groupIndex * 0.2 + index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
