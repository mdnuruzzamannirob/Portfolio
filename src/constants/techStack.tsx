import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiGit,
  SiVercel,
  SiFigma,
  SiPostman,
  SiNetlify,
  SiGithub,
  SiJsonwebtokens,
  SiMongoose,
  SiNpm,
  SiYarn,
  SiEslint,
  SiPrettier,
  SiZod,
} from 'react-icons/si';
import { TbBrandFramerMotion, TbTerminal2 } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { FaCode, FaCube, FaGlobe } from 'react-icons/fa6';
import { BsDatabase, BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { ImInfinite } from 'react-icons/im';
import { GrTechnology } from 'react-icons/gr';
import { MdPhoneIphone, MdSchool, MdSpeed } from 'react-icons/md';

export const techStack = [
  {
    category: 'Frontend',
    description: 'Building responsive and dynamic user interfaces.',
    icon: <BsReverseLayoutTextWindowReverse className="size-5" />,
    skills: [
      {
        name: 'HTML5',
        icon: <SiHtml5 className="size-full text-[#E34F26]" />,
        level: 'Advanced',
      },
      { name: 'CSS3', icon: <SiCss3 className="size-full text-[#1572B6]" />, level: 'Advanced' },
      {
        name: 'JavaScript',
        icon: <SiJavascript className="size-full text-[#F7DF1E]" />,
        level: 'Advanced',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="size-full text-[#3178C6]" />,
        level: 'Intermediate',
      },
      {
        name: 'React.js',
        icon: <SiReact className="size-full text-[#61DAFB]" />,
        level: 'Advanced',
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="size-full text-[#000000]" />,
        level: 'Intermediate',
      },
      {
        name: 'Redux',
        icon: <SiRedux className="size-full text-[#764ABC]" />,
        level: 'Intermediate',
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
        level: 'Advanced',
      },
      {
        name: 'Framer Motion',
        icon: <TbBrandFramerMotion className="size-full text-[#0055FF]" />,
        level: 'Intermediate',
      },
      // {
      //   name: 'Jest',
      //   icon: <SiJest className="size-full text-[#C21325]" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'React Testing Library',
      //   icon: <SiTestinglibrary className="size-full text-[#E33332]" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'Cypress',
      //   icon: <SiCypress className="size-full text-[#17202C]" />,
      //   level: 'Beginner',
      // },
    ],
    level: 'Advanced',
  },
  {
    category: 'Backend',
    description: 'Creating robust APIs and server-side applications.',
    icon: <FaCode className="size-5" />,
    skills: [
      {
        name: 'Node.js',
        icon: <SiNodedotjs className="size-full text-[#339933]" />,
        level: 'Advanced',
      },
      {
        name: 'Express.js',
        icon: <SiExpress className="size-full text-[#000000]" />,
        level: 'Intermediate',
      },
      {
        name: 'JWT',
        icon: <SiJsonwebtokens className="size-full text-[#F7DF1E]" />,
        level: 'Intermediate',
      },
      {
        name: 'Zod',
        icon: <SiZod className="size-full text-[#3E67B1]" />,
        level: 'Intermediate',
      },
      // {
      //   name: 'GraphQL',
      //   icon: <SiGraphql className="size-full text-[#E10098]" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'WebSockets (Socket.IO)',
      //   icon: <FaCode className="size-full text-[#6C63FF]" />,
      //   level: 'Intermediate',
      // },
    ],
    level: 'Beginner',
  },
  {
    category: 'Database',
    description: 'Managing and designing efficient data storage solutions.',
    icon: <BsDatabase className="size-5" />,
    skills: [
      {
        name: 'MongoDB',
        icon: <SiMongodb className="size-full text-[#47A248]" />,
        level: 'Intermediate',
      },
      {
        name: 'Mongoose',
        icon: <SiMongoose className="size-full text-[#880000]" />,
        level: 'Intermediate',
      },
      // {
      //   name: 'PostgreSQL',
      //   icon: <SiPostgresql className="size-full text-[#336791]" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'MySQL',
      //   icon: <SiMysql className="size-full text-[#4479A1]" />,
      //   level: 'Beginner',
      // },
      // {
      //   name: 'Firebase',
      //   icon: <SiFirebase className="size-full text-[#FFCA28]" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'Redis',
      //   icon: <SiRedis className="size-full text-[#DC382D]" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'Prisma',
      //   icon: <SiPrisma className="size-full text-[#2D3748]" />,
      //   level: 'Intermediate',
      // },
    ],
    level: 'Beginner',
  },
  {
    category: 'DevOps',
    description: 'Deployment, CI/CD, and server management.',
    icon: <ImInfinite className="size-5" />,
    skills: [
      { name: 'Git', icon: <SiGit className="size-full text-[#F05032]" />, level: 'Advanced' },
      {
        name: 'GitHub',
        icon: <SiGithub className="size-full text-[#F5F5F5]" />,
        level: 'Advanced',
      },
      {
        name: 'Vercel',
        icon: <SiVercel className="size-full text-[#000000]" />,
        level: 'Intermediate',
      },
      {
        name: 'Netlify',
        icon: <SiNetlify className="size-full text-[#00C7B7]" />,
        level: 'Intermediate',
      },
      {
        name: 'Postman',
        icon: <SiPostman className="size-full text-[#FF6C37]" />,
        level: 'Intermediate',
      },
      // {
      //   name: 'GitHub Actions (CI/CD)',
      //   icon: <SiGithub className="size-full text-[#2088FF]" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'Docker',
      //   icon: <SiDocker className="size-full text-[#2496ED]" />,
      //   level: 'Intermediate',
      // },
    ],
    level: 'Beginner',
  },
  {
    category: 'Tools',
    description: 'Design, coding, and productivity tools.',
    icon: <GrTechnology className="size-5" />,
    skills: [
      {
        name: 'Figma',
        icon: <SiFigma className="size-full text-[#F24E1E]" />,
        level: 'Intermediate',
      },
      {
        name: 'VS Code',
        icon: <VscVscode className="size-full text-[#007ACC]" />,
        level: 'Advanced',
      },
      {
        name: 'Terminal',
        icon: <TbTerminal2 className="size-full text-[#FFFFFF]" />,
        level: 'Advanced',
      },
      { name: 'NPM', icon: <SiNpm className="size-full text-[#CB3837]" />, level: 'Advanced' },
      {
        name: 'Yarn',
        icon: <SiYarn className="size-full text-[#2C8EBB]" />,
        level: 'Intermediate',
      },
      // {
      //   name: 'pnpm',
      //   icon: <SiPnpm className="size-full text-[#F69220]" />,
      //   level: 'Intermediate',
      // },
      {
        name: 'ESLint',
        icon: <SiEslint className="size-full text-[#4B32C3]" />,
        level: 'Intermediate',
      },
      {
        name: 'Prettier',
        icon: <SiPrettier className="size-full text-[#F7B93E]" />,
        level: 'Intermediate',
      },
    ],
    level: 'Intermediate',
  },
  {
    category: 'Fundamentals',
    description: 'Core web development concepts and best practices.',
    icon: <MdSchool className="size-5" />,
    skills: [
      {
        name: 'Responsive Design',
        icon: <MdPhoneIphone className="size-full text-blue-500" />,
        level: 'Intermediate',
      },
      {
        name: 'Cross-browser Compatibility',
        icon: <FaGlobe className="size-full text-green-500" />,
        level: 'Intermediate',
      },
      { name: 'Performance Optimization', icon: <MdSpeed className="size-full text-red-500" /> },
      // {
      //   name: 'Accessibility (a11y)',
      //   icon: <MdAccessibilityNew className="size-full text-purple-500" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'SEO Fundamentals',
      //   icon: <FaSearch className="size-full text-yellow-500" />,
      //   level: 'Intermediate',
      // },
      {
        name: 'Component-Driven Architecture',
        icon: <FaCube className="size-full text-pink-500" />,
        level: 'Intermediate',
      },
      // {
      //   name: 'Progressive Enhancement',
      //   icon: <FaArrowUp className="size-full text-indigo-500" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'Forms & Validation',
      //   icon: <FaWpforms className="size-full text-teal-500" />,
      //   level: 'Intermediate',
      // },
      // {
      //   name: 'Security Basics',
      //   icon: <FaLock className="size-full text-gray-700" />,
      //   level: 'Intermediate',
      // },
    ],
    level: 'Intermediate',
  },
];
