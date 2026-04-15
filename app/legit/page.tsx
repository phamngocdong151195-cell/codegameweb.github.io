import type { Metadata } from "next";
import { FACEBOOK_ACCOUNTS, GALLERY_IMAGES } from "@/data/static";
import FacebookList from "@/components/FacebookList";
import GalleryCarousel from "@/components/GalleryCarousel";

export const metadata: Metadata = {
  title: "Kiểm Tra Uy Tín",
  description: "Danh sách các tài khoản Facebook chính thức để kiểm tra uy tín",
};

export default function FacebookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Kiểm Tra Uy Tín
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Danh sách các tài khoản Facebook chính thức của chúng tôi. Hãy kiểm tra uy tín trước khi theo dõi để đảm bảo bạn đang theo dõi tài khoản đúng.
          </p>
        </div>

        

        {/* Info Section */}
        <div className="bg-cyan-900/20 border border-cyan-400/30 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Lưu ý</h3>
              <p className="text-slate-300 text-sm">
                Luôn kiểm tra URL Facebook, Zalo chính xác trước khi làm bất kỳ giao dịch nào.
              </p>
            </div>
          </div>
        </div>
        {/* Gallery Section */}
        <div className="mt-20 mb-12">
          <GalleryCarousel images={GALLERY_IMAGES} />
        </div>
        {/* Facebook Accounts Grid */}
        <div className="mb-12">
          <FacebookList accounts={FACEBOOK_ACCOUNTS} />
        </div>

        

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-sm">
            Nếu bạn gặp bất kỳ tài khoản giả mạo nào, vui lòng báo cáo cho chúng tôi qua các kênh chính thức trên.
          </p>
        </div>
      </main>
    </div>
  );
}
