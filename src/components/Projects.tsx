'use client';

import { useState } from 'react';
import { projects } from '@/constants/projects';
import SectionTitle from './SectionTitle';
import Link from 'next/link';
import { MdArrowForward, MdArrowOutward } from 'react-icons/md';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

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
          <div className="space-y-4 rounded-xl border border-white/5 bg-white/[2%] p-5" key={index}>
            <div className="h-60 w-full rounded-xl bg-white/10">
              {/* <Image alt="" src={project?.image[0]} width={500} height={500} className="size-full object-cover rounded-xl" /> */}
            </div>

            <div className="space-y-1">
              <h2 className="text-lg font-medium">
                {project?.title}{' '}
                <span className="ml-1 text-xs text-white/50">({project?.projectType})</span>
              </h2>
              <p className="text-sm text-white/70">{project?.description}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm">Tech stack:</p>
              <div className="flex flex-wrap items-center gap-1">
                {project?.techStack?.map((stack, i) => (
                  <div
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 p-1 px-1.5 text-xs"
                    key={i}
                  >
                    <p>{stack?.icon}</p>
                    <h3>{stack?.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 text-xs">
              <Link
                href={project?.github?.frontend}
                className="group border-primary/30 text-primary hover:bg-primary/20 flex items-center gap-1 rounded-md border px-2 py-1 transition"
              >
                GitHub Client{' '}
                <MdArrowOutward className="rotate-45 transition group-hover:rotate-0" />
              </Link>
              <Link
                href={project?.github?.backend}
                className="group border-primary/30 text-primary hover:bg-primary/20 flex items-center gap-1 rounded-md border px-2 py-1 transition"
              >
                GitHub Server{' '}
                <MdArrowOutward className="rotate-45 transition group-hover:rotate-0" />
              </Link>
              <Link
                href={project?.liveUrl}
                className="group border-primary/30 text-primary hover:bg-primary/20 flex items-center gap-1 rounded-md border px-2 py-1 transition"
              >
                Live Site <MdArrowOutward className="rotate-45 transition group-hover:rotate-0" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Show Less button */}
      {projects.length > initialCount && (
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
