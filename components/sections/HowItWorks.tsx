'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Zap, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { num: '1', icon: Download, title: t('step1Title'), desc: t('step1Desc') },
    { num: '2', icon: Zap, title: t('step2Title'), desc: t('step2Desc') },
    { num: '3', icon: CheckCircle, title: t('step3Title'), desc: t('step3Desc') },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-[40px] font-bold text-text-primary text-center mb-16 leading-[1.2]"
        >
          {t('headline')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-6 relative z-10">
                {step.num}
              </div>
              <div className="inline-flex p-3 rounded-2xl bg-white border border-border mb-4 text-primary">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
