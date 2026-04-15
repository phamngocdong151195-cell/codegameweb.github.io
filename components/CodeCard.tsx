'use client';

import { Code } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

type CodeCardProps = {
  code: Code;
};

const CodeCard = ({ code }: CodeCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 flex flex-col h-full">
        <div 
          className="relative overflow-hidden h-40 sm:h-48 bg-slate-950 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <Image 
            src={code.image} 
            alt={code.name} 
            width={400} 
            height={250} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
            unoptimized 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Click indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <div className="bg-cyan-600 rounded-full p-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative p-4 flex-grow flex flex-col">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
            {code.name}
          </h3>
        </div>
        
        {/* Contact Section - Always Show */}
        <div className="relative flex flex-col gap-2 p-3 border-t border-slate-700 bg-slate-900/50">
          <p className="text-white text-xs font-semibold text-center">Mua ngay</p>
          <div className="grid grid-cols-2 gap-2 w-full">
            <a
              href="https://www.facebook.com/VMBFlyTravel/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Đổng</span>
            </a>
        
            <a
              href="https://zalo.me/0375828795"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
              </svg>
              <span>Zalo</span>
            </a>
        
            <a
              href="https://www.facebook.com/cam.ao.242631"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Đào</span>
            </a>
        
            <a
              href="https://zalo.me/0837002627"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
              </svg>
              <span>Zalo</span>
            </a>
          </div>
        </div>
        
        <div className="absolute inset-0 rounded-lg border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-300 pointer-events-none" />
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-xl font-bold text-white truncate">{code.name}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700 flex-shrink-0 ml-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5">
              <div className="rounded-lg overflow-hidden border border-slate-700 mb-5 bg-slate-950">
                <Image
                  src={code.image}
                  alt={code.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain max-h-96"
                  unoptimized
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 px-5 py-3 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CodeCard;
