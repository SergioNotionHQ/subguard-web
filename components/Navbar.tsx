'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';

const SHOPIFY_URL = 'https://apps.shopify.com/subguard';
const locales = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
];

export function Navbar() {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] || 'en';

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const navLinks = [
    { href: '#how-it-works', label: t('howItWorks') },
    { href: '#features', label: t('features') },
    { href: '#pricing', label: t('pricing') },
    { href: '#faq', label: t('faq') },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                {currentLocale.toUpperCase()}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLocale(l.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 cursor-pointer ${
                        currentLocale === l.code ? 'text-primary font-medium' : 'text-text-secondary'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" size="sm">
              {t('cta')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-text-secondary hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border">
              <div className="flex gap-2 flex-wrap mb-3">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      switchLocale(l.code);
                      setMobileOpen(false);
                    }}
                    className={`px-3 py-1 text-sm rounded-full border cursor-pointer ${
                      currentLocale === l.code
                        ? 'border-primary text-primary bg-blue-50'
                        : 'border-border text-text-secondary'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <Button href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" size="md" className="w-full">
                {t('cta')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
