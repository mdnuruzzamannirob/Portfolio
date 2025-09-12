import { projects } from '@/constants/projects';
import SectionTitle from './SectionTitle';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-dvh space-y-10 py-20">
      <SectionTitle
        title="Projects"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit."
      />
      <div className="grid grid-cols-3 gap-5">
        {projects?.map((project, index) => (
          <div className="space-y-4 rounded-xl border border-white/5 bg-white/[2%] p-5" key={index}>
            <div className="h-60 w-full rounded-xl bg-white/10">
              {/* <Image alt="" src={project?.image} width={100} height={100} className="size-full" /> */}
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-medium">
                {project?.title} <span className="ml-1 text-xs">({project?.projectType})</span>
              </h2>
              <p className="text-sm text-white/70">{project?.description}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm">Tech stack:</p>
              <div className="flex flex-wrap items-center gap-1">
                {project?.techStack?.map((stack, index) => (
                  <div
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 p-1 px-1.5 text-xs"
                    key={index}
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
                className="text-primary border-primary/30 flex items-center gap-1 rounded-md border px-2 py-1"
              >
                GitHub Client <MdArrowOutward />
              </Link>
              <Link
                href={project?.github?.backend}
                className="text-primary border-primary/30 flex items-center gap-1 rounded-md border px-2 py-1"
              >
                GitHub Server <MdArrowOutward />
              </Link>{' '}
              <Link
                href={project?.liveUrl}
                className="text-primary border-primary/30 flex items-center gap-1 rounded-md border px-2 py-1"
              >
                Live Site <MdArrowOutward />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
