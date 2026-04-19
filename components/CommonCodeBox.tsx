'use client';

import { CommonCode } from '@/types';
import { useState } from 'react';

type CommonCodeBoxProps = {
  commonCodes?: CommonCode[];
  gameName: string;
};

const CommonCodeBox = ({ commonCodes, gameName }: CommonCodeBoxProps) => {
  const [showModal, setShowModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!commonCodes || commonCodes.length === 0) {
    return null;
  }

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Card */}
      <div className="group relative overflow-hidden rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 flex flex-col h-full">
        <div 
          className="relative overflow-hidden h-40 sm:h-48 bg-slate-950 cursor-pointer flex items-center justify-center"
          onClick={() => setShowModal(true)}
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl mb-3">🎁</div>
            <p className="text-cyan-400 font-semibold text-sm sm:text-base">Mã Code Chung</p>
            <p className="text-slate-400 text-xs mt-1">{commonCodes.length} code</p>
          </div>
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
            Code Chung {gameName}
          </h3>
        </div>
        
        {/* Button Section */}
        <div className="relative flex flex-col gap-2 p-3 border-t border-slate-700 bg-slate-900/50">
          <button
            onClick={() => setShowModal(true)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold w-full"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
            </svg>
            <span>Xem Code</span>
          </button>
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
            className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 via-cyan-900/30 to-slate-900 border-b border-slate-700 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-white">Code {gameName}</h2>
                <p className="text-slate-400 text-sm mt-1">Tổng cộng: {commonCodes.length} mã code</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700 flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-3">
              {commonCodes.map((item) => (
                <div
                  key={item.id}
                  className="group/item bg-slate-800/50 rounded-lg border border-slate-600 hover:border-cyan-500/50 p-4 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      {item.description && (
                        <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                      )}
                      <div className="bg-slate-950 rounded-lg p-3 border border-slate-600 font-mono text-cyan-400 text-sm break-all">
                        {item.code}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(item.code, item.id)}
                    className={`w-full py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      copiedId === item.id
                        ? 'bg-green-600 text-white'
                        : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {copiedId === item.id ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      )}
                    </svg>
                    {copiedId === item.id ? 'Đã copy!' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 px-6 py-4 flex gap-3">
              <a
                href="https://zalo.me/0375828795"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
                </svg>
                Nhận Code
              </a>
              <button
                onClick={() => setShowModal(false)}
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
};

export default CommonCodeBox;
