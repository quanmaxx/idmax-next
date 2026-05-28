'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const setupReveal = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>('[data-scroll-reveal]')
      );

      if (!elements.length) return;

      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement;

            if (entry.isIntersecting) {
              element.classList.add('is-visible');
              observer?.unobserve(element);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -8% 0px',
        }
      );

      elements.forEach((element) => {
        element.classList.remove('is-visible');
        observer?.observe(element);
      });
    };

    const timer = window.setTimeout(setupReveal, 300);

    mutationObserver = new MutationObserver(() => {
      setupReveal();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}