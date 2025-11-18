'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '💻', color: '#333' },
    { name: 'LinkedIn', url: '#', icon: '💼', color: '#0077B5' },
    { name: 'Twitter', url: '#', icon: '🐦', color: '#1DA1F2' },
    { name: 'Email', url: 'mailto:vaibhav@example.com', icon: '✉️', color: '#EA4335' },
  ];

  return (
    <section id="contact" className="py-32">
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
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Whether it's a new project, collaboration opportunity, or just a chat about technology—I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glow-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-[#667EEA] transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-[#667EEA] transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-[#667EEA] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button type="submit" className="w-full btn btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glow-card">
              <h3 className="text-2xl font-bold text-black mb-6">Start Your Project Today</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Looking for a dedicated developer to bring your ideas to life? I'm available for freelance projects, consulting, and full-time opportunities. Let's create something extraordinary together!
              </p>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-4 rounded-xl flex items-center gap-3 group"
                  >
                    <span className="text-3xl">{social.icon}</span>
                    <span className="text-black font-medium group-hover:text-gradient transition-all">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glow-card space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="text-black font-medium">Location</h4>
                  <p className="text-gray-600">Available Worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <h4 className="text-black font-medium">Response Time</h4>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
