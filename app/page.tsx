import CTA from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import Integration from "@/components/Integration";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Integration />
      <Pricing />
      <CTA />
    </>
  );
}
