import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
