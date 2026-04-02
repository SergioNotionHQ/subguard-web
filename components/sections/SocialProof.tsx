import { useTranslations } from 'next-intl';

const apps = ['Appstle', 'ReCharge', 'Seal Subscriptions', 'Bold Subscriptions'];

export function SocialProof() {
  const t = useTranslations('socialProof');

  return (
    <section className="bg-surface border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-text-muted mb-6">{t('compatible')}</p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {apps.map((app) => (
            <span
              key={app}
              className="bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-text-secondary"
            >
              {app}
            </span>
          ))}
        </div>
        <p className="text-sm font-medium text-text-secondary">{t('stat')}</p>
      </div>
    </section>
  );
}
