import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00205A] text-gray-300 py-12 ">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold text-white">AMARIS MEDICAL CLINIC</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Phasellus vehicula tempus orci vel consequat. Nulla lorem sem, viverra a rutrum sed, gravida mattis magna.
          </p>
          <div className="flex space-x-4">
            <FaPinterestP className="hover:text-white cursor-pointer" size={20} />
            <FaFacebookF className="hover:text-white cursor-pointer" size={20} />
            <FaTwitter className="hover:text-white cursor-pointer" size={20} />
            <FaDribbble className="hover:text-white cursor-pointer" size={20} />
            <FaBehance className="hover:text-white cursor-pointer" size={20} />
            <FaLinkedinIn className="hover:text-white cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Dental Care</li>
            <li className="hover:text-white cursor-pointer">General Medecine</li>
            <li className="hover:text-white cursor-pointer">Nursing Care</li>
            <li className="hover:text-white cursor-pointer">Laboratory</li>
            <li className="hover:text-white cursor-pointer">Teeth Whitening</li>
            <li className="hover:text-white cursor-pointer">Dental Bridges</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
           <li className="hover:text-white cursor-pointer">
            <Link href="/">Home</Link>
           </li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/services">Services</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                <Link href="/doctors">Doctors</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                <Link href="/about">About us</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                <Link href="/contact">Contact us</Link>
                </li>
                
          </ul>
        </div>
        <div className="border-l border-gray-700 pl-8">
          <h3 className="text-xl font-semibold text-white mb-4">Opening Hours</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Monday</span>
              <span>8:00am - 12:00pm</span>
            </li>
            <li className="flex justify-between">
              <span>Tuesday</span>
              <span>8:00am - 12:00pm</span>
            </li>
            <li className="flex justify-between">
              <span>Wednesday</span>
              <span>8:00am - 12:00pm</span>
            </li>
            <li className="flex justify-between">
              <span>Thursday</span>
              <span>8:00am - 12:00pm</span>
            </li>
            <li className="flex justify-between">
              <span>Friday</span>
              <span>8:00am - 12:00pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>8:00am - 12:00pm</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
