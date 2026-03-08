import { Code2, Github, Linkedin, Mail, Palette, Phone, Terminal, Twitter, Zap, Brain, Rocket, Users } from "lucide-react"

export const portfolioData = {
    personal: {
        name: "Vaibhav Saini",
        title: "CTO & Co-founder at SocialMoon | AI Developer | Full Stack Developer",
        description: "CTO & Co-founder at SocialMoon, where I blend AI innovation with full-stack development to build products people love. I believe great software happens at the intersection of clean code, smart algorithms, and user-focused design. Always exploring what's next in tech.",
        email: "sainivaibhav742@gmail.com",
        phone: "+91 9193410557",
        location: "Lucknow, India",
        social: {
            github: "https://github.com/sainivaibhav742",
            linkedin: "https://linkedin.com/in/sainivaibhav742",
            twitter: "https://twitter.com/sainivaibhav742",
        },
        resume: "/resume.pdf",
        profileImage: "/vaibhav.jpg",
    },
    hero: {
        badge: "Building AI-powered solutions at SocialMoon",
    },
    about: {
        title: "About Me",
        bio: "I'm CTO & Co-founder at SocialMoon, where I blend AI innovation with full-stack development to build products people love. With 3 years of experience in software development, I specialize in building intelligent systems that solve real-world problems. My passion lies in leveraging cutting-edge AI/ML technologies alongside modern web frameworks to create impactful solutions.",
        stats: [
            { label: "Years Experience", value: "3+" },
            { label: "Projects Built", value: "25+" },
            { label: "Technologies", value: "20+" },
        ],
        features: [
            {
                icon: Brain,
                title: "AI/ML Development",
                description: "Building intelligent systems with TensorFlow, PyTorch, and modern NLP frameworks.",
            },
            {
                icon: Code2,
                title: "Full Stack Development",
                description: "Creating scalable applications with React, Next.js, Node.js, and Python.",
            },
            {
                icon: Rocket,
                title: "Product Innovation",
                description: "Turning ambitious ideas into reality as CTO of SocialMoon.",
            },
            {
                icon: Terminal,
                title: "Clean Architecture",
                description: "Writing maintainable, scalable code with best practices and design patterns.",
            },
        ],
    },
    skills: [
        { name: "Python", category: "Language" },
        { name: "TypeScript", category: "Language" },
        { name: "JavaScript (ES6+)", category: "Language" },
        { name: "Dart", category: "Language" },
        { name: "TensorFlow", category: "AI/ML" },
        { name: "PyTorch", category: "AI/ML" },
        { name: "OpenAI API", category: "AI/ML" },
        { name: "LangChain", category: "AI/ML" },
        { name: "Scikit-learn", category: "AI/ML" },
        { name: "React", category: "Frontend" },
        { name: "Next.js", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "Framer Motion", category: "Frontend" },
        { name: "shadcn/ui", category: "Frontend" },
        { name: "Flutter", category: "Mobile" },
        { name: "Node.js", category: "Backend" },
        { name: "Express.js", category: "Backend" },
        { name: "FastAPI", category: "Backend" },
        { name: "Flask", category: "Backend" },
        { name: "Socket.io", category: "Backend" },
        { name: "MongoDB", category: "Database" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Redis", category: "Database" },
        { name: "Prisma", category: "Database" },
        { name: "Docker", category: "DevOps" },
        { name: "Kubernetes", category: "DevOps" },
        { name: "CI/CD", category: "DevOps" },
        { name: "AWS", category: "Cloud" },
        { name: "Vercel", category: "Cloud" },
        { name: "Serverless", category: "Cloud" },
        { name: "REST APIs", category: "Architecture" },
        { name: "GraphQL", category: "Architecture" },
        { name: "WebRTC", category: "Architecture" },
    ],
    projects: [
        {
            title: "Real-Time Chat Application",
            description: "A full-stack real-time chat platform built with Next.js, Node.js, Socket.io, and MongoDB. Features user authentication, chat rooms, typing indicators, read receipts, and message history.",
            tags: ["Next.js", "Socket.io", "MongoDB", "Node.js"],
            demoLink: "#",
            codeLink: "https://github.com/sainivaibhav742/real-time-chat-app",
        },
        {
            title: "AI Resume Screener",
            description: "An AI-powered resume screening tool using NLP to match candidates to job descriptions, analyze skills, and provide actionable insights for HR teams.",
            tags: ["Python", "NLP", "TensorFlow", "Flask"],
            demoLink: "#",
            codeLink: "https://github.com/sainivaibhav742/ai-resume-screener",
        },
        {
            title: "Cloud Cost Optimizer Dashboard",
            description: "A comprehensive cloud cost monitoring and optimization dashboard that helps users track, analyze, and optimize their cloud spending across AWS, GCP, and Azure.",
            tags: ["React", "Node.js", "AWS", "Charts.js"],
            demoLink: "#",
            codeLink: "https://github.com/sainivaibhav742/Cloud-Cost-Optimizer-Dashboard",
        },
        {
            title: "Task Manager Mobile App",
            description: "A feature-rich cross-platform task management mobile application built with Flutter and Dart. Includes task scheduling, priority management, notifications, and offline sync capabilities.",
            tags: ["Flutter", "Dart", "Mobile", "Firebase"],
            demoLink: "#",
            codeLink: "https://github.com/sainivaibhav742/Task-Manager",
        },
        {
            title: "Sarcasm AI Chatbot",
            description: "An entertaining AI-powered chatbot with sarcastic personality built using advanced NLP. Features contextual responses, sentiment analysis, and witty comeback generation.",
            tags: ["AI", "NLP", "Python", "OpenAI"],
            demoLink: "https://sarcasm-ai-chatbot.vercel.app",
            codeLink: "https://github.com/sainivaibhav742/sarcasm-ai_chatbot",
        },
        {
            title: "Learning Management System",
            description: "A full-featured LMS platform for online education with course management, student tracking, and interactive learning tools.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            demoLink: "#",
            codeLink: "https://github.com/sainivaibhav742/LMS",
        },
        {
            title: "Image Captioning with CNN-LSTM",
            description: "A deep learning project that generates natural language captions for images using CNN for feature extraction and LSTM for sequence generation.",
            tags: ["Python", "TensorFlow", "CNN", "LSTM"],
            demoLink: "#",
            codeLink: "https://github.com/sainivaibhav742/Image-Captioning-with-CNN-LSTM",
        },
        {
            title: "Sign Language Translator",
            description: "An AI-powered accessibility tool that translates sign language gestures into text using computer vision and deep learning.",
            tags: ["Python", "OpenCV", "TensorFlow", "ML"],
            demoLink: "#",
            codeLink: "https://github.com/sainivaibhav742/sign_language_translator",
        },
    ],
    experience: [
        {
            company: "SocialMoon",
            role: "CTO & Co-founder",
            period: "2022 - Present",
            description: "Leading technical strategy and product development. Building AI-powered solutions with a focus on scalability and innovation. Managing full-stack development and establishing engineering best practices.",
        },
        {
            company: "Freelance",
            role: "Full Stack Developer & AI Consultant",
            period: "2021 - 2022",
            description: "Developed custom web applications and AI solutions for various clients. Specialized in building intelligent systems using modern frameworks and cloud technologies.",
        },
    ],
    codingProfiles: {
        github: {
            username: "sainivaibhav742",
            url: "https://github.com/sainivaibhav742",
            stats: {
                commits: "1,500+",
                repos: "30+",
                stars: "50+",
            }
        },
        leetcode: {
            username: "vaibhav3421",
            url: "https://leetcode.com/vaibhav3421",
            stats: {
                solved: "200+",
                ranking: "Top 20%",
                easy: 80,
                medium: 100,
                hard: 20,
            }
        }
    },
    testimonials: [
        {
            quote: "Working with Vaibhav has been transformative. His ability to blend cutting-edge AI with practical solutions is remarkable, and his leadership drives real impact.",
            author: "Team Member",
            role: "SocialMoon",
        }
    ]
}
