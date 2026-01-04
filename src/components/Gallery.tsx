'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const galleryImages = [
  // Before - Collision Damage
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.36.jpeg',
    alt: 'Silver SUV with severe front collision damage',
    category: 'before',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.36 (1).jpeg',
    alt: 'Vehicle front end collision damage',
    category: 'before',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.20.jpeg',
    alt: 'VW Polo rear bumper damage - before repair',
    category: 'before',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.20 (1).jpeg',
    alt: 'Vehicle rear end damage assessment',
    category: 'before',
  },
  // In Progress - Body Work & Primer
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.47.jpeg',
    alt: 'SUV body repair in progress - primer stage',
    category: 'in-progress',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.47 (1).jpeg',
    alt: 'Vehicle panel repair with primer application',
    category: 'in-progress',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.48.jpeg',
    alt: 'Body work restoration in progress',
    category: 'in-progress',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.48 (1).jpeg',
    alt: 'Panel beating work in progress',
    category: 'in-progress',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.17.jpeg',
    alt: 'Vehicle body repair - sanding and prep',
    category: 'in-progress',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.18.jpeg',
    alt: 'Professional panel beating work',
    category: 'in-progress',
  },
  // Completed Work
  {
    src: '/images/WhatsApp Image 2025-12-06 at 18.31.13.jpeg',
    alt: 'Suzuki Ertiga - rear quarter panel restored',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.36.51.jpeg',
    alt: 'Suzuki Ertiga - fully restored',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.23.jpeg',
    alt: 'VW Polo - fully restored rear bumper',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.23 (1).jpeg',
    alt: 'Suzuki Ertiga - complete restoration',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.23 (2).jpeg',
    alt: 'Professional restoration complete',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.24.jpeg',
    alt: 'Completed vehicle - quality finish',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.24 (1).jpeg',
    alt: 'Finished panel beating work',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.37.jpeg',
    alt: 'Completed vehicle restoration',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.38.jpeg',
    alt: 'Finished spray painting job',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.39.jpeg',
    alt: 'Professional paint finish',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.21.jpeg',
    alt: 'Restored vehicle - quality finish',
    category: 'completed',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.39.22.jpeg',
    alt: 'Completed panel beating repair',
    category: 'completed',
  },
  // Workshop
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.40.jpeg',
    alt: 'MeNdlovu Panelbeating workshop',
    category: 'workshop',
  },
  {
    src: '/images/WhatsApp Image 2025-12-06 at 17.35.41.jpeg',
    alt: 'Workshop with vehicles in progress',
    category: 'workshop',
  },
  {
    src: '/images/ndlovu9.webp',
    alt: 'Fully restored Toyota Quantum taxi',
    category: 'completed',
  },
];

export default function Gallery({ showAll = false }: { showAll?: boolean }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const displayImages = showAll ? galleryImages : galleryImages.slice(0, 6);
  const filteredImages = filter === 'all' 
    ? displayImages 
    : displayImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Project Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the quality of our work - from damaged vehicles to fully restored masterpieces.
          </p>
        </div>

        {/* Filter Buttons */}
        {showAll && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { value: 'all', label: 'All', gradient: 'from-blue-500 to-cyan-500' },
              { value: 'completed', label: 'Completed', gradient: 'from-emerald-500 to-teal-500' },
              { value: 'in-progress', label: 'In Progress', gradient: 'from-amber-500 to-orange-500' },
              { value: 'before', label: 'Before', gradient: 'from-rose-500 to-red-500' },
              { value: 'workshop', label: 'Workshop', gradient: 'from-purple-500 to-indigo-500' },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === btn.value
                    ? `bg-gradient-to-r ${btn.gradient} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <span className={`inline-block mt-2 px-3 py-1 text-white text-xs rounded-full capitalize ${
                    image.category === 'completed' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                    image.category === 'in-progress' ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                    image.category === 'before' ? 'bg-gradient-to-r from-rose-500 to-red-500' :
                    image.category === 'workshop' ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                    'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}>
                    {image.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="group inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div 
              className="relative w-full max-w-5xl h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center">
                <p className="text-white">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
