"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us when using our Services:\n\n• **Contact Information**: Name, email address, phone number, and company name when you submit forms or contact us.\n• **Project Data**: Brand assets, content, images, and business information you share for website customization.\n• **Payment Information**: Billing details processed securely through our third-party payment processor (Stripe). We do not store credit card numbers.\n• **Usage Data**: Information about how you interact with our website, including pages visited, time spent, and navigation patterns.\n• **Device Data**: Browser type, operating system, IP address, and device identifiers collected automatically.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:\n\n• Provide, maintain, and improve our Services\n• Customize and build your website according to your specifications\n• Process payments and send transaction confirmations\n• Communicate with you about projects, updates, and support\n• Send marketing communications (with your consent, which you can withdraw at any time)\n• Analyze usage patterns to improve our website and user experience\n• Detect, prevent, and address technical issues or security threats`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:\n\n• **Service Providers**: With trusted third-party services that help us operate (hosting, analytics, payment processing)\n• **Legal Requirements**: When required by law, regulation, or legal process\n• **Business Transfers**: In connection with a merger, acquisition, or sale of assets\n• **Consent**: With your explicit permission for any other purpose\n\nAll third-party service providers are contractually obligated to protect your data.`,
  },
  {
    title: "4. Data Security",
    content: `We implement industry-standard security measures to protect your personal information:\n\n• SSL/TLS encryption for all data in transit\n• Encrypted storage for sensitive data at rest\n• Regular security audits and vulnerability assessments\n• Access controls limiting employee access to personal data\n• Secure, SOC 2 compliant hosting infrastructure\n\nWhile we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: "5. Cookies & Tracking",
    content: `Our website uses minimal, privacy-respecting tracking:\n\n• **Essential Cookies**: Required for basic site functionality (theme preferences, session management)\n• **Analytics**: We use privacy-focused analytics (Plausible) that do not use cookies or track individuals\n• **No Third-Party Trackers**: We do not use Facebook Pixel, Google Ads tracking, or similar advertising trackers\n\nYou can control cookies through your browser settings. Disabling essential cookies may affect site functionality.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:\n\n• **Access**: Request a copy of the personal data we hold about you\n• **Correction**: Request correction of inaccurate or incomplete data\n• **Deletion**: Request deletion of your personal data (subject to legal retention requirements)\n• **Portability**: Request your data in a structured, machine-readable format\n• **Objection**: Object to processing of your data for certain purposes\n• **Withdrawal**: Withdraw consent for data processing at any time\n\nTo exercise any of these rights, contact us at hello@harbi.agency. We will respond within 30 days.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal information for as long as necessary to:\n\n• Provide our Services and fulfill the purposes described in this policy\n• Comply with legal obligations and resolve disputes\n• Enforce our agreements and protect our rights\n\nProject data and deliverables are retained for 12 months after project completion. You may request earlier deletion at any time.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete that information promptly.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, contact us at:\n\n• Email: hello@harbi.agency\n• Response time: Within 48 hours`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">LEGAL</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
              Privacy Policy
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
              Last updated: April 1, 2026
            </p>
          </div>

          {/* Summary Banner */}
          <div className="bg-purple-600/5 dark:bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 mb-12">
            <p className="text-sm text-purple-900 dark:text-purple-300 leading-relaxed">
              <strong>TL;DR:</strong> We collect only what we need, we never sell your data, we don&apos;t use invasive trackers, and you can request deletion at any time. Your privacy matters to us.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-6 mb-12">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">On this page</p>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SECTIONS.map(section => (
                <a key={section.title} href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-purple-700 dark:hover:text-purple-400 transition">
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12">
            {SECTIONS.map(section => (
              <div key={section.title} id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">{section.title}</h2>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                  {section.content.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-neutral-900 dark:text-neutral-200">{part}</strong> : part
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
