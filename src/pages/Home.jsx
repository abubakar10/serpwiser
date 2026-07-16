import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import HowWeWork from "../components/HowWeWork";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import Impact from "../components/Impact";
import Trust from "../components/Trust";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <WhyChooseUs />
      <CaseStudies />
      <Impact />
      <Trust />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
