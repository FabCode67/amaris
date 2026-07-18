"use client";

import { motion } from "framer-motion";
import { CalendarPlus, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-medBlue py-16 md:py-20">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-balance">
              Ready to put your health first?
            </h2>
            <p className="text-white/80 mt-2 max-w-xl">
              Book an appointment today, or reach out for any questions — our team is ready to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={contactInfo.appointmentWhatsappHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-medBlue hover:bg-blue-50 rounded-full gap-2 w-full">
                <CalendarPlus className="w-5 h-5" />
                Book Appointment
              </Button>
            </a>
            <a href={contactInfo.phoneHref}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full gap-2 w-full"
              >
                <PhoneCall className="w-5 h-5" />
                Call Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
