'use client';

import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const scrollToSection = (id: string) => {
    if (!lenisRef.current) return;

    const element = document.getElementById(id);
    if (!element) return;

    lenisRef.current.scrollTo(element, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
  };

  return scrollToSection;
};
