'use client';

import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Shield } from 'lucide-react';

const SHOPIFY_URL = 'https://apps.shopify.com/subguard';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <Badge className="mb-6">
              <Shield className="w-4 h-4 mr-1" />
              {t('badge')}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-text-primary leading-[1.1] tracking-[-0.02em] mb-6">
              {t('headline')}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              {t('subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" size="lg">
                {t('cta')}
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                {t('ctaSecondary')} ↓
              </Button>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative">
            <div className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white border border-border rounded-lg px-3 py-1 text-xs text-text-muted">
                    admin.shopify.com/apps/subguard
                  </div>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-text-primary">SubGuard Dashboard</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <DashCard
                    label={t('dashTotalFailed')}
                    value={<AnimatedCounter value={24} className="text-2xl font-bold text-warning" />}
                  />
                  <DashCard
                    label={t('dashRecovered')}
                    value={<AnimatedCounter value={19} className="text-2xl font-bold text-success" />}
                  />
                  <DashCard
                    label={t('dashRecoveryRate')}
                    value={<AnimatedCounter value={79} suffix="%" className="text-2xl font-bold text-primary" />}
                  />
                  <DashCard
                    label={t('dashRevenueSaved')}
                    value={
                      <AnimatedCounter
                        value={4832}
                        prefix="$"
                        className="text-2xl font-bold text-success"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4">
      <div className="text-xs text-text-muted mb-1">{label}</div>
      {value}
    </div>
  );
}
