import { cn } from '@/utils/cn';

interface ITitleProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionTitle = ({ title, description, className }: ITitleProps) => {
  return (
    <div
      className={cn('flex flex-col items-center justify-center space-y-5 text-center', className)}
    >
      <h1 className="text-4xl font-bold capitalize">{title}</h1>
      <p className="mx-auto max-w-xl text-gray-400">{description}</p>
    </div>
  );
};

export default SectionTitle;
