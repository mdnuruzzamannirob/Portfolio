import { techStack } from '@/constants/techStack';
import SectionTitle from './SectionTitle';
import { cn } from '@/utils/cn';

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative my-20 min-h-dvh space-y-10 pt-10">
      <SectionTitle
        title="Tech Stack"
        description="From frontend frameworks to backend systems, databases, DevOps, and key development principle this is my tech toolkit."
      />
      <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:gap-5">
        {techStack.map((stack, index) => (
          <div
            className="space-y-5 rounded-xl border border-white/5 bg-white/[2%] p-5 max-sm:p-3"
            key={index}
          >
            <div className="flex gap-3">
              <p className="text-primary border-primary/30 flex size-10 min-w-10 items-center justify-center rounded-lg border">
                {stack?.icon}
              </p>
              <div className="">
                <h2 className="font-medium">
                  {stack?.category}{' '}
                  <span
                    className={cn(
                      'ml-1 text-xs whitespace-nowrap',
                      stack?.level?.toLowerCase().startsWith('a')
                        ? 'text-tertiary'
                        : stack?.level?.toLowerCase().startsWith('i')
                          ? 'text-primary'
                          : 'text-secondary',
                    )}
                  >
                    ({stack?.level})
                  </span>
                </h2>
                <p className="text-sm text-gray-500">{stack?.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {stack?.skills?.map((skill, index) => (
                <div
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center"
                  key={index}
                >
                  <p className="size-4">{skill?.icon}</p>
                  <h2 className="text-xs font-medium text-gray-300">{skill?.name}</h2>
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
