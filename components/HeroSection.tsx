"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarPlus, Phone, Siren, CheckCircle } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";
import { stats, contactInfo } from "@/lib/site-data";

const highlights = [
  "17+ Medical & Dental Services",
  "Insurance Direct Billing",
  "Patient-Centered Care",
];

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen flex items-center bg-white pt-24 pb-12 md:pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white z-0" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl z-0" />

      <div className="container px-4 md:px-8 max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-2 bg-blue-100/80 text-medBlue rounded-full text-sm font-semibold tracking-wide">
              Leading Medical Care Provider in Kigali
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight text-balance">
              Your wellbeing is the reason we exist at{" "}
              <span className="gradient-text">Amaris Medical Clinic</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Premium, patient-centered general medicine, dental care and
              maternal health services in Nyamirambo — delivered with modern
              technology and genuine compassion.
            </p>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center space-x-3 text-medBlue">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={contactInfo.appointmentWhatsappHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-medBlue text-white hover:bg-brand-700 transition-colors duration-300 w-full sm:w-auto gap-2 rounded-full shadow-glow"
                >
                  <CalendarPlus className="w-5 h-5" />
                  Book Appointment
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-medBlue border-medBlue hover:bg-blue-50 transition-colors duration-300 w-full sm:w-auto gap-2 rounded-full"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Button>
              </a>
              <a href={contactInfo.emergencyHref} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto gap-2 rounded-full"
                >
                  <Siren className="w-5 h-5" />
                  Emergency
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-medBlue">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-5 h-full">
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="animate-float-slow"
              >
                <Image
                  src="/hero1.jpg"
                  alt="Doctor checking a patient's blood pressure at Amaris Medical Clinic"
                  width={400}
                  height={280}
                  className="rounded-2xl shadow-soft-lg object-cover h-56 md:h-64 w-full"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="hidden md:block animate-float"
              >
                <Image
                  src="/hero13.jpg"
                  alt="Dental treatment room at Amaris Medical Clinic"
                  width={400}
                  height={340}
                  className="rounded-2xl shadow-soft-lg object-cover h-72 w-full"
                />
              </motion.div>
            </div>
            <div className="space-y-5 md:pt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="animate-float"
              >
                <Image
                  src="/hero3.jpg"
                  alt="Laboratory technician performing diagnostic testing"
                  width={400}
                  height={340}
                  className="rounded-2xl shadow-soft-lg object-cover h-72 w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden md:block animate-float-slow"
              >
                <Image
                  src="/hero15.jpg"
                  alt="Reception and waiting area at Amaris Medical Clinic"
                  width={400}
                  height={280}
                  className="rounded-2xl shadow-soft-lg object-cover h-56 w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
