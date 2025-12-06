import React from "react";
import TopTicker from "./components/ScrollingStrip";
import Hero from "./components/Hero";


import InsideWebinar from "./components/InsideWebinar";
import StarterKit from "./components/StarterKit";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import InfoStrip from "./components/InfoStrip";
import WebinarPerfectFor from "./components/WebinarPerfectFor";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyWeCreated from "./components/WhyWeCreated";
import BottomStrip from "./components/BottomStrip";
import LogoStrip from "./components/LogoStrip";

export default function App(){
  return (
    <div className="min-h-screen">
      <TopTicker />
      <LogoStrip />
      <header className="relative">
        <Hero />
      </header>
      <TeamSection />

      <main className="space-y-24">
        <HeroSection />
        {/* <FeaturesGrid /> */}
        <FeaturesSection />
        <InfoStrip />
        <WebinarPerfectFor />
        <InsideWebinar />
        <StarterKit />
        <TestimonialsSection />
        <WhyWeCreated />

        <HowItWorks />
        <FAQ />
        <CTA />
      </main>

<BottomStrip />
      <Footer />
    </div>
  );
}