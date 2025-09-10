'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaX } from 'react-icons/fa6';
import Header from './Header';
import Lottie from './Lottie';

const titles = ['An Amazing', 'An Extra', 'A Fabulous'];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // Rotate headline text every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="#" className="relative min-h-dvh">
      <Header />

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={titles[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-7xl font-bold"
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>
        <h1 className="animate-gradient mt-5 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 bg-clip-text text-7xl font-bold text-transparent">
          Front End Developer
        </h1>
        <p className="my-10 tracking-wider">
          Hi 👋. My name is Md. Nuruzzaman, and I am a Front End developer <br />
          living in Dhaka, Bangladesh & working remotely + Onside.
        </p>
        <button className="animate-gradient rounded-full bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 px-5 py-3 text-white shadow-lg transition">
          Ship stuff with me
        </button>
        <div className="mt-10 flex items-center justify-center gap-5">
          <Link href="/" className="text-white/50 transition-colors hover:text-white/80">
            <FaGithub className="size-5" />
          </Link>
          <Link href="/" className="text-white/50 transition-colors hover:text-white/80">
            <FaLinkedin className="size-5" />
          </Link>
          <Link href="/" className="text-white/50 transition-colors hover:text-white/80">
            <FaX className="size-5" />
          </Link>
          <Link href="/" className="text-white/50 transition-colors hover:text-white/80">
            <FaInstagram className="size-5" />
          </Link>
          <Link href="/" className="text-white/50 transition-colors hover:text-white/80">
            <FaDiscord className="size-5" />
          </Link>
        </div>
      </div>

      <Link href="#about-me" className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Lottie />
      </Link>
    </section>
  );
}
