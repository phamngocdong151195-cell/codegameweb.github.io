import { GAMES } from "@/data/static";
import GameList from "@/components/GameList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Game Code
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Khám phá bộ sưu tập các mã code cho những tựa game yêu thích của bạn
          </p>
        </div>

        {/* Games Grid */}
        <div className="mb-8">
          <GameList games={GAMES} />
        </div>
      </main>
    </div>
  );
}
