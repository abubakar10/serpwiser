import { Link } from "react-router-dom";
import { useEffect } from "react";

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-3">{title}</h2>
    <div className="space-y-3 text-slate-600 leading-relaxed">{children}</div>
  </section>
);

export default function Privacy() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="pt-24 pb-16" aria-labelledby="privacy-heading">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-cyan-600 hover:text-cyan-700 text-sm mb-6 inline-flex items-center gap-1 transition-colors">
          ← Back to SERP Wiser home
        </Link>
        <h1 id="privacy-heading" className="text-4xl font-bold text-slate-800 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last updated: July 2026</p>

        <div className="prose prose-slate max-w-none">

          <Section title="Who We Are">
            <p>SERP Wiser ("we", "us", or "our") is a local SEO agency specializing in Google Business Profile optimization and Google Maps ranking for local businesses. Our website is serpwiser.com and our contact email is info@serpwiser.com.</p>
            <p>This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you visit our website or use our services.</p>
          </Section>

          <Section title="Information We Collect">
            <p><strong className="text-slate-700">Information you provide directly:</strong> When you fill out our contact form or reach out to us by email, we collect your name, email address, phone number, and any information you include in your message such as your business name, location, and service requirements.</p>
            <p><strong className="text-slate-700">Google Business Profile access:</strong> When you become a client, we request Manager-level access to your Google Business Profile. This access is used solely to optimize and manage your listing on your behalf. We do not access any other Google accounts or data beyond what is required to deliver our service.</p>
            <p><strong className="text-slate-700">Analytics data:</strong> We may collect anonymized usage data about how visitors interact with our website, including pages viewed, time on site, and referral sources. This data cannot be used to identify you personally.</p>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Respond to your inquiries and provide the free GBP audit you requested</li>
              <li>Deliver our Google Business Profile optimization and Local SEO services</li>
              <li>Send you monthly ranking reports and service updates relevant to your account</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do not use your information for unsolicited marketing and we do not sell your data to any third parties under any circumstances.</p>
          </Section>

          <Section title="Third-Party Services We Use">
            <p>We use a small number of trusted third-party services to operate our business:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-slate-700">Formspree</strong> — processes contact form submissions on our website. When you submit our contact form, your data is transmitted to Formspree's servers before being sent to us. Formspree's privacy policy applies to this processing.</li>
              <li><strong className="text-slate-700">Google Business Profile</strong> — we manage client listings on Google's platform. Google's privacy policy governs data held within their platform.</li>
              <li><strong className="text-slate-700">BrightLocal / Semrush / Whitespark</strong> — we use these tools internally for ranking analysis and citation building. Your business information (name, address, phone) may be entered into these platforms to audit and manage your local presence.</li>
            </ul>
          </Section>

          <Section title="Cookies and Tracking">
            <p>Our website may use cookies and similar tracking technologies for analytics purposes. These help us understand how visitors find and use our site. You can disable cookies in your browser settings at any time. Disabling cookies will not affect your ability to use our website.</p>
            <p>We do not use cookies for advertising or retargeting purposes.</p>
          </Section>

          <Section title="Data Retention">
            <p>We retain contact form submissions and client communications for as long as necessary to provide our services and for a reasonable period thereafter for record-keeping purposes. If you request deletion of your data, we will remove it from our systems within 30 days unless we are legally required to retain it.</p>
          </Section>

          <Section title="Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-slate-700">Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong className="text-slate-700">Correction:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-slate-700">Deletion:</strong> Request deletion of your personal data</li>
              <li><strong className="text-slate-700">Portability:</strong> Request your data in a portable format</li>
              <li><strong className="text-slate-700">Objection:</strong> Object to certain uses of your data</li>
            </ul>
            <p>To exercise any of these rights, email us at info@serpwiser.com. We will respond within 30 days.</p>
          </Section>

          <Section title="Data Security">
            <p>We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure. However, no method of internet transmission is 100% secure and we cannot guarantee absolute security of your data.</p>
          </Section>

          <Section title="Children's Privacy">
            <p>Our website and services are not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at info@serpwiser.com.</p>
          </Section>

          <Section title="Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of our website after any changes constitutes your acceptance of the updated policy.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>
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
