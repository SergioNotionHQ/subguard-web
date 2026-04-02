import { Logo } from '@/components/Logo';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border py-4">
        <div className="max-w-3xl mx-auto px-4">
          <a href="/"><Logo /></a>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-text-primary mb-2">Privacy Policy</h1>
        <p className="text-text-muted mb-12">Last updated: April 1, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">1. Introduction</h2>
            <p>SubGuard (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is operated by Navas Medisafe SL. This Privacy Policy explains how we collect, use, and protect your information when you use the SubGuard application (&ldquo;Service&rdquo;) available on the Shopify App Store.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">2. Data We Collect</h2>
            <p>When you install and use SubGuard, we access the following data from your Shopify store:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Store information (name, domain, email)</li>
              <li>Subscription order data (order IDs, amounts, payment status)</li>
              <li>Customer email addresses (for recovery email notifications only)</li>
              <li>Payment failure webhook data from Shopify</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> collect or store full credit card numbers, CVVs, or other sensitive payment credentials.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To detect and retry failed subscription payments</li>
              <li>To send recovery emails to customers on your behalf</li>
              <li>To display analytics and recovery metrics in your dashboard</li>
              <li>To calculate commission fees based on recovered revenue</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">4. Third-Party Services</h2>
            <p>We use the following third-party services to operate SubGuard:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Shopify</strong> — Platform integration and payment processing</li>
              <li><strong>Supabase</strong> — Database hosting and authentication</li>
              <li><strong>SendGrid</strong> — Email delivery for recovery notifications</li>
              <li><strong>Vercel</strong> — Application hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">5. Data Retention</h2>
            <p>We retain your data for as long as the SubGuard app is installed on your Shopify store. Upon uninstallation, we delete your store data within 30 days, unless retention is required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">6. Data Security</h2>
            <p>We implement industry-standard security measures including encryption in transit (TLS) and at rest. We comply with Shopify&apos;s security requirements for apps listed on the Shopify App Store.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">7. Your Rights (GDPR)</h2>
            <p>If you are located in the European Economic Area, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:hello@getsubguard.com" className="text-primary hover:underline">hello@getsubguard.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">8. Contact</h2>
            <p>For questions about this Privacy Policy, contact us at:</p>
            <p className="mt-2">
              Navas Medisafe SL<br />
              Email: <a href="mailto:hello@getsubguard.com" className="text-primary hover:underline">hello@getsubguard.com</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
