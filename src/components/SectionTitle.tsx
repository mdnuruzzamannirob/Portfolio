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
      <h1 className="text-4xl font-bold uppercase">{title}</h1>
      <p className="capitalize">{description}</p>
    </div>
  );
};

export default SectionTitle;
