import { navLinks } from '@/constants';
import LogoName from './LogoName';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Header = () => {
  const smoothScroll = useSmoothScroll();

  return (
    <header className="flex w-full items-center justify-between py-10">
      <LogoName />
      <ul className="flex items-center justify-center gap-5">
        {navLinks.map((link, index) => (
          <li key={index} className="font-medium">
            <button onClick={() => smoothScroll(link.href)}>{link.label}</button>
          </li>
        ))}
      </ul>

      <button className="rounded-full bg-white px-5 py-3 text-black transition hover:bg-gray-200">
        Hire Me
      </button>
    </header>
  );
};

export default Header;
