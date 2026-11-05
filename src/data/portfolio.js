// All portfolio content in one place — easy to update
import portrait from '../../images/about.jpeg';
import fleetImg from '../../images/FleetLink.png';
import streamImg from '../../images/Stream.png';
import aimImg from '../../images/Aim-Arcade.png';
import skyImg from '../../images/United.png';

export const personalInfo = {
  name: 'Vivek',
  lastName: 'Shukla',
  fullName: 'Vivek Shukla',
  role: 'Full-Stack Developer',
  tagline: 'Full-stack developer building React and Node.js products with SQL, Redis, and the rest of a production stack.',
  email: 'vivekshukla8823@gmail.com',
  phone: '+91 9424938202',
  location: 'Chandigarh, India',
  university: 'PEC Chandigarh',
  degree: 'B.Tech — Electrical Engineering',
  yearRange: '2022–2026',
  resumeUrl: 'https://drive.google.com/file/d/1MOztmd2p2iMHpFhFQ3v8Bzlg93Zaljx0/view?usp=drive_link',
  photo: portrait,
  status: 'Open for work',
  links: {
    linkedin: 'https://www.linkedin.com/in/vivek-shukla-40b05a258/',
    github: 'https://github.com/VivekShukla8',
    instagram: 'https://www.instagram.com/its_viv_vs/',
  },
};

export const aboutText = [
  "I completed my B.Tech in Electrical Engineering at Punjab Engineering College, Chandigarh (CGPA 7.48). I build full-stack products with React.js, Node.js, MySQL, and MongoDB.",
  "That work includes FleetLink, Stream-Vault, and ApplyIO, along with Aim Arcade, a tournament platform used in live events, and SkyHack, an aviation analytics dashboard. I also interned at Atlas Copco on technical energy analysis, and I've solved 500+ DSA problems, mostly in C++.",
];

export const quickInfo = [
  { label: 'Education', value: 'B.Tech in Electrical Engineering, completed · CGPA 7.48' },
  { label: 'University', value: 'PEC Chandigarh (2022–2026)' },
  { label: 'Based in', value: 'Chandigarh, India' },
  { label: 'Email', value: 'vivekshukla8823@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/vivek-shukla', url: 'https://www.linkedin.com/in/vivek-shukla-40b05a258/' },
  { label: 'GitHub', value: 'github.com/VivekShukla8', url: 'https://github.com/VivekShukla8' },
];

export const skills = {
  categories: ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'],
  items: [
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Languages' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Languages' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg', category: 'Languages' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
    { name: 'Zustand', icon: 'https://cdn.simpleicons.org/zustand/443E38', category: 'Frontend', invertOnDark: true },
    { name: 'Ant Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg', category: 'Frontend' },
    { name: 'Recharts', icon: 'https://cdn.simpleicons.org/recharts/22B5BF', category: 'Frontend' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend', invertOnDark: true },
    { name: 'Socket.io', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', category: 'Backend', invertOnDark: true },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database' },
    { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/2D3748', category: 'Database', invertOnDark: true },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'Database' },
    { name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg', category: 'Tools' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Tools' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools', invertOnDark: true },
    { name: 'Cloudinary', icon: 'https://cdn.simpleicons.org/cloudinary/3448C5', category: 'Tools' },
    { name: 'Razorpay', icon: 'https://cdn.simpleicons.org/razorpay/3395FF', category: 'Tools' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'FleetLink',
    subtitle: 'Multi-Vendor Vehicle Rental',
    description: 'Multi-vendor vehicle rental platform with a Prisma/MySQL schema for tiered pricing, price snapshots, refundable deposits, and store isolation. Built a concurrency-safe booking engine with row locking, a reserve-then-pay hold, and Razorpay webhook checks, plus Redis caching and a RabbitMQ email worker. Auth runs through Clerk with role and ownership checks, and the stack is containerized with Docker Compose.',
    image: fleetImg,
    liveUrl: 'https://fleetlink-vivek-olive.vercel.app/',
    githubUrl: 'https://github.com/VivekShukla8/FleetLink',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Prisma', 'Redis', 'RabbitMQ', 'Razorpay', 'Docker'],
    featured: true,
  },
  {
    id: 2,
    title: 'Stream-Vault',
    subtitle: 'Video Streaming Platform',
    description: 'Full-stack video platform with a custom player, Cloudinary uploads through signed URLs, and a React + Tailwind UI. 35+ REST endpoints cover videos, playlists, comments, search, and Socket.io messaging, secured with JWT and bcrypt. Watch history, analytics, and search run on MongoDB aggregation pipelines, with frontend state in Zustand.',
    image: streamImg,
    liveUrl: 'https://stream-vault-frontend1.vercel.app/#/',
    githubUrl: 'https://github.com/VivekShukla8/StreamVault-Frontend',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary', 'Zustand', 'JWT'],
    featured: true,
  },
  {
    id: 3,
    title: 'ApplyIO',
    subtitle: 'AI-Powered Job Portal',
    description: 'AI recruitment platform on the MERN stack. Google Gemini parses resumes and returns ATS compatibility scores, while a role-based dashboard uses Recharts and Socket.io for live application updates. Redis caches high-traffic job queries, JWT protects the API, and Cloudinary stores documents.',
    image: 'https://opengraph.githubassets.com/1/VivekShukla8/ApplyIO',
    githubUrl: 'https://github.com/VivekShukla8/ApplyIO',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini', 'Redis', 'Cloudinary', 'Socket.io'],
    featured: true,
  },
  {
    id: 4,
    title: 'Aim Arcade',
    subtitle: 'Tournament Management Platform',
    description: 'Tournament platform used in real gaming events for 2–3 weeks. Built with React, Node.js, and MongoDB, with Google OAuth, role-based access, Razorpay payments, and REST APIs for brackets, registrations, and payouts.',
    image: aimImg,
    liveUrl: 'https://aim-arcade-blun.vercel.app/',
    githubUrl: 'https://github.com/VivekShukla8/Aim-Arcade',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Google OAuth', 'Razorpay'],
    featured: true,
  },
  {
    id: 5,
    title: 'SkyHack',
    subtitle: 'Flight Difficulty Analytics',
    description: 'Aviation analytics dashboard for operational decisions. A weighted score across six flight parameters ranks difficulty in real time, with a MERN interface in Recharts and Ant Design that processes 8K+ records through CSV pipelines.',
    image: skyImg,
    liveUrl: 'https://skyhack-n4erzzbx8-vivek-shuklas-projects-8ebbc1b2.vercel.app/',
    githubUrl: 'https://github.com/VivekShukla8/SkyHack_3.0_UA',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts', 'Ant Design'],
    featured: true,
  },
];

export const education = [
  {
    period: '2022 — 2026',
    degree: 'Bachelor of Technology',
    institution: 'Punjab Engineering College, Chandigarh',
    details: 'Electrical Engineering · Chandigarh, India',
    score: 'CGPA: 7.48',
  },
  {
    period: 'Feb 2021',
    degree: 'Class XII',
    institution: 'Govt. Adarsh Higher Secondary School',
    details: 'Gadarwara, India',
    score: 'Score: 96.2%',
  },
];

export const experience = [
  {
    period: 'Feb 2025 — Jul 2025',
    role: 'Technical Analysis Intern',
    org: 'Atlas Copco India Pvt. Ltd · Hybrid',
    details: 'On-site energy studies at 5 client facilities, with savings scenarios of about Rs. 1 crore a year. Wrote the technical report and ran client communication for the 5-month engagement.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

