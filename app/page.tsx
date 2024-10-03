'use client'
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/Aboutus';
import MedicalServices from '@/components/Services';
import TeamPage from '@/components/TeamSection';
import ContactUsPage from '@/components/ContactUs';
import Footer from '@/components/Footer';
import SubFooter from '@/components/SubFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-16 flex flex-col bg-[#CCD2DE]">
        <HeroSection />
        <section id='about'>
        <AboutUsSection />
        </section>
        <MedicalServices />
        <TeamPage />
        <ContactUsPage />
        <Footer /><SubFooter />
      </main>
    </>
  );
}
