'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import LogoName from './LogoName';
import { navLinks } from '@/constants';

const Footer = () => {
  const smoothScroll = useSmoothScroll();
  return (
    <footer className="grid w-full grid-cols-1 items-center gap-5 py-10 text-gray-400 lg:grid-cols-3">
      <div className="flex justify-start">
        <LogoName />
      </div>

      <ul className="flex gap-5 max-lg:flex-col lg:justify-center">
        {navLinks.map((link, index) => (
          <li key={index} className="text-sm font-medium whitespace-nowrap">
            <button onClick={() => smoothScroll(link.href)}>{link.label}</button>
          </li>
        ))}
      </ul>

      <div className="flex justify-end text-sm max-lg:justify-start">
        &copy; {new Date().getFullYear()} Md. Nuruzzaman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
