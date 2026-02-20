import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FeatureComparison from "@/components/FeatureComparison";
import Testimonials from "@/components/Testimonials";
import BetaForm from "@/components/BetaForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FeatureComparison />
        <Testimonials />
        <BetaForm />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
