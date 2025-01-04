// src/pages/index.js
import { HeaderDateTime } from '../components/home/sections/HeaderSection';
import { ServicesSection } from '../components/home/sections/ServicesSection';
import { AboutSection } from '../components/home/sections/AboutSection';
import { FeaturesSection } from '../components/home/sections/FeaturesSection';
import { VideoSection } from '../components/home/sections/VideoSection';
import { TestimonialsSection } from '../components/home/sections/TestimonialsSection';
import { FAQSection } from '../components/home/sections/FAQSection';
import { SubscribeSection } from '../components/home/sections/SubscribeSection';
import { StatsSection } from '../components/home/sections/StatsSection';

export default function Home() {
  return (
    <div>
      <HeaderDateTime />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <VideoSection />
      <TestimonialsSection />
      <FAQSection />
      <StatsSection />
      <SubscribeSection />
    </div>
  );
}