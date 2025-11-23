"use client";

import { motion } from "framer-motion";
import PrivacyHero from "@/components/PrivacyHero";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main >
  <PrivacyHero title="Privacy & Policy" />
 <div className="px-6 py-20 max-w-3xl mx-auto font-poppins text-[15px] text-zinc-700">
          
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-host font-extrabold text-zinc-900 mb-6"
      >
        Privacy Policy
      </motion.h1>

      <p className="text-zinc-600 mb-8">
        Last updated: 2025
      </p>

      {/* CONTENT */}
      {[
        {
          title: "1. Introduction",
          text: `Sammobadi ("we", "our", "the studio") is a digital product and creative 
          studio focusing on design, development, brand experiences, storytelling, 
          and digital tools. We value your privacy and believe your data should 
          always be handled with respect, transparency, and intention. 
          
          This Privacy Policy explains how we collect, store, use, and protect your 
          information when you visit our website, contact us, or work with us on a project.`,
        },
        {
          title: "2. Information We Collect",
          text: `
          We collect the following types of information:
          
          • **Personal details** — name, email, company name, project information, budgets, messages  
          • **Communication records** — messages submitted via our contact form, emails, proposals  
          • **Usage data** — pages visited, interactions, browser type, device, region (via analytics)  
          • **Technical data** — IP address, referral source, timestamps  
          • **Project materials** (if applicable) — sketches, assets, content provided to us for work  
          • **Optional data** — files you upload or share during project collaboration  
          
          We ONLY collect what is necessary to operate the studio and collaborate with clients.`,
        },
        {
          title: "3. How We Use Your Information",
          text: `
          We use your information to:
          
          • Respond to messages and inquiries  
          • Prepare proposals, quotes, and project scopes  
          • Deliver project work (design, development, illustrations, etc.)  
          • Improve our website experience and performance  
          • Diagnose issues and maintain security  
          • Send important updates or service information  
          • Provide post-launch support and communication  
          
          We never use your information for anything unrelated to studio operations.`,
        },
        {
          title: "4. How We Store & Protect Your Data",
          text: `
          We use secure hosting, encrypted delivery, and modern security practices.
          
          • All website communication uses HTTPS  
          • Access to project data is restricted to the Sammobadi team  
          • We do NOT store payment information  
          • We delete client files upon request after project completion  
          • We regularly clear unnecessary data from servers / tools  
          `,
        },
        {
          title: "5. Third-Party Services",
          text: `
          We use a few trusted third-party providers:
          
          • **Email services** – for sending project communications  
          • **Analytics** (privacy-focused) – for improving site experience  
          • **Hosting** – to securely deliver website content  
          • **Cloud storage** – only for project files shared by clients  
          
          All third parties follow strong privacy and security standards.`,
        },
        {
          title: "6. Cookies & Tracking",
          text: `
          We use minimal, privacy-friendly analytics to understand website usage.  
          We do NOT use invasive tracking, ad cookies, fingerprinting, or sell behavioral data.`,
        },
        {
          title: "7. Your Rights",
          text: `
          You may:
          
          • Request a copy of the data we stored  
          • Request changes/corrections  
          • Request permanent deletion  
          • Opt-out of analytics tracking  
          
          Contact us anytime at **hello@sammobadi.com**.`,
        },
        {
          title: "8. Children’s Privacy",
          text: `Our website and services are not directed at children under 13, and we do not knowingly collect their data.`,
        },
        {
          title: "9. Policy Updates",
          text: `We may update this policy to reflect new features, legal updates, or studio changes. The date above will always show the latest revision.`,
        },
        {
          title: "10. Contact",
          text: `For any privacy concerns or requests, email us at **hello@sammobadi.com**.`,
        },
      ].map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.05 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold text-zinc-900 mb-2">
            {section.title}
          </h2>
          <p className="leading-relaxed whitespace-pre-line">{section.text}</p>
        </motion.div>
      ))}
     
 </div>
  <Footer />
    </main>
  );
}
