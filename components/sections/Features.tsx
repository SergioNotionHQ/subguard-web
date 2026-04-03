'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Zap, RefreshCw, Mail, BarChart3 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const apps = ['Appstle', 'ReCharge', 'Seal', 'Bold'];

export function Features() {
  const t = useTranslations('features');

  const features = [
    { icon: Zap, title: t('feat1Title'), desc: t('feat1Desc') },
    { icon: RefreshCw, title: t('feat2Title'), desc: t('feat2Desc') },
    { icon: Mail, title: t('feat3Title'), desc: t('feat3Desc') },
    { icon: BarChart3, title: t('feat4Title'), desc: t('feat4Desc') },
  ];

  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-[40px] font-bold text-text-primary text-center mb-16 leading-[1.2]"
        >
          {t('headline')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border rounded-2xl p-6 shadow-sm bg-white"
            >
              <div className="inline-flex p-3 rounded-xl bg-blue-50 text-primary mb-4">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{feat.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-4">{t('compatibleTitle')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {apps.map((app) => (
              <span
                key={app}
                className="bg-surface border border-border rounded-full px-4 py-2 text-sm font-medium text-text-secondary"
              >
                {app}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
