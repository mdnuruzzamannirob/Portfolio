import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const LogoName = () => {
  const smoothScroll = useSmoothScroll();

  return (
    <button onClick={() => smoothScroll('home')} className="font-mono text-xl font-bold">
      mn.dev
    </button>
  );
};

export default LogoName;
