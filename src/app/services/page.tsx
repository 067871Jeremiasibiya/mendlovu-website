import Link from 'next/link';
import { 
  Wrench, 
  Paintbrush, 
  Car, 
  Shield, 
  Sparkles, 
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Our Services | Mendlovu Panelbeating',
  description: 'Professional panel beating, spray painting, accident repairs, and more. Quality automotive repair services in Boksburg.',
};

const services = [
  {
    icon: Wrench,
    title: 'Panel Beating',
    description: 'Expert repair of dented, damaged, or deformed vehicle body panels using precision techniques.',
    features: [
      'Dent removal and repair',
      'Body panel replacement',
      'Structural repairs',
      'Precision metalwork',
    ],
  },
  {
    icon: Paintbrush,
    title: 'Spray Painting',
    description: 'Professional automotive painting with color matching and high-quality finishes.',
    features: [
      'Computer color matching',
      'Full body resprays',
      'Spot repairs',
      'Clear coat application',
    ],
  },
  {
    icon: Car,
    title: 'Accident Repairs',
    description: 'Comprehensive collision repair services to restore your vehicle after accidents.',
    features: [
      'Collision damage assessment',
      'Complete accident restoration',
      'Bumper repairs',
      'Light and lens replacement',
    ],
  },
  {
    icon: Shield,
    title: 'Insurance Claims',
    description: 'We work directly with insurance companies to streamline your claim process.',
    features: [
      'Direct billing to insurers',
      'Claim documentation',
      'Assessment coordination',
      'Hassle-free process',
    ],
  },
  {
    icon: Sparkles,
    title: 'Scratch Removal',
    description: 'Remove scratches, scuffs, and minor paint damage to restore your car\'s appearance.',
    features: [
      'Surface scratch repair',
      'Paint touch-ups',
      'Buffing and polishing',
      'Clear coat restoration',
    ],
  },
  {
    icon: Settings,
    title: 'Frame Straightening',
    description: 'Precision frame and chassis alignment to ensure structural integrity.',
    features: [
      'Computerized measuring',
      'Frame pulling',
      'Chassis alignment',
      'Structural integrity checks',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Assessment',
    description: 'We thoroughly inspect your vehicle and provide a detailed quote.',
  },
  {
    step: '02',
    title: 'Approval',
    description: 'Once you approve the quote, we schedule your repair.',
  },
  {
    step: '03',
    title: 'Repair',
    description: 'Our skilled technicians work on restoring your vehicle.',
  },
  {
    step: '04',
    title: 'Quality Check',
    description: 'We perform rigorous quality checks before delivery.',
  },
  {
    step: '05',
    title: 'Delivery',
    description: 'Your vehicle is returned to you in optimal condition.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-blue-700/50 rounded-full px-4 py-2 text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional Auto Body<br />Repair Services
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              From minor dents to major collision repairs, our experienced team provides 
              comprehensive panelbeating services to get your vehicle back on the road.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-blue-800" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures your vehicle is repaired efficiently and to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm h-full">
                  <div className="text-4xl font-bold text-blue-800 mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 14 years of experience and a team with 20+ years of combined expertise, 
                we have the skills and knowledge to handle any repair job, big or small.
              </p>
              <ul className="space-y-4">
                {[
                  'Experienced and certified technicians',
                  'State-of-the-art equipment and tools',
                  'Quality materials and paints',
                  'Competitive pricing',
                  'Fast turnaround times',
                  'Warranty on all repairs',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center mt-8 bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Need Emergency Repairs?</h3>
              <p className="text-blue-200 mb-6">
                We understand that accidents happen at the worst times. Contact us immediately 
                for urgent repair needs.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:0784750631"
                  className="flex items-center justify-center w-full bg-white text-blue-800 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
                >
                  Call: 078 475 0631
                </a>
                <a
                  href="https://wa.me/27680063644?text=Hi%20MeNdlovu%20Panelbeating!%20I%20need%20urgent%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
