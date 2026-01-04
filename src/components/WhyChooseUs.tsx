import { CheckCircle, Users, Clock, Award, ThumbsUp, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '14+ Years Experience',
    description: 'Over a decade of expertise in the automotive repair industry.',
  },
  {
    icon: Users,
    title: 'Skilled Team',
    description: 'Our team has over 20 years of combined experience in panelbeating.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Guaranteed',
    description: 'We take pride in delivering top-tier quality on every repair.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Efficient service to get your vehicle back on the road quickly.',
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    description: 'State-of-the-art tools and techniques for precision repairs.',
  },
  {
    icon: CheckCircle,
    title: 'Customer Focused',
    description: 'Seamless and professional experience from start to finish.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Trusted Experts in Vehicle Restoration
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mendlovu Panelbeating boasts over 14 years of expertise in the automotive repair industry, 
              specializing in handling vehicles beyond repair. Our skilled team is committed to delivering 
              exceptional service and top-tier quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We take pride in restoring your car to its optimal condition, ensuring a seamless and 
              professional experience from start to finish.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
