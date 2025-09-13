'use client';

import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '@/constants/projects';

const Projects = () => {
  // const smoothScroll = useSmoothScroll();
  // const initialCount = 3;
  // const [visibleCount, setVisibleCount] = useState(initialCount);

  // const handleShowMoreOrLess = () => {
  //   if (visibleCount < projects.length) {
  //     setVisibleCount((prev) => prev + 3);
  //   } else {
  //     smoothScroll('projects');

  //     setTimeout(() => {
  //       setVisibleCount(initialCount);
  //     }, 500);
  //   }
  // };

  return (
    <section id="projects" className="relative my-20 min-h-dvh space-y-10 pt-10">
      <SectionTitle
        title="Projects"
        description="Explore some of the personal and team-based projects I have built showcasing my skills and expertise."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {projects?.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>

      {/* Load More / Show Less button */}
      {/* {projects?.length > initialCount && (
        <div className="flex justify-center">
          <button
            onClick={handleShowMoreOrLess}
            className="bg-primary hover:bg-primary/90 rounded-md px-5 py-2 text-sm font-medium text-white transition"
          >
            {visibleCount < projects.length ? 'Show More' : 'Show Less'}
          </button>
        </div>
      )} */}
    </section>
  );
};

export default Projects;
