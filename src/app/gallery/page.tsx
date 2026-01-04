import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Gallery | Mendlovu Panelbeating',
  description: 'View our portfolio of completed vehicle repairs and restorations. Quality panelbeating work in Boksburg.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-blue-700/50 rounded-full px-4 py-2 text-sm font-medium mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              See Our Work in Action
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Browse through our gallery of completed projects. From minor repairs to major 
              restorations, see the quality craftsmanship that sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery showAll={true} />

      {/* Before & After Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Transformations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              The Mendlovu Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in restoring vehicles that others might consider beyond repair. 
              Our skilled team brings damaged vehicles back to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Handle</h3>
              <ul className="space-y-3">
                {[
                  'Major collision damage',
                  'Taxi and minibus repairs',
                  'Front and rear-end damage',
                  'Side panel repairs',
                  'Complete body restoration',
                  'Insurance write-off repairs',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
              <p className="text-blue-200 mb-6">
                Every vehicle that comes through our workshop receives the same level of 
                care and attention to detail, regardless of the extent of damage.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">14+</span>
                  </div>
                  <span>Years of Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">1K+</span>
                  </div>
                  <span>Vehicles Restored</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                  <span>Customer Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
