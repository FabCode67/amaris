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

        <div className={`md:flex space-x-8 text-medBlue ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="hover:text-medGreen">Home</Link>
          <Link href="#about" className="hover:text-medGreen">About us</Link>
          <Link href="#services" className="hover:text-medGreen">Services</Link>
          <Link href="#team" className="hover:text-medGreen">Team</Link>
          <Link href="#contact" className="hover:text-medGreen">Contact us</Link>
        </div>

        <div className="space-x-4 hidden md:block">
          <Button
          onClick={() => handleNavigation('https://xanahealth.online/login')}
           variant="outline" className="text-medBlue border-medBlue">Sign in</Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white py-4">
          <Link href="/" className="block px-8 py-2 text-medBlue hover:text-medGreen">Home</Link>
          <Link href="/services" className="block px-8 py-2 text-medBlue hover:text-medGreen">Services</Link>
          <Link href="/doctors" className="block px-8 py-2 text-medBlue hover:text-medGreen">Doctors</Link>
          <Link href="/about" className="block px-8 py-2 text-medBlue hover:text-medGreen">About us</Link>
          <Link href="/contact" className="block px-8 py-2 text-medBlue hover:text-medGreen">Contact us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
