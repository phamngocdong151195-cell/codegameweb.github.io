import { Code } from '@/types';
import Image from 'next/image';

type CodeCardProps = {
  code: Code;
};

const CodeCard = ({ code }: CodeCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20">
      <div className="relative overflow-hidden h-40 sm:h-48">
        <Image 
          src={code.image} 
          alt={code.name} 
          width={400} 
          height={250} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
          unoptimized 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="relative p-4">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
          {code.name}
        </h3>
      </div>
      
      {/* Contact Section - Desktop (Hover) */}
      <div className="hidden sm:flex absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex-col items-center justify-center gap-3 p-4">
        <p className="text-white text-sm font-semibold text-center">
          Liên hệ để mua code
        </p>
      
        <div className="grid grid-cols-2 gap-2 w-full">
          <a
            href="https://www.facebook.com/VMBFlyTravel/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Đổng</span>
          </a>
      
          <a
            href="https://zalo.me/0345367094"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
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
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
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
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
            </svg>
            <span>Zalo</span>
          </a>
        </div>
      </div>
      
      {/* Contact Section - Mobile (Always Show) */}
      <div className="sm:hidden relative flex flex-col gap-2 p-3 border-t border-slate-700 bg-slate-900/50">
        <p className="text-white text-xs font-semibold text-center">Mua ngay</p>
        <div className="flex gap-2 w-full">
          <a
            href="https://www.facebook.com/cam.ao.242631"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 text-xs font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>FB</span>
          </a>
          <a
            href="https://zalo.me/0837002627"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 text-xs font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
            </svg>
            <span>Zalo</span>
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl border-2 border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default CodeCard;
