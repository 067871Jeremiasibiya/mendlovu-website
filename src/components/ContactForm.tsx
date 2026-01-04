'use client';

import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const CONTACT_EMAIL = 'Mendlovu.panelbeaters@gmail.com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const whatsappNumber = '27680063644';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Create mailto link for email only
    const emailSubject = encodeURIComponent(`Website Inquiry: ${formData.service}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent('Hi MeNdlovu Panelbeating! I would like to inquire about your services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions or need a quote? Fill out the form and we&apos;ll get back to you as soon as possible. 
          You can also reach us directly via phone or WhatsApp.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-800" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Our Location</h3>
              <p className="text-gray-600">X1, 101 Low Rd, Mapleton AH,<br />Boksburg, 1459</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-blue-800" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <a href="tel:0784750631" className="text-blue-600 hover:text-blue-800">
                078 475 0631
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-blue-800" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <a href="mailto:Mendlovu.panelbeaters@gmail.com" className="text-blue-600 hover:text-blue-800">
                Mendlovu.panelbeaters@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick WhatsApp Button */}
        <button
          onClick={handleWhatsAppDirect}
          className="mt-8 w-full flex items-center justify-center bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Chat on WhatsApp
        </button>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">
              Thank you for contacting us. We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="078 123 4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a service</option>
                <option value="Panel Beating">Panel Beating</option>
                <option value="Spray Painting">Spray Painting</option>
                <option value="Accident Repairs">Accident Repairs</option>
                <option value="Insurance Claims">Insurance Claims</option>
                <option value="Scratch Removal">Scratch Removal</option>
                <option value="Frame Straightening">Frame Straightening</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your vehicle and what you need..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center bg-blue-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                'Sending...'
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, your email client will open with the message.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
