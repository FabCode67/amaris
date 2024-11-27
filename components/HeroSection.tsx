import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useRouter } from 'next/navigation';

const HeroSection = () => {

  const router = useRouter();

  const navigateToTeam = () => {
    router.push('#team');
  }

  return (
    <div className="relative overflow-hidden w-full h-fit bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white z-0" />
      <div className="container px-4 md:px-8 md:max-w-7xl w-full mx-auto my-auto justify-center items-center py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-blue-100 text-[#334C7B] hover:bg-blue-100 text-lg py-1">
              Leading Medical Care Provider
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Your wellbeing is the reason of our existence at{" "}
              <span className="text-[#334C7B]">Amaris Medical Clinic</span>
            </h1>

            <p className="text-lg text-gray-600">
              Experience world-class General medicine and dental care with our team of experienced professionals.
              We combine cutting-edge technology with compassionate care to give you the
              healthy, beautiful smile you deserve.
            </p>
            <div className='flex flex-col'>
            <h2 className="text-xl lg:text-xl font-bold text-[#334C7B]">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600">
              To be the leading healthcare facility in Kigali, recognized
              for excellence in patient care, innovation, and
              compassionate service.
            </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={navigateToTeam} size="lg" className="bg-[#334C7B] text-white hover:bg-blue-700">
                Book Appointment
              </Button>
              <a href="tel:+250788597772" className="text-[#334C7B] hover:text-blue-700">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Us Now
              </Button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4  h-full">
            <div className="space-y-4 h-full">
              <img
                src="/hero13.jpg"
                alt="Modern dental equipment"
                className="rounded-2xl h12 shadow-lg transform hover:scale-105 transition-transform object-fill  duration-300"
              />
              <img
                src="/hero4.jpeg"
                alt="Happy patient"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            <div className="pt- h-full flex flex-col justify-between">
              <img
                src="/hero1.jpg"
                alt="Professional dentist team"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/hero15.jpg"
                alt="Professional dentist team"
                className="rounded-2xl h-1/2 shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;