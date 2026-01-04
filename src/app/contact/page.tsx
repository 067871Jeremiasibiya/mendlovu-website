import ContactForm from '@/components/ContactForm';
import { Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Mendlovu Panelbeating',
  description: 'Get in touch with Mendlovu Panelbeating for a free quote. Located in Boksburg, we offer professional panel beating services.',
};

const businessHours = [
  { day: 'Monday', hours: '8 AM – 5 PM' },
  { day: 'Tuesday', hours: '8 AM – 5 PM' },
  { day: 'Wednesday', hours: '8 AM – 5 PM' },
  { day: 'Thursday', hours: '8 AM – 5 PM' },
  { day: 'Friday', hours: '8 AM – 5 PM' },
  { day: 'Saturday', hours: '8 AM – 5 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-blue-700/50 rounded-full px-4 py-2 text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Have questions or need a quote? We&apos;re here to help. Reach out to us 
              via phone, WhatsApp, or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Business Hours & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-800" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {businessHours.map((item) => (
                    <li key={item.day} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="font-medium text-gray-700">{item.day}</span>
                      <span className={`${item.hours === 'Closed' ? 'text-red-500' : 'text-blue-800'} font-semibold`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                * We may be available outside these hours for emergencies. Please call or WhatsApp us.
              </p>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="bg-gray-50 rounded-2xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.8!2d28.2!3d-26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzAwLjAiUyAyOMKwMTInMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mendlovu Panelbeating Location"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700 font-medium">
                  X1, 101 Low Rd, Mapleton AH, Boksburg, 1459
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=101+Low+Rd+Mapleton+AH+Boksburg+1459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How long does a typical repair take?',
                answer: 'Repair times vary depending on the extent of damage. Minor repairs can be completed in 1-2 days, while major repairs may take 1-2 weeks. We\'ll provide an estimated timeline with your quote.',
              },
              {
                question: 'Do you work with insurance companies?',
                answer: 'Yes, we work directly with most insurance companies. We can help you with the claims process and handle the paperwork to make it as hassle-free as possible.',
              },
              {
                question: 'Do you offer a warranty on repairs?',
                answer: 'Yes, all our repairs come with a warranty. We stand behind our workmanship and use quality materials to ensure lasting results.',
              },
              {
                question: 'Can I get a free quote?',
                answer: 'Absolutely! Contact us via phone, WhatsApp, or fill out the form above, and we\'ll provide you with a free, no-obligation quote.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
