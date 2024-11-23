import Benefits from "@/components/layout/LandingPage/Benefits";
import CTA from "@/components/layout/LandingPage/CTA";
import Features from "@/components/layout/LandingPage/Features";
import Hero from "@/components/layout/LandingPage/Hero";
import HowItWorks from "@/components/layout/LandingPage/HowItWork";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
    </main>
  );
}
