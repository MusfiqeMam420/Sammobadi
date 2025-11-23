"use client";

import { motion } from "framer-motion";
import PrivacyHero from "@/components/PrivacyHero";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <main >
         <PrivacyHero title="Trams & Condition" />

         <div className="px-6 py-20 max-w-3xl mx-auto font-poppins text-[15px] text-zinc-700" >
    <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-host font-extrabold text-zinc-900 mb-6"
      >
        Terms of Use
      </motion.h1>

      <p className="text-zinc-600 mb-8">Last updated: 2025</p>

      {[
        {
          title: "1. Acceptance of Terms",
          text: `
          By accessing sammobadi.com, you agree to these Terms of Use.  
          If you disagree with any part, please discontinue using the website.`,
        },
        {
          title: "2. Studio Services",
          text: `
          Sammobadi provides:
          • UI/UX design  
          • Web development  
          • Animation / illustration  
          • Branding  
          • Product design  
          • Custom tools and software  
          
          Project work is governed by a separate project contract or proposal.`,
        },
        {
          title: "3. Use of Website Content",
          text: `
          All visuals, icons, illustrations, animations, videos, text, and branding 
          on this website belong to Sammobadi. You may not copy, reuse, redistribute, 
          or claim authorship without written permission.`,
        },
        {
          title: "4. External Links",
          text: `
          Our site may link to tools, references, or platforms.  
          We are not responsible for their content, security, or policies.`,
        },
        {
          title: "5. User Responsibilities",
          text: `
          You agree NOT to:
          • Interrupt or attempt to hack the website  
          • Upload harmful files or scripts  
          • Misuse contact forms or messaging  
          • Impersonate another person or company  
          `,
        },
        {
          title: "6. Project Work & Payments",
          text: `
          All project work requires:
          • A signed agreement or approval  
          • Clear scope definition  
          • Payment terms defined in the proposal  
          
          Work begins only after confirmation and initial payment (if required).`,
        },
        {
          title: "7. Intellectual Property in Client Projects",
          text: `
          Final deliverables are transferred to the client upon full payment.  
          Sammobadi may showcase non-confidential work in portfolio/showcase unless a 
          confidentiality request is made.`,
        },
        {
          title: "8. Limitation of Liability",
          text: `
          We aim for everything we build to be reliable and high-quality, 
          but we cannot guarantee:
          • uninterrupted availability  
          • error-free performance  
          • third-party service stability  
          
          We are not liable for damages resulting from the use of the site.`,
        },
        {
          title: "9. Termination",
          text: `
          We may restrict access if misuse or harmful behavior is detected.`,
        },
        {
          title: "10. Updates",
          text: `We may revise these terms occasionally. Updates will appear on this page.`,
        },
        {
          title: "11. Contact Us",
          text: `For questions, email us at **hello@sammobadi.com**.`,
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
