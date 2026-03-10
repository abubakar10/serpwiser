import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import HowWeWork from "../components/HowWeWork";
import OurExpertise from "../components/OurExpertise";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import Impact from "../components/Impact";
import Trust from "../components/Trust";
import ContactSection from "../components/ContactSection";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="what-we-do">
        <WhatWeDo />
      </section>
      <HowWeWork />
      <OurExpertise />
      <WhyChooseUs />
      <CaseStudies />
      <Impact />
      <Trust />
      <ContactSection />
      <section id="testimonials">
        <Testimonials />
      </section>
    </>
  );
}
