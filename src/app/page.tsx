import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { WhoIHelp } from "@/components/sections/who-i-help";
import { SectionCTA } from "@/components/sections/section-cta";
import { AchievementsStats } from "@/components/sections/achievements-stats";
import { CaseStudies } from "@/components/sections/case-studies";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { VideoTestimonials } from "@/components/sections/video-testimonials";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogSection } from "@/components/sections/blog-section";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Trust Bar */}
        <TrustMarquee />

        {/* 3. Who I Help */}
        <WhoIHelp />
        <SectionCTA
          heading="Is Your Industry on the List?"
          subtext="Every industry has unique growth levers. Let's identify yours."
          cta="Tell Me About Your Business"
        />

        {/* 4. Results */}
        <AchievementsStats />
        <SectionCTA
          heading="Want Results Like These?"
          subtext="Real numbers from real campaigns. Let's build your growth system."
        />

        {/* 5. Featured Case Studies */}
        <CaseStudies />

        {/* 6. Why Marketing Fails */}
        <WhyWorkWithMe />

        {/* 7. Process */}
        <Process />
        <SectionCTA
          heading="Ready to Start the Process?"
          subtext="Step 01 — Discovery — is completely free. No commitment."
          cta="Book a Free Discovery Call"
        />

        {/* 8. Services */}
        <Services />

        {/* 9. About */}
        <About />

        {/* 10. Video Testimonials */}
        <VideoTestimonials />

        {/* 11. Text Testimonials */}
        <Testimonials />

        {/* 12. Blog */}
        <BlogSection />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. Final CTA */}
        <FinalCTA />

        {/* 15. Contact */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
