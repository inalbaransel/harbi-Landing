"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Harbi Agency's services, website, or any associated platforms (collectively, "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.\n\nThese Terms apply to all visitors, users, clients, and others who access or use the Services. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.`,
  },
  {
    title: "2. Services Description",
    content: `Harbi Agency is a productized digital studio that provides website design, development, and customization services. Our Services include but are not limited to:\n\n• Providing access to a curated library of website templates\n• Customizing selected templates to match your brand identity\n• Deploying finished websites to production hosting\n• Providing post-launch support and revisions as outlined in your plan\n\nAll Services are subject to the specific plan and scope agreed upon at the time of purchase.`,
  },
  {
    title: "3. Client Responsibilities",
    content: `When using our Services, you agree to:\n\n• Provide accurate and complete information about your business and brand\n• Supply all necessary content, assets, and materials in a timely manner\n• Review and approve deliverables within the agreed-upon timelines\n• Not use the Services for any unlawful purpose or in violation of any applicable laws\n• Maintain the confidentiality of any account credentials provided to you\n\nDelays in providing materials or feedback may extend project timelines beyond our standard delivery estimates.`,
  },
  {
    title: "4. Intellectual Property",
    content: `Upon full payment for Services, you receive full ownership of the final website deliverables, including custom code, content layout, and design implementations specific to your project.\n\nHowever, Harbi Agency retains ownership of:\n\n• Base template designs and underlying code frameworks\n• Proprietary tools, processes, and methodologies\n• Any pre-existing intellectual property used in the creation of your website\n\nWe reserve the right to showcase completed projects in our portfolio and marketing materials unless you explicitly opt out in writing.`,
  },
  {
    title: "5. Payment Terms",
    content: `All fees are due as outlined in your selected plan. Payment is required before work begins unless otherwise agreed upon in writing.\n\n• Prices are listed in USD and are subject to change with 30 days' notice\n• Refunds are available within 7 days of purchase if no work has commenced\n• Once customization work has begun, fees are non-refundable\n• Additional revisions beyond your plan's allocation may incur extra charges`,
  },
  {
    title: "6. Limitation of Liability",
    content: `Harbi Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services.\n\nOur total liability for any claim arising from these Terms or the Services shall not exceed the amount you paid to Harbi Agency in the 12 months preceding the claim.\n\nWe do not guarantee specific business outcomes, traffic levels, or conversion rates from websites built through our Services.`,
  },
  {
    title: "7. Termination",
    content: `Either party may terminate the service relationship at any time with written notice. Upon termination:\n\n• All outstanding payments become immediately due\n• You retain ownership of completed and paid-for deliverables\n• Harbi Agency will provide reasonable assistance in transitioning your website\n• Access to community features and support may be revoked\n\nWe reserve the right to suspend or terminate access to our Services if you violate these Terms.`,
  },
  {
    title: "8. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through binding arbitration, unless otherwise required by law.`,
  },
  {
    title: "9. Contact",
    content: `If you have questions about these Terms, please contact us at hello@harbi.agency.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">LEGAL</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
              Terms of Service
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
              Last updated: April 1, 2026
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-6 mb-12">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">On this page</p>
            <nav className="flex flex-col gap-2">
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
                  {section.content}
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
