import { TProject } from '@/types';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiSocketdotio,
  SiFirebase,
  SiStripe,
} from 'react-icons/si';

export const projects: TProject[] = [
  {
    title: 'NextTrade',
    description:
      'An online trading platform providing live market data, interactive charts, user portfolios, and secure buy/sell functionality for stocks and cryptocurrencies.',
    techStack: [
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="size-full text-[#000000]" />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express.js', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
      {
        name: 'Socket.IO',
        icon: <SiSocketdotio className="size-full text-[#9C9C9C]" />,
      },
      {
        name: 'Firebase',
        icon: <SiFirebase className="size-full text-[#FFCA28]" />,
      },
    ],
    image: '/nextrade.jpg',
    liveUrl: 'https://nextrade-front-end.vercel.app/',
    github: {
      frontend: 'https://github.com/diptomahin/nextrade',
      backend: 'https://github.com/diptomahin/nexTrade-server',
    },
    projectType: 'Team Project',
  },
  {
    title: 'Invento Wave',
    description:
      'A web-based system to manage inventory, suppliers, sales, and stock reports with role-based access and real-time updates.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express.js', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
      {
        name: 'Firebase',
        icon: <SiFirebase className="size-full text-[#FFCA28]" />,
      },
      { name: 'Stripe', icon: <SiStripe className="size-full text-[#635BFF]" /> },
    ],
    image: '/invento-wave.jpg',
    liveUrl: 'https://invento-wave.web.app/',
    github: {
      frontend: 'https://github.com/mdnuruzzamannirob/invento-wave-client',
      backend: 'https://github.com/mdnuruzzamannirob/invento-wave-server',
    },
    projectType: 'Personal Project',
  },
  {
    title: 'Library Hub',
    description:
      'A web application to manage library operations including book cataloging, member registration, borrowing/return tracking, and overdue fine management.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express.js', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
      {
        name: 'Firebase',
        icon: <SiFirebase className="size-full text-[#FFCA28]" />,
      },
    ],
    image: '/library-hub.jpg',
    liveUrl: 'https://library-hub-ef83f.web.app/',
    github: {
      frontend: 'https://github.com/mdnuruzzamannirob/library-hub-client',
      backend: 'https://github.com/mdnuruzzamannirob/library-hub-server',
    },
    projectType: 'Personal Project',
  },
  {
    title: 'Brand Shop',
    description:
      'A modern car brand website featuring product showcases, model comparisons, booking test drives, and dealership locator.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
      { name: 'Node.js', icon: <FaNodeJs className="size-full text-[#3C873A]" /> },
      { name: 'Express.js', icon: <SiExpress className="size-full text-[#000000]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="size-full text-[#47A248]" /> },
      {
        name: 'Firebase',
        icon: <SiFirebase className="size-full text-[#FFCA28]" />,
      },
    ],
    image: '/brand-shop.jpg',
    liveUrl: 'https://brand-shop-61d84.web.app/',
    github: {
      frontend: 'https://github.com/mdnuruzzamannirob/brand-shop-client',
      backend: 'https://github.com/mdnuruzzamannirob/brand-shop-server',
    },
    projectType: 'Personal Project',
  },
  {
    title: 'Confer',
    description:
      'A system to manage conferences with paper submission, peer review, schedules, and attendee registration.',
    techStack: [
      { name: 'React.js', icon: <FaReact className="size-full text-[#61DAFB]" /> },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
      {
        name: 'Firebase',
        icon: <SiFirebase className="size-full text-[#FFCA28]" />,
      },
    ],
    image: '/confer.jpeg',
    liveUrl: 'https://confer-42442.web.app/',
    github: {
      frontend: 'https://github.com/mdnuruzzamannirob/confer',
      backend: null,
    },
    projectType: 'Personal Project',
  },
];
