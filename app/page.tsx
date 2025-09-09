import CTA from "@/components/landing-components/CTA";
import { Features } from "@/components/landing-components/Features";
import { Hero } from "@/components/landing-components/Hero";
import Integration from "@/components/landing-components/Integration";
import { Pricing } from "@/components/landing-components/Pricing";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Integration />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
