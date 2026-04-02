'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const SHOPIFY_URL = 'https://apps.shopify.com/subguard';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export function Pricing() {
  const t = useTranslations('pricing');

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
    t('feature4'),
    t('feature5'),
    t('feature6'),
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-[40px] font-bold text-text-primary text-center mb-16 leading-[1.2]"
        >
          {t('headline')}
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="max-w-lg mx-auto bg-white border border-border rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-8">
            <div className="text-sm font-semibold text-primary mb-2">{t('plan')}</div>
            <div className="text-3xl font-bold text-text-primary mb-1">{t('price')}</div>
            <div className="text-lg text-text-secondary mb-4">{t('commission')}</div>
            <p className="text-text-secondary leading-relaxed mb-6">{t('explanation')}</p>

            <div className="space-y-3 mb-8">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">{feat}</span>
                </div>
              ))}
            </div>

            <Button href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" size="lg" className="w-full">
              {t('cta')}
            </Button>
          </div>
        </motion.div>

        <motion.p
          {...fadeInUp}
          className="text-center text-sm text-text-muted mt-8 max-w-lg mx-auto"
        >
          {t('example')}
        </motion.p>
      </div>
    </section>
  );
}
