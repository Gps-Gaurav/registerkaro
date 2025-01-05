// src/app/page.jsx
import HeroSection from '@/components/sections/HeroSection';
import ExploreServices from '@/components/sections/ExploreServices';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import VideoSection from '@/components/sections/VideoSection';
import HappyClients from '@/components/sections/HappyClients';
import BlogSection from '@/components/sections/BlogSection';
import TestimonialsCarousel from '@/components/sections/Testimonials';
import Faqs from '@/components/sections/FAQ';
import ManageServices from '@/components/sections/ManageServices';
import StatsSection from '@/components/sections/StatsSection';
import TrustedBySection from '@/components/sections/TrustBySection';
import ApplicationProcess from '@/components/sections/ApplicationProcess';
import SubscribeSection from '@/components/sections/SubscribeSection';
import Companies from '@/components/sections/Companies';
import CustomerSatisfaction from '@/components/sections/CustomerSatisfaction';
import CompanyDetails from '@/components/company/CompanyDetails';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <TrustedBySection/>
      <CompanyDetails />
      <ExploreServices />
      <AboutSection />
      <WhyChooseUs />
      <VideoSection />
      <HappyClients />
      <ApplicationProcess />
      <BlogSection />
      <TestimonialsCarousel />
      <Faqs />
      <ManageServices />
      <StatsSection />
      <SubscribeSection/>
      <Companies />
      <CustomerSatisfaction />
    </main>
  );
}