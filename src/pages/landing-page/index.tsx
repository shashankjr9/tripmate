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
      <HeroSection />
      <SponsorsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <CallToActionSection />
      <FAQSection />
    </>
  );
}

export default LandingPage;
