import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans">
      <header className="p-4 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Vaibhav Kumar</h1>
          <div className="flex gap-4">
            <a href="https://github.com/sainivaibhav742" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sainivaibhav742/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="https://devfolio.co/@Sainivaibhav742" target="_blank" rel="noopener noreferrer">
              <img src="/devfolio-icon.svg" alt="Devfolio" width="20" className="invert dark:invert-0" />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <motion.h2 className="text-3xl font-bold mb-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Hi, I'm Vaibhav 👋
          </motion.h2>
          <p className="text-lg">B.Tech CSE student building AI, ML, and Web projects with React, Python, and JS.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="AI Resume Screener"
              description="NLP tool to rank resumes by job relevance using spaCy and Flask."
              link="https://github.com/sainivaibhav742/AI-Resume-Screener-using-NLP"
            />
            <ProjectCard
              title="Image Captioning CNN-LSTM"
              description="Caption generator using InceptionV3 encoder and LSTM decoder."
              link="https://github.com/sainivaibhav742/Image-Captioning-with-CNN-LSTM"
            />
            <ProjectCard
              title="Sarcasm AI Chatbot"
              description="GPT-2 chatbot that responds with humor and sarcasm via a web UI."
              link="https://github.com/sainivaibhav742/sarcasm-ai_chatbot"
            />
            <ProjectCard
              title="Weather App"
              description="Responsive weather app using OpenWeatherMap API and JS."
              link="https://github.com/sainivaibhav742/Weather-App-using-OpenWeather-API"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Resume</h2>
          <a
            href="/Vaibhav_Kumar_Resume_v1_Compact.pdf"
            download
            className="inline-block px-4 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Contact</h2>
          <p>Email: <a href="mailto:sainivaibhav742@gmail.com" className="text-blue-400">sainivaibhav742@gmail.com</a></p>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <motion.div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow" whileHover={{ scale: 1.03 }}>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm mb-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project ↗
      </a>
    </motion.div>
  );
}
