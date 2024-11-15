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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-16 flex flex-col bg-[#CCD2DE]">
        <HeroSection />
        <section id='about'>
        <AboutUsSection />
        </section>
        <Parteners />
        <MedicalServices />
        <TeamPage />
        <FacilitiesPage />
        <ContactUsPage />
        <Footer />
      </main>
    </>
  );
}
