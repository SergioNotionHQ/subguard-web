'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AlertCircle, DollarSign, Frown } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export function Problem() {
  const t = useTranslations('problem');

  const pains = [
    { icon: AlertCircle, color: 'text-red-500', title: t('pain1Title'), desc: t('pain1Desc') },
    { icon: DollarSign, color: 'text-warning', title: t('pain2Title'), desc: t('pain2Desc') },
    { icon: Frown, color: 'text-orange-500', title: t('pain3Title'), desc: t('pain3Desc') },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-[40px] font-bold text-text-primary text-center mb-16 leading-[1.2]"
        >
          {t('headline')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-3 rounded-2xl bg-slate-50 mb-4 ${pain.color}`}>
                <pain.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{pain.title}</h3>
              <p className="text-text-secondary leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="text-center"
        >
          <div className="inline-block bg-red-50 border border-red-200 rounded-2xl px-8 py-4">
            <p className="text-lg font-bold text-red-700">{t('stat')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
