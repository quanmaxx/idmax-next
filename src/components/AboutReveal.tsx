'use client';

import { useEffect } from 'react';

export function AboutReveal() {
  useEffect(() => {
    const revealElements = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>('[data-about-reveal]')
      );

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.65;

        if (rect.top < triggerPoint) {
          element.classList.add('is-about-visible');
        }
      });
    };

    const timer = window.setTimeout(() => {
      revealElements();
      window.addEventListener('scroll', revealElements, { passive: true });
      window.addEventListener('resize', revealElements);
    }, 300);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('resize', revealElements);
    };
  }, []);

  return null;
}