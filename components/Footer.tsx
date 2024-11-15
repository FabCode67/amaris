import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Team', href: '#team' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Partners', href: '#partners' },
    { name: 'Login', href: 'https://xanahealth.online/login' },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 8:00 PM' },
  ];

  const coreValues = [
    "Compassion: We prioritize our patients' needs and offer empathetic care.",
    'Integrity: We uphold the highest ethical standards in all our interactions.',
    'Innovation: We adopt the latest medical technologies and treatments.',
    'Excellence: We strive for superior outcomes in patient care and service delivery.',
    'Community: We are committed to improving the health of the communities we serve.',
  ];

  return (
    <footer className=" bg-[#334C7B] text-gray-100">
      <div className="container px-4 md:px-8 md:max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Vision & Mission */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Vision</h4>
                <p className="text-gray-300 text-sm">
                  To be the leading healthcare facility in Kigali, recognized for excellence in patient care, innovation, and compassionate service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mission</h4>
                <p className="text-gray-300 text-sm">
                  Our mission is to provide affordable, accessible, and quality healthcare services to all, ensuring a patient-first approach that fosters trust and enhances well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Values</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className=' lg:mx-auto m-0 lg:justify-center justify-start'>
            <h3 className="text-xl font-semibold  mb-4">Quick Links</h3>
            <ul className="space-y-2  mx-auto lg:justify-center md:justify-start">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
            <div className="space-y-3">
              {workingHours.map((schedule) => (
                <div key={schedule.day} className="text-sm">
                  <p className="font-medium">{schedule.day}</p>
                  <p className="text-gray-300">{schedule.hours}</p>
                </div>
              ))}
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+250-788-597-772</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>amarisclinic1@gmail.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Amaris Medical Clinic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;