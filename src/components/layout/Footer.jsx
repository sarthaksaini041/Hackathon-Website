import { Heart, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Register', href: '#register' },
];

const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
];

export default function Footer() {
  function handleNavClick(href) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo-sm.webp" alt="Horizon Logo" width="36" height="36" className="rounded-xl object-cover" />
              <span className="text-lg font-bold text-text dark:text-dark-text">
                Horizon
              </span>
            </div>
            <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">
              An annual event bringing together the brightest minds to innovate, collaborate, and build solutions for tomorrow.
            </p>
          </div>

          <div>
            <h3 className="font-semibold font-heading text-text dark:text-dark-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted dark:text-dark-muted hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-heading text-text dark:text-dark-text mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted dark:text-dark-muted">
                <Mail size={14} />
                <span>hello@horizon2026.dev</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted dark:text-dark-muted">
                <MapPin size={14} />
                <span>Innovation Hall, VIT Bhopal</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-heading text-text dark:text-dark-text mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl neumorph-sm text-muted dark:text-dark-muted hover:text-primary transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border dark:border-dark-border text-center">
          <p className="text-sm text-muted dark:text-dark-muted">
            &copy; {new Date().getFullYear()} Horizon. All rights reserved. Made with{' '}
            <Heart size={14} className="inline text-red-500 fill-red-500" /> for the builder community.
          </p>
        </div>
      </div>
    </footer>
  );
}
