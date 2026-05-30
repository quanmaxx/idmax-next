'use client';

import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={isVisible ? 'back-to-top is-visible' : 'back-to-top'}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}