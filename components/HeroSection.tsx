import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const navigateToAppointment = () => {
    router.push('#contact');
  }

  return (
    <div className="relative overflow-hidden w-full min-h-screen flex items-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70 z-0" />
      <div className="container px-4 md:px-8 max-w-7xl md:py-4 py-8 w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block px-4 py-2 bg-blue-100/80 text-[#334C7B] rounded-full text-base font-medium tracking-wide">
              Leading Medical Care Provider
            </div>
            <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Your wellbeing is the reason of our existence at <span className="text-[#334C7B] text-3xl lg:text-5xl">Amaris Medical Clinic</span>
            </h1>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Delivering exceptional healthcare through cutting-edge technology and compassionate expertise. 
                Our dedicated team combines advanced medical solutions with personalized care to ensure your optimal health and comfort.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[#334C7B]">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-base font-medium">Comprehensive Medical Services</span>
                </div>
                <div className="flex items-center space-x-3 text-[#334C7B]">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-base font-medium">Expert Professionals</span>
                </div>
                <div className="flex items-center space-x-3 text-[#334C7B]">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-base font-medium">Patient-Centered Care</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={navigateToAppointment} 
                  size="lg" 
                  className="bg-[#334C7B] text-white hover:bg-blue-800 transition-colors duration-300 w-full sm:w-auto"
                >
                  Book Appointment
                </Button>
                <a href="tel:+250788597772" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-[#334C7B] border-[#334C7B] hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="grid grid-cols-2 gap-6 mt-12 h-full">
            <div className="space-y-4">
              <img
                src="/hero13.jpg"
                alt="Modern medical equipment"
                className="rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 object-cover h-64 w-full"
              />
              <img
                src="/hero4.jpeg"
                alt="Patient consultation"
                className="rounded-2xl md:flex hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 object-cover h-80 w-full"
              />
            </div>
            <div className="space-y-4 md:pt-8 pt-0">
              <img
                src="/hero1.jpg"
                alt="Professional medical team"
                className="rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 object-cover h-80 w-full"
              />
              <img
                src="/hero15.jpg"
                alt="Medical facility interior"
                className="rounded-2xl shadow-xl md:flex hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500 object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;