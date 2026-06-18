import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { About } from "@/components/sections/about";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { SkillsTools } from "@/components/sections/skills-tools";
import { AchievementsStats } from "@/components/sections/achievements-stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustMarquee />
        <About />
        <WhyWorkWithMe />
        <Services />
        <CaseStudies />
        <SkillsTools />
        <AchievementsStats />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
