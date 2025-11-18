'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const technologies = [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'Go', icon: 'go' },
    { name: 'TensorFlow', icon: 'tensorflow' },
    { name: 'Flutter', icon: 'flutter' },
    { name: 'Vue.js', icon: 'vuejs' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Tailwind', icon: 'tailwindcss' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Redis', icon: 'redis' },
    { name: 'AWS', icon: 'amazonwebservices' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'GraphQL', icon: 'graphql' },
    { name: 'Firebase', icon: 'firebase' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#667EEA]/20 via-white to-white"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-full blur-2xl opacity-40"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#667EEA]/30">
                <img
                  src="/vaibhav.jpg"
                  alt="Vaibhav Saini"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-[#667EEA] via-[#F093FB] to-[#667EEA] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Vaibhav Saini
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full space-y-2 flex flex-col items-center"
          >
            <p className="text-2xl sm:text-3xl text-gray-600 font-light">
              Co-Founder & CTO at{' '}
              <span className="font-semibold bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent">
                SocialMoon
              </span>
            </p>
            <p className="text-lg sm:text-xl text-gray-500">
              Where{' '}
              <span className="text-[#667EEA] font-medium">Innovation</span>
              {' '}meets{' '}
              <span className="text-[#F093FB] font-medium">Creativity</span>
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full pt-8 flex justify-center"
          >
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.03 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="px-4 py-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-lg hover:border-[#667EEA]/50 hover:bg-black/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-5 h-5"
                      onError={(e) => {
                        e.currentTarget.src = `https://cdn.simpleicons.org/${tech.icon.replace(/\s+/g, '').toLowerCase()}`;
                      }}
                    />
                    <span className="text-sm text-black font-medium">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
