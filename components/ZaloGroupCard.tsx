'use client';

import { useState } from 'react';

type ZaloGroupCardProps = {
  link: string;
  image: string;
  name: string;
};

export default function ZaloGroupCard({ link, image, name }: ZaloGroupCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-3xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 block"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-slate-800/50 to-slate-900/50 group-hover:from-cyan-600/30 transition-all duration-300" />
        
        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-cyan-400 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative p-8 sm:p-10 border border-slate-700/50 group-hover:border-cyan-400/50 rounded-3xl transition-all duration-300 bg-slate-800/30 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Image Container */}
            <div 
              className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-3 border-cyan-400 shadow-xl group-hover:shadow-cyan-400/50 transition-all duration-300 ring-2 ring-cyan-400/20 bg-white flex items-center justify-center p-1 cursor-pointer hover:ring-4 hover:ring-cyan-300"
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-block sm:inline px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-400/40 mb-2 text-xs font-semibold text-cyan-300">
                Nhóm Zalo
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                {name}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4">
                Tham gia ngay để nhận thông báo code mới, tips, và hỗ trợ từ cộng đồng
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
                </svg>
                <span>Tham gia nhóm</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Modal Zoom QR */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative bg-white rounded-3xl shadow-2xl shadow-cyan-400/50 p-8 max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt={name}
                className="w-full max-w-sm h-auto object-contain mb-6 bg-white p-4 rounded-xl"
              />
              <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                Quét mã QR để tham gia
              </h3>
              <p className="text-slate-600 text-center mb-6">
                Sử dụng camera hoặc ứng dụng Zalo để quét mã QR bên trên
              </p>
              <button
                onClick={() => {
                  window.open(link, '_blank');
                  setShowModal(false);
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
                </svg>
                <span>Mở Zalo ngay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
