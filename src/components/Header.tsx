import LogoName from './LogoName';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Header = () => {
  const navLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About Me', href: 'about-me' },
    { label: 'Tech Stack', href: 'tech-stack' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact Me', href: 'contact-me' },
  ];

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
