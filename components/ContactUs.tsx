"use client";

import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { Clock, Mail, MapPin, Phone, Siren, CalendarPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { contactInfo, workingHours, socialLinks, teamMembers } from "@/lib/site-data";

const ContactUsPage = () => {
  const adminContact = teamMembers.find((m) => m.role.includes("Administrative"));

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We're here whenever you need us"
          description="Reach out by phone, WhatsApp or email — or stop by our clinic in Nyamirambo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">
          <Reveal className="h-full min-h-[420px] lg:min-h-full">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg h-full min-h-[420px]">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0 w-full h-full min-h-[420px]"
                title="Amaris Medical Clinic location map"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center space-y-6">
            <Card className="bg-blue-50/60 border-none">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <MapPin className="mr-2 text-medBlue w-5 h-5" />
                  Our Location
                </h4>
                <p className="text-gray-700 leading-relaxed">{contactInfo.addressFull}</p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-50/60 p-5 rounded-xl shadow-sm">
                <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center">
                  <Clock className="mr-2 text-medBlue w-5 h-5" />
                  Working Hours
                </h4>
                <div className="space-y-1.5">
                  {workingHours.map((wh) => (
                    <div key={wh.day} className="text-sm text-gray-700 flex justify-between gap-3">
                      <span className="font-medium">{wh.day}</span>
                      <span className="text-gray-500">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-red-50 p-5 rounded-xl shadow-sm">
                <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center">
                  <Siren className="mr-2 text-red-600 w-5 h-5" />
                  Emergency Contact
                </h4>
                <a href={contactInfo.emergencyHref} className="text-red-600 font-bold text-lg">
                  {contactInfo.emergencyPhone}
                </a>
                <p className="text-xs text-gray-500 mt-1">Available every day</p>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-50/60 p-5 rounded-xl shadow-sm">
              <h4 className="text-base font-semibold text-gray-800 mb-3">Contact Methods</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                <a href={contactInfo.phoneHref} className="flex items-center text-gray-700 hover:text-medBlue text-sm">
                  <Phone className="mr-2 w-4 h-4" />
                  {contactInfo.phone}
                </a>
                <a href={contactInfo.emailHref} className="flex items-center text-gray-700 hover:text-medBlue text-sm">
                  <Mail className="mr-2 w-4 h-4" />
                  {contactInfo.email}
                </a>
                {adminContact && (
                  <a href={adminContact.phoneHref} className="flex items-center text-gray-700 hover:text-medBlue text-sm">
                    <Phone className="mr-2 w-4 h-4" />
                    Admin Office: {adminContact.phone}
                  </a>
                )}
                <span className="flex items-center text-gray-700 text-sm">
                  <MapPin className="mr-2 w-4 h-4" />
                  {contactInfo.website}
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={contactInfo.appointmentWhatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-medBlue text-white hover:bg-brand-700 rounded-full gap-2">
                  <CalendarPlus className="w-4 h-4" />
                  Book an Appointment
                </Button>
              </a>
              <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full rounded-full border-green-600 text-green-600 hover:bg-green-50 gap-2">
                  <FaWhatsapp size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            <div className="flex space-x-5 pt-2">
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-medBlue hover:text-blue-600">
                <FaTwitter size={26} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-medBlue hover:text-blue-700">
                <FaLinkedin size={26} />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-medBlue hover:text-blue-800">
                <FaFacebookF size={26} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
