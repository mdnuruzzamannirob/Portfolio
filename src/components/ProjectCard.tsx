import { IProject } from '@/types';
import { cn } from '@/utils/cn';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <div className="group/card flex flex-col rounded-xl border border-white/5 bg-white/[2%] p-3">
      <div className="flex-1 space-y-4 pb-3">
        <Link
          href={project?.liveUrl}
          className="block rounded-xl bg-white/10 transition group-hover/card:scale-[101%]"
        >
          <Image
            alt=""
            src={project?.image}
            width={374}
            height={240}
            className="h-60 w-full rounded-xl object-cover object-top"
          />
        </Link>

        <div className="space-y-1">
          <h2 className="text-lg font-medium">
            {project?.title}{' '}
            <span
              className={cn(
                'ml-1 text-xs whitespace-nowrap',
                project?.projectType?.toLowerCase().startsWith('t')
                  ? 'text-tertiary'
                  : 'text-secondary',
              )}
            >
              ({project?.projectType})
            </span>
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
      </div>

      <div className="flex items-center justify-end gap-2 border-t border-white/5 pt-3 text-xs">
        <Link
          href={project?.github?.frontend}
          className="group border-primary/30 text-primary hover:bg-primary/20 flex items-center gap-1 rounded-md border px-3 py-2 transition"
        >
          GitHub Client <MdArrowOutward className="rotate-45 transition group-hover:rotate-0" />
        </Link>
        {project?.github?.backend && (
          <Link
            href={project?.github?.backend}
            className="group border-primary/30 text-primary hover:bg-primary/20 flex items-center gap-1 rounded-md border px-3 py-2 transition"
          >
            GitHub Server <MdArrowOutward className="rotate-45 transition group-hover:rotate-0" />
          </Link>
        )}

        <Link
          href={project?.liveUrl}
          className="group border-primary/30 text-primary hover:bg-primary/20 flex items-center gap-1 rounded-md border px-3 py-2 transition"
        >
          Live Site <MdArrowOutward className="rotate-45 transition group-hover:rotate-0" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
