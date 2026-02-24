import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Vorteile from "@/components/Vorteile";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppPreviews from "@/components/AppPreviews";
import Pricing from "@/components/Pricing";
import FeatureComparison from "@/components/FeatureComparison";
import ComingSoon from "@/components/ComingSoon";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Vorteile />
        <Features />
        <HowItWorks />
        <AppPreviews />
        <Pricing />
        <FeatureComparison />
        <ComingSoon />
        <FAQ />
      </main>
      <Contact />
    </>
  );
}
