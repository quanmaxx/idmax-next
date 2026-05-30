'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

  return (
    <header className="site-header" aria-label="Site header">
      <div className="header-inner">
        <Link className="brand-mark" href="/" aria-label="IDMAX home">
          <Image
            src="/assets/images/logos/idmax-logo-light.png"
            alt="IDMAX"
            width={215}
            height={31}
            priority
          />
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}