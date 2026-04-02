import { useTranslations } from 'next-intl';
import { Logo } from '@/components/Logo';

const SHOPIFY_URL = 'https://apps.shopify.com/subguard';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-sm text-text-muted">{t('copyright')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">
              {t('privacy')}
            </a>
            <a href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">
              {t('terms')}
            </a>
            <a href="mailto:hello@getsubguard.com" className="text-text-secondary hover:text-text-primary transition-colors">
              {t('support')}
            </a>
            <a
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              {t('appStore')}
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-text-muted mt-8">{t('builtFor')}</p>
      </div>
    </footer>
  );
}
