import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiSocketdotio } from 'react-icons/si';

export const projects = [
  {
    title: 'NextTrade',
    description:
      'An online trading platform providing live market data, interactive charts, user portfolios, and secure buy/sell functionality for stocks and cryptocurrencies.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
    ],
    image: ['/images/projects/trading-1.png', '/images/projects/trading-2.png'],
    liveUrl: 'https://tradesphere-demo.com',
    github: {
      frontend: 'https://github.com/username/tradesphere-frontend',
      backend: 'https://github.com/username/tradesphere-backend',
    },
    projectType: 'Team Project',
  },
  {
    title: 'Invento Wave',
    description:
      'A web-based system to manage inventory, suppliers, sales, and stock reports with role-based access and real-time updates.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
    ],
    image: ['/images/projects/ims-1.png', '/images/projects/ims-2.png'],
    liveUrl: 'https://stockflow-demo.com',
    github: {
      frontend: 'https://github.com/username/stockflow-frontend',
      backend: 'https://github.com/username/stockflow-backend',
    },
    projectType: 'Personal Project',
  },
  {
    title: 'Library Hub',
    description:
      'A web application to manage library operations including book cataloging, member registration, borrowing/return tracking, and overdue fine management.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
    ],
    image: ['/images/projects/library-1.png', '/images/projects/library-2.png'],
    liveUrl: 'https://libratrack-demo.com',
    github: {
      frontend: 'https://github.com/username/libratrack-frontend',
      backend: 'https://github.com/username/libratrack-backend',
    },
    projectType: 'Personal Project',
  },
  {
    title: 'Brand Shop',
    description:
      'A modern car brand website featuring product showcases, model comparisons, booking test drives, and dealership locator.',
    techStack: [
      { name: 'Next.js', icon: <SiNextdotjs className="size-full text-[#000000]" /> },
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="size-full text-[#06B6D4]" /> },
    ],
    image: ['/images/projects/carbrand-1.png', '/images/projects/carbrand-2.png'],
    liveUrl: 'https://autodrive-demo.com',
    github: {
      frontend: 'https://github.com/username/autodrive-frontend',
      backend: 'https://github.com/username/autodrive-backend',
    },
    projectType: 'Personal Project',
  },
  {
    title: 'Confer',
    description:
      'A system to manage conferences with paper submission, peer review, schedules, and attendee registration.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
    ],
    image: ['/images/projects/conference-1.png', '/images/projects/conference-2.png'],
    liveUrl: 'https://confhub-demo.com',
    github: {
      frontend: 'https://github.com/username/confhub-frontend',
      backend: 'https://github.com/username/confhub-backend',
    },
    projectType: 'Personal Project',
  },
];
