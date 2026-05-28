'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  children: ReactNode;
};

export function PageTransition({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    revealElements.forEach((el) => {
      el.classList.add('is-visible');
    });
  }, [pathname]);

  return <div className="page-fade">{children}</div>;
}