// src/app/page.jsx
import HeroSection from '@/components/sections/HeroSection';
import ExploreServices from '@/components/sections/ExploreServices';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import VideoInstructions from '@/components/sections/VideoInstructions';
import HappyClients from '@/components/sections/HappyClients';
import BlogSection from '@/components/sections/BlogSection';
import TestimonialsCarousel from '@/components/sections/Testimonials';
import Faqs from '@/components/sections/FAQ';
import MobileAppBanner from '@/components/sections/MobileAppBanner';
import StatsBanner from '@/components/sections/StatsBanner';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ExploreServices />
      <AboutSection />
      <WhyChooseUs />
      <VideoInstructions />
      <HappyClients />
      <BlogSection />
      <TestimonialsCarousel />
      <Faqs />
      <MobileAppBanner />
      <StatsBanner />
    </main>
  );
}