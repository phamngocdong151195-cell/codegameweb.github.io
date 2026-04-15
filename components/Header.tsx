import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-lg font-bold text-white">GC</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Game Code
            </span>
          </Link>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link 
              href="/legit"
              className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Legit
            </Link>
            <a 
              href="https://www.facebook.com/VMBFlyTravel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Đổng</span>
            </a>
            <a 
              href="https://zalo.me/0375828795" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
              </svg>
              <span>Zalo</span>
            </a>
            <a 
              href="https://www.facebook.com/cam.ao.242631" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Đào</span>
            </a>
            <a 
              href="https://zalo.me/0837002627" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
              </svg>
              <span>Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
