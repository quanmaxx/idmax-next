'use client';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function PageTransition({ children }: Props) {
  return <>{children}</>;
}