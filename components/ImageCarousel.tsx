'use client';

import { useState, useRef, useEffect } from 'react';
import type { GalleryImage } from '@/types';

interface ImageCarouselProps {
  images: GalleryImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-slate-900 to-transparent hover:from-slate-800 p-3 rounded-r-lg transition-all duration-300"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-4"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'thin' }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-80 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                {image.title && (
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                )}
                <p className="text-slate-300 text-sm">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-slate-900 to-transparent hover:from-slate-800 p-3 rounded-l-lg transition-all duration-300"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Info Text */}
      <div className="text-center text-sm text-slate-400 mt-4">
        <p>👈 Kéo sang để xem thêm ảnh</p>
      </div>
    </div>
  );
}
