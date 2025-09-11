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
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
  SiGraphql,
  SiPostman,
  SiNetlify,
  SiGithub,
  SiJsonwebtokens,
  SiPrisma,
  SiMongoose,
  SiNpm,
  SiYarn,
  SiPnpm,
  SiEslint,
  SiPrettier,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiMysql,
  SiZod,
} from 'react-icons/si';
import { TbBrandFramerMotion, TbTerminal2 } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
import { FaArrowUp, FaCode, FaCube, FaGlobe, FaLock, FaWpforms } from 'react-icons/fa6';
import { BsDatabase, BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { ImInfinite } from 'react-icons/im';
import { GrTechnology } from 'react-icons/gr';
import { MdAccessibilityNew, MdPhoneIphone, MdSchool, MdSpeed } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

const TechStack = () => {
  const techStack = [
    {
      category: 'Frontend',
      icon: <BsReverseLayoutTextWindowReverse className="size-6" />,
      description: 'Building responsive and dynamic user interfaces.',
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
        {
          name: 'Jest',
          icon: <SiJest className="size-full text-[#C21325]" />,
          level: 'Intermediate',
        },
        {
          name: 'React Testing Library',
          icon: <SiTestinglibrary className="size-full text-[#E33332]" />,
          level: 'Intermediate',
        },
        {
          name: 'Cypress',
          icon: <SiCypress className="size-full text-[#17202C]" />,
          level: 'Beginner',
        },
      ],
    },
    {
      category: 'Backend',
      icon: <FaCode className="size-6" />,
      description: 'Creating robust APIs and server-side applications.',
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
          name: 'GraphQL',
          icon: <SiGraphql className="size-full text-[#E10098]" />,
          level: 'Intermediate',
        },
        {
          name: 'JWT',
          icon: <SiJsonwebtokens className="size-full text-[#F7DF1E]" />,
          level: 'Intermediate',
        },
        {
          name: 'WebSockets (Socket.IO)',
          icon: <FaCode className="size-full text-[#6C63FF]" />,
          level: 'Intermediate',
        },
        {
          name: 'Zod',
          icon: <SiZod className="size-full text-[#3E67B1]" />,
          level: 'Intermediate',
        },
      ],
    },
    {
      category: 'Database',
      icon: <BsDatabase className="size-6" />,
      description: 'Managing and designing efficient data storage solutions.',
      skills: [
        {
          name: 'MongoDB',
          icon: <SiMongodb className="size-full text-[#47A248]" />,
          level: 'Intermediate',
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql className="size-full text-[#336791]" />,
          level: 'Intermediate',
        },
        {
          name: 'MySQL',
          icon: <SiMysql className="size-full text-[#4479A1]" />,
          level: 'Beginner',
        },
        {
          name: 'Firebase',
          icon: <SiFirebase className="size-full text-[#FFCA28]" />,
          level: 'Intermediate',
        },
        {
          name: 'Redis',
          icon: <SiRedis className="size-full text-[#DC382D]" />,
          level: 'Intermediate',
        },
        {
          name: 'Prisma',
          icon: <SiPrisma className="size-full text-[#2D3748]" />,
          level: 'Intermediate',
        },
        {
          name: 'Mongoose',
          icon: <SiMongodb className="size-full text-[#A58B6F]" />,
          level: 'Intermediate',
        },
      ],
    },
    {
      category: 'DevOps',
      icon: <ImInfinite className="size-6" />,
      description: 'Deployment, CI/CD, and server management.',
      skills: [
        { name: 'Git', icon: <SiGit className="size-full text-[#F05032]" />, level: 'Advanced' },
        {
          name: 'GitHub',
          icon: <SiGithub className="size-full text-[#181717]" />,
          level: 'Advanced',
        },
        {
          name: 'GitHub Actions (CI/CD)',
          icon: <SiGithub className="size-full text-[#2088FF]" />,
          level: 'Intermediate',
        },
        {
          name: 'Docker',
          icon: <SiDocker className="size-full text-[#2496ED]" />,
          level: 'Intermediate',
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
      ],
    },
    {
      category: 'Tools',
      icon: <GrTechnology className="size-6" />,
      description: 'Design, coding, and productivity tools.',
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
        {
          name: 'pnpm',
          icon: <SiPnpm className="size-full text-[#F69220]" />,
          level: 'Intermediate',
        },
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
    },
    {
      category: 'Fundamentals',
      icon: <MdSchool className="size-6" />,
      description: 'Core web development concepts and best practices.',
      skills: [
        { name: 'Responsive Design', icon: <MdPhoneIphone className="size-full text-blue-500" /> },
        {
          name: 'Cross-browser Compatibility',
          icon: <FaGlobe className="size-full text-green-500" />,
        },
        { name: 'Performance Optimization', icon: <MdSpeed className="size-full text-red-500" /> },
        {
          name: 'Accessibility (a11y)',
          icon: <MdAccessibilityNew className="size-full text-purple-500" />,
        },
        { name: 'SEO Fundamentals', icon: <FaSearch className="size-full text-yellow-500" /> },
        {
          name: 'Component-Driven Architecture',
          icon: <FaCube className="size-full text-pink-500" />,
        },
        {
          name: 'Progressive Enhancement',
          icon: <FaArrowUp className="size-full text-indigo-500" />,
        },
        { name: 'Forms & Validation', icon: <FaWpforms className="size-full text-teal-500" /> },
        { name: 'Security Basics', icon: <FaLock className="size-full text-gray-700" /> },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="relative min-h-dvh space-y-10 py-20">
      <SectionTitle
        title="Tech Stack"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit."
      />
      <div className="grid grid-cols-2 gap-10">
        {techStack.map((stack, index) => (
          <div className="space-y-8 rounded-xl border border-white/5 bg-white/[2%] p-5" key={index}>
            <div className="flex gap-3">
              <p className="flex size-12 items-center justify-center rounded-lg border border-white/10">
                {stack?.icon}
              </p>
              <div className="">
                <h2 className="text-lg font-medium text-gray-300">{stack?.category}</h2>
                <p className="text-sm text-gray-500">{stack?.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {stack?.skills?.map((skill, index) => (
                <div
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 text-center"
                  key={index}
                >
                  <p className="size-5">{skill?.icon}</p>
                  <h2 className="text-sm font-medium text-gray-300">{skill?.name}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
