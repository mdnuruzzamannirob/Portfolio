import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiSocketdotio } from 'react-icons/si';

export const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with Next.js and Tailwind CSS showcasing my projects, skills, and experience.',
    techStack: [
      { name: 'Next.js', icon: <SiNextdotjs className="size-full text-[#000000]" /> },
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="size-full text-[#06B6D4]" /> },
    ],
    image: ['/images/projects/ecommerce.png', '/images/projects/ecommerce.png'],
    liveUrl: 'https://your-portfolio-link.com',
    github: {
      frontend: 'https://github.com/username/portfolio-frontend',
      backend: 'https://github.com/username/portfolio-backend',
    },
    projectType: 'Personal Project',
  },
  {
    title: 'E-Commerce Store',
    description:
      'Full-stack MERN e-commerce app with authentication, cart, payment integration, and admin dashboard.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    image: ['/images/projects/ecommerce.png', '/images/projects/ecommerce.png'],
    liveUrl: 'https://ecommerce-demo.com',
    github: {
      frontend: 'https://github.com/username/ecommerce-frontend',
      backend: 'https://github.com/username/ecommerce-backend',
    },
    projectType: 'Team Project',
  },
  {
    title: 'Chat Application',
    description:
      'Real-time chat app with WebSocket support, private/group chats, and emoji reactions.',
    techStack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Socket.io', icon: <SiSocketdotio /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    image: ['/images/projects/ecommerce.png', '/images/projects/ecommerce.png'],
    liveUrl: 'https://chat-demo.com',
    github: {
      frontend: 'https://github.com/username/chat-frontend',
      backend: 'https://github.com/username/chat-backend',
    },
    projectType: 'Team Project',
  },
];
