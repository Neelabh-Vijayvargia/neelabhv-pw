import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Neelabh Vijayvargia",
  title: "Software Engineer",
  email: "neelabh.vijayvargia@gmail.com",
  linkedin: "https://linkedin.com/in/neelabh-vijayvargia",
  github: "https://github.com/neelabh-vijayvargia",
  resumeLink: "/NeelabhResume.pdf", // Make sure your resume is in public/
  bio: "I'm a SWE + quant-minded engineer building backend systems, infrastructure, and ML-powered tools. Currently pursuing BS Mathematics and BBA Canfield Business Honors with a Minor in CS at UT Austin.",
  shortBio: "I build scalable software solutions." // For Hero section
};

export const education = [
  {
    institution: "University of Texas at Austin",
    degree: "BS Mathematics, BBA Canfield Business Honors, Minor in CS",
    duration: "Aug 2023 – May 2027",
    score: "GPA: 3.9/4.0",
  },
];

export const projects = [
  {
    title: "Triniti",
    tech: ["React Native", "Firebase", "Expo"],
    description: "Mobile app with secure login, photo sharing, event calendar, and <200ms sync performance. Built complete MVP in 8 weeks with real-time features and robust user authentication system.",
    date: "2024",
    githubLink: null, // Private repository
    liveLink: null,
    category: "Mobile App",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "URL Shortener",
    tech: ["Go", "Redis", "Docker", "React"],
    description: "High-performance URL shortening service with caching layer and analytics. Built scalable backend in Go with Redis for fast lookups and React frontend for user management.",
    date: "2024",
    githubLink: null, // Replace with actual link if available
    liveLink: null,
    category: "Backend",
    icon: <FaDatabase size={24} className="text-accent-1"/>
  },
  {
    title: "Lock-Free Order Matching Engine",
    tech: ["C++"],
    description: "High-frequency trading order matching engine using lock-free data structures. Optimized for ultra-low latency with concurrent order processing and real-time price matching.",
    date: "2025",
    githubLink: null, // Replace with actual link if available
    liveLink: null,
    category: "Systems",
    icon: <SiCplusplus size={24} className="text-accent-1"/>
  },
  {
    title: "Minerva (AI Teaching Assistant)",
    tech: ["Flask", "LlamaIndex", "GPT API"],
    description: "AI-powered teaching assistant using retrieval-augmented generation. Integrated with course materials to provide contextual answers and learning support for students.",
    date: "2025",
    githubLink: null, // Replace with actual link if available
    liveLink: null,
    category: "AI/ML",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
  {
    title: "Truth Social Sentiment Trader",
    tech: ["Python", "Scikit-Learn", "Hugging Face", "Pandas"],
    description: "Automated trading system using sentiment analysis of social media posts. Built machine learning pipeline to analyze market sentiment and execute trades based on predictive models.",
    date: "2025",
    githubLink: null, // Replace with actual link if available
    liveLink: null,
    category: "AI/ML",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
  {
    title: "MNIST Neural Network Classifier",
    tech: ["Python", "NumPy", "Pandas", "Linear Algebra"],
    description: "Built predictive classifcation neural network from scratch using ReLu and Softmax with Adam optimizer and gradient descent.",
    date: "2025",
    githubLink: null, // Replace with actual link if available
    liveLink: null,
    category: "AI/ML",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "Python", icon: <SiPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "Go", icon: <FaCode /> },
    { name: "JavaScript/TypeScript", icon: <SiJavascript /> },
    { name: "Java", icon: <FaCode /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "R", icon: <FaCode /> },
    { name: "HTML/CSS", icon: <FaHtml5 /> },
  ],
  frameworksAndLibraries: [
    { name: "AWS", icon: <FaCode /> },
    { name: "React", icon: <FaReact /> },
    { name: "Docker", icon: <FaCode /> },
    { name: "DynamoDB", icon: <FaDatabase /> },
    { name: "Redis", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "Git", icon: <FaGithub /> },
    { name: "Scikit-Learn", icon: <SiPython /> },
    { name: "Pandas", icon: <SiPython /> },
    { name: "TensorFlow", icon: <SiPython /> },
    { name: "Numpy", icon: <SiPython /> },
  ],
  toolsAndPlatforms: [
    { name: "AWS", icon: <FaCode /> },
    { name: "Docker", icon: <FaCode /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Redis", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "DynamoDB", icon: <FaDatabase /> },
  ],
  coreCompetencies: [
    "Christopher Nolan Movies",
    "Cooking",
    "Escape Rooms",
    "Jigsaw Puzzles",
    "Rubik's Cubes",
    "Problem Solving"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Teaching Assistant",
    organization: "UT Austin",
    duration: "Aug 2025 – Present",
    points: [
      "TA for Predictive Analytics",
      "Taught ML (pandas, scikit-learn), Probability, Linear Algebra",
    ],
  },
  {
    role: "Software Engineer Intern",
    organization: "Capital One",
    duration: "Jun 2025 – Aug 2025",
    points: [
      "Software engineering internship in Plano, TX",
      "Worked on CORE Platforms Team",
    ],
  },
  {
    role: "Software Engineer Intern",
    organization: "Phenom",
    duration: "Aug 2024 – Dec 2024",
    points: [
      "Software engineering internship in Austin, TX",
      "Contributed to Payments Platform development",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};