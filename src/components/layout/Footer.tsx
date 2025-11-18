'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-black/10 w-full">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#667EEA] to-[#764BA2] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">VS</span>
                </div>
              </div>
              <div>
                <h3 className="text-black font-bold text-lg">Vaibhav Saini</h3>
                <p className="text-gray-600 text-sm">Creative Developer</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Building exceptional digital experiences with code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-black font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { name: 'GitHub', icon: '💻' },
                { name: 'LinkedIn', icon: '💼' },
                { name: 'Twitter', icon: '🐦' },
                { name: 'Email', icon: '✉️' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Vaibhav Saini. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with 💜 using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
