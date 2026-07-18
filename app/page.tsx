'use client'
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/About';
import MedicalServices from '@/components/Services';
import TeamPage from '@/components/TeamSection';
import ContactUsPage from '@/components/ContactUs';
import Footer from '@/components/Footer';
import FacilitiesPage from '@/components/Facilities';
import Parteners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Insights from '@/components/Insights';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-col bg-white">
        <HeroSection />
        <AboutUsSection />
        <MedicalServices />
        <Parteners />
        <TeamPage />
        <FacilitiesPage />
        <Testimonials />
        <CTASection />
        <FAQ />
        <Insights />
        <ContactUsPage />
        <Footer />
      </main>
    </>
  );
}
