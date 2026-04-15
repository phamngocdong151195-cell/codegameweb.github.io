'use client';

import type { FacebookAccount } from '@/types';

interface FacebookListProps {
  accounts: FacebookAccount[];
}

export default function FacebookList({ accounts }: FacebookListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {accounts.map((account) => (
        <div
          key={account.id}
          className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-400 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 flex gap-4"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={account.image}
              alt={account.name}
              className="w-20 h-20 rounded-lg object-cover border border-slate-600 group-hover:border-cyan-400 transition-colors"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {account.name}
                  </h3>
                  {account.verified && (
                    <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  )}
                </div>
                {/* {account.followers && (
                  <p className="text-xs text-cyan-400 font-semibold">
                    👥 {account.followers} người theo dõi
                  </p>
                )} */}
              </div>
            </div>

            {/* {account.description && (
              <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                {account.description}
              </p>
            )} */}

            {/* Contact Buttons */}
            <div className="flex gap-2 mt-auto">
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-3 rounded transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
              {account.zaloUrl && (
                <a
                  href={account.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold py-2 px-3 rounded transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 4.373 0 10c0 2.749 1.226 5.268 3.236 7.052V24l4.752-2.848c1.424.407 2.953.628 4.512.628 6.627 0 12-4.373 12-10S18.627 0 12 0z"/>
                  </svg>
                  <span>Zalo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
