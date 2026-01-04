import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  const whatsappNumber = '27680063644';
  const whatsappMessage = encodeURIComponent('Hi MeNdlovu Panelbeating! I would like to inquire about your services.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 overflow-hidden gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-6">
          Get Started Today
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">
          Ready to Restore Your Vehicle?
        </h2>
        <p className="text-blue-100/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Get in touch with us today for a free quote. Our team is ready to help you 
          get your car back to its best condition.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0784750631"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:shadow-2xl hover:-translate-y-0.5"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
