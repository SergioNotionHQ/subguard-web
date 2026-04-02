import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

const SHOPIFY_URL = 'https://apps.shopify.com/subguard';

export function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-6 leading-[1.2]">
          {t('headline')}
        </h2>
        <p className="text-lg text-blue-100 mb-8">{t('subheadline')}</p>
        <Button
          href={SHOPIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="bg-white! text-primary! hover:bg-blue-50!"
        >
          {t('cta')}
        </Button>
      </div>
    </section>
  );
}
