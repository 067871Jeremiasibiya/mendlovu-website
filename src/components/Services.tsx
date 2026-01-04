import Link from 'next/link';
import { 
  Wrench, 
  Paintbrush, 
  Car, 
  Shield, 
  Sparkles, 
  Settings,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Panel Beating',
    description: 'Expert repair of dented, damaged, or deformed vehicle body panels using precision techniques.',
    gradient: 'from-blue-500 to-cyan-500',
    hoverBorder: 'hover:border-cyan-400',
  },
  {
    icon: Paintbrush,
    title: 'Spray Painting',
    description: 'Professional automotive painting with color matching and high-quality finishes.',
    gradient: 'from-amber-500 to-orange-500',
    hoverBorder: 'hover:border-amber-400',
  },
  {
    icon: Car,
    title: 'Accident Repairs',
    description: 'Comprehensive collision repair services to restore your vehicle after accidents.',
    gradient: 'from-emerald-500 to-teal-500',
    hoverBorder: 'hover:border-emerald-400',
  },
  {
    icon: Shield,
    title: 'Insurance Claims',
    description: 'We work directly with insurance companies to streamline your claim process.',
    gradient: 'from-purple-500 to-pink-500',
    hoverBorder: 'hover:border-purple-400',
  },
  {
    icon: Sparkles,
    title: 'Scratch Removal',
    description: 'Remove scratches, scuffs, and minor paint damage to restore your car\'s appearance.',
    gradient: 'from-rose-500 to-red-500',
    hoverBorder: 'hover:border-rose-400',
  },
  {
    icon: Settings,
    title: 'Frame Straightening',
    description: 'Precision frame and chassis alignment to ensure structural integrity.',
    gradient: 'from-indigo-500 to-blue-500',
    hoverBorder: 'hover:border-indigo-400',
  },
];

export default function Services({ showAll = false }: { showAll?: boolean }) {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From minor dents to major collision repairs, our experienced team provides comprehensive 
            panelbeating services to get your vehicle back on the road.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border-2 border-gray-100 ${service.hoverBorder} hover:-translate-y-1`}
            >
              <div className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
