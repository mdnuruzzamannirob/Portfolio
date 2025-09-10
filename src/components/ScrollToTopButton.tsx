'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    // Check scroll position immediately on mount
    const checkScrollPosition = () => {
      setIsVisible(window.scrollY > 300);
    };

    checkScrollPosition(); // <-- initial check

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={() => smoothScroll('home')}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="border-primary group fixed right-8 bottom-8 flex size-12 items-center justify-center rounded-full border-2 text-white shadow-lg transition-colors"
        >
          <IoIosArrowUp className="text-secondary animate-icon size-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
