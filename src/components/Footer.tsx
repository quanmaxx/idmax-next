import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <Image className="footer-logo" src="/assets/images/logos/idmax-logo-light.png" alt="IDMAX" width={174} height={25} />
          <address>
            {site.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <small>© 2026 IDMAX</small>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            {site.socials.map((social) => (
              <Link key={social.label} href={social.href}>
                {social.label}
              </Link>
            ))}
          </div>
          <p>M&nbsp;&nbsp; {site.phone}</p>
          <p>E&nbsp;&nbsp;&nbsp; {site.email}</p>
        </div>
      </div>
    </footer>
  );
}
