import { Logo } from '@/components/Logo';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border py-4">
        <div className="max-w-3xl mx-auto px-4">
          <a href="/"><Logo /></a>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-text-primary mb-2">Terms of Service</h1>
        <p className="text-text-muted mb-12">Last updated: April 1, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">1. Service Description</h2>
            <p>SubGuard is a Shopify application operated by Navas Medisafe SL that automatically detects failed subscription payments, retries them using configurable intervals, and sends recovery emails to customers. The Service is designed to work with Appstle, ReCharge, Seal Subscriptions, and Bold Subscriptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">2. Payment Terms</h2>
            <p>SubGuard is free to install. We charge a commission of <strong>3% of successfully recovered revenue</strong>. You are only charged when SubGuard successfully recovers a failed payment. If no payments are recovered, you owe nothing.</p>
            <p className="mt-2">Commission fees are calculated and billed through Shopify&apos;s billing system on a recurring basis.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">3. Acceptable Use</h2>
            <p>You agree to use SubGuard only for its intended purpose: recovering failed subscription payments. You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the Service to send spam or unsolicited emails</li>
              <li>Attempt to reverse-engineer, modify, or interfere with the Service</li>
              <li>Use the Service in violation of Shopify&apos;s Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">4. Limitation of Liability</h2>
            <p>SubGuard is provided &ldquo;as is&rdquo; without warranty of any kind. We do not guarantee that all failed payments will be recovered. To the maximum extent permitted by law, Navas Medisafe SL shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
            <p className="mt-2">Our total liability shall not exceed the amount of fees paid by you to SubGuard in the twelve (12) months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">5. Termination</h2>
            <p>You may terminate your use of SubGuard at any time by uninstalling the app from your Shopify store. We may terminate or suspend your access to the Service if you violate these Terms. Upon termination, any outstanding commission fees remain payable.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">6. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or through the Shopify Admin dashboard. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">7. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Spain and the European Union. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Spain.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">8. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
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
