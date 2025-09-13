'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaX } from 'react-icons/fa6';
import Header from './Header';
import Lottie from './LottieScrollButton';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { titles } from '@/constants';

export default function Banner() {
  const [index, setIndex] = useState(0);

  const smoothScroll = useSmoothScroll();

  // Rotate headline text every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-dvh">
      <Header />

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={titles[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>
        <h1 className="animate-gradient from-primary via-secondary to-tertiary mt-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:mt-3 sm:text-5xl md:mt-5 md:text-6xl lg:text-7xl">
          Front End Developer
        </h1>
        <p className="my-5 text-xs tracking-wider sm:mt-8 md:my-10 md:text-sm lg:text-base">
          Hi 👋. My name is Md. Nuruzzaman, and I am a Front End developer{' '}
          <br className="max-sm:hidden" />
          living in Dhaka, Bangladesh & working remotely + Onside.
        </p>
        <div className="flex items-center gap-8 max-sm:flex-col">
          <button
            onClick={() => smoothScroll('projects')}
            className="bg-primary rounded-md px-5 py-2 text-sm text-white shadow-lg transition"
          >
            View Projects
          </button>
          <div className="h-9 border border-white/10 max-sm:hidden"></div>
          <div className="flex items-center justify-center gap-5">
            <Link
              href="https://github.com/mdnuruzzamannirob"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              <FaGithub className="size-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mdnuruzzamannirobdev"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              <FaLinkedin className="size-5" />
            </Link>
            <Link
              href="https://www.facebook.com/mdnuruzzamannirobdev"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              <FaFacebook className="size-5" />
            </Link>
            {/* <Link href="/" className="text-white/50 transition-colors hover:text-white/80">
            <FaX className="size-5" />
          </Link>*/}
            <Link
              href="https://www.instagram.com/mdnuruzzamannirobdev"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              <FaInstagram className="size-5" />
            </Link>
            <Link
              href="https://discord.com/users/1194867198074830898"
              className="text-white/50 transition-colors hover:text-white/80"
            >
              <FaDiscord className="size-5" />
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => smoothScroll('about-me')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <Lottie />
      </button>
    </section>
  );
}
