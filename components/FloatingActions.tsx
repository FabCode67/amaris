"use client";

import { CalendarPlus, PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/site-data";

const FloatingActions = () => {
  return (
    <div className="fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col items-end gap-3">
      <motion.a
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={contactInfo.appointmentWhatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an appointment"
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-medBlue text-white pl-4 pr-5 py-3 shadow-soft-lg hover:bg-brand-700 transition-colors text-sm font-semibold"
      >
        <CalendarPlus className="w-4 h-4" />
        Book Appointment
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-soft-lg hover:brightness-95 transition"
      >
        <BsWhatsapp size={24} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        href={contactInfo.emergencyHref}
        aria-label="Call our emergency line"
        className="sm:hidden inline-flex items-center justify-center w-14 h-14 rounded-full bg-medBlue text-white shadow-soft-lg"
      >
        <PhoneCall size={22} />
      </motion.a>
    </div>
  );
};

export default FloatingActions;
