import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const businessHours = [
  { day: 'Monday', hours: '8 AM – 5 PM' },
  { day: 'Tuesday', hours: '8 AM – 5 PM' },
  { day: 'Wednesday', hours: '8 AM – 5 PM' },
  { day: 'Thursday', hours: '8 AM – 5 PM' },
  { day: 'Friday', hours: '8 AM – 5 PM' },
  { day: 'Saturday', hours: '8 AM – 5 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-slate-100 p-1 rounded-xl overflow-hidden">
                <Image
                  src="/images/logo.webp"
                  alt="Mendlovu Panelbeating Logo"
                  width={50}
                  height={50}
                  className="rounded-lg scale-125"
                />
              </div>
              <div>
                <span className="text-xl font-bold">MeNdlovu</span>
                <span className="block text-xs text-blue-300 -mt-1">Panelbeating (PTY) LTD</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Over 14 years of expertise in automotive repair. Your trusted partner for quality panelbeating services.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">
                  X1, 101 Low Rd, Mapleton AH,<br />Boksburg, 1459
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:0784750631" className="text-blue-200 hover:text-white transition-colors text-sm">
                  078 475 0631
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:Mendlovu.panelbeaters@gmail.com" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Mendlovu.panelbeaters@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <span>Business Hours</span>
            </h3>
            <ul className="space-y-1">
              {businessHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-blue-200">{item.day}</span>
                  <span className={item.hours === 'Closed' ? 'text-red-400' : 'text-white'}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Mendlovu Panelbeating (PTY) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
