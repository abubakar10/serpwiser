import { Link } from "react-router-dom";
import { useEffect } from "react";

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">{title}</h2>
    <div className="space-y-3 text-slate-600 leading-relaxed">{children}</div>
  </section>
);

export default function Terms() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="pt-24 pb-16" aria-labelledby="terms-heading">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-cyan-600 hover:text-cyan-700 text-sm mb-6 inline-flex items-center gap-1 transition-colors">
          ← Back to SERP Wiser home
        </Link>
        <h1 id="terms-heading" className="text-4xl font-bold text-slate-800 mb-2">Terms & Conditions</h1>
        <p className="text-slate-500 mb-10">Last updated: July 2026</p>

        <div className="prose prose-slate max-w-none">

          <Section title="Agreement to Terms">
            <p>By accessing our website at serpwiser.com or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>
            <p>These terms apply to all visitors, clients, and anyone who accesses or uses SERP Wiser's website or services.</p>
          </Section>

          <Section title="Our Services">
            <p>SERP Wiser provides local SEO services including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Google Business Profile (GBP) optimization and ongoing management</li>
              <li>Google Maps ranking improvement</li>
              <li>Review generation strategy and management</li>
              <li>Local citation building and NAP consistency</li>
              <li>Full local SEO services including on-page, technical SEO, and content</li>
            </ul>
            <p>The specific scope of services delivered to each client is agreed upon before work begins and is based on the service package selected.</p>
          </Section>

          <Section title="Month-to-Month Service Model">
            <p>All SERP Wiser services operate on a month-to-month basis unless otherwise agreed in writing. There are no long-term contracts. Either party may cancel services with reasonable notice.</p>
            <p>Cancellation requests should be sent to info@serpwiser.com. Services will continue until the end of the current billing period. No refunds are provided for partial months already billed.</p>
          </Section>

          <Section title="Payment Terms">
            <p>Payment is due at the start of each monthly service period. We use third-party payment processors to handle transactions securely. By providing payment information, you authorize SERP Wiser to charge the agreed monthly fee.</p>
            <p>If payment is not received, we reserve the right to pause or discontinue services until payment is made. Continued non-payment may result in permanent termination of services.</p>
          </Section>

          <Section title="No Guarantee of Results">
            <p>SERP Wiser does not guarantee specific search engine rankings, Google Maps positions, or business results. Search engine algorithms are controlled entirely by Google and are subject to change at any time without notice.</p>
            <p>We apply proven optimization practices and work diligently to improve your local search presence, but the outcome of those efforts is influenced by factors outside our control including competitor activity, algorithm updates, your market size, and the completeness of information you provide.</p>
            <p>Any case studies, testimonials, or examples of past results shared on our website are illustrative and not a guarantee of future performance.</p>
          </Section>

          <Section title="Client Responsibilities">
            <p>To enable us to deliver our services effectively, clients agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Provide accurate and complete business information when requested</li>
              <li>Grant SERP Wiser Manager-level access to their Google Business Profile</li>
              <li>Respond to onboarding requests and communications in a timely manner</li>
              <li>Not make unauthorized changes to their GBP listing while under our management without notifying us first</li>
              <li>Ensure that all information provided to us is truthful and does not violate any third-party rights</li>
            </ul>
          </Section>

          <Section title="Google Business Profile Access">
            <p>When you engage our GBP optimization service, you grant SERP Wiser Manager-level access to your Google Business Profile. This access is used solely to manage and optimize your listing on your behalf.</p>
            <p>You retain full ownership of your Google Business Profile at all times. You may revoke our access at any time, though doing so will prevent us from delivering the service. Upon termination of services, we will not retain access to your profile.</p>
          </Section>

          <Section title="Intellectual Property">
            <p>All content on the SERP Wiser website — including text, graphics, logos, and code — is the property of SERP Wiser and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our prior written consent.</p>
            <p>Content created specifically for your business as part of our services (such as GBP posts and descriptions) is your property upon payment.</p>
          </Section>

          <Section title="Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, SERP Wiser shall not be liable for any indirect, incidental, special, consequential, or punitive damages including but not limited to loss of revenue, loss of profits, loss of business, or loss of data arising from your use of our services.</p>
            <p>Our total liability to you for any claims arising from or related to our services shall not exceed the total amount you paid to SERP Wiser in the 3 months preceding the claim.</p>
          </Section>

          <Section title="Indemnification">
            <p>You agree to indemnify and hold harmless SERP Wiser, its team members, and partners from any claims, damages, losses, or expenses (including legal fees) arising from your use of our services, your violation of these terms, or your violation of any third-party rights.</p>
          </Section>

          <Section title="Governing Law">
            <p>These Terms and Conditions shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation before pursuing formal legal remedies.</p>
          </Section>

          <Section title="Changes to These Terms">
            <p>We reserve the right to update these Terms and Conditions at any time. When we do, we will update the "Last updated" date at the top of this page. Your continued use of our website or services after any changes constitutes acceptance of the updated terms.</p>
            <p>For significant changes, we will make reasonable efforts to notify active clients by email.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p className="mt-2">
              <strong className="text-slate-700">SERP Wiser</strong><br />
              Email: <a href="mailto:info@serpwiser.com" className="text-cyan-600 hover:underline">info@serpwiser.com</a><br />
              Website: <a href="https://serpwiser.com" className="text-cyan-600 hover:underline">serpwiser.com</a>
            </p>
          </Section>

        </div>
      </article>
    </main>
  );
}
