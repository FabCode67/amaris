"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { navLinks, contactInfo } from "@/lib/site-data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
          : "bg-white/60 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center md:px-8 px-4">
        <Link href="/" className="text-medBlue font-bold text-xl shrink-0">
          <Image
            height={48}
            width={128}
            src="/amaris_logo1.JPG"
            alt="Amaris Medical Clinic"
            className="h-10 w-auto md:h-12 object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-medBlue font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative hover:text-brand-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={contactInfo.emergencyHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-medBlue hover:text-brand-700"
          >
            <PhoneCall className="w-4 h-4" />
            {contactInfo.phone}
          </a>
          <a href={contactInfo.appointmentWhatsappHref} target="_blank" rel="noopener noreferrer">
            <Button className="bg-medBlue text-white hover:bg-brand-700 rounded-full px-5">
              Book Appointment
            </Button>
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-medBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  onClick={() => setMenuOpen(false)}
                  href={link.href}
                  className="px-6 py-3 text-medBlue font-medium hover:bg-blue-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-6 pt-3 flex flex-col gap-3">
                <a href={contactInfo.emergencyHref} className="flex items-center gap-2 text-sm font-semibold text-medBlue">
                  <PhoneCall className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
                <a href={contactInfo.appointmentWhatsappHref} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-medBlue text-white hover:bg-brand-700 rounded-full">
                    Book Appointment
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
