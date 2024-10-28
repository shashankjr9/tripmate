import { FooterSection } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { CallToActionSection } from "@/components/layout/sections/cta";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

// TODO: Add original text, images and links
function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SponsorsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <CallToActionSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

export default LandingPage;
