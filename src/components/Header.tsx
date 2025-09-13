'use client';

import { useState, useRef } from 'react';
import { navLinks } from '@/constants';
import LogoName from './LogoName';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { BiCloset, BiMenu } from 'react-icons/bi';
import { useClickOutside } from '@/hooks/useClickOutside';
import { HiMenu } from 'react-icons/hi';
import { RiMenuLine } from 'react-icons/ri';
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
              className="transition hover:text-gray-300"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Hire Me button (desktop) */}
      <button className="hidden rounded-full bg-white px-5 py-3 text-black transition hover:bg-gray-200 md:block">
        Hire Me
      </button>

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
          className="absolute top-16 left-0 z-50 w-full rounded-xl bg-zinc-800 p-5 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    smoothScroll(link.href);
                    setIsOpen(false);
                  }}
                  className="w-full text-left font-medium text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-black transition hover:bg-gray-200">
            Download Resume
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
