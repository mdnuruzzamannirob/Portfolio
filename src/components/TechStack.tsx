import { techStack } from '@/constants/techStack';
import SectionTitle from './SectionTitle';

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative min-h-dvh space-y-10 py-20">
      <SectionTitle
        title="Tech Stack"
        description="From frontend frameworks to backend systems, databases, DevOps, and key development principle this is my tech toolkit."
      />
      <div className="grid grid-cols-2 gap-10">
        {techStack.map((stack, index) => (
          <div className="space-y-8 rounded-xl border border-white/5 bg-white/[2%] p-5" key={index}>
            <div className="flex gap-3">
              <p className="text-primary border-primary/30 flex size-12 items-center justify-center rounded-lg border">
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
