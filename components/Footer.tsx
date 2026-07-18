import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {
  contactInfo,
  workingHours,
  navLinks,
  services,
  insurancePartners,
  socialLinks,
} from "@/lib/site-data";

const Footer = () => {
  const footerServices = services.slice(0, 6);

  return (
    <footer className="bg-medBlue text-gray-100">
      <div className="container px-4 md:px-8 md:max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="space-y-4 lg:col-span-2">
            <Image
              src="/amaris_logo1.JPG"
              alt="Amaris Medical Clinic"
              width={140}
              height={52}
              className="h-11 w-auto object-contain bg-white rounded-md p-1"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              A patient-centered clinic in Nyamirambo, Kigali, providing
              general medicine, dental care and maternal health services with
              direct insurance billing and a genuinely caring team.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-white">
                <FaTwitter size={18} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
                <FaLinkedin size={18} />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white">
                <FaFacebookF size={18} />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-300 hover:text-white">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={contactInfo.appointmentWhatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Insurance Partners</h3>
            <ul className="space-y-2">
              {insurancePartners.map((partner) => (
                <li key={partner.name} className="text-gray-300 text-sm">
                  {partner.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
          <div className="flex items-start gap-3 text-sm">
            <Phone className="w-4 h-4 mt-0.5 shrink-0" />
            <div>
              <a href={contactInfo.phoneHref} className="hover:text-white">{contactInfo.phone}</a>
              <p className="text-gray-400 text-xs mt-0.5">Emergency line available every day</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Mail className="w-4 h-4 mt-0.5 shrink-0" />
            <a href={contactInfo.emailHref} className="hover:text-white">{contactInfo.email}</a>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{contactInfo.addressShort}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-6 text-xs text-gray-400">
          {workingHours.map((wh) => (
            <span key={wh.day}>
              <span className="font-medium text-gray-300">{wh.day}:</span> {wh.hours}
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Amaris Medical Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
