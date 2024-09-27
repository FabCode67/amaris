import { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  }

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">
        <Link href="/" className="text-medBlue font-bold text-xl">
          <Image height={300} width={300} src="/amaris_logo1.jpg" alt="AMARIS Logo" className="h-12 w-32" />
        </Link>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-medBlue focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className={`md:flex space-x-8 text-medBlue ${menuOpen ? 'block' : 'hidden'} md:block hidden`}>
          <Link href="/" className="hover:text-blue-900">Home</Link>
          <Link href="#about" className="hover:text-blue-900">About us</Link>
          <Link href="#services" className="hover:text-blue-900">Services</Link>
          <Link href="#team" className="hover:text-blue-900">Team</Link>
          <Link href="#contact" className="hover:text-blue-900">Contact us</Link>
        </div>

        <div className="space-x-4 hidden md:block">
          <Button
            onClick={() => handleNavigation('https://xanahealth.online/login')}
            variant="outline" className="text-medBlue border-medBlue">Sign in</Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white py-4">
          <Link onClick={() => setMenuOpen(!menuOpen)} href="/" className="block px-8 py-2 text-medBlue hover:text-blue-900">Home</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#about" className="block px-8 py-2 text-medBlue hover:text-blue-900">About us</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#services" className="block px-8 py-2 text-medBlue hover:text-blue-900">Services</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#team" className="block px-8 py-2 text-medBlue hover:text-blue-900">Team</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#contact" className="block px-8 py-2 text-medBlue hover:text-blue-900">Contact us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
