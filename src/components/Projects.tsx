'use client';

import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import ProjectCard from './ProjectCard';
import { projects } from '@/constants/projects';

const Projects = () => {
  const smoothScroll = useSmoothScroll();
  const initialCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleShowMoreOrLess = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      smoothScroll('projects');

      setTimeout(() => {
        setVisibleCount(initialCount);
      }, 500);
    }
  };

  return (
    <section id="projects" className="relative min-h-dvh space-y-10 py-20">
      <SectionTitle
        title="Projects"
        description="Explore some of the personal and team-based projects I have built showcasing my skills and expertise."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects?.slice(0, visibleCount)?.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>

      {/* Load More / Show Less button */}
      {projects?.length > initialCount && (
        <div className="flex justify-center">
          <button
            onClick={handleShowMoreOrLess}
            className="border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg border px-5 py-2 text-sm font-medium transition"
          >
            {visibleCount < projects.length ? 'Show More' : 'Show Less'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
