'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-1 rounded-xl overflow-hidden">
                <Image
                  src="/images/logo.webp"
                  alt="Mendlovu Panelbeating Logo"
                  width={55}
                  height={55}
                  className="rounded-lg scale-125"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-blue-800">MeNdlovu</span>
                <span className="block text-xs text-blue-600 -mt-1">Panelbeating</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  pathname === link.href
                    ? 'text-blue-800 border-b-2 border-blue-800 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0784750631"
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">078 475 0631</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    pathname === link.href
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:0784750631"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300 mx-4 shadow-md"
              >
                <Phone className="h-4 w-4" />
                <span>078 475 0631</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
