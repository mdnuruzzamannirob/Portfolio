import Link from 'next/link';
import LogoName from './LogoName';

const Header = () => {
  const navLinks = [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'About Me',
      href: '#about-me',
    },
    {
      label: 'Tech Stack',
      href: '#tech-stack',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Contact Me',
      href: '#contact-me',
    },
  ];

  return (
    <header className="flex w-full items-center justify-between py-10">
      <LogoName />
      <ul className="flex items-center justify-center gap-5">
        {navLinks?.map((link, index) => (
          <li key={index} className="font-medium">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <button className="rounded-full bg-white px-5 py-3 text-black">Hire Me</button>
    </header>
  );
};

export default Header;
