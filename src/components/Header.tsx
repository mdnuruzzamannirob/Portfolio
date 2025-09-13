'use client';

import { useState, useRef } from 'react';
import { navLinks } from '@/constants';
import LogoName from './LogoName';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useClickOutside } from '@/hooks/useClickOutside';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const smoothScroll = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false), isOpen);

  return (
    <header className="flex w-full items-center justify-between py-6 md:py-10">
      {/* Logo */}
      <LogoName />

      {/* Desktop nav */}
      <ul className="hidden items-center justify-center gap-5 md:flex">
        {navLinks.map((link, index) => (
          <li key={index} className="font-medium">
            <button
              onClick={() => smoothScroll(link.href)}
              className="text-gray-400 transition hover:text-white"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        className="rounded-md p-2 text-white transition md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 z-50 flex w-full flex-col gap-5 rounded-xl bg-zinc-800 p-5 md:hidden"
        >
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                smoothScroll(link.href);
                setIsOpen(false);
              }}
              className="w-full text-left font-medium text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
