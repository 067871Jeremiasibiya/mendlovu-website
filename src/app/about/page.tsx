import { Award, Users, Target, Heart, CheckCircle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'About Us | Mendlovu Panelbeating',
  description: 'Learn about Mendlovu Panelbeating - Over 14 years of expertise in automotive repair in Boksburg.',
};

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every repair, ensuring top-tier quality workmanship.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest assessments and transparent pricing are at the core of our business.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We go above and beyond for every customer.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Attention to detail in every repair ensures your vehicle looks as good as new.',
  },
];

const milestones = [
  { year: '2010', event: 'Mendlovu Panelbeating was founded' },
  { year: '2013', event: 'Expanded our workshop facilities' },
  { year: '2016', event: 'Reached 500+ vehicles restored' },
  { year: '2019', event: 'Upgraded to state-of-the-art equipment' },
  { year: '2022', event: 'Celebrated 1000+ satisfied customers' },
  { year: '2024', event: 'Continuing to serve the Boksburg community' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-blue-700/50 rounded-full px-4 py-2 text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Trusted Partner in<br />Vehicle Restoration
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Mendlovu Panelbeating boasts over 14 years of expertise in the automotive repair industry, 
              specializing in handling vehicles beyond repair.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                14+ Years of Excellence in Automotive Repair
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mendlovu Panelbeating (PTY) LTD was founded with a simple mission: to provide the highest 
                  quality automotive repair services in Boksburg and surrounding areas. What started as a 
                  small workshop has grown into a trusted name in the industry.
                </p>
                <p>
                  Our skilled team, with over 20 years of combined experience, is committed to delivering 
                  exceptional service and top-tier quality. We specialize in handling vehicles that others 
                  might consider beyond repair, breathing new life into damaged cars.
                </p>
                <p>
                  We take pride in restoring your car to its optimal condition, ensuring a seamless and 
                  professional experience from start to finish. Our dedication to excellence has earned us 
                  the trust of countless satisfied customers over the years.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-800 mb-2">14+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-800 mb-2">20+</div>
                <div className="text-gray-600">Years Combined Expertise</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-800 mb-2">1000+</div>
                <div className="text-gray-600">Vehicles Restored</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-800 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from how we treat our customers to the quality of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Milestones Along the Way
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24">
                  <span className="text-blue-800 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-4 h-4 bg-blue-800 rounded-full mt-1"></div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-12 bg-blue-200 ml-1.5 mt-2"></div>
                  )}
                </div>
                <div className="flex-grow bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Commitment to You
              </h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                When you choose Mendlovu Panelbeating, you&apos;re choosing a team that genuinely cares about 
                your vehicle and your experience. We promise to treat your car as if it were our own.
              </p>
              <ul className="space-y-4">
                {[
                  'Quality workmanship on every repair',
                  'Transparent pricing with no hidden fees',
                  'Regular updates on your vehicle\'s progress',
                  'Clean and organized workshop',
                  'Friendly and professional service',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-800/50 rounded-2xl p-8">
              <blockquote className="text-xl italic text-blue-100 mb-4">
                &quot;We take pride in restoring your car to its optimal condition, ensuring a seamless 
                and professional experience from start to finish.&quot;
              </blockquote>
              <p className="text-blue-300 font-semibold">— The Mendlovu Team</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
