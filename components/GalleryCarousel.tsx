'use client';

import { useState, useRef, useCallback } from 'react';
import type { GalleryImage } from '@/types';

interface GalleryCarouselProps {
  images: GalleryImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  }, []);

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = parseFloat(e.target.value);
      const newScrollLeft = (progress / 100) * (scrollWidth - clientWidth);
      scrollContainerRef.current.scrollLeft = newScrollLeft;
      setScrollProgress(progress);
    }
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Gallery Section */}
      <div className="relative group mb-8">
        {/* <h2 className="text-2xl font-bold text-white mb-6">Thư Viện Hình Ảnh</h2> */}
        
        {/* Gallery Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="flex-shrink-0 w-96 h-72 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group/card cursor-pointer relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
              />
              {image.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-end justify-end p-5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white font-bold text-base">{image.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="mt-10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Bill</span>
            <span className="text-xs text-slate-500">{Math.round(scrollProgress)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={scrollProgress}
            onChange={handleSliderChange}
            className="w-full h-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full appearance-none cursor-pointer slider-elegant"
            aria-label="Scroll through gallery"
          />
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .slider-elegant {
            -webkit-appearance: none;
            appearance: none;
            background: linear-gradient(90deg, #06b6d4 0%, #06b6d4 calc(var(--value, 0) * 1%), #1e293b calc(var(--value, 0) * 1%), #1e293b 100%);
          }
          
          .slider-elegant::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(6, 182, 212, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: none;
          }
          
          .slider-elegant::-webkit-slider-thumb:hover {
            width: 18px;
            height: 18px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 6px rgba(6, 182, 212, 0.3);
          }
          
          .slider-elegant::-moz-range-thumb {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(6, 182, 212, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: none;
          }
          
          .slider-elegant::-moz-range-thumb:hover {
            width: 18px;
            height: 18px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 6px rgba(6, 182, 212, 0.3);
          }
          
          .slider-elegant::-moz-range-track {
            background: transparent;
            border: none;
          }
          
          .slider-elegant::-moz-range-progress {
            background: linear-gradient(90deg, #06b6d4 0%, #0ea5e9 100%);
            height: 4px;
            border-radius: 2px;
          }
          
          .slider-elegant:focus {
            outline: none;
          }
          
          .slider-elegant:focus::-webkit-slider-thumb {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 6px rgba(6, 182, 212, 0.3);
          }
        `}</style>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 p-6 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title || 'Hình Ảnh'}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="rounded-lg overflow-hidden border border-slate-700 mb-6">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto object-contain bg-slate-950"
                />
              </div>

              {/* {selectedImage.description && (
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Mô Tả</h4>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              )} */}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 p-6 flex gap-3">
              <button
                onClick={() => setSelectedImage(null)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
